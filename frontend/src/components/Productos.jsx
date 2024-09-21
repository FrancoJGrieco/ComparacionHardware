/* eslint-disable react/prop-types */
export default function Productos({ producto }) {
    return (
        <section className='pr-section' key={producto._id}>
            <img src={producto.imagen} style={{ width: '128px', height: '128px' }}></img>
            <div>
                <p>Local: {producto.local}</p>
                <p>Producto: {producto.producto}</p>
                <p>Precio: {producto.precio}</p>
            </div>
        </section>
    )
}