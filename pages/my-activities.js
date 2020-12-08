import React, { useState, useEffect } from 'react'
import ActivityList from '../components/activityList'
import { getMyActivities } from '../actions'
import auth0 from '../services/auth0'
import Cookies from 'js-cookie'
import Head from 'next/head'

const MyActivities = () => {

  const [activities, setActivities] = useState([]);
  const [createMessage, setCreateMessage] = useState('hidden');

  useEffect(()=>{
    getMyActivities(Cookies.get('sub')).then(data => setActivities(data))
    if (Cookies.get('action') === 'create') {
      console.log('new activity')
      setCreateMessage('visible')
      Cookies.remove('action')
    }

  // if it exists show the new activity message - Your new listing will be reviewed before it is pulished on the main directory, it will appear within 24 hours. In the meantime you can view the listing here, on your My Activities page
  // remove the actions cookie
   },[])

  return (
    <>
      <Head>
        <title>DiscoverDoo - My activities</title>
        <meta name="title" content="DiscoverDoo fun finder" />
      </Head>
      <div className="contain home-page">
        <h3 className={createMessage}>Your new listing will be reviewed before it is published on the main directory, it will appear within 24 hours. In the meantime you can view the listing here, on your My Activities page</h3>
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




    <style jsx>{`

      .hidden {
        display: none;
      }

      .visible {
        display: inline-block;
        font-weight: 500;
        margin-top: 50px;
      }

      @media (max-width: 1130px) {

      }

      @media (max-width: 992px) {

      }

      @media (max-width: 768px) {

      }
    `}</style>









    </>
  )
}

export default MyActivities