import { Menu, Transition } from '@headlessui/react'
import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React, { Fragment } from 'react'

function Navbar() {
    function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div className='flex justify-between h-16 border-b border-b-slate-200'>
            <form className='ml-10 m-4 w-1/2'>
                <label className='relative block'>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                        <MagnifyingGlassIcon className='w-4 h-4 stroke-slate-300' />
                    </span>
                    <input
                        type="search"
                        placeholder='Search here...'
                        className='w-full bg-white placeholder:text-sm border border-slate-200 rounded-lg py-1 pl-8 pr-4 focus:outline-none'
                    />
                </label>
            </form>

            <div className='m-4'>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                        type="button"
                        className="rounded-full border border-slate-300 bg-white p-1 text-gray-400'+
                        ' hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'. 
                        ' focus:ring-offset-gray-800"
                    >
                        <span className="sr-only">View notifications</span>
                        <span className='absolute mr-0'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='h-2 w-2 animate-pulse fill-red-600' >
                                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" />
                            </svg>
                        </span>
                        <BellIcon className="h-7 w-7 p-1 relative" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1535931737580-a99567967ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="profile"
                                />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="!#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Your Profile
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="!#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Settings
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="!#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Sign out
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Navbar