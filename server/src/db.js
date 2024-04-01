import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const { PASS } = process.env

export const connect = async () => {
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(
<<<<<<< HEAD
      `mongodb+srv://jordanvargom:${PASS}@playmates.0icnfip.mongodb.net/`,
=======
      `mongodb+srv://jordanvargom:${PASS}@playmates.80t6qf5.mongodb.net/?retryWrites=true&w=majority`,
>>>>>>> 04717dd8b9bcd5717bfbdae37fc7425b034dffa9
    )
    // eslint-disable-next-line no-console
    console.log('🚀 Database ready')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('🚀 Database error', error)
  }
}
