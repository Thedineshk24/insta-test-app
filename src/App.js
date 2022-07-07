import './App.css';
import Grid from '@mui/material/Grid';
import Posts from './components/Posts';
import Stories from './components/Stories';
import Suggestions from './components/Suggestions';
import Header from './layout/Header';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: "#FFFFFF",
                borderRadius: '5px',
                marginTop: 5,
            }}>
      <Grid container spacing={2} sx={{}}>
        <Grid item xs={6}>
          <Posts />
        </Grid>
        <Grid item xs={4}>
          <Suggestions />
        </Grid>
      </Grid>
      </Container>
    </div>
  );
}

export default App;
