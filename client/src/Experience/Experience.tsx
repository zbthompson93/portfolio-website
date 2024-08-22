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
    link: string,
    location: string,
    years: string
}



export default function Experience() {
    //const [showDesc, setShowDesc] = useState<{ [key: string]: boolean }>({});

    const experiences: experience[] = [
        {
            title: 'Web Developer', 
            company: 'KDAM ATARS', 
            icon: image, 
            desc: 'KDAM ATARS designs and creates courseware for training aircraft personnel.', 
            accomplishments: [
                'Develops courseware using modern web technologies.',
                'Collaborates with SMEs, graphic artists, and others as directed to design and develop computer-aided instruction and mediated interactive lecture lessons.'
            ],
            link: 'https://www.google.com/',
            location: 'Albuquerque, NM',
            years: '2024-present'
        },
        {
            title: 'Software Engineer', 
            company: 'Service Point Pro', 
            icon: image, 
            desc: 'Service Point Pro is a Field Service Application for techs in HVAC, Plumbing, and other related fields.', 
            accomplishments: [
                'Strengthened the functionality of a Field Service Management app by building custom components React JS and Redux.',
                'Enhanced the UX of the app by making popup windows draggable, dockable,  and minimizable.',
                'Fixed numerous bugs quickly to stabilize the performance of the app.',
                'Mentored junior software engineers on the team and advanced their knowledge and abilities.',
                'Propelled proper testing for the development team by implementing a Quality Assurance process that follows Agile development methods.',
                'Boosted the code quality of large React components and split them into smaller, more manageable components.'
            ],
            link: 'https://www.google.com/',
            location: 'Albuquerque, NM',
            years: '2022-2023'
        },
        {
            title: 'Web Developer', 
            company: 'Northwestern Mutual', 
            icon: image, 
            desc: 'Northwestern Mutual provides life insurance and financial advice for people around the United States.',
            accomplishments: [
                'Enhanced the UI and UX of Northwestern Mutual’s Help Center by using modern web development techniques and standards.',
                'Collaborated with the design team by turning designs into functioning and responsive web pages and applications.',
                'Maximized customers’ workflow efficiency by building custom functionality within customer applications.',
                'Built custom apps in Northwestern Mutual’s ticketing Support site using React JS  to advance the ticket-solving process for support engineers.',
                'Generated easy-to-read reporting files by using Python to build reports based on the backend API data of the application.',
                'Customized AWS microservices to make development easier for the Help Center and custom support apps.'
            ], 
            link: '',
            location: 'Milwaukee, WI',
            years: '2018-2022'
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
                                id="experience-header"
                            >
                                <div style={{flex: 1}}>
                                    <p>{experience.title}</p>
                                    <p>{experience.company}</p>
                                </div>
                                <div style={{marginRight: 15, textAlign: 'right', fontSize: 20, lineHeight: '32px'}}>
                                    <p>{experience.location}</p>
                                    <p>{experience.years}</p>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails style={{fontSize: 20}}>
                                {experience.accomplishments.map((accomplishment): ReactElement => {
                                    return (
                                        <li>{accomplishment}</li>
                                    )
                                })}
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </div>
        </Container>
    );

}