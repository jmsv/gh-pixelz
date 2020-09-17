import React, { useEffect, useState } from 'react'

const colours = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']

export const DayRect: React.FC<{ x: number; y: number; mouseIsDown: boolean }> = ({
  x,
  y,
  mouseIsDown,
}) => {
  const [colIndex, setColIndex] = useState(0)
  const [colour, setColour] = useState(colours[0])

  useEffect(() => {
    setColour(colours[colIndex])
  }, [colIndex])

  return (
    <rect
      className="day"
      width="11"
      height="11"
      x={`${x}`}
      y={`${y}`}
      fill={colour}
      onMouseOver={() => {
        if (mouseIsDown) setColIndex((colIndex + 1) % colours.length)
      }}
      onClick={() => setColIndex((colIndex + 1) % colours.length)}></rect>
  )
}
