import {Container, Button, Box, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";

import './App.css';


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    width: '30vw',
    height: '60vh',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
});


function Home() {
  const classes = useStyles();
  const history = useHistory();

 function handleClick(event: React.MouseEvent<HTMLElement>) {
  event.preventDefault();
  alert(localStorage.getItem('repositoryClient'));
  alert(localStorage.getItem('repositoryProduct'));
 }
  return (
    <div className="App">
        <Container maxWidth="lg" classes={{
          root: classes.root,
        }}>
          <Typography>Sistema de Cadastro Produto e Cliente</Typography>
          <Box display="flex" flexDirection="column" flexWrap="nowrap" p={1} m={1} sx={{ maxWidth: 300 }}>
            <Box p={2}> 
             <Button color="secondary" variant="contained" fullWidth onClick={e=>{history.push("/cadastro/produtos")}}> Cadastrar Produto</Button>
            </Box>
            <Box p={2}> 
              <Button color="secondary" variant="contained" fullWidth onClick={e=>{history.push("/cadastro/cliente")}}> Cadastrar Cliente</Button>
            </Box>
           <Box p={2}> 
             <Button color="secondary" variant="contained" fullWidth onClick={handleClick}> Inventários </Button>
            </Box> 
          </Box>     
        </Container>
    </div>
  );
}

export default Home;
