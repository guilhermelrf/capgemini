const mongoose = require('mongoose')

const URI = 'mongodb+srv://guilhermelrf:NEpYmN097K2aTowf@cluster0.gtlamh2.mongodb.net/'

const databaseConnection = async () => {
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect(URI)
        console.log('MongoDB connection successful')
    } catch (error) {
        console.error('MongoDB connection error:', error.message)
    }
}

module.exports = databaseConnection