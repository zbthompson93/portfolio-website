//import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import image from '../images/umstead_lake.jpg'
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'

export default function Summary() {
    //let navigate = useNavigate();

    return (
        <Container sx={{ width: "100%"}} maxWidth={false}>
            <Card sx={{ width: "100%" }}>
                <Box id="summary">
                    {/* <CardMedia
                        component="img"
                        height='150'
                        width='150'
                        image={image}
                    /> */}
                    {/* <Box
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
                    </Box> */}
                    <CardContent sx={{ display: 'flex0', flexWrap: 'wrap0', textAlign: 'center0'}}>
                        <div>
                        <div>
                            <img 
                                src={image}
                                id='profilePic'
                            />
                        </div>
                        
                        <p style={{textAlign: 'justify'}} >
                            Determined, motivated, and team-oriented individual with a passion for problem solving. Has 5 years of experience with front-end web development. Proficient in many front-end technologies including HTML, CSS, JavaScript, React.js, Redux, Git, JSON, and REST APIs.
                        </p>
                        </div>
                    </CardContent>
                </Box>
                </Card>
        </Container>
    );
  }