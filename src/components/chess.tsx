import React from 'react'

interface Props {
  value: number
}

const Chess = ({ value }: Props) => {

  const renderChess = () => {
    if (value === 0) {
      return (
        <path
          d='M34 60c16.553 0 30-13.447 30-30S50.553 0 34 0 4 13.447 4 30s13.447 30 30 30zm9.719-38.155A12.636 12.636 0 0146.69 30a12.637 12.637 0 01-2.971 8.155 12.617 12.617 0 01-7.516 4.34c-2.838.502-5.86.047-8.547-1.508a12.618 12.618 0 01-5.578-6.648 12.617 12.617 0 010-8.678 12.617 12.617 0 015.579-6.648 12.617 12.617 0 018.546-1.507 12.617 12.617 0 017.516 4.34z'
          fill='#D32F2F'
          filter='url(#default)'
          fillRule='evenodd'/>
      )
    }
    if (value === 1) {
      return (
        <g fill='#0E71D3' filter='url(#default)'>
          <path d='M17.673 0l46.324 46.569-12.545 12.478L5.13 12.478z'/>
          <path d='M62.799 13.431l-46.32 46.565L3.934 47.518 50.254.953z'/>
        </g>
      )
    }
  }

  return (
    <svg className='chess' width='64' height='64'>
      { renderChess() }
      <defs>
        <filter id='default' width='67.997' height='67.997' x='0' y='0' colorInterpolationFilters='sRGB'
                filterUnits='userSpaceOnUse'>
          <feFlood floodOpacity='0' result='BackgroundImageFix'/>
          <feColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/>
          <feOffset dy='4'/>
          <feGaussianBlur stdDeviation='1.333'/>
          <feColorMatrix values='0 0 0 0 0.76078 0 0 0 0 0.71765 0 0 0 0 0.34902 0 0 0 .8 0'/>
          <feBlend in2='BackgroundImageFix' result='effect_dropShadow_1'/>
          <feBlend in='SourceGraphic' in2='effect_dropShadow_1' result='shape'/>
        </filter>
      </defs>
    </svg>
  )
}


export default Chess
