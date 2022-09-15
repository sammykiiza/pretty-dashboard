import React from 'react'
import MainLayout from '../../Core/Layouts/MainLayout'
import BitCoinCard from './Cards/BitCoinCard'
import CardanoCard from './Cards/CardanoCard'
import DashCard from './Cards/DashCard'
import EthereumCard from './Cards/EthereumCard'
import TopActivity from './Charts/TopActivity'
import RecentTransactions from './RecentTransactions'
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
          <h2 className='pt-2 font-bold'>Transactions</h2>
          <div className='pt-1'>
            <Transaction/>
          </div>
        </div>
      </div>

      <div className='flex space-x-32 items-center'>
        <div className='ml-5'>
          <div className='flex items-center space-x-4'>
            <h2 className='font-bold'>Recent Transactions</h2>
            <span><a href="!#" className='text-sm font-bold text-blue-700'>See all</a></span>
          </div>

          <div className='pt-4'>
            <RecentTransactions />
          </div>
        </div>

        <div>
        <div className='flex items-center justify-between'>
            <h2 className='font-bold ml-4'>Top Activity</h2>
            <span><a href="!#" className='text-sm font-bold text-blue-700 mr-3'>See all</a></span>
          </div>
          <TopActivity />
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard