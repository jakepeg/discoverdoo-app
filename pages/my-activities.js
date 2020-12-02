import React, { useState, useEffect } from 'react'
import ActivityList from '../components/activityList'
import { getMyActivities } from '../actions'
import auth0 from '../services/auth0'
import Cookies from 'js-cookie'
import Head from 'next/head'

const MyActivities = () => {

  const [activities, setActivities] = useState([]);

  useEffect(()=>{
    getMyActivities(Cookies.get('sub')).then(data => setActivities(data))
   },[])

  return (
    <>
      <Head>
        <title>DiscoverDoo - My activities</title>
        <meta name="title" content="DiscoverDoo fun finder" />
      </Head>
      <div className="contain home-page">
        { auth0.isAuthenticated() &&
      <>
          <div className="rowz">
          </div>
          <ActivityList 
          activities={activities}
          title="My"
          />
      </>
        }
        { auth0.isAuthenticated() === false &&
          <div className="rowz">
            <h2>You need to sign in to see your activities</h2>
          </div>
        }
      </div>
    <div>
    </div>
    </>
  )
}

export default MyActivities