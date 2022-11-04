import React, { useState } from 'react'
import '@/assets/style.css'
import Board from '@/components/Board'

const App = () => {
  const [state, setState] = useState({
    chesses: Array(3).fill(null).map(item => Array(3).fill(null)),
    xIsNext: true,
  })

  const handleClick = (x: number, y: number) => {
    const chesses: number[][] = state.chesses.slice()
    chesses[y][x] = state.xIsNext ? 1 : 0
    setState({ chesses, xIsNext: !state.xIsNext })
  }

  return (
    <div className='app'>
      <header>
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div className='layout'>
          <div className='layout-left'>
            <Board chesses={ state.chesses } onClick={ (x: number, y: number) => handleClick(x, y) }/>
          </div>
          <div className='layout-right'></div>
        </div>
      </main>
    </div>
  )
}

export default App
