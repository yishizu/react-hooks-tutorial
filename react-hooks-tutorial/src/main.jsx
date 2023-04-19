import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const shinCodeInfo = {
  name:'shincode',
  age: 20
}
const ShinCodeInfo = createContext(shinCodeInfo);
ReactDOM.createRoot(document.getElementById('root')).render(
  <ShinCodeInfo.Provider value= {shinCodeInfo}>
    <App />
  </ShinCodeInfo.Provider>
    
  
)

export default ShinCodeInfo;