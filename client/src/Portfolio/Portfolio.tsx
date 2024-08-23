import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import image from '../images/umstead_lake.jpg'
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import type { FC, ReactElement } from "react";
import brewImage from '../images/brewing-calculations-photo.png';
import ristraImage from '../images/ristra-img.png';
import htmlStock from '../images/html_stock_photp.jpeg';



export default function Portfolio() {
    const [showDesc, setShowDesc] = useState<{ [key: string]: boolean }>({});

    const projects: {title: string, desc: string, img: string, link: string}[] = [
        {
            title: 'Brewing Calculations', 
            desc: 'A simple web page that calculates information needed for homebrewing beer', 
            img: brewImage, 
            link: 'https://zbthompson93.github.io/brewing-calculations/'
        },
        {
            title: 'Ristra Restaurant Review', 
            desc: 'A web app that has reviews of local restaurants. Similar to Yelp.', 
            img: ristraImage, 
            link: 'https://github.com/zbthompson93/ristra-frontend'
        },
        {
            title: 'Token Ibis Dashboard', 
            desc: 'A dashboard that shows stats for the Token Ibis App.', 
            img: '', 
            link: 'https://github.com/zbthompson93/token-ibis-dashboard-public'
        },
        {
            title: 'Todo App', 
            desc: 'A simple todo app built using Django and React', 
            img: '', 
            link: 'https://github.com/zbthompson93/django-todo-react/tree/master'},
        // {title: 'Test Project 5', desc: 'The fifth best project ever', img: image, link: ''}
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
        <Container sx={{ width: "80%", fontSize: '24px', marginTop: '50px'}} maxWidth={false}>
            <Typography variant='h3' className='section-title'>Portfolio</Typography>
            <Box display="flex" gap={5} sx={{flex: '1 0 0', flexWrap: 'wrap', justifyContent: 'left'}} >
                {projects.map((project, i): ReactElement => {
                    return(
                        <Card
                            key={i} 
                            sx={{maxWidth: 300}} 
                            
                        >
                            <div 
                                className='project-container'
                                onMouseEnter={() => {
                                    let id: string = 'id_' + i;
                                    let newShowDesc = {...showDesc};
                                    newShowDesc[id] = true; 
                                    setShowDesc(newShowDesc)
                                }} 
                                onMouseLeave={() => {
                                    let id: string = 'id_' + i;
                                    let newShowDesc = {...showDesc};
                                    newShowDesc[id] = false;
                                    setShowDesc(newShowDesc)
                                }}
                            >
                                {showDesc['id_' + i] && 
                                    <div className='project-btn' style={{zIndex: 5}}>
                                        <Typography 
                                            variant='body1' 
                                            sx={{color: '#fff', marginBottom: '10px'}}
                                        >
                                            {project.desc}
                                        </Typography>
                                        <Button
                                            // className='project-btn'
                                            color='primary'
                                            size='medium'
                                            variant='contained'
                                            sx={{zIndex: 5}}
                                            href={project.link}
                                            target='_blank'
                                        >
                                            Visit Website
                                        </Button>
                                    </div>
                                }
                                <div style={{backgroundColor: '#000'}}>
                                    <Typography 
                                            variant='body1' 
                                            sx={{
                                                color: '#fff', 
                                                fontSize: 20,
                                                padding: '5px',
                                                textAlign: 'center',
                                                background: '#929E62',
                                                opacity: showDesc['id_' + i] ? '0.5' : '1'
                                            }}
                                        >
                                            {project.title}
                                    </Typography>
                                    <CardMedia
                                        component="img"
                                        height='200'
                                        width='300'
                                        image={project.img.length > 0 ? project.img : htmlStock}
                                        sx={{opacity: showDesc['id_' + i] ? '0.5' : '1'}}
                                    />
                                </div>
                            </div>
                        </Card>
                    )
                })}
            </Box>
        </Container>
    );

}