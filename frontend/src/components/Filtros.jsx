import Filtro from "./Filtro"

/* eslint-disable react/prop-types */
export default function Filtros({ filtros }) {
    if (!filtros) return <></>
    return (
        <section className='fi-section'>
            {filtros.map((filtro) => {
                return <>
                    <h1>{filtro.nombre}</h1>
                    {filtro.opciones.map((opcion) => {
                        return <Filtro opcion={opcion} key={opcion} />
                    })}
                </>
            })}

            {/* <h3>filtros</h3>
            <div>
                {filtros.map((filtro) => {
                    return <p className='fi-section-opcion' onClick= {() => {console.log(filtro)}} key={filtro}>{filtro}</p>
                })}
            </div> */}
        </section>
    )
}

/*
    nombre-categoria
        opcion1
        opcion2
        opcion3

    nombre-categoria
        opcion1
        opcion2
        opcion3

    filtros: [
    {
        nombre: nombre,
        opciones: [1, 2, 3]    
    },
    {
        nombre: nombre,
        opciones: [4, 5, 6]
    }]



*/ 