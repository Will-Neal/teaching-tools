import React from 'react'

const Props = ({ data }) => {
   console.log(data) 
  return (
    <div>The Following are Props:
        {data.map((example) => {
            return <h6>{example}</h6>
        })}
    </div>
  )
}

export default Props