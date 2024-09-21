import puppeteer from "puppeteer"
import datosPaginas from "./paginas.js"
import productosController from "./controllers/productosController.js"
import connectToDb from "./config/conectToDb.js"

//Extrae los datos de una seccion
async function extraerDatos(paginasIndex, datosPagina) {
  let listaProductos = []

  const navegador = await puppeteer.launch({
    headless: false,
    slowMo: 200
  })

  const pagina = await navegador.newPage()
  try {
    await pagina.goto(paginasIndex.pagina())
    listaProductos = await extraerLista(pagina, datosPagina)
  } catch (err) {
    console.log('No se pudo redirigir a la pagina: ' + err)
  }

  let cont = await verificarNav(pagina, datosPagina)

  while (cont > 1 || cont === 0) {
    if (cont > 1) {
      await pagina.goto(paginasIndex.pagina() + "page/" + cont--)
    } else {
      cont++
    }
    try {
      const lista = await extraerLista(pagina, datosPagina)
      listaProductos = listaProductos.concat(lista)
      //subirADB(lista, paginaIndex.tipo)
    } catch (err) {
      console.log("Problema al extraer la lista: " + err)
    }

    console.log(paginasIndex.tipo + ": " + cont)

  }
  subirADB(listaProductos, paginasIndex.tipo, datosPagina)
  await navegador.close()
}

//Extrae los datos de una pagina
async function extraerLista(pagina, datosPagina) {
  const articulosInfoTienda = datosPagina.articulos
  const productoInfoTienda = datosPagina.producto
  const imagenInfoTienda = datosPagina.imagen
  const precioInfoTienda = datosPagina.precio

  try {
    await pagina.waitForSelector(articulosInfoTienda)
  } catch (err) {
    console.log("No existe un " + articulosInfoTienda)
  }
  const datos = await pagina.evaluate((articulosInfoTienda, productoInfoTienda, imagenInfoTienda, precioInfoTienda) => {
    const articulos = document.querySelectorAll(articulosInfoTienda)
    const datos = [...articulos].map((articulo) => {
      let producto = ''
      let precio = ''
      let imagen = null

      try {
        producto = articulo.querySelector(productoInfoTienda).innerText
      } catch (err) {
        console.log('Error al sustraer el producto: ' + err)
        producto = ''
      }
      try {
        precio = articulo.querySelector(precioInfoTienda).innerText
      } catch (err) {
        console.log('Error al sustraer el precio: ' + err)
        precio = ''
      }

      try {
        imagen = articulo.querySelector('img').getAttribute('src')
      } catch (err) {
        console.log('Error al sustraer la imagen: ' + err)
      }

      return {
        producto,
        precio,
        imagen
      }
    })

    return datos
  }, articulosInfoTienda, productoInfoTienda, imagenInfoTienda, precioInfoTienda)

  const nuevosDatos = [...datos]

  return nuevosDatos
}

//Extrae el nav de la pagina
async function verificarNav(pagina, datosPagina) {
  const navInfoTienda = datosPagina.nav
  const numeroNavInfoTienda = datosPagina.numeroNav

  try{
    await pagina.waitForSelector(navInfoTienda)
  }catch(err){
    console.log('No tiene Nav: ' + err)
  }
  console.log(navInfoTienda)
  console.log(numeroNavInfoTienda)

  let datosNav = null
  
  try {
    datosNav = await pagina.evaluate((navInfoTienda, numeroNavInfoTienda) => {
      const nav = document.querySelectorAll(navInfoTienda)
      if (Array.isArray([...nav])) {
        const lista = [...nav].map((elemento) => {
          const numero = elemento.querySelector(numeroNavInfoTienda).innerText
          return {
            numero
          }
        })
        return lista
      }
      const nuevoNav = [...nav]
      return nuevoNav
    }, navInfoTienda, numeroNavInfoTienda)
  } catch (err) {
    console.log('No tiene nav' + err)
  }

  console.log(datosNav)

  let nuevosNav = []
  if (Array.isArray(datosNav)) {
    nuevosNav = [...datosNav]
  }

  if (nuevosNav.length > 3)
    return nuevosNav[nuevosNav.length - 1].numero

  return 0
}

//Sube los productos a la base de datos
function subirADB(lista, tipo, datosPagina) {
  lista.map((producto) => {
    try{
      if(producto.precio != '') {
        productosController.createProducto(producto.producto, tipo, producto.precio, producto.imagen, datosPagina.local, datosPagina.imagenLocal, '')
      }
    }catch(err){
      console.log('No se pudo subir el producto: ' + err)
    }  
  })
}

connectToDb().then(async () => {
  for (let datosPagina of datosPaginas.datosPaginas) {
    for (let pagina of datosPagina[1]) {
      await extraerDatos(pagina, datosPagina[0])
    }
  }
})
