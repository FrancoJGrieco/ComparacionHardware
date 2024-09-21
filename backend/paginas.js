//pages

const paginas = {
  paginaKatech: 'https://katech.com.ar/categoria/',
  paginaMyM: 'https://www.mymcomputacion.com/'
}

const paginasKatech = [
  {
    local: 'Katech',
    imagenLocal: 'https://katech.com.ar/wp-content/uploads/KATECH_Logotipo.svg',
    articulos: 'article[data-id] > div',
    producto: 'h2 > a[href]',
    imagen: 'img > a',
    precio: 'span[class="woocommerce-Price-amount amount"]',
    nav: 'div[class="nav-links"] > a[class="page-numbers"]',
    numeroNav: 'a > span',
  },
  [
    {
      doc: 'procesador',
      enlace: 'procesadores',
      pagina: (function () {
        return (paginas.paginaKatech + this.enlace + '/')
      })
    },
    {
      doc: 'almacenamiento',
      enlace: 'almacenamiento',
      pagina: (function () {
        return (paginas.paginaKatech + this.enlace + '/')
      })
    },
    {
      doc: 'memoria',
      enlace: 'memorias-ram',
      pagina: (function () {
        return (paginas.paginaKatech + this.enlace + '/')
      })
    },
    {
      doc: 'placa',
      enlace: 'placas-de-video',
      pagina: (function () {
        return (paginas.paginaKatech + this.enlace + '/')
      })
    },
    {
      doc: 'mother',
      enlace: 'motherboards',
      pagina: (function () {
        return (paginas.paginaKatech + this.enlace + '/')
      })
    },
    // {
    //   pagina: 'https://katech.com.ar/categoria/fuentes/',
    //   doc: 'fuentes'
    // },
    // {
    //   pagina: 'https://katech.com.ar/categoria/gabinetes/',
    //   doc: 'gabinetes'
    // },
    // {
    //   pagina: 'https://katech.com.ar/categoria/refrigeracion-pc/',
    //   jsonDoc: 'refrigeracionKatech'
    // },
  ]
]

//pages
const paginasMyM = [
  {
    carpeta: './dataMyM/',
    articulos: 'div[class="card card-ecommerce mt-0 ta-c **"]',
    producto: 'h4 > a[href]',
    imagen: 'img > a',
    precio: 'h6[class="mb-0 ft solo_web show  tachado_1"]',
    nav: 'ul[class="pagination pagination-info mt-4"]',
    numeroNav: 'a[href] > li[class="active"]'
  },
  [
    // {
    //   pagina: 'https://www.mymcomputacion.com/adaptadores/',
    //   jsonDoc: 'adaptadoresMyM'
    // },
    // {
    //   pagina: 'https://www.mymcomputacion.com/cable/',
    //   jsonDoc: 'cablesMyM'
    // },
    // {
    //   pagina: 'https://www.mymcomputacion.com/cargador/',
    //   jsonDoc: 'cargadoressMyM'
    // },
    // {
    //   pagina: 'https://www.mymcomputacion.com/conectividad/',
    //   jsonDoc: 'conectividadMyM'
    // },
    // {
    //   pagina: 'https://www.mymcomputacion.com/impresora/',
    //   jsonDoc: 'impresoreasMyM'
    // },
    // {
    //   pagina: 'https://www.mymcomputacion.com/insumos-de-impresion/',
    //   jsonDoc: 'insumosImpresionMyM'
    // },
    // {
    //   pagina: 'https://www.mymcomputacion.com/lectora/',
    //   jsonDoc: 'lectorasMyM'
    // },
    // {
    //   pagina: 'https://www.mymcomputacion.com/pasta-termica/',
    //   jsonDoc: 'pastasMyM'
    // },
    // {
    //   pagina: 'https://www.mymcomputacion.com/pc-armada/',
    //   jsonDoc: 'pcsMyM'
    // },
    // {
    //   pagina: 'https://www.mymcomputacion.com/silla-gamer/',
    //   jsonDoc: 'sillasMyM'
    // },
    // {
    //   pagina: 'https://www.mymcomputacion.com/streaming-media-player/',
    //   jsonDoc: 'smpMyM'
    // },
    // {
    //   pagina: 'https://www.mymcomputacion.com/varios/',
    //   jsonDoc: 'variosMyM'
    // }
    {
      pagina: 'https://www.mymcomputacion.com/almacenamiento/',
      jsonDoc: 'almacenamientoMyM'
    },
    {
      pagina: 'https://www.mymcomputacion.com/fuente/',
      jsonDoc: 'fuentesMyM'
    },
    {
      pagina: 'https://www.mymcomputacion.com/gabinete/',
      jsonDoc: 'gabinetesMyM'
    },
    {
      pagina: 'https://www.mymcomputacion.com/memoria-ram/',
      jsonDoc: 'memoriasMyM'
    },
    {
      pagina: 'https://www.mymcomputacion.com/motherboard/',
      jsonDoc: 'mothersMyM'
    },
    {
      pagina: 'https://www.mymcomputacion.com/perifericos/',
      jsonDoc: 'perifericosMyM'
    },
    {
      pagina: 'https://www.mymcomputacion.com/placa-de-video/',
      jsonDoc: 'placasMyM'
    },
    {
      pagina: 'https://www.mymcomputacion.com/procesador/',
      jsonDoc: 'procesadoresMyM'
    },
    {
      pagina: 'https://www.mymcomputacion.com/refrigeracion/',
      jsonDoc: 'refrigeracionMyM'
    },
    {
      pagina: 'https://www.mymcomputacion.com/monitor/',
      jsonDoc: 'monitoresMyM'
    },
  ]
]

