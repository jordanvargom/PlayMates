import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const { PASS } = process.env

export const connect = async () => {
  try {
    mongoose.set('strictQuery', true)
    await mongoose.connect(
      `mongodb+srv://jordanvargom:${PASS}@playmates.0icnfip.mongodb.net/`,
    )
    // eslint-disable-next-line no-console
    console.log('🚀 Database ready')
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('🚀 Database error', error)
  }
}
