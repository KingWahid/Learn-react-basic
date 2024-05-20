import React from 'react'
import Joke from './Joke'
import jokesdata from './jokesdata'

export default function Jokes() {
    const jokeElement = jokesdata.map(data => {
        return <Joke key={data.id} setup={data.setup} punchline={data.punchline}/>
    })
  return (
    <main>
        {jokeElement}
    </main>
  )
}
