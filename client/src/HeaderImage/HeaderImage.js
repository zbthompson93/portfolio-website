//import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import image from '../images/umstead_lake.jpg'
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function HeaderImage(props) {
    //let navigate = useNavigate();

    return (
        <Container sx={{ width: "100%", padding: '0 !important', maxHeight: '65vh', marginBottom: '30px'}} maxWidth='false'>
            {/* <Box sx={{ height: '70vh', overflow: 'hidden'}}>
                <img style={{width: "100%" }} src={image} />
                <Typography variant="h1" component="div" sx={{ zIndex: 5}}>
                    Zachary Thompson
                </Typography>
            </Box> */}

            <Card sx={{ width: "100%" }}>
                <Box sx={{ position: 'relative', height: '70vh', overflow: 'hidden' }}>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={image}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '40%',
                            left: 0,
                            width: '100%',
                            color: 'white',
                            textAlign: 'center'
                        }}
                    >
                        <Typography variant="h2">Zachary Thompson</Typography>
                        <Typography variant="h4">Front End Software Engineer</Typography>
                    </Box>
                </Box>
                </Card>
        </Container>
    );
  }