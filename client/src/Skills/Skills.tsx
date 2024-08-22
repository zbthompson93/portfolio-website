//import { useNavigate } from 'react-router-dom';
import type { FC, ReactElement } from "react";
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

//Icons
import JavascriptIcon from '@mui/icons-material/Javascript';
import HtmlIcon from '@mui/icons-material/Html';
import CodeIcon from '@mui/icons-material/Code';
import CssIcon from '@mui/icons-material/Css';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Skills() {
    //let navigate = useNavigate();

    let skillsList: {name: string, icon: ReactElement}[];
    skillsList = [
        {name: "JavaScript", icon: <JavascriptIcon fontSize='medium' color='primary' />},
        {name: "HTML", icon: <CodeIcon fontSize='medium' color='primary' />},
        {name: "CSS", icon: <CssIcon fontSize='medium' color='primary' />},
        {name: "Git/GitHub", icon: <GitHubIcon fontSize='medium' color='primary' />},
    ];

    return (
        <Container sx={{ width: "100%", fontSize: '24px'}} maxWidth={false}>
            <Stack direction="row" spacing={3} id="skillsBox">
            {skillsList.map((skill) => {
                return(
                    <Chip 
                        icon={skill.icon} 
                        label={skill.name} 
                        variant="outlined" 
                        size="medium" />
                )
            })}
            </Stack>
        </Container>
    );
  }