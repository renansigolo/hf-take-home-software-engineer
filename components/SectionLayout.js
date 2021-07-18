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
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
