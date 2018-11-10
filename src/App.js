import React from 'react'
import { Container } from 'reactstrap'

import Header from './components/Header'

import './App.css'

class App extends React.Component {
  render () {
    return (
      <Container fluid className='App'>
        <Header />
      </Container>
    )
  }
}

export default App
