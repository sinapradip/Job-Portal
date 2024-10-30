import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://sinapradip:SxtPZPB0AkpQQhRc@cluster0.4s757.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('MongoDB connected successfully')
    }
    catch(error) {
        console.log(error)
    }

}

export default connectDB