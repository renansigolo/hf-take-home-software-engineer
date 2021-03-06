import { BadgeCheckIcon } from '@heroicons/react/outline'
import Link from 'next/link'

/**
 * Markup for routes to be completed
 * @param {string} title
 * @returns
 */
export default function RouteTemplate({ title }) {
  return (
    <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <BadgeCheckIcon className="text-green-700 h-20" />
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                New {title} Route
              </h1>
              <p className="mt-1 text-base text-gray-500">
                This is a template to test the {title} page route
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link href="/">
                <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Go back home
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