//pages
const paginasFullHard = [
  {
    pagina: 'https://fullh4rd.com.ar/tag/placa%20de%20video',
    jsonDoc: 'placasFullHard'
  },
  {
    pagina: 'https://fullh4rd.com.ar/tag/placa%20de%20video',
    jsonDoc: 'placasFullHard'
  },
  {
    pagina: 'https://fullh4rd.com.ar/tag/placa%20de%20video',
    jsonDoc: 'placasFullHard'
  },
  {
    pagina: 'https://fullh4rd.com.ar/tag/placa%20de%20video',
    jsonDoc: 'placasFullHard'
  },
  {
    pagina: 'https://fullh4rd.com.ar/tag/placa%20de%20video',
    jsonDoc: 'placasFullHard'
  },
  {
    pagina: 'https://fullh4rd.com.ar/tag/placa%20de%20video',
    jsonDoc: 'placasFullHard'
  },
  {
    pagina: 'https://fullh4rd.com.ar/tag/placa%20de%20video',
    jsonDoc: 'placasFullHard'
  },
  {
    pagina: 'https://fullh4rd.com.ar/tag/placa%20de%20video',
    jsonDoc: 'placasFullHard'
  },

]

const paginasMalditosHard = [
  // {
  //   pagina: 'https://www.malditohard.com.ar/categoria/notebooks/',
  //   jsonDoc: 'notebooksMalditosHard'
  // },
  // {
  //   pagina: 'https://www.malditohard.com.ar/categoria/sillas-gamer/',
  //   jsonDoc: 'sillasMalditosHard'
  // },
  // {
  //   pagina: 'https://www.malditohard.com.ar/categoria/accesorios/accesorios-accesorios/',
  //   jsonDoc: 'accesoriosMalditosHard'
  // },
  // {
  //   pagina: 'https://www.malditohard.com.ar/categoria/accesorios/capturadoras/',
  //   jsonDoc: 'capturasMalditosHard'
  // },
  // {
  //   pagina: 'https://www.malditohard.com.ar/categoria/accesorios/joysticks/',
  //   jsonDoc: 'joysticksMalditosHard'
  // },
  // {
  //   pagina: 'https://www.malditohard.com.ar/categoria/accesorios/memoria-sd/',
  //   jsonDoc: 'memoriasSDMalditosHard'
  // },
  // {
  //   pagina: 'https://www.malditohard.com.ar/categoria/conectividad/',
  //   jsonDoc: 'conectividadMalditosHard'
  // },
  // //ver si se pueden separar los relojes de las demas cosas
  // {
  //   pagina: 'https://www.malditohard.com.ar/categoria/tecnologia/',
  //   jsonDoc: 'tecnologiaMalditosHard'
  // },
  // {
  //   pagina: 'https://www.malditohard.com.ar/categoria/pc-gamer/',
  //   jsonDoc: 'pcsGamerMalditosHard'
  // },
  // {
  //   pagina: 'https://www.malditohard.com.ar/categoria/pcs-armadas/mini-pcs/',
  //   jsonDoc: 'miniPCsMalditosHard'
  // }
  {
    pagina: 'https://www.malditohard.com.ar/categoria/almacenamiento/',
    jsonDoc: 'almacenamientoMalditosHard'
  },
  {
    pagina: 'https://www.malditohard.com.ar/categoria/motherboard/',
    jsonDoc: 'mothersMalditosHard'
  },
  {
    pagina: 'https://www.malditohard.com.ar/categoria/microprocesadores/',
    jsonDoc: 'procesadoresMalditosHard'
  },
  {
    pagina: 'https://www.malditohard.com.ar/categoria/refrigeracion/',
    jsonDoc: 'refrigeracionMalditosHard'
  },
  {
    pagina: 'https://www.malditohard.com.ar/categoria/memorias-ram/',
    jsonDoc: 'memoriasMalditosHard'
  },
  {
    pagina: 'https://www.malditohard.com.ar/categoria/gabinetes/',
    jsonDoc: 'gabinetesMalditosHard'
  },
  {
    pagina: 'https://www.malditohard.com.ar/categoria/fuentes/',
    jsonDoc: 'fuentesMalditosHard'
  },
  {
    pagina: 'https://www.malditohard.com.ar/categoria/placa-de-video/',
    jsonDoc: 'placasMalditosHard'
  },
  {
    pagina: 'https://www.malditohard.com.ar/categoria/monitores/',
    jsonDoc: 'monitoresMalditosHard'
  },
  //teclados, mouses, auriculares
  {
    pagina: 'https://www.malditohard.com.ar/tags/perifericos/',
    jsonDoc: 'perifericosMalditosHard'
  },
]

