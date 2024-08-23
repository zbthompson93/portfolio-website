//import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import image from '../images/profile_photo.jpg'
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent'
import Skills from '../Skills/Skills';

export default function Summary() {
    //let navigate = useNavigate();

    return (
        <Container sx={{ width: "80%"}} maxWidth={false}>
            <Card sx={{ width: "100%" }}>
                <Box id="summary">
                    <CardContent sx={{ display: 'flex0', flexWrap: 'wrap0', textAlign: 'center0'}}>
                        <div>
                            <div>
                                <img 
                                    src={image}
                                    id='profilePic'
                                />
                            </div>
                            
                            <p style={{textAlign: 'center'}} >
                                Determined, motivated, and team-oriented individual with a passion for problem solving. Has 5 years of experience with front-end web development. Proficient in many front-end technologies including HTML, CSS, JavaScript, React.js, Redux, Git, JSON, and REST APIs.
                            </p>
                        </div>
                        <Skills />
                    </CardContent>
                </Box>
                </Card>
        </Container>
    );
  }