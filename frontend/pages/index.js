import { Menu, Popover, Transition } from '@headlessui/react'
import {
  FilterIcon,
  MenuIcon,
  PencilIcon,
  StarIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline'
import { SearchIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import { Fragment } from 'react'
// import Image from 'next/image'
// import HelloLogoWhite from '../public/images/Hello_Fresh_Lockup_Green-Lime_White-Font.webp'
// import HelloLogoBlack from '../public/images/Hello_Fresh_Lockup_Green-Lime_Black-Font.webp'

const user = {
  name: 'Chelsea Hagon',
  handle: 'chelseahagon',
  email: 'chelseahagon@example.com',
  role: 'Human Resources Manager',
  imageId: '1550525811-e5869dd03032',
  imageUrl: '/images/profile/photo-1550525811-e5869dd03032.webp',
}
const navLinks = [
  { title: 'All Recipes', active: true },
  { title: 'Veggie Only', active: false },
  { title: 'Protein Rich', active: false },
]

const posts = [
  {
    title: 'Beef with Dijon Mustard',
    href: '#',
    category: { name: 'Protein', href: '#' },
    description:
      'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    isActive: true,
    imageUrl: '/images/recipe/photo-1504674900247-0877df9cc836.webp',
    cookingTime: '6 min',
    orderedTotal: '600',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
    },
  },
  {
    title: 'Veggie Salad Bowl',
    href: '#',
    category: { name: 'Veggie', href: '#' },
    description:
      'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    isActive: false,
    imageUrl: '/images/recipe/photo-1512621776951-a57141f2eefd.webp',
    cookingTime: '4 min',
    orderedTotal: '700',
    author: {
      name: 'Brenna Goyette',
      href: '#',
    },
  },
  {
    title: 'Fish for Lunch',
    href: '#',
    category: { name: 'Seafood', href: '#' },
    description:
      'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    isActive: true,
    imageUrl: '/images/recipe/photo-1476224203421-9ac39bcb3327.webp',
    cookingTime: '11 min',
    orderedTotal: '1200',
    author: {
      name: 'Daniela Metz',
      href: '#',
    },
  },
  {
    title: 'Fish for Lunch',
    href: '#',
    category: { name: 'Seafood', href: '#' },
    description:
      'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    isActive: false,
    imageUrl: '/images/recipe/photo-1476224203421-9ac39bcb3327.webp',
    cookingTime: '11 min',
    orderedTotal: '1200',
    author: {
      name: 'Daniela Metz',
      href: '#',
    },
  },
  {
    title: 'Veggie Salad Bowl',
    href: '#',
    category: { name: 'Veggie', href: '#' },
    description:
      'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    isActive: true,
    imageUrl: '/images/recipe/photo-1512621776951-a57141f2eefd.webp',
    cookingTime: '4 min',
    orderedTotal: '700',
    author: {
      name: 'Brenna Goyette',
      href: '#',
    },
  },
  {
    title: 'Beef with Dijon Mustard',
    href: '#',
    category: { name: 'Protein', href: '#' },
    description:
      'Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    isActive: true,
    imageUrl: '/images/recipe/photo-1504674900247-0877df9cc836.webp',
    cookingTime: '6 min',
    orderedTotal: '600',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
    },
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello Fresh - [PAGE_NAME]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100">
        <Popover as="header" className="pb-24 bg-green-800">
          {({ open }) => (
            <>
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="relative py-5 flex items-center justify-center lg:justify-between">
                  {/* Logo */}
                  <div className="absolute left-0 flex-shrink-0 lg:static">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto"
                        src="/images/Hello_Fresh_Lockup_Green-Lime_White-Font.webp"
                        alt="Workflow"
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
                                alt=""
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
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Your Profile
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Settings
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    Sign out
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>

                  {/* Space */}
                  <div className="flex-1 min-w-0 px-12 py-6 lg:hidden">
                    {/* <div className="max-w-xs w-full mx-auto">
                    </div> */}
                  </div>

                  {/* Menu button */}
                  <div className="absolute right-0 flex-shrink-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="bg-transparent p-2 rounded-md inline-flex items-center justify-center text-indigo-200 hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden lg:block border-t border-white border-opacity-20 py-5">
                  <div className="grid grid-cols-3 gap-8 items-center">
                    <div className="col-span-2">
                      <nav className="flex space-x-4">
                        <FilterIcon
                          className="block h-6 w-6 text-white self-center"
                          aria-hidden="true"
                        />
                        {navLinks.map((link) => (
                          <a
                            key={link.title}
                            href="#"
                            className={classNames(
                              link.active ? 'text-white' : 'text-indigo-100',
                              'text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
                            )}
                            aria-current={link.active ? 'page' : 'false'}
                          >
                            {link.title}
                          </a>
                        ))}
                      </nav>
                    </div>
                    <div>
                      <div className="max-w-md w-full mx-auto">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative text-white focus-within:text-gray-600">
                          <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                            <SearchIcon
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="search"
                            className="block w-full bg-white bg-opacity-20 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 placeholder-white focus:outline-none focus:bg-opacity-100 focus:border-transparent focus:placeholder-gray-500 focus:ring-0 sm:text-sm"
                            placeholder="Search"
                            type="search"
                            name="search"
                          />
                        </div>
                      </div>
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
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                            >
                              Home
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                            >
                              All Recipes
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                            >
                              Veggie Only
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                            >
                              Protein Rich
                            </a>
                          </div>
                        </div>
                        <div className="pt-4 pb-2">
                          <div className="flex items-center px-5">
                            <div className="flex-shrink-0">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={user.imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="ml-3 min-w-0 flex-1">
                              <div className="text-base font-medium text-gray-800 truncate">
                                Rebecca Nicholas
                              </div>
                              <div className="text-sm font-medium text-gray-500 truncate">
                                rebecca.nicholas@example.com
                              </div>
                            </div>
                          </div>
                          <div className="mt-3 px-2 space-y-1">
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                            >
                              Your Profile
                            </a>
                            <a
                              href="#"
                              className="block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800"
                            >
                              Sign out
                            </a>
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
        <main className="-mt-24 pb-8 min-h-full">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Page title</h1>
            {/* Main grid */}
            <div className="grid grid-cols-1 gap-4 items-start lg:gap-8">
              {/* Main column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  <h2 className="sr-only" id="section-1-title">
                    Section title
                  </h2>
                  <div className="rounded-lg bg-white overflow-hidden shadow">
                    <div className="p-6">
                      <section className="relative pb-16 px-4 sm:px-6  lg:px-8">
                        <div className="absolute inset-0">
                          <div className="bg-white h-1/3 sm:h-2/3" />
                        </div>
                        <div className="relative max-w-7xl mx-auto">
                          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                            {posts.map((post) => (
                              <div
                                key={post.title}
                                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                              >
                                <div className="flex-shrink-0">
                                  <img
                                    className="h-48 w-full object-cover"
                                    src={post.imageUrl}
                                    alt=""
                                  />
                                </div>
                                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                  <div className="flex-1">
                                    <div className="mb-2 flex items-center">
                                      <div className="flex-shrink-0 flex">
                                        <StarIcon
                                          className="h-6 w-6 fill-current text-yellow-500"
                                          aria-hidden="true"
                                        />
                                        <StarIcon
                                          className="h-6 w-6 fill-current text-yellow-500"
                                          aria-hidden="true"
                                        />
                                        <StarIcon
                                          className="h-6 w-6 fill-current text-yellow-500"
                                          aria-hidden="true"
                                        />
                                        <StarIcon
                                          className="h-6 w-6 text-yellow-500"
                                          aria-hidden="true"
                                        />
                                        <StarIcon
                                          className="h-6 w-6 text-yellow-500"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    </div>
                                    <div className="flex justify-between">
                                      <p className="text-sm font-medium text-indigo-600">
                                        <a
                                          href={post.category.href}
                                          className="hover:underline"
                                        >
                                          {post.category.name}
                                        </a>
                                      </p>
                                      {post.isActive ? (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                          Active
                                        </span>
                                      ) : (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                          Disabled
                                        </span>
                                      )}
                                    </div>
                                    <a href={post.href} className="block mt-2">
                                      <p className="text-xl font-semibold text-gray-900">
                                        {post.title}
                                      </p>
                                      <p className="mt-3 text-base text-gray-500">
                                        {post.description}
                                      </p>
                                    </a>
                                  </div>
                                  <div className="mt-3 flex items-center">
                                    <div className="flex-shrink-0">
                                      <UserGroupIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-3">
                                      <p className="text-sm font-medium text-gray-900">
                                        <span>
                                          {post.orderedTotal} Users Ordered
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                  <div className="mt-6 flex items-center">
                                    <a href="#" className="w-full">
                                      <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 w-full justify-center border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                      >
                                        <PencilIcon
                                          className="-ml-0.5 mr-2 h-4 w-4"
                                          aria-hidden="true"
                                        />
                                        Edit Recipe
                                      </button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="py-8 text-sm text-gray-500 text-center sm:text-left">
            <span className="block sm:inline">&copy; 2021 Hello Fresh.</span>{' '}
            <span className="block sm:inline">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
