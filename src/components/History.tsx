import React from 'react'

interface Props {
  list: Array<{ chesses: number[][], last: number[] }>
  onClick: (index: number) => void
}

const History = ({ list, onClick }: Props) => {

  const calcStep = (index: number) => {
    return index % 2 === 0 ? 'O' : 'X'
  }

  const renderHistoryItem = () => {
    return list.map((item, index, arr) => {
      const x = item.last[0]
      const y = item.last[1]
      const active = index === arr.length - 1 || index === 0 ? ' active' : ''
      return <li className={ 'history-item' + active } key={ index }>

        <button onClick={ () => onClick(index) }>
          { index > 0 ?
            `#{ ${ index } }：${ calcStep(index) } on the [ ${ x }, ${ y } ] ` :
            `重新开始`
          }
        </button>
      </li>
    })
  }

  return (
    <ul className='history'>
      { renderHistoryItem() }
    </ul>
  )
}

export default History
