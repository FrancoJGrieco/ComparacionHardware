import { connect } from 'mongoose'

async function connectToDb () {
  try {
    await connect('mongodb://localhost:27017/BDProductos')
    console.log('Connected to database')
  } catch (err) {
    console.log(err)
  }
}

export default connectToDb