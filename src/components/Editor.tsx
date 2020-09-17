import React from 'react'

import { DayRect } from './DayRect'

export const Editor: React.FC<{ mouseIsDown: boolean }> = ({ mouseIsDown }) => {
  return (
    <div className="calendar-graph">
      <svg viewBox="0 0 828 128">
        <g transform="translate(10, 20)">
          {[...Array(53)].map((_, i) => {
            const xVal = -(i - 16)
            return (
              <g transform={`translate(${i * 16}, 0)`}>
                <DayRect x={xVal} y={0} mouseIsDown={mouseIsDown} />
                <DayRect x={xVal} y={15} mouseIsDown={mouseIsDown} />
                <DayRect x={xVal} y={30} mouseIsDown={mouseIsDown} />
                <DayRect x={xVal} y={45} mouseIsDown={mouseIsDown} />
                <DayRect x={xVal} y={60} mouseIsDown={mouseIsDown} />
                <DayRect x={xVal} y={75} mouseIsDown={mouseIsDown} />
                <DayRect x={xVal} y={90} mouseIsDown={mouseIsDown} />
              </g>
            )
          })}

          <text x="16" y="-8" className="month">
            Sep
          </text>
          <text x="61" y="-8" className="month">
            Oct
          </text>
          <text x="121" y="-8" className="month">
            Nov
          </text>
          <text x="181" y="-8" className="month">
            Dec
          </text>
          <text x="256" y="-8" className="month">
            Jan
          </text>
          <text x="316" y="-8" className="month">
            Feb
          </text>
          <text x="376" y="-8" className="month">
            Mar
          </text>
          <text x="451" y="-8" className="month">
            Apr
          </text>
          <text x="511" y="-8" className="month">
            May
          </text>
          <text x="586" y="-8" className="month">
            Jun
          </text>
          <text x="646" y="-8" className="month">
            Jul
          </text>
          <text x="706" y="-8" className="month">
            Aug
          </text>
          <text x="781" y="-8" className="month">
            Sep
          </text>

          <text text-anchor="start" className="wday" dx="-10" dy="25">
            Mon
          </text>
          <text text-anchor="start" className="wday" dx="-10" dy="56">
            Wed
          </text>
          <text text-anchor="start" className="wday" dx="-10" dy="85">
            Fri
          </text>
        </g>
      </svg>
    </div>
  )
}
