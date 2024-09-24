/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Productos from '../components/Productos.jsx'
import Filtros from '../components/Filtros.jsx'

function ProductosPage({ tipo, titulo, filtros }) {
  const [productos, setProductos] = useState([])
  const [productosPagina, setProductosPagina] = useState([])
  const [cont, setCont] = useState(0)

  useEffect(() => {
    if (tipo) {
      window.scrollTo({ top: 0 })
      fetch(`http://localhost:3032/${tipo}`)
        .then(res => res.json())
        .then(data => {
          setProductos(data.productos)
          setProductosPagina(data.productos.sort((a, b) => sortPrecio(a, b)).slice(0, 20))
          setCont(0)
        })
    }
  }, [tipo])

  useEffect(() => {
    setProductosPagina(productos.slice((0 + (20 * cont)), (20 + (20 * cont))))
  }, [cont])


  function sortPrecio(a, b) {
    const precioA = parseFloat(a.precio.replace('$', '').replaceAll('.', '').replace(',', '.'))
    const precioB = parseFloat(b.precio.replace('$', '').replaceAll('.', '').replace(',', '.'))

    if (precioA > precioB) return 1
    if (precioA < precioB) return -1
    return 0
  }

  function paginar(direccion) {
    if (direccion === 'anterior' && cont != 0) {
      window.scrollTo({ top: 0 })
      setCont(cont - 1)
    }
    if (direccion === 'siguiente') {
      window.scrollTo({ top: 0 })
      setCont(cont + 1)
    }
  }

  if (!tipo) return <>Hacer Home</>
  return (
    <main className='main-principal'>
      <Filtros filtros={filtros}/>
      <div className='page-container'>
        <div className='grid-container'>
          <div className='title-container'>
            <h1>{titulo}</h1>
          </div>
          {productosPagina.map((producto) => {
            return <>
              <Productos key={producto._id} producto={producto} />
            </>
          })}
        </div>
        <div className='paginacion'>
          <button onClick={() => paginar('anterior')}>anterior</button>
          <button onClick={() => paginar('siguiente')}>siguiente</button>
        </div>
      </div>
    </main>
  )
}

export default ProductosPage
