import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import image from '../images/umstead_lake.jpg'
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';



export default function Portfolio() {
    const [showDesc, setShowDesc] = useState<{ [key: string]: boolean }>({});

    const projects: {title: string, desc: string, img: string}[] = [
        {title: 'Test Project', desc: 'The best project ever', img: image},
        {title: 'Test Project 2', desc: 'The second best project ever', img: image},
        {title: 'Test Project 3', desc: 'The third best project ever', img: image},
        {title: 'Test Project 4', desc: 'The fourth best project ever', img: image},
        {title: 'Test Project 5', desc: 'The fifth best project ever', img: image}
    ]

    useEffect((): void => {
        let testObj: { [key: string]: boolean } = {};
        let newDescState: boolean[] = projects.map((project, i: number) =>{
            let id: string = 'id_' + i;
            testObj = {
                ...testObj,
                [id]: false
            };
            console.log("testObj:" + JSON.stringify(testObj))
            return false;
        })

        

        setShowDesc(testObj);
    }, [])

    useEffect((): void => {
        console.log("Show Desc:" + JSON.stringify(showDesc))
    }, [showDesc])


    return (
        <Container sx={{ width: "80%", fontSize: '24px', marginTop: '30px'}} maxWidth={false}>
            <Typography variant='h3'>Portfolio</Typography>
            <Box display="flex" gap={5} sx={{flex: '1 0 0', flexWrap: 'wrap', justifyContent: 'center'}} >
                {projects.map((project, i) => {
                    return(
                        <Card
                            key={i} 
                            sx={{backgroundColor: '#d3d3d3', maxWidth: 300}} 
                            onMouseEnter={() => {
                                let id: string = 'id_' + i;
                                // testObj = {
                                //     ...testObj,
                                //     [id]: false
                                // };
                                let newShowDesc = {...showDesc};

                                newShowDesc[id] = true; 
                                //console.log('newShowDesc:' + newShowDesc[i]);
                                setShowDesc(newShowDesc)
                            }} 
                            onMouseLeave={() => {
                                let id: string = 'id_' + i;
                                let newShowDesc = {...showDesc};
                                newShowDesc[id] = false;
                                //console.log('newShowDesc:' + newShowDesc[i]);
                                setShowDesc(newShowDesc)
                            }}
                        >
                            <CardHeader
                                title={project.title}
                            />
                            <CardMedia
                                component="img"
                                height='150'
                                width='150'
                                image={project.img}
                            />
                            {showDesc['id_' + i] &&
                                <CardContent>
                                    <Typography variant="body2">
                                        {project.desc}
                                    </Typography> 
                                </CardContent>
                            }
                        </Card>
                    )
                })}
            </Box>
        </Container>
    );

}