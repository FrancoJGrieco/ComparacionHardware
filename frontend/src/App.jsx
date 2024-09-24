import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProductosPage from './pages/ProductosPage.jsx'
import { useState } from 'react'

function App() {

  const [visibilidad, setVisibilidad] = useState(false)
  const [busqueda, setBusqueda] = useState('')

  function modificarBusqueda(e){
    setBusqueda(e.target.value)
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <div className='burger-menu' onClick={() => {setVisibilidad(!visibilidad)}}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='logo-img-container'>
            <Link to='/'><img src='src\img\intercambio.png' className='logo-img'/></Link>
          </div>
          <div className='search-container'>
            <input type='text' placeholder='Search' className='search-input' onChange={modificarBusqueda}/>
            <button className='btn-search' onClick={() => {console.log(busqueda)}}>Buscar</button>
          </div>
        </header>
        <nav className={visibilidad ? 'nav-principal' : 'nav-principal nav-principal-visible'}>
          <ul className='list'>
            <li className='list-item'>
              <div className='list-button list-button-click'>
                <Link to='/placas-de-video'>Placas de Video</Link>
              </div>
                <ul className='list-show'>
                  <li>
                    <Link to='/placas-de-video/AMD'>AMD</Link>
                  </li>
                  <li>
                    <Link to='/placas-de-video/Nvidia'>Nvidia</Link>
                  </li>
                </ul>
            </li>
            <li className='list-item'>
              <div className='list-button list-button-click'>
                <Link to='/motherboards'>Motherboards</Link>
              </div>
              <ul className='list-show'>
                  <li>
                    AMD
                  </li>
                  <li>
                    Intel
                  </li>
                </ul>
            </li>
            <li className='list-item'>
              <div className='list-button list-button-click'>
                <Link to='/memorias-ram'>Memorias RAM</Link>
              </div>
              <ul className='list-show'>
                  <li>
                    DDR3
                  </li>
                  <li>
                    DDR4
                  </li>
                  <li>
                    DDR5
                  </li>
                </ul>
            </li>
            <li className='list-item'>
              <div className='list-button list-button-click'>
                <Link to='/almacenamientos'>Almacenamientos</Link>
              </div>
              <ul className='list-show'>
                  <li>
                    Disco Duro
                  </li>
                  <li>
                    SSD
                  </li>
                </ul>
            </li>
            <li className='list-item'>
              <div className='list-button list-button-click'>
                <Link to='/procesadores'>Procesadores</Link>
              </div>
              <ul className='list-show'>
                  <li>
                    AMD
                  </li>
                  <li>
                    Intel
                  </li>
                </ul>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={
              <ProductosPage/>
          } />
          <Route path='/placas-de-video' element={
              <ProductosPage tipo='placa' titulo='Placas de Video' filtros={[
                {
                  nombre: 'Marca',
                  opciones: ['AMD', 'Nvidia']
                },
                {
                  nombre: 'Espacio',
                  opciones: ['4GB', '8GB', '12GB', '16GB']
                }
              ]}/>
          } />
          <Route path='/motherboards' element={
              <ProductosPage tipo='mother' titulo='Motherboards' filtros={['amd', 'intel']}/>
          } />
          <Route path='/memorias-ram' element={
              <ProductosPage tipo='memoria' titulo='Memorias RAM' filtros={['ddr3', 'ddr4', 'ddr5']}/>
          } />
          <Route path='/almacenamientos' element={
              <ProductosPage tipo='almacenamiento' titulo='Almacenamientos' filtros={['Hdd', 'Ssd']}/>
          } />
          <Route path='/procesadores' element={
              <ProductosPage tipo='procesador' titulo='Procesadores' filtros={['amd', 'intel']}/>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
