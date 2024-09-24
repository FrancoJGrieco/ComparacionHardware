/* eslint-disable react/prop-types */
export default function Filtro({ opcion }) {
    return (
        <p className='fi-section-opcion' onClick= {() => {console.log(opcion)}} key={opcion}>{opcion}</p>
    )
}