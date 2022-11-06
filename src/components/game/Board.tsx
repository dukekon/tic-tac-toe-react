import React from 'react'
import styled from 'styled-components'
import Square from '@/components/game/Square'

export default () => {

  const renderSquares = (i: number) => {
    return <Square value={ i } key={ i }/>
  }

  return (
    <Board>
      <div className={ 'inner' }>
        { [1, 2, 3].map((row, i) => (
          <div className='board-row' key={ row }>
            { [1, 2, 3].map(col => renderSquares(i * 3 + col)) }
          </div>
        )) }
      </div>
    </Board>
  )
}

const Board = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: var(--radius-board);
  background-color: var(--bgcolor-board);
  box-shadow: var(--shadow-board);

  .inner {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    width: 100%;
    height: 100%;
    border-radius: var(--radius-board-inner);
    background-color: var(--bgcolor-board-inner);
    box-shadow: inset var(--shadow-board);
  }

  .board-row {
    display: flex;
    justify-content: space-between;
    height: calc((100% - 20px) / 3);
  }
`
