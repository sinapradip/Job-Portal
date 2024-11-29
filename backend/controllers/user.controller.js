import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js'; // imported user with my own assumption for line 18

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
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: '1d'})

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
            message: `Welcome back ${user.fullname}`,
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

export const logout = async(req, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge: 0}).json({
            message: "Logged out successfully",
            success: true
        })
    }
    catch (error) {
        return res.status(500).json({
             message: 'An unexpected error occured. Please try again.'
        })
    }
}

export const updateProfile = async(req, res) => {
    try {
        const {fullname, email, phone, bio, skills} = req.body;
        const file = req.file;
        
        // Cloudinary setup comes here later

        // convert skills string to array
        let skillsArray;
        if(skills) {
            skillsArray = skills.split(",")
        }
        const userId = req.id; // middleware authentication

        let user = await user.findById(userId);

        if(!user) {
            return res.status(400).json({
                message: "User not found",
                success: false
            })
        }

        // Updating data

        if(fullname) user.fullname = fullname
        if(email) user.fullname = email
        if(phone) user.fullname = phone
        if(bio) user.fullname = bio
        if(skills) user.fullname = skillsArray

        user.fullname = fullname;
        user.email = email;
        user.phone = phone;
        user.profile.bio = bio;
        user.profile.skills = skillsArray; // Skills is now a array

        // resume code

        await user.save();

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phone: user.phone,
            bio: user.profile.bio,
            skills: user.profile.skills
        }

        return res.status(200).json({
            message: "Profile updated successfully",
            success: true,
            user
        })

    }
    catch(error) {
        return res.status(500).json({
            message: 'An error occured. Please try again.'
        })
    }
}
