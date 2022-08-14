import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { DotsVerticalIcon } from '@heroicons/react/solid'
import { bangla, handleLanguage } from '../../../constant/language'
import { NavLink } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Options() {
    return (
        <Menu as="div" className="relative inline-block text-left ">
            <div>
                <Menu.Button className="">

                    <DotsVerticalIcon className="-mr-1 ml-2 mt-[6px] h-5 w-5" aria-hidden="true" />
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-32  shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/login"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >
                                    {bangla ? "লগইন" : "Login"}
                                </NavLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NavLink
                                    to="/sign-up"
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'block px-4 py-2 text-sm'
                                    )}
                                >

                                    {bangla ? "সাইন আপ" : " Sign Up"}
                                </NavLink>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="py-1 flex justify-center gap-2">
                        <div onClick={() => handleLanguage('bn')} className={`${bangla ? 'bg-[#4c9a2a] text-white' : 'bg-gray-300 text-black'} p-1 px-2 `}>BN</div>
                        <div onClick={() => handleLanguage('en')} className={`${!bangla ? 'bg-[#4c9a2a] text-white' : 'bg-gray-50 text-black'} p-1 px-2 `}>EN</div>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