const paginasGamerfactory = [
  {
    pagina: 'https://www.gamerfactory.com.ar/productos/gabinetes-pc-gamer',
    jsonDoc: 'gabinetesGamerFactory'
  },
  {
    pagina: 'https://www.gamerfactory.com.ar/productos/cpus-alto-rendimiento',
    jsonDoc: 'procesadoresGamerFactory'
  },
  {
    pagina: 'https://www.gamerfactory.com.ar/productos/gpus',
    jsonDoc: 'placasGamerFactory'
  },
  {
    pagina: 'https://www.gamerfactory.com.ar/productos/motherboards-gaming',
    jsonDoc: 'mothersGamerFactory'
  },
  {
    pagina: 'https://www.gamerfactory.com.ar/productos/fuentes-de-alimentacion',
    jsonDoc: 'fuentesGamerFactory'
  },
  {
    pagina: 'https://www.gamerfactory.com.ar/productos/memorias-ram-gaming',
    jsonDoc: 'memoriasGamerFactory'
  },
  {
    pagina: 'https://www.gamerfactory.com.ar/productos/discos-duros-internos',
    jsonDoc: 'almacenamientoGamerFactory'
  },
  {
    pagina: 'https://www.gamerfactory.com.ar/productos/coolers-pc',
    jsonDoc: 'refrigeracionCPUGamerFactory'
  },
  {
    pagina: 'https://www.gamerfactory.com.ar/productos/ventiladores-pc',
    jsonDoc: 'refrigeracionGGamerFactory'
  },
]

