import React from 'react'
import Example from '../components/Example'
import Props from '../components/Props'

const Main = () => {
    const data = ["Example Prop 1", "Example Prop 2", "Example Prop 3"]

  return (
    <div>
        <h1> Hello World! I am the Main Page.</h1>
        <h3> The first component I am rendering is the Example</h3>
        <Example />
        <h3> The Second Component I am Rendering will receive and use Props!</h3>
        <Props data={data}/>
    </div>
  )
}

export default Main