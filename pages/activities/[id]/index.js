import { useRouter } from 'next/router'
import { getActivitiesByCategory } from '../../../actions'
import ActivityList from '../../../components/activityList'
import CategoryButtons from '../../../components/categoryButtons'
import Hero2 from '../../../components/hero2'

const CategoryPage = (props) => {
  const router = useRouter()
  const { id } = router.query
  const cat = id
  const { activities } = props

  return (
    <>
      <Hero2
        title={cat} 
      />
      <CategoryButtons />
      <div className="contain top-space">
         <ActivityList 
         activities={props.activities || []} 
         title={cat}  
         />
      </div>

      <style jsx>{`

    `}</style>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const activities = await getActivitiesByCategory(query.id)
  return {
    props: {activities}
  }
}

export default CategoryPage