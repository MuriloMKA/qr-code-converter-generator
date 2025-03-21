import { useState } from 'react'
import './App.css'
import Styled  from 'styled-components'
import Converter from './pages/pag2'
import QRgenerator from './pages/pag1'


const AppContainer = Styled.div`
 width: 100%;
  height: 100vh;

`


function App() {

  return (
   <AppContainer>
      <QRgenerator/>
       <Converter />  
   </AppContainer>
  )
}

export default App