const paginasMexx = [
  {
    pagina: 'https://www.mexx.com.ar/productos-rubro/almacenamiento/?all=1',
    jsonDoc: 'almacenamientoMexx'
  },
  {
    pagina: 'https://www.mexx.com.ar/productos-rubro/fuentes-de-poder/?all=1',
    jsonDoc: 'fuentesMexx'
  },
  {
    pagina: 'https://www.mexx.com.ar/productos-rubro/gabinetes/?all=1',
    jsonDoc: 'gabinetesMexx'
  },
  {
    pagina: 'https://www.mexx.com.ar/productos-rubro/memorias-ram/?all=1',
    jsonDoc: 'memoriasMexx'
  },
  {
    pagina: 'https://www.mexx.com.ar/productos-rubro/procesadores/?all=1',
    jsonDoc: 'procesadoresMexx'
  },
  {
    pagina: 'https://www.mexx.com.ar/productos-rubro/placas-de-video/?all=1',
    jsonDoc: 'placasMexx'
  },
  {
    pagina: 'https://www.mexx.com.ar/productos-rubro/refrigeracion-pc/?all=1',
    jsonDoc: 'refrigeracionMexx'
  },
  {
    pagina: 'https://www.mexx.com.ar/productos-rubro/motherboards/?all=1',
    jsonDoc: 'mothersMexx'
  },
]

const datosPaginas = [
  //Array de Katech
  [
    //datos Katech
    {
      local: 'Katech',
      imagenLocal: 'https://katech.com.ar/wp-content/uploads/KATECH_Logotipo.svg',
      articulos: 'article[data-id] > div',
      producto: 'h2 > a[href]',
      imagen: 'img > a',
      precio: 'span[class="woocommerce-Price-amount amount"]',
      nav: 'div[class="nav-links"] > a[class="page-numbers"]',
      numeroNav: 'a > span',
      urlProducto: ''
    },
    //Array de paginas
    [
      {
        tipo: 'procesador',
        enlace: 'procesadores',
        pagina: (function () {
          return (paginas.paginaKatech + this.enlace + '/')
        })
      },
      {
        tipo: 'almacenamiento',
        enlace: 'almacenamiento',
        pagina: (function () {
          return (paginas.paginaKatech + this.enlace + '/')
        })
      },
      {
        tipo: 'memoria',
        enlace: 'memorias-ram',
        pagina: (function () {
          return (paginas.paginaKatech + this.enlace + '/')
        })
      },
      {
        tipo: 'placa',
        enlace: 'placas-de-video',
        pagina: (function () {
          return (paginas.paginaKatech + this.enlace + '/')
        })
      },
      {
        tipo: 'mother',
        enlace: 'motherboards',
        pagina: (function () {
          return (paginas.paginaKatech + this.enlace + '/')
        })
      }
    ]
  ],
  
  //Array de Mym
  [
    //datos de Mym
    {
      local: 'MyM Computación',
      imagenLocal: 'https://statics.qloud.ar/m-y-m-computacion-06-2020/148_08-01-2024-01-01-04-sin-titulo-1.png',
      articulos: 'div[class="card card-ecommerce mt-0 ta-c **"]',
      producto: 'h4 > a[href]',
      imagen: 'img > a',
      precio: 'h6[class="precio_mp hidden"]',
      nav: 'ul[class="pagination pagination-info mt-4"]',
      numeroNav: 'a[href] > li[class="active"]',
      urlProducto: ''
    },
    //Array de paginas
    [
      {
        tipo: 'procesador',
        enlace: 'procesador',
        pagina: (function () {
          return (paginas.paginaMyM + this.enlace + '/')
        })
      },
      {
        tipo: 'almacenamiento',
        enlace: 'almacenamiento',
        pagina: (function () {
          return (paginas.paginaMyM + this.enlace + '/')
        })
      },
      {
        tipo: 'memoria',
        enlace: 'memoria-ram',
        pagina: (function () {
          return (paginas.paginaMyM + this.enlace + '/')
        })
      },
      {
        tipo: 'placa',
        enlace: 'placa-de-video',
        pagina: (function () {
          return (paginas.paginaMyM + this.enlace + '/')
        })
      },
      {
        tipo: 'mother',
        enlace: 'motherboard',
        pagina: (function () {
          return (paginas.paginaMyM + this.enlace + '/')
        })
      }
    ]

  ],
]

export default {
  // paginasKatech,
  // paginasMyM,
  // paginasFullHard,
  // paginasMalditosHard,
  // paginasGamerfactory,
  datosPaginas
}