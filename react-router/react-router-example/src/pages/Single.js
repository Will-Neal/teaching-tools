import React from 'react'
import { useParams } from 'react-router-dom'

const Single = ({ testdata }) => {
  const { id } = useParams();
  console.log(id)
  const singleUser = testdata[id]
  console.log()
  return (
    <div>{singleUser.id}</div>
  )
}

export default Single