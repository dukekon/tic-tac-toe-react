import React, { useState } from 'react'
import '@/assets/style.css'
import Board from '@/components/Board'
import History from '@/components/History'
import { useCheck } from '@/hooks/check'

const App = () => {
  const [state, setState] = useState({
    history: [
      {
        chesses: Array(3).fill(null).map(item => Array(3).fill(null)),
        last: [0, 0],
      },
    ],
    step: 0,
    xIsNext: true,
  })
  const { checkWinner } = useCheck()

  const handleClick = (x: number, y: number) => {
    const history = state.history.slice(0, state.step + 1)
    const chesses = history[history.length - 1].chesses.slice()
    console.log(chesses)

    if (chesses[x][y] !== null || checkWinner(chesses)) return

    chesses[x][y] = state.xIsNext ? 'x' : 'o'
    setState({
      history: history.concat({ chesses, last: [x + 1, y + 1] }),
      xIsNext: !state.xIsNext,
      step: state.step,
    })
  }

  const handleHistoryClick = (index: number) => {
    setState({
      step: index,
      xIsNext: index % 2 === 0,
    })

  }

  return (
    <div className='app'>
      <header>
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div className='layout'>
          <div className='layout-left'>
            <Board chesses={ state.history[state.history.length - 1].chesses }
                   onClick={ (x: number, y: number) => handleClick(x, y) }/>
          </div>
          <div className='layout-right'>
            <History list={ state.history } onClick={ (i: number) => handleHistoryClick(i) }/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
