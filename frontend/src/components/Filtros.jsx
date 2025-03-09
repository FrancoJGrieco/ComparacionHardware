import Filtro from "./Filtro"

/* eslint-disable react/prop-types */
export default function Filtros({ filtros}) {
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
        </section>
    )
}