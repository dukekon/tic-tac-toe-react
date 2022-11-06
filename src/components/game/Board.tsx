import React from 'react'
import styled from 'styled-components'
import Square from '@/components/game/Square'

export default () => {
  return (
    <Board>
      <div className={ 'inner' }>
        { Array(3).fill(0).map(item => (
          <div className='board-row'>
            { Array(3).fill(0).map(item => <Square/>) }
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
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    padding: 10px;
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
