import Create from '../components/create'
import auth0 from '../services/auth0'
import Head from 'next/head'

const CreatePage = () => (
  <>
    <Head>
      <title>DiscoverDoo - Add an activity</title>
      <meta name="title" content="DiscoverDoo fun finder" />
    </Head>
    <div className="contain">
    { auth0.isAuthenticated() &&
      <Create />
    }
    { auth0.isAuthenticated() === false &&
      <h1 className="message">Please sign in to add activities</h1>
    }
    </div>
  </>
)

export default CreatePage