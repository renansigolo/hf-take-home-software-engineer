import { Menu, Popover, Transition } from '@headlessui/react'
import { BeakerIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { Fragment } from 'react'

const user = {
  userId: 'UmVuYW4gU2lnb2xv', // UserId is the name converted to Base64
  name: 'Renan Sigolo',
  handle: 'renansigolo',
  email: 'renan.sigolo@gmail.com',
  role: 'Future Hello Fresh Software Engineer',
  imageUrl: '/images/profile/uid-UmVuYW4gU2lnb2xv.webp',
}

const navLinks = [
  { id: 1, active: true, title: 'All Recipes', path: '#recipes' },
  { id: 2, active: false, title: 'Weekly Menu', path: '#weekly-menu' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <>
      <Popover as="header" className="pb-24 bg-green-800">
        {({ open }) => (
          <>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="relative py-5 flex items-center justify-center lg:justify-between">
                {/* Logo */}
                <div className="absolute left-0 flex-shrink-0 lg:static">
                  <a href="#">
                    <span className="sr-only">Logo</span>
                    <img
                      className="h-8 w-auto"
                      src="/images/Hello_Fresh_Lockup_Green-Lime_White-Font.webp"
                      alt="Logo"
                    />
                  </a>
                </div>

                {/* Right section on desktop */}
                <div className="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-4 relative flex-shrink-0">
                    {({ open }) => (
                      <>
                        <div>
                          <Menu.Button className="bg-white rounded-full flex text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt="User Image Profile"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items
                            static
                            className="origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                          >
                            <Menu.Item>
                              {({ active }) => (
                                <Link href={`/profile/${user.userId}`}>
                                  <a
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Your Profile
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link href="/signin">
                                  <a
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Sign out
                                  </a>
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </div>

                {/* Space */}
                <div className="flex-1 min-w-0 px-12 py-6 lg:hidden"></div>

                {/* Menu button */}
                <div className="absolute right-0 flex-shrink-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
              </div>
              <div className="hidden lg:block border-t border-white border-opacity-20 py-5">
                <div className="grid grid-cols-3 gap-8 items-center">
                  <div className="col-span-2">
                    <nav className="flex space-x-4">
                      <BeakerIcon
                        className="block h-6 w-6 text-white self-center"
                        aria-hidden="true"
                      />
                      {navLinks.map((link) => (
                        <Link href={link.path} key={link.id}>
                          <a
                            key={link.title}
                            className={classNames(
                              link.active ? 'text-white' : 'text-indigo-100',
                              'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
                            )}
                            aria-current={link.active ? 'page' : 'false'}
                          >
                            {link.title}
                          </a>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <Transition.Root show={open} as={Fragment}>
              <div className="lg:hidden">
                <Transition.Child
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Overlay
                    static
                    className="z-20 fixed inset-0 bg-black bg-opacity-25"
                  />
                </Transition.Child>

                <Transition.Child
                  as={Fragment}
                  enter="duration-150 ease-out"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="duration-150 ease-in"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Popover.Panel
                    focus
                    static
                    className="z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                  >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200">
                      <div className="pt-3 pb-2">
                        <div className="flex items-center justify-between px-4">
                          <div>
                            <img
                              className="h-8 w-auto"
                              src="/images/Hello_Fresh_Lockup_Green-Lime_Black-Font.webp"
                              alt="Hello Fresh Logo"
                            />
                          </div>
                          <div className="-mr-2">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                              <span className="sr-only">Close menu</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                          </div>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                          <Link href="/">
                            <a className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">
                              Home
                            </a>
                          </Link>
                          <Link href="#recipes">
                            <a className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">
                              All Recipes
                            </a>
                          </Link>
                          <a
                            href="#weekly-menu"
                            className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                          >
                            Weekly Menu
                          </a>
                        </div>
                      </div>
                      <div className="pt-4 pb-2">
                        <div className="flex items-center px-5">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={user.imageUrl}
                              alt="User Profile Image"
                            />
                          </div>
                          <div className="ml-3 min-w-0 flex-1">
                            <div className="text-base font-medium text-gray-800 truncate">
                              {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500 truncate">
                              {user.email}
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 px-2 space-y-1">
                          {/* encodeURIComponent is used in the example to keep the path utf-8 compatible.
                            <Link href={`/profile/${encodeURIComponent(user.userId)}`}> */}
                          <Link href={`/profile/${user.userId}`}>
                            <a className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">
                              Your Profile
                            </a>
                          </Link>
                          <Link href="/signin">
                            <a className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800">
                              Sign out
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition.Child>
              </div>
            </Transition.Root>
          </>
        )}
      </Popover>
    </>
  )
}
