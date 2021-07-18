import {
  PencilIcon,
  // StarIcon,
  TrashIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import SectionFooter from './SectionFooter'

/** Recipes Component */
export default function Recipes() {
  // let recipesShowing = 10
  /**
   * Retrieves the data from the API
   */
  const fetchData = () => {
    axios.get('/recipes').then((response) => {
      setRecipes(response.data)
    })
  }

  // use react states to GET the data from the API
  const [recipes, setRecipes] = useState()
  useEffect(() => {
    fetchData()
  }, [])

  /**
   * Delete a recipe on the Backend
   * @param {string} recipe
   */
  const deleteRecipe = (recipe) => {
    const { _id, title } = recipe
    axios
      .delete(`/recipe/${_id}`)
      .then((res) => {
        console.log('🚀 ~ res', res)
        toast(
          () => (
            <span>
              Recipe <b>{title}</b> deleted!
              <br />
              ID: <b>{_id}</b>
            </span>
          ),
          {
            icon: <CheckCircleIcon className="h-6 w-6 text-green-500" />,
          }
        )
      })
      .catch((err) => {
        console.log('🚀 ~ deleteRecipe ~ err', err)
      })
      .finally(() => {
        // Request a new data fetch to update the UI
        fetchData()
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
          {recipes.slice(0, 10).map((recipe) => (
            <div
              key={recipe._id}
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
                  src={recipe.imageUrl}
                  alt="Recipe Image"
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  {/* <div className="mb-2 flex items-center">
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
                  </div> */}
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
                  <Link href={`/recipe/${recipe._id}`}>
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
      <SectionFooter results={10} />
    </div>
  )
}
