import { ThemeProvider } from '@mui/material'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './styles.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import DataProvider from './context'
import { theme } from './utilities/theme'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <DataProvider>
        <App />
      </DataProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
