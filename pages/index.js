import { Menu, Popover, Transition } from '@headlessui/react'
import {
  BeakerIcon,
  MenuIcon,
  PencilIcon,
  PlusIcon,
  StarIcon,
  TrashIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

/** Set the default API URL to use when making requests with axios */
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

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

/** Weekly Menu Component */
const tabs = [
  { name: 'Week 01', href: '#', current: true },
  { name: 'Week 02', href: '#', current: false },
  { name: 'Week 03', href: '#', current: false },
  { name: 'Week 04', href: '#', current: false },
  { name: 'Week 05', href: '#', current: false },
]
function Tabs() {
  return (
    <div id="weeks" className="mt-5">
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          defaultValue={tabs.find((tab) => tab.current).name}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <nav
          className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              className={classNames(
                tab.current
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700',
                tabIdx === 0 ? 'rounded-l-lg' : '',
                tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              <span>{tab.name}</span>
              <span
                aria-hidden="true"
                className={classNames(
                  tab.current ? 'bg-indigo-500' : 'bg-transparent',
                  'absolute inset-x-0 bottom-0 h-0.5'
                )}
              />
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

function SectionHeading({ title }) {
  return (
    <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-2xl leading-6 font-medium text-gray-900">
        {title === 'Recipe' ? title + 's' : title}
      </h3>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        <Link
          href={`/${title.toLowerCase().replace(/\s+/g, '-')}/new`}
          passHref
        >
          <button
            type="button"
            className="inline-flex place-self-end items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            New {title}
          </button>
        </Link>
      </div>
    </div>
  )
}

/** Recipes Component */
function Recipes() {
  // Data Model
  // let recipes = [
  //   {
  //     createdAt: Date.now(),
  //     id: 'QmVlZiB3aXRoIERpam9uIE11c3RhcmQ=',
  //     name: 'Beef with Dijon Mustard',
  //     headline: 'Lorem ipsum dolor sit amet',
  //     imageUrl: '/images/recipe/photo-1504674900247-0877df9cc836.webp',
  //     link: 'hf.renansigolo.com/recipe/{id}',
  //     isActive: true,
  //     totalOrdered: 600,
  //     rating: 2,
  //     nutrition: [
  //       {
  //         name: 'Fat',
  //         amount: 19.9,
  //         unit: 'g',
  //       },
  //       {
  //         amount: 39.6,
  //         name: 'Protein',
  //         unit: 'g',
  //       },
  //       {
  //         amount: 388,
  //         name: 'Sodium',
  //         type: '57b42a48b7e8697d4b30530b',
  //         unit: 'mg',
  //       },
  //     ],
  //     ingredients: [
  //       {
  //         id: '5fae01355a2ab9306616d5b0',
  //         name: 'potato',
  //         description: null,
  //         imageLink:
  //           'https://d3hvwccx09j84u.cloudfront.net/200,200/ingredient/5fae01355a2ab9306616d5b0-a7aba26d.png',
  //         allergens: [],
  //       },
  //     ],
  //     steps: [
  //       {
  //         imageUrl: '',
  //         index: 1,
  //         ingredients: [],
  //         instruction:
  //           'Preheat the oven to 240°C/220°C fan-forced. Cut\nthe potato into large chunks and place on a lined\noven tray. Add the turmeric (see ingredients),\nbrown mustard seeds and a drizzle of olive oil.\nSeason with salt and pepper. Toss to coat, then\nbake until tender, 20-25 minutes.',
  //       },
  //     ],
  //     author: {
  //       name: 'Roel Aufderehar',
  //       href: '#',
  //     },
  //   },
  // ]

  /**
   * Retrieves the data from the API
   */
  const fetchData = () => {
    axios.get('/recipes').then((response) => {
      setRecipes(response.data)
    })
  }

  /** Use React States to GET the data from the API */
  const [recipes, setRecipes] = useState()
  useEffect(() => {
    fetchData()
  }, [])

  /**
   * Delete a recipe on the Backend
   * @param {string} recipe
   */
  const deleteRecipe = (recipe) => {
    const { id, title } = recipe
    axios
      .delete(`/recipes/${id}`)
      .then((res) => {
        console.log('🚀 ~ res', res)
        toast(
          () => (
            <span>
              Recipe <b>{title}</b> deleted!
              <br />
              ID: <b>{id}</b>
            </span>
          ),
          {
            icon: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
          }
        )
      })
      .then(() => {
        // Request a new data fetch to update the UI
        fetchData()
      })
      .catch((err) => {
        console.log('🚀 ~ deleteRecipe ~ err', err)
      })
  }

  if (!recipes) return null

  return (
    <div className="relative pb-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {recipes.slice(0, 5).map((recipe) => (
            <div
              key={recipe.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <button
                className="absolute -m-3 bg-red-500 rounded-full flex align-middle p-2 text-sm"
                onClick={() => deleteRecipe(recipe)}
              >
                <TrashIcon className="h-4 w-4 text-white" aria-hidden="true" />
              </button>

              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={recipe.imageURL}
                  alt="Recipe Image"
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
                      {recipe.name}
                    </p>
                    {recipe.isActive ? (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        Disabled
                      </span>
                    )}
                  </div>
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {recipe.name}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {recipe.headline}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center">
                  <div className="flex-shrink-0">
                    <UserGroupIcon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <span>{recipe.totalOrdered} Users Ordered</span>
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center">
                  <Link href={`/recipe/${recipe.id}`}>
                    <a className="w-full">
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/**
 * TODO: Add logic to paginate the Recipes
 *
 * Pagination Component for Recipe
 */
function Pagination() {
  return (
    <nav
      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to{' '}
          <span className="font-medium">5</span> of{' '}
          <span className="font-medium">20</span> results
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
    </nav>
  )
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
        <main className="-mt-24 pb-8 min-h-full">
          {/* Recipes Section */}
          <div
            id="recipes"
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <h1 className="sr-only">Recipes Section</h1>
            <div className="grid grid-cols-1 gap-4 items-start lg:gap-8">
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="recipes-section">
                  <div className="rounded-lg bg-white overflow-hidden shadow p-6">
                    <SectionHeading title="Recipe" />

                    <Recipes />

                    <Pagination />
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="relative py-10"></div>

          {/* Weekly Menu Section */}
          <div
            id="weekly-menu"
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <h1 className="sr-only">Weekly Menu Section</h1>
            <div className="grid grid-cols-1 gap-4 items-start lg:gap-8">
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="recipes-section">
                  <div className="rounded-lg bg-white overflow-hidden shadow p-6">
                    <SectionHeading title="Weekly Menu" />

                    <Tabs />

                    <h2 className="text-center my-5">TODO: Weekly Menu</h2>

                    <Pagination />
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
