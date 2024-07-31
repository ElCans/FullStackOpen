/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({onClick, text}) => {
    return(
        <button onClick={onClick}>{text}</button>
    )
}

const Feedbacks = ({good, setGood, neutral, setNeutral, bad, setBad}) => {
    const goodBtn = () => {
        setGood(good + 1)
    }
    const neutralBtn = () => {
        setNeutral(neutral + 1)
    }
    const badBtn = () => {
        setBad(bad + 1)
    }

    return(
        <div>
            <h1>Give feedback</h1>
            <Button onClick = {goodBtn} text = "good" />
            <Button onClick = {neutralBtn} text = "neutral" />
            <Button onClick = {badBtn} text = "bad" />
        </div>
    )
}

const StatisticLine = (props) => {
    if(props.text==="positive"){
        return(
            <tr>
                <td>{props.text}</td>
                <td>{props.value} %</td>
            </tr>
        )
    }
    return(
        <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
            </tr>
    )
}

const Statistics =({good, neutral, bad}) => {
    const all = good + neutral + bad
    const average = (good-bad)/all
    const positive = (good/all)*100

    if (good===0 && neutral===0 && bad===0) {
        return(
            <p>No feedback given</p>
        )
    }
    return(
        <div>
            <table>
                <tbody>
                <StatisticLine text="good" value={good} />
                <StatisticLine text="neutral" value={neutral} />
                <StatisticLine text="bad" value={bad} />
                <StatisticLine text="all" value={all} />
                <StatisticLine text="average" value={average} />
                <StatisticLine text="positive" value={positive} />
                </tbody>
            </table>
        </div>
    )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Feedbacks good = {good} setGood={setGood} neutral = {neutral} setNeutral={setNeutral} bad = {bad} setBad={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App