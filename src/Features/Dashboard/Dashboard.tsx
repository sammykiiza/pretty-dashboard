import React from 'react'
import MainLayout from '../../Core/Layouts/MainLayout'
import BitCoinCard from './Cards/BitCoinCard'
import CardanoCard from './Cards/CardanoCard'
import DashCard from './Cards/DashCard'
import EthereumCard from './Cards/EthereumCard'

function Dashboard() {
  return (
    <MainLayout>
      <div className='flex'>
        <div>
          <h2 className='pl-6 pt-2 h-4 font-bold'>Your account</h2>
          <div className='flex'>
            <BitCoinCard />
            <EthereumCard />
            <CardanoCard />
            <DashCard />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard