import React from 'react'
import '@/assets/style.css'
import BoardGrid from '@/components/BoardGrid'

interface Props {
  chesses: number[][]
  onClick: (x: number, y: number) => void
}

const Board = ({ chesses, onClick }: Props) => {
  const layout = Array(3).fill(null).map(item => Array(3).fill(null))

  const renderBoardGrids = () => {
    return layout.map((rows, y) => (
      // render rows
      <div className='board-row' key={ y }>
        {/*render cols*/ }
        { rows.map((cols, x) => (
          <BoardGrid chess={ chesses[y][x] } key={ y + x } onClick={ () => onClick(x, y) }/>
        )) }
      </div>
    ))
  }


  return (
    <div className='board'>
      <div className='board-inner'>
        { renderBoardGrids() }
      </div>
    </div>
  )
}

export default Board
