/* eslint-disable react/prop-types */
import {useState} from 'react'
const Button = (props) => {
    return(
        <button onClick={props.onClick}>{props.text}</button>
    )
}

const MostVoted = ({anecdote, votes}) =>{
    if (votes > 0) {
      return(
        <div>
          <h2>Anecdote with most votes</h2>
          <div>
            <p>{anecdote}</p>
            <p>has {votes} votes</p>
          </div>
        </div>
      )
    }
    return(
      <div>
        <p>Aún no existen valoraciones</p>
      </div>
    )
  }

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
      ]
    
      const [selected, setSelected] = useState(0)
      const [votes, setVotes] = useState({
        0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0
      })

      const getMaxVoted = () => {
        let maxKey = null;
        let maxVoted = -Infinity;
        for (const [key, value] of Object.entries(votes)) {
          if (value > maxVoted) {
            maxVoted = value;
            maxKey = key;
          }
        }
        return {maxKey, maxVoted}
      }
    
      const {maxKey, maxVoted} = getMaxVoted ()
      const anecdoteMostVoted = anecdotes[maxKey]
      const mostVotedValue = maxVoted

      const anecdoteRandom = () => {
        const random = Math.floor(Math.random()*anecdotes.length)
        setSelected(random)
      }

      const vota = () => {
        const copyVotes = {...votes}
        copyVotes[selected] += 1
        setVotes(copyVotes)
      }
    
      return (
        <div>
            <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
            <Button onClick={anecdoteRandom} text="next anecdote" />
            <Button onClick={vota} text="vote" />
            <MostVoted anecdote={anecdoteMostVoted} votes={mostVotedValue}/>
        </div>
      )
}

export default App