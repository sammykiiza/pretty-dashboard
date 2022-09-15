import React from 'react'
import { api } from '../../../Core/Services/api';
import '../../../../node_modules/react-vis/dist/style.css';
import { LineSeries, XYPlot } from 'react-vis';
import * as d3 from 'd3-shape'


const EthereumCard = () => {
  const { data = [] } = api.useCoinsDetailsQuery('ethereum');
  const { data: priceData = [] } = api.useCoinsMarketDataQuery('ethereum');
  console.log(data);

  const coinChartData = priceData?.prices?.map((value: number[]) => ({ x: value[0], y: value[1].toFixed(2) }));
  const configuredCurve = d3.curveCatmullRom.alpha(0.5);
  return (
    <div className='shadow-md h-44 w-32 m-6 bg-white rounded-xl cursor-pointer'>
      <div className='px-4 py-3 flex flex-col'>
        <span className='text-xs text-slate-400 font-bold'>USD</span>
        <span className='text-xs font-bold'>3,244.97</span>
      </div>
      <div>
        <XYPlot height={80} width={120}>
          <LineSeries
            data={coinChartData}
            curve={configuredCurve}
            style={{strokeLinejoin: "round"}}
            stroke='blue'
            className='stroke-1'
          />
        </XYPlot>
      </div>
      <div className='flex px-4 items-center'>
        <div>
          <img src={data?.image?.large} alt='ethereum logo' className='w-8 h-8' />
        </div>
        <div className='px-2 flex flex-col'>
          <span className='text-xs text-slate-400 font-bold uppercase'>{data?.symbol}</span>
          <span className='text-xs font-bold'>{data?.market_data?.current_price?.usd}</span>
        </div>
      </div>
    </div>
  )
}


export default EthereumCard