import * as d3 from 'd3-shape'
import React from 'react'
import { AreaSeries, HorizontalGridLines, VerticalGridLines, XAxis, XYPlot, YAxis } from 'react-vis'

function TopActivity() {
    const data =
        [
            { x: 0, y: 38 },
            { x: 1, y: 28 },
            { x: 2, y: 28 },
            { x: 3, y: 25 },
            { x: 4, y: 25 },
            { x: 5, y: 27 },
            { x: 6, y: 25 },
            { x: 7, y: 28 },
            { x: 8, y: 28 },
            { x: 9, y: 28 },
            { x: 10, y: 35 },
            { x: 11, y: 25 }
        ]
    const xTickValue = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ]
    return (
        <div>
            <XYPlot height={280} width={620} yDomain={[0, 60]}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis tickFormat={v => xTickValue[v]} />
                <YAxis />
                <AreaSeries
                    data={data}
                    curve={d3.curveCatmullRom.alpha(1)}
                    fill={'#2563eb'}
                    stroke={'#1d4ed8'}
                    opacity={0.5}
                />
            </XYPlot>
        </div>
    )
}

export default TopActivity