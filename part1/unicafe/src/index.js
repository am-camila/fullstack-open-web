import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.click}>{props.text}</button>
)

const Statistic = (props) => {
  return (
    <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
    </tr>
  )
}

const Statistics = ({good,neutral,bad,all}) => {
function returnAvg(){
  if(all===0){
    return 0
  } else {
  return (good-bad)/all}
}
function returnPos() {
  if(good===0){
      return 0
    } else {
    return good*100/all 
  }
}

function renderOnFeedback(){
  if(all>0){
    return (
    <div>
      <table>
        <Statistic text="good" value={good}></Statistic>
        <Statistic text="neutral" value={neutral}></Statistic>
        <Statistic text="bad" value={bad}></Statistic>
        <Statistic text="all" value={all}></Statistic>
        <Statistic text="average" value={returnAvg()}></Statistic>
        <Statistic text="positive" value={`${returnPos()}%`}></Statistic>
      </table>
    </div>
    )
  } else {
    return (
      <span>No feedback given</span>
    )
  }
}


  return (
  <div>
        <h1>statistics</h1>
        {renderOnFeedback()}

    </div>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  function addClick(total){
    return total+1
  }

  function handleGoodClick(){
    setGood(addClick(good))
    setAll(addClick(all))
  }

  function handleBadClick(){
    setBad(addClick(bad))
    setAll(addClick(all))

  }

  function handleNeutralClick(){
    setNeutral(addClick(neutral))
    setAll(addClick(all))
  }

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button click={handleGoodClick} text="Good"></Button>
        <Button click={handleNeutralClick } text="Neutral"></Button>
        <Button click={handleBadClick} text="Bad"></Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} ></Statistics>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)