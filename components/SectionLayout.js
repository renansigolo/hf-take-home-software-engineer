import Recipes from './Recipes'

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

export default function SectionLayout(props) {
  return (
    <div
      id={props.title}
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h1 className="sr-only">{props.title} Section</h1>
      <div className="grid grid-cols-1 gap-4 items-start lg:gap-8">
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <section aria-labelledby="recipes-section">
            <div className="rounded-lg bg-white overflow-hidden shadow p-6">
              {props.heading}

              {props.content}

              <Pagination />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
