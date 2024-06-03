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
                        
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam vehicula ipsum a arcu cursus. Proin nibh nisl condimentum id. Elit sed vulputate mi sit amet mauris commodo quis. Ut diam quam nulla porttitor massa id neque. Pretium lectus quam id leo in vitae turpis massa. In hac habitasse platea dictumst quisque sagittis purus. Pellentesque habitant morbi tristique senectus et netus et. Tortor consequat id porta nibh venenatis cras sed felis eget. Volutpat commodo sed egestas egestas. Integer vitae justo eget magna fermentum iaculis eu non diam. Semper auctor neque vitae tempus quam pellentesque. Luctus venenatis lectus magna fringilla. Sed sed risus pretium quam vulputate dignissim. Et malesuada fames ac turpis. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Malesuada pellentesque elit eget gravida cum sociis natoque.

Semper risus in hendrerit gravida rutrum quisque. Massa tempor nec feugiat nisl pretium fusce. Diam phasellus vestibulum lorem sed risus ultricies. Consequat ac felis donec et odio pellentesque diam volutpat commodo. Enim neque volutpat ac tincidunt. Diam quam nulla porttitor massa id neque. Ultrices in iaculis nunc sed augue. Curabitur gravida arcu ac tortor dignissim convallis aenean et. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Enim blandit volutpat maecenas volutpat blandit. Rhoncus dolor purus non enim. Nisi scelerisque eu ultrices vitae auctor eu augue ut.
                        </p>
                        </div>
                    </CardContent>
                </Box>
                </Card>
        </Container>
    );
  }