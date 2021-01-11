import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (content) => { 
  return (
    <p>
      {content.content.name} {content.content.exercises}
    </p>
  )
}

const Content = (props) => {
  return (   
    <div>
      {props.content.map( (p) => <Part content={p} key={p.id}/>)} 
    </div>
  )
}

const Total = (props) => {
  const total = props.content.reduce((s, p) => {
      return s + p.exercises
    }, 0);
  
  return (
    <div>
      <p style={{fontWeight: 'bold'}}> Total of {total} exercises</p>
    </div>
    
  )
}


const Course = (props) => {

  const {course} = props

  return (
  <div>
    <Header course = {course.name}/>
    <Content content = {course.parts}/> 
    <Total content = {course.parts}/>
  </div>)
}

const App = () => {
  const course ={ name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {
      name: 'Redux',
      exercises: 11,
      id: 4
     }
  ]
}
 
   return (
    <div>
      <Course course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))