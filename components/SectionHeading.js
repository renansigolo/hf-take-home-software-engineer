import axios from 'axios'
// import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/outline'
import toast from 'react-hot-toast'
import Faker from 'faker'

export default function SectionHeading({ title }) {
  const createRecipe = () => {
    /**
     * Generate a random number
     * @param {Number} max Max value of a number to be generated
     */
    const randomNumber = (max) => {
      return Math.floor(Math.random() * max + 1)
    }

    // create a random data for a recipe document
    let newRecipePayload = {
      name: Faker.lorem.words(3),
      headline: Faker.lorem.words(5),
      imageUrl: `/images/placeholder/recipe-${randomNumber(10)}.jpg`,
      link: 'hf.renansigolo.com/recipe/{_id}',
      isActive: Math.random() < 0.5,
      totalOrdered: randomNumber(1000),
      rating: randomNumber(5),
      nutrition: {},
      ingredients: {},
      steps: {},
    }

    // POST a new recipe
    axios
      .post('/recipes', newRecipePayload)
      .then(() => {
        toast.success('New Recipe created')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="pb-5 border-b border-gray-200 sm:flex sm:items-center sm:justify-between">
      <h3 className="text-2xl leading-6 font-medium text-gray-900">
        {title === 'Recipe' ? title + 's' : title}
      </h3>
      <div className="mt-3 sm:mt-0 sm:ml-4">
        {/* <Link
          href={`/${title.toLowerCase().replace(/\s+/g, '-')}/new`}
          passHref
        > */}
        <button
          onClick={createRecipe}
          type="button"
          className="inline-flex place-self-end items-center px-3.5 py-2 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New {title}
        </button>
        {/* </Link> */}
      </div>
    </div>
  )
}
