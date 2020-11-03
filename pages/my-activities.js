import ActivityList from '../components/activityList'
import { getActivities } from '../actions'
import auth0 from '../services/auth0'
import Cookies from 'js-cookie'
import Head from 'next/head'

const MyActivities = (props) => {

  const filterActivities = activities => {
    return activities.filter((a) => {
      return a.userId && a.userId.includes(Cookies.get('sub'))
    })
  }

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
          activities={filterActivities(props.activities) || []}
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
    </>
  )
}

MyActivities.getInitialProps = async () => {
    const activities = await getActivities()
    return {
      activities
    }
  }

export default MyActivities
