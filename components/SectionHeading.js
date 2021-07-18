import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/outline'

export default function SectionHeading({ title }) {
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
