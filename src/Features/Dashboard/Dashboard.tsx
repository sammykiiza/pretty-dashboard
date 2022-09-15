import React from 'react'
import MainLayout from '../../Core/Layouts/MainLayout'
import BitCoinCard from './Cards/BitCoinCard'
import CardanoCard from './Cards/CardanoCard'
import DashCard from './Cards/DashCard'
import EthereumCard from './Cards/EthereumCard'
import Transaction from './Tables/Transaction'

function Dashboard() {
  return (
    <MainLayout>
      <div className='flex'>
        <div>
          <h2 className='pl-6 pt-2 h-4 font-bold'>Your account</h2>
          <div className='flex space-x-4'>
            <BitCoinCard />
            <EthereumCard />
            <CardanoCard />
            <DashCard />
          </div>
        </div>

        <div className='ml-10'>
          <h2 className='pt-2 font-bold'>Transaction</h2>
          <div className='pt-1'>
            <Transaction/>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard