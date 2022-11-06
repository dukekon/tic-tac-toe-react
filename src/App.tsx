import React from 'react'
import styled from 'styled-components'
import Board from '@/components/game/Board'

export default () => {
  return (
    <App>
      <header>
        <h1 className={ 'game-title' }>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div className='board-container'>
          <h3>Next Player: X</h3>
          <Board/>
        </div>
        <div className='history-container'>
          <p>RESTART</p>
          <p>STEP1: X on the (1, 3)</p><p>STEP2: X on the (1, 3)</p><p>STEP3: X on the (1, 3)</p><p>STEP4: X on the (1,
          3)</p><p>STEP5: X on the (1, 3)</p><p>STEP6: X on the (1, 3)</p><p>STEP7: X on the (1, 3)</p><p>STEP8: X on
          the (1, 3)</p>
        </div>
      </main>
    </App>
  )
}

const App = styled.div`
  margin: 0 auto;
  width: 500px;
  border: 1px solid #71a8ef;

  header {
    padding: 40px 0;
    text-align: center;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    text-align: center;
  }

  .board-container {
    width: 304px;
    height: 304px;
  }

  .history-container {
    padding-top: 25px;
  }

  & > p {
    padding-bottom: 10px;
    padding-right: 10px;
    border-radius: 8px;
  }

  & > p:first-child {
    font-size: 18px;
    font-weight: 700;
  }

  @media screen and (max-width: 500px) {
    margin: 0;
    width: 100%;
    border: 1px solid #000;

    main {
      align-items: center;
      flex-flow: column;
    }

    & > p {
      text-align: center;
    }
  }
`
