import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Appcontext, ThemeColor } from './Global/Global.jsx'
 
 
createRoot(document.getElementById('root')).render(
  
  
  <ThemeColor><StrictMode>
 
   <App/>
    
  </StrictMode>,
  </ThemeColor>
)
