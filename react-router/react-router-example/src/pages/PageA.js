import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import './pagea.css'

const PageA = ({ testdata }) => {
  return (
    <div>
      <Navbar />
      <h1>PAGE A</h1>
      <ul>
        {testdata.map((data) => {
          return (
            <Link to={`./${data.id}`}>
              <div className='list-item'>
                <p>id: {data.id}</p>
                <p>username: {data.username}</p> 
                <p>email: {data.email}</p>
              </div>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default PageA