import React from 'react'

function RecentTransactions() {
  const transactions = [
    {
      id: '1',
      img: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZSUyMHBob3RvfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Jerome Bell',
      position: 'Technical Lead',
      amount: '-$25',
      amountColor: 'text-red-500',
      time: '8:20 AM'
    },

    {
      id: '2',
      img: 'https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
      name: 'Darell Steward',
      position: 'Web Analytics Developer',
      amount: '+$200',
      amountColor: 'text-lime-500',
      time: '5:02 AM'
    },
    {
      id: '3',
      img: 'https://images.unsplash.com/photo-1526621553736-d0cfb8b59b76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60',
      name: 'Esther Howard',
      position: 'Interaction Designer',
      amount: '-$2,000',
      amountColor: 'text-red-500',
      time: 'YESTERDAY'
    },
    {
      id: '4',
      img: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBob3RvfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Arlene McCoy',
      position: 'Ruby On Rails Developer',
      amount: '-$120',
      amountColor: 'text-red-500',
      time: 'YESTERDAY'
    },
    {
      id: '5',
      img: 'https://images.unsplash.com/photo-1614807547811-4174d3582092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBob3RvfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      name: 'Marcus Johnson',
      position: 'React Developer',
      amount: '+$300',
      amountColor: 'text-lime-500',
      time: 'LAST WEEK'
    }
  ]
  return (
    <>
      {transactions.map((transaction) => (
        <a href='!#' key={transaction.id} className='flex items-center border-b border-b-slate-200 py-1 px-3 rounded hover:bg-white pb-3'>
          <div className='w-8 h-8'>
            <img
              src={transaction.img}
              alt='transaction pic'
              className='rounded-full'
            />
          </div>
          <div className='flex justify-between w-72'>
          <div className='mx-4'>
            <div className='text-sm font-bold'>{transaction.name}</div>
            <div className='text-[12px] text-slate-400'>{transaction.position}</div>
          </div>
          <div>
            <div className={`text-sm font-bold px-1 ${transaction.amountColor}`}>{transaction.amount}</div>
            <div className='text-[10px] text-slate-400'>{transaction.time}</div>
          </div>
          </div>
        </a>
      ))}
    </>
  )
}

export default RecentTransactions