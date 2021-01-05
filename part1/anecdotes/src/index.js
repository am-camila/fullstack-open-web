import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(props.anecdotes.length)).map(Number.prototype.valueOf,0))
  const [mostVoted, setMostVoted] = useState('')
  const handleNext = () => {
    setSelected(Math.floor(Math.random()*props.anecdotes.length))
  }

  const handleVote = () => {
    //the correct way of updating state stored in complex data structures like objects and arrays is to make a copy of the state.
    const copy = [...points]
    copy[selected]+=1
    setPoints(copy)
    setMostVoted(anecdotes[copy.indexOf(Math.max(...copy))])

  }



  return (
  <div>
    <h1>Anecdote of the day</h1>
    {props.anecdotes[selected]}
    <br/>
      <span>has {points[selected]} votes</span>
    <br/>
    <div>
      <button onClick={()=>handleVote()}>vote</button>
      <button onClick={()=>handleNext()}>next anecdote</button>
    </div>
    <h1>Anecdote with most votes</h1>
    {mostVoted}
  </div>
  )
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)