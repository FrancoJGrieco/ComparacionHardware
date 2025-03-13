import { Typography, CardActionArea, CardMedia, Card, Box } from '@mui/material'

/* eslint-disable react/prop-types */
export default function Productos({ producto }) {
    return (
        <Card 
            className='pr-section'
            key={producto._id}
         >
            <CardActionArea
                sx={{padding: 0.5}}
                onClick={()=>{}}
            >
                <CardMedia
                    component='img'
                    height='200'
                    width='128'
                    image={producto.imagen}
                    alt='producto_imagen'
                ></CardMedia>
                <Box>
                    <Typography variant="subtitle1">
                    Local: {producto.local}
                    </Typography>

                    <Typography variant="subtitle2">
                    Producto: {producto.producto}
                    </Typography>

                    <Typography variant="subtitle2">
                    Precio: {producto.precio}
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>
        // <section className='pr-section' key={producto._id}>
        //     <img src={producto.imagen} style={{ width: '128px', height: '128px' }}></img>
        //     <div>
        //         <p>Local: {producto.local}</p>
        //         <p>Producto: {producto.producto}</p>
        //         <p>Precio: {producto.precio}</p>
        //     </div>
        // </section>
    )
}