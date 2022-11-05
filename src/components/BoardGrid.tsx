import React from 'react'
import '@/assets/style.css'
import Chess from '@/components/chess'

interface Props {
  chess: string
  onClick: () => void
}

const BoardGrid = ({ chess, onClick }: Props) => {

  return (
    <button className='board-grid' onClick={ onClick }>
      <Chess value={ chess }/>
    </button>
  )
}

export default BoardGrid
