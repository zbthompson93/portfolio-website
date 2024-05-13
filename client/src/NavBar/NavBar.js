//import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import image from '../images/zt-logo-1_1.svg'
//import { ReactComponent as Logo } from '../images/zt-logo-1_1.svg';

export default function NavBar(props) {
    //let navigate = useNavigate();

    return (
        <AppBar position="static" sx={{ bgcolor: "#000" }}>
        <Toolbar>
            <Icon>
                <img style={{width: 20}} src={image} />
            </Icon>
            {/* <Logo /> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {props.name}
            </Typography>
            {/* <Button color="inherit" onClick={() => navigate('/', {state:{query:props.query}})}>Back</Button> */}
          </Toolbar>
      </AppBar>
    );
  }