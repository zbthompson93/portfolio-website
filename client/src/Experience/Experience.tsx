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
import Link from '@mui/material/Link';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import type { FC, ReactElement } from "react";

interface experience {
    title: string, 
    company: string, 
    icon: string, 
    desc: string, 
    accomplishments: string[], 
    link: string
}



export default function Experience() {
    //const [showDesc, setShowDesc] = useState<{ [key: string]: boolean }>({});

    const experiences: experience[] = [
        {
            title: 'Web Developer', 
            company: 'CAE', 
            icon: image, 
            desc: 'test', 
            accomplishments: ['1', '2'],
            link: 'https://www.google.com/'
        },
        {
            title: 'Software Engineer', 
            company: 'Service Point Pro', 
            icon: image, 
            desc: 'test', 
            accomplishments: ['1', '2'],
            link: 'https://www.google.com/'
        },
        {
            title: 'Web Developer', 
            company: 'Northwestern Mutual', 
            icon: image, 
            desc: 'test',
            accomplishments: ['1', '2'], 
            link: ''
        },
        {
            title: 'Freelance Web Developer', 
            company: 'Self-Employed', 
            icon: image, 
            desc: 'test',
            accomplishments: ['1', '2'], 
            link: ''
        },
    ]

    return (
        <Container sx={{ width: "80%", fontSize: '24px', marginTop: '30px'}} maxWidth={false}>
            <Typography variant='h3'>Experience</Typography>
            <div>
                {experiences.map((experience, i): ReactElement => {
                    return (
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                {experience.title} - {experience.company}
                            </AccordionSummary>
                            <AccordionDetails>
                                {experience.desc}
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </div>
        </Container>
    );

}