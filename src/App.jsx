import { useState } from 'react'
import { 
  ThemeProvider, 
  createTheme, 
  CssBaseline, 
  Container, 
  Typography, 
  Button, 
  Box, 
  AppBar, 
  Toolbar, 
  IconButton 
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Finanças Pessoais
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box sx={{ my: 4, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mb: 2 }}>
            <img src={viteLogo} height="80" alt="Vite logo" />
            <img src={reactLogo} height="80" alt="React logo" />
          </Box>
          <Typography variant="h4" component="h1" gutterBottom>
            Vite + React + MUI
          </Typography>
          <Box sx={{ my: 4 }}>
            <Button 
              variant="contained" 
              onClick={() => setCount((count) => count + 1)}
              sx={{ mb: 2 }}
            >
              Contador: {count}
            </Button>
            <Typography>
              Edite <code>src/App.jsx</code> e salve para testar HMR
            </Typography>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
