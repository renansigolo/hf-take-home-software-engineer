import axios from 'axios'
import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Recipes from '../components/Recipes'
import SectionHeading from '../components/SectionHeading'
import SectionLayout from '../components/SectionLayout'
import Tabs from '../components/WeeklySelection'
import SignIn from './signin'

/** Set the default API URL to use when making requests with axios */
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hello Fresh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100">
        <Header />
        <main className="-mt-24 pb-8 min-h-full">
          {/* Recipes Section */}
          <SectionLayout
            title="recipes"
            heading={<SectionHeading title="Recipe" />}
            content={<Recipes />}
          />

          {/* Spacer */}
          <div className="relative py-10"></div>

          {/* Weekly Menu Section */}
          <SectionLayout
            title="weekly-menu"
            heading={<SectionHeading title="Weekly Menu" />}
            content={<Tabs />}
          />
        </main>
      </div>

      <Footer />
    </div>
  )
}
