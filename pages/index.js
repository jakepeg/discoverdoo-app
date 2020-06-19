import React, { useState } from 'react'
import Head from 'next/head'
import Filter from '../components/filter'
import ActivityList from '../components/activityList'
import { getActivities, getCategories } from '../actions'

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
      </Head>
      <div className="contain home-page">
        <div className="rowz">
            <Filter 
              changeCategory={changeCategory}
              activeCategory={filter}
              categories={props.categories}
            />
        </div>
        <ActivityList activities={filterActivities(props.activities) || []} />
      </div>
    </>
  )
}

  Home.getInitialProps = async () => {
    const activities = await getActivities()
    const categories = await getCategories()
    return {
      activities,
      categories
    }
  }

export default Home
