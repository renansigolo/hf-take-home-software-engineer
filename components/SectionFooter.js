export default function SectionFooter({ results }) {
  return (
    <nav
      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-16"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{results}</span> results
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Load More
        </a>
      </div>
    </nav>
  )
}
