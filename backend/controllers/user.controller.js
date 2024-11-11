import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from './backend/models/user.model.js' // imported user with my own assumption for line 18

export const register = async (req, res) => {
    try {
        // Object Destruction in JS
        const {fullname, email, phone, password, role} = req.body;

        // Check if any field is missing
        if(!fullname || !email || !phone || !password || !role) {
            return res.status(400).json({
                message: 'Either of the field is missing',
                success: false
            })
        }

        //check if user with the input email already exists
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).json({
                message: 'User with this email already exists.',
                success: false
            })
        }

        // Hash password and create user
        const hashedPassword = await bcrypt.hash(password, 10)

        await User.create({
            fullname,
            email,
            phone,
            password: hashedPassword,
            role
        })

        return res.status(201).json({
            message: 'User created successfully',
            success: true
        })


    }
    catch(error) {
        return res.status(500).json({
            message: 'An error occured while registering the account. Please try again.',
            success: false,
            error: error.message
        })
    }
}

export const login = async(req,res) => {
    try {
        const {email, password, role} = req.body;

        // 1. Validate required fields (email, password, role)

        if(!email || !password || !role) {
            return res.status(400).json({
                message: 'Incorrect credentials or Role',
                success: false
            })
        }

        // 2. Check if the user exists with the given email

        let user = await User.findOne({email})
        if(!user) {
            return res.status(400).json({
                message: 'Incorrect email or password.',
                success: false
            })
        }

        // 3. Compare the provided password with the hashed password in the database
        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if(!isPasswordMatch) {
            return res.status(400).json(
                {
                    message: 'Incorrect email or password.',
                    success: false
                }
            )
        }

        // 4. Verify the provided role matches the user's role in the database
        if(user.role !== role) {
            return res.status(400).json({
                message: 'Incorrect role.',
                success: false
            })
        }

        // 5. Generate a JWT token with the user ID and send it in the response
        const tokenData = {
            userId: user._id
        }

        // 6. Return the token in a cookie with a 1-day expiration and set proper cookie options (httpsOnly, sameSite)
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: '1d'})

        // create user object to return in the response
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phone: user.phone,
            role: user.role,
            profile: user.profile
        }

        // Store the token in a cookie with proper cookie options

        // 7. Respond with a success message and user data
        return res.status(200).cookie('token', token, {
            httpsOnly: true,
            sameSite: 'strict',
            secure: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000)
        }).json({
            message: 'User Logged in successfully',
            user,
            success: true
        })


    }
    catch(error) {
        return res.status(500).json({
            message: 'An error occured while logging in the user. Please try again.'
        })
    }
}

