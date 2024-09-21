import express from 'express'
import connectToDb from './config/conectToDb.js'
import cors from 'cors'
import productosController from './controllers/productosController.js'

const app = express()
connectToDb()

app.use(express.json())
app.use(cors({
    origin: true,
    credentials: true
}))

app.get('/:tipoProductos', productosController.fetchProductosPorTipo)

app.use(productosController.errorPage)

const PORT = process.env.PORT ?? 3032

app.listen(PORT, () => {
    console.log('server listening on port http://localhost:' + PORT)
})

