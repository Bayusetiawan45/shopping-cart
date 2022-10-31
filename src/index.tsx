import { createTheme, ThemeProvider } from '@mui/material'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './styles.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#fff',
      dark: '#f5f5f5',
      contrastText: '#000',
    },
    secondary: {
      light: '#b388ff',
      main: '#7c4dff',
      dark: '#651fff',
      contrastText: '#fff',
    },
  },
})

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
