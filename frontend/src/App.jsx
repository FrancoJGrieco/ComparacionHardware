import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProductosPage from './pages/ProductosPage.jsx'
import { useState } from 'react'
// import PlacasPage from './pages/PlacasPage.jsx'
// import ProcesadoresPage from './pages/ProcesadoresPage.jsx'
// import MothersPage from './pages/MothersPage.jsx'
// import RAMPage from './pages/RAMPage.jsx'
// import AlmacenamientoPage from './pages/AlmacenamientoPage.jsx'

function App() {

  const[visibilidad, setVisibilidad] = useState(false)
  return (
    <div className='App'>
      <BrowserRouter>
        <header>
          <div className='burger-menu' onClick={() => {setVisibilidad(!visibilidad)}}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div>
            <Link to='/'><img src='src\img\intercambio.png' className='logo-img'/></Link>
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
                    AMD
                  </li>
                  <li>
                    Nvidia
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
              <ProductosPage tipo=''/>
          } />
          <Route path='/placas-de-video' element={
              <ProductosPage tipo='placa' titulo='Placas de Video'/>
          } />
          <Route path='/motherboards' element={
              <ProductosPage tipo='mother' titulo='Motherboards'/>
          } />
          <Route path='/memorias-ram' element={
              <ProductosPage tipo='memoria' titulo='Memorias RAM'/>
          } />
          <Route path='/almacenamientos' element={
              <ProductosPage tipo='almacenamiento' titulo='Almacenamientos'/>
          } />
          <Route path='/procesadores' element={
              <ProductosPage tipo='procesador' titulo='Procesadores'/>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
