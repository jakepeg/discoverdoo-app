import { useRouter } from 'next/router'
import { getActivityById, deleteActivity } from '../../../actions'
import Link from 'next/link'
import Head from 'next/head'
import auth0 from '../../../services/auth0'

const DetailPage = (props) => {
  const router = useRouter()
  const { id } = router.query
  const { activity } = props

  const handleDelete = (id) => {
    deleteActivity(id).then(() => {
      router.push('/my-activities')
    })
  }

  return (
    <>
      <Head>
        <title>{`${activity.name} - DiscoverDoo`}</title>
        <meta name="title" content={`${activity.name} - DiscoverDoo fun finder`} />
      </Head>
      <div className="contain top-space">
        <div className="details-card">
          <div className="card-header">
            


            <a id="back-btn" onClick={() => router.back()}>
              <img id="arrow-left" src="/arrow-left.svg" alt="Go Back" /> 
              <span className="back">BACK</span>
            </a>



          </div>

          <div className="card-content">

            <div className="info-section">
              <h1>{activity.name}</h1>
              <p className="description">{ activity.description }</p>

              {activity.ageFrom.length > 0 &&
                <span>

                  <p className="info">
                  <img className="map-icon" align="top" src="/child.svg" alt="Child icon" />
                  Ages { activity.ageFrom } - { activity.ageTo }
                  </p>
                </span>
              }

              <p className="info">
              <img className="map-icon" align="top" src="/tags.svg" alt="Tags icon" />
              { activity.category }
              </p>

              {activity.price.length > 0 &&
                <span>
                  <p className="info">
                  <img className="map-icon" align="top" src="/piggy.svg" alt="Piggybank" />
                  { activity.price }
                  </p>
                </span>
              }

              {/* <p className="info">
              <img className="map-icon" src="/share.svg" alt="Share" />
              Share with friends
              </p>

              <p className="info">
              <img className="map-icon" src="/favorite.svg" alt="Add to favorites" />
              Add to favorites
              </p> */}

              {activity.website.length > 0 &&
                <span>
                  <p className="info">
                  <a href={'http://' + activity.website} target="_blank">
                  <img className="map-icon" align="top" src="/eye.svg" alt="Eye" />
                  { activity.medium }
                  </a></p>
                </span>
              }

            </div>
            <img className="image-section" src={`https://res.cloudinary.com/jakepeg/image/upload/f_auto/v1593005651/${activity.image}`} alt={activity.name} />
          
          </div>
          {/* {activity.userId === Cookies.get('sub') && */}
          { auth0.isAuthenticated() &&
              <>
                <button className="delete-button" onClick={() => handleDelete(activity._id)} href="#" role="button">Delete</button>
                <Link href="/activity/[id]/edit" as={`/activity/${id}/edit`}>
                  <button className="edit-button" role="button">Edit</button>
                </Link>
              </>
            }
        </div>
      </div>
    </>
  )
}

// DetailPage.getInitialProps = async ({ query }) => {
//   const activity = await getActivityById(query.id)
//   return { activity }
// }

export async function getServerSideProps({ query }) {
  const activity = await getActivityById(query.id)
  console.log("SSR (I think!)")
  return {
    props: {activity}
  }
}



export default DetailPage