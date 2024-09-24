import Producto from '../models/producto.js'

const createProducto = async (producto, tipoProducto, precio, imagen, local, imagenLocal, urlProductoLocal) => {
    try {
        await Producto.create({
            producto,
            tipoProducto,
            precio,
            imagen,
            local,
            imagenLocal,
            urlProductoLocal
        })
    } catch (err) {
        console.log(err)
    }
}

const updateProducto = async (nombre) => {
    try{
        await Producto.findOneAndUpdate({producto: nombre}, {producto, tipoProducto, precio, imagen, local, imagenLocal, urlProductoLocal})
    }catch(err){
        
    }
}

const fetchProductos = async (req, res) => {
    try {
        const productos = await Producto.find()
        res.json({ productos })
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}

const fetchProductosPorTipo = async (req, res) => {
    try {
        const tipo = req.params.tipoProductos
        const productos = await Producto.find({ tipoProducto: tipo })
        res.json({ productos })
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}

const fetchProducto = async (req, res) => {
    try {
        const id = req.params.id
        const producto = await Producto.findById(id)

        res.json({ producto })
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }
}

const errorPage = (req, res) => {
    res.send('<h1>404</h1><p>No se ha encontrado la página</p>')
}

export default {
    createProducto,
    fetchProductos,
    fetchProductosPorTipo,
    fetchProducto,
    errorPage
}
