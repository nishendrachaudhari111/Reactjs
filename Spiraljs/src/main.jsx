import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//     herf: 'https://google.com/',
//     target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement =(
  <a herf="https://google.com" target='_blank'>Visit google</a>
)
 const anotheruser = "chai and react"

const ReactElement = React.createElement(
  'a',
  {herf: 'https://google.com/',target: '_blank'},
  'Click me to visit google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).render(

ReactElement
    
)
