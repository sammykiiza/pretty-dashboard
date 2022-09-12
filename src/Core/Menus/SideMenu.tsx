import React, { useState } from 'react'
import { AdjustmentsHorizontalIcon, HomeIcon, MinusIcon, PlusIcon, PresentationChartLineIcon, QueueListIcon } from '@heroicons/react/24/outline'

function SideMenu() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    return (
        <div className='h-screen w-60 bg-white border-r border-r-slate-200'>
            <div className='h-16 border-b border-b-slate-200'>
                Logo
            </div>
            <div className='h-3/5 border-b border-b-slate-200' id="sidenavExample">
                {/* home */}
                <a
                    href='!#'
                    className='w-full transition duration-300 ease-in-out'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSidenavEx2"
                    aria-expanded="true"
                    aria-controls="collapseSidenavEx2"
                    onClick={() => setShow2(!show2)}
                >
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <div className='p-2'>
                                <HomeIcon className='h-4 w-4' />
                            </div>
                            <div className='pl-2 text-sm'><span>Home</span></div>
                        </div>

                        <div className='p-2'>
                            {!show2 ? (<PlusIcon className='h-4 w-4' />) : (<MinusIcon className='h-4 w-4' />)}
                        </div>
                    </div>

                    <div className='ml-4 accordion-collapse collapse' id="collapseSidenavEx2" aria-labelledby="sidenavEx2" data-bs-parent="#sidenavExample">
                        <ul className='pl-5 border-l-2 border-l-slate-200 text-sm'>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>All details</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Statement</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Security</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Integration</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>All Transactions</li></a>
                        </ul>
                    </div>

                </a>


                {/* dashboard */}
                <a
                    href='!#'
                    className='w-full transition duration-300 ease-in-out'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSidenavEx1"
                    aria-expanded="true"
                    aria-controls="collapseSidenavEx1"
                    onClick={() => setShow1(!show1)}
                >
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <div className='p-2'>
                                <PresentationChartLineIcon className='h-4 w-4' />
                            </div>
                            <div className='pl-2 text-sm text-ellipsis whitespace-nowrap'><span>Dashboard</span></div>
                        </div>

                        <div className='p-2'>
                            {!show1 ? (<PlusIcon className='h-4 w-4' />) : (<MinusIcon className='h-4 w-4' />)}
                        </div>
                    </div>

                    <div className='ml-4 accordion-collapse collapse' id="collapseSidenavEx1" aria-labelledby="sidenavEx1" data-bs-parent="#sidenavExample">
                        <ul className='pl-5 border-l-2 border-l-slate-200 text-sm'>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>All details</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Statement</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Security</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Integration</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>All Transactions</li></a>
                        </ul>
                    </div>

                </a>


                {/* projects */}
                <a
                    href='!#'
                    className='w-full transition duration-300 ease-in-out'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSidenavEx3"
                    aria-expanded="true"
                    aria-controls="collapseSidenavEx3"
                    onClick={() => setShow3(!show3)}
                >
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <div className='p-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                                </svg>

                            </div>
                            <div className='pl-2 text-sm text-ellipsis whitespace-nowrap'><span>Projects</span></div>
                        </div>

                        <div className='p-2'>
                            {!show3 ? (<PlusIcon className='h-4 w-4' />) : (<MinusIcon className='h-4 w-4' />)}
                        </div>
                    </div>

                    <div className='ml-4 accordion-collapse collapse' id="collapseSidenavEx3" aria-labelledby="sidenavEx3" data-bs-parent="#sidenavExample">
                        <ul className='pl-5 border-l-2 border-l-slate-200 text-sm'>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>All details</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Statement</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Security</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Integration</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>All Transactions</li></a>
                        </ul>
                    </div>

                </a>


                {/* tasks */}
                <a
                    href='!#'
                    className='w-full transition duration-300 ease-in-out'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSidenavEx4"
                    aria-expanded="true"
                    aria-controls="collapseSidenavEx4"
                    onClick={() => setShow4(!show4)}
                >
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <div className='p-2'>
                                <QueueListIcon className='h-4 w-4' />
                            </div>
                            <div className='pl-2 text-sm text-ellipsis whitespace-nowrap'><span>Tasks</span></div>
                        </div>

                        <div className='p-2'>
                            {!show4 ? (<PlusIcon className='h-4 w-4' />) : (<MinusIcon className='h-4 w-4' />)}
                        </div>
                    </div>

                    <div className='ml-4 accordion-collapse collapse' id="collapseSidenavEx4" aria-labelledby="sidenavEx4" data-bs-parent="#sidenavExample">
                        <ul className='pl-5 border-l-2 border-l-slate-200 text-sm'>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>All details</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Statement</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Security</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Integration</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>All Transactions</li></a>
                        </ul>
                    </div>

                </a>

                {/* settings */}
                <a
                    href='!#'
                    className='w-full transition duration-300 ease-in-out'
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSidenavEx5"
                    aria-expanded="true"
                    aria-controls="collapseSidenavEx5"
                    onClick={() => setShow5(!show5)}
                >
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <div className='p-2'>
                                <AdjustmentsHorizontalIcon className='h-4 w-4' />
                            </div>
                            <div className='pl-2 text-sm text-ellipsis whitespace-nowrap'><span>Settings</span></div>
                        </div>

                        <div className='p-2'>
                            {!show5 ? (<PlusIcon className='h-4 w-4' />) : (<MinusIcon className='h-4 w-4' />)}
                        </div>
                    </div>

                    <div className='ml-4 accordion-collapse collapse' id="collapseSidenavEx5" aria-labelledby="sidenavEx5" data-bs-parent="#sidenavExample">
                        <ul className='pl-5 border-l-2 border-l-slate-200 text-sm'>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>All details</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Statement</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Security</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>Integration</li></a>
                            <a href="!#"><li className='hover:bg-slate-200 py-2 px-4 mr-2 rounded'>All Transactions</li></a>
                        </ul>
                    </div>

                </a>
            </div>
            <div></div>
        </div>
    )
}

export default SideMenu