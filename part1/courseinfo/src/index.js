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
      <Part content = {props.content[0]}/>
      <Part content = {props.content[1]}/>
      <Part content = {props.content[2]}/>
    </div>
  )
}

const Total = (props) => {
  var total = 0;
      props.exercises.forEach(content => {
      total = content.exercises + total
    });
  

  return (
    <div>
      <p> Number of exercises {total}</p>
    </div>
    
  )
}

const App = () => {
  const course ={ name: 'Half Stack application development',
   parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}
 
   return (
    <div>
      <Header course = {course.name}/>
      <Content content = {course.parts}/> 
      <Total exercises = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))