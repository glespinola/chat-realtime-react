import React from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'
import '../sass/pages/_home.scss'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home