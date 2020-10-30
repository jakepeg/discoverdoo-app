import React, { useState } from 'react'
import Head from 'next/head'
import Hero from '../components/hero'
import Filter from '../components/filter'
import ActivityList from '../components/activityList'
import { getActivities, getCategories } from '../actions'
import CategoryButtons from '../components/categoryButtons'

const Home = (props) => {

  const [ filter, setFilter ] = useState('All activities')

  const changeCategory = category => {
    setFilter(category)
  }

  const filterActivities = activities => {
    if (filter === 'All activities') {
      return activities
    }
    return activities.filter((a) => {
      console.log(filter)
      return a.category && a.category.includes(filter)
    })
  }

  return (
    <>
      <Head>
        <title>DiscoverDoo fun finder</title>
        <meta name="title" content="DiscoverDoo fun finder" />
      </Head>
      <Hero />
      <CategoryButtons />
      <div className="contain home-page">
        <div className="rowz">
            {/* <Filter 
              changeCategory={changeCategory}
              activeCategory={filter}
              categories={props.categories}
            /> */}
        </div>
        <ActivityList 
        activities={filterActivities(props.activities) || []} 
        title="Top Picks"
        />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const activities = await getActivities()
  const categories = await getCategories()
  console.log("SSG (I think!)")
  return {
    props: {activities, categories}
  }
}

// export async function getServerSideProps() {
//   const activities = await getActivities()
//   const categories = await getCategories()
//   console.log("SSR (I think!)")
//   return {
//     props: {activities, categories}
//   }
// }

export default Home
