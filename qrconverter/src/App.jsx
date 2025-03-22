import { useState } from 'react'
import './App.css'
import Styled from 'styled-components'
import Converter from './pages/pag2'
import QRgenerator from './pages/pag1'
import PageHeader from './components/PageHeader/pageHeader'


const AppContainer = Styled.div`
  width: 100%;
  height: 100vh;

`


function App() {

  return (
    <AppContainer>
      <PageHeader />
      <QRgenerator />
      <Converter />
    </AppContainer>
  )
}

export default App
