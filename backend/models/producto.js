import mongoose from 'mongoose'

const productoSchema = new mongoose.Schema({
    producto: String,
    tipoProducto: String,
    precio: String,
    imagen: String,
    local: String,
    imagenLocal: String,
    urlProductoLocal: String
})

const Producto = mongoose.model('Producto', productoSchema)

export default Producto
