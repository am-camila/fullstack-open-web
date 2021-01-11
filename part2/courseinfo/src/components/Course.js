import React from 'react'

 const Header = (props) => {
  return (
    <div>
      <h2>{props.course}</h2>
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

export default Course