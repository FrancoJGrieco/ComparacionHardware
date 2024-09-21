import { useEffect, useState } from 'react'
import Productos from '../components/Productos.jsx'

function ProductosPage(tipo) {
  const [productos, setProductos] = useState([])
  const [productosPagina, setProductosPagina] = useState([])
  const [cont, setCont] = useState(0)

  useEffect(() => {
    if(tipo.tipo){
      window.scrollTo({top: 0})
      fetch(`http://localhost:3032/${tipo.tipo}`)
      .then(res => res.json())
      .then(data => {
        setProductos(data.productos)
        setProductosPagina(data.productos.slice(0, 20))
        setCont(0)
      })
    }
  }, [tipo.tipo])

  useEffect(() => {
    setProductosPagina(productos.slice((0 + (20 * cont)), (20 + (20 * cont))))
  }, [cont])

  function paginar(direccion) {
    if(direccion === 'anterior' && cont != 0){
      window.scrollTo({top: 0})
      setCont(cont - 1)
    }
    if(direccion === 'siguiente'){
      window.scrollTo({top: 0})
      setCont(cont + 1)
    }
  }

  return (
    <>
      <div className='grid-container'>
        <div className='title-container'>
          <h1>{tipo.tipo.toUpperCase().split('-').join(' ')}</h1>
        </div>
        {productosPagina.map((producto) => {
          return <>
            <Productos key={producto._id} producto={producto}/>
          </> 
        })}
      </div>
      <div className='paginacion'>
        <button onClick={() => paginar('anterior')}>anterior</button>
        <button onClick={() => paginar('siguiente')}>siguiente</button>
      </div>
    </>
  )
}

export default ProductosPage
