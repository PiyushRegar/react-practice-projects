import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation.jsx'
import Home from './components/Home.jsx'
import ContactForm from './components/contactForm.jsx'

function App() {

  return (
    <div>
      <Navigation />
     <main className='mainContainer'>
       <Home />
      <ContactForm />
     </main>
    </div>
  )
}

export default App
