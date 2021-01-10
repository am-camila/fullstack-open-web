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
 //Using index only because in this case the displayed data never changes or is reordered/filtered. otherwise is NOT recomended
  return (   
    <div>
      {props.content.map( (p, index) => <Part content={p} key={index}/>)} 
    </div>
  )
}

const Total = (props) => {
  var total = 0;
      props.content.forEach(content => {
      total = content.exercises + total
    });
  
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
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    },
    {
      name: 'Redux',
      exercises: 11
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