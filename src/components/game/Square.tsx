import React from 'react'
import styled from 'styled-components'

export default () => {
  return (
    <Square>
      { 'abc' }
    </Square>
  )
}

const Square = styled.button`
  width: calc((100% - 20px) / 3);
  height: 100%;
  background-color: var(--bgcolor-square);
  border-radius: var(--radius-square);
  box-shadow: var(--shadow-board);
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: var(--bgcolor-square-hover);
  }
`
