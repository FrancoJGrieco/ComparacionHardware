import { Typography } from "@mui/material";

/* eslint-disable react/prop-types */
export default function Filtro({ opcion }) {
    return (
        <Typography variant='h4' className='fi-section-opcion' onClick={() => console.log(opcion)} key={opcion}>{opcion}</Typography>
    )
}