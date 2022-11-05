import React from 'react'
import '@/assets/style.css'
import BoardGrid from '@/components/BoardGrid'

interface Props {
  chesses: string[][]
  onClick: (x: number, y: number) => void
}

const Board = (props: Props) => {
  const layout = Array(3).fill(null).map(item => Array(3).fill(null))

  const renderBoardGrids = () => {
    console.log(props.chesses)
    return props.chesses.map((rows, x) => (
      // render rows
      <div className='board-row' key={ x + 9 }>
        {/*render cols*/ }
        { rows.map((cols, y) => (
          <BoardGrid chess={ props.chesses[x][y] } key={ y + x } onClick={ () => props.onClick(x, y) }/>
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
