import axios from 'axios'
import slugify from 'react-slugify'

const BASE_URL = process.env.BASE_URL;

export const CATEGORY_LIST = [
  {value: 'c-00', label: 'All activities'},
  {value: 'c-01', label: 'Academic'},
  {value: 'c-02', label: 'Art & Crafts'},
  {value: 'c-03', label: 'Cooking'},
  {value: 'c-04', label: 'Games'},
  {value: 'c-05', label: 'Performing Arts'},
  {value: 'c-07', label: 'Sport & Fitness'}
]

export const CATEGORY_INFO = [
  {title: 'Academic', icon: 'v1603379623/academic-2-icon_cmqy0e.svg', tagline: 'educational', image: 'c_lpad,h_442,q_auto:best,w_550/v1603978229/academic-2_ismvtb.png'},
  {title: 'Arty', icon: 'v1603354032/art-craft-icon_s1afxl.svg', tagline: 'art & craft', image: 'c_lpad,h_442,q_auto:best,w_550/v1604042890/arty-2_wtcf9u.png'},
  {title: 'Foody', icon: 'v1603354032/cooking-icon_jxqnqa.svg', tagline: 'cooking & baking', image: 'c_lpad,h_442,q_auto:best,w_550/v1603979286/foody_zunytj.png'},
  {title: 'Gamer', icon: 'v1603354032/games-icon_kxite2.svg', tagline: 'game & esports', image: 'c_lpad,h_442,q_auto:best,w_550/v1604043832/gamer_uuenjf.png'},
  {title: 'Performer', icon: 'v1603354032/performing-arts-icon_l36asc.svg', tagline: 'music & dance', image: 'c_lpad,h_442,q_auto:best,w_550/v1604044131/performer_yeffh5.png'},
  {title: 'Sporty', icon: 'v1603434546/sport-fitness-2-icon_whusrj.svg', tagline: 'sport & fitness', image: 'c_lpad,h_442,q_auto:best,w_550/v1604047598/sporty_xjku8t.png'}
]

export const CATEGORY_OPTIONS = [
  { value: 'Academic', label: 'Academic' },
  { value: 'Arty', label: 'Arty' },
  { value: 'Foody', label: 'Foody' },
  { value: 'Gamer', label: 'Gamer' },
  { value: 'Performer', label: 'Performer' },
  { value: 'Sporty', label: 'Sporty' }
]

export const MEDIUM_OPTIONS = [
  { value: 'Website', label: 'Website' },
  { value: 'Youtube', label: 'Youtube' },
  { value: 'App', label: 'App' },
  { value: 'Livestream', label: 'Livestream' },
  { value: 'Podcast', label: 'Podcast' }
]



export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_LIST)
      // reject('Cannot fetch category data')
    }, 20)
  })
}

export const getActivities = () => {
  return axios.get(`${BASE_URL}/api/v1/activities`).then(res => res.data)
}

export const createActivity = (activity) => {
  activity.id = slugify(activity.name)
  activity.promoted = false
  return axios.post(`${BASE_URL}/api/v1/activities`, activity)
  .then(res => res.data)
}

export const getActivityById = (id) => {
  return axios.get(`${BASE_URL}/api/v1/activities/${id}`).then(res => res.data)
}

export const getMyActivities = (uid) => {
  return axios.get(`${BASE_URL}/api/v1/myActivities/${uid}`).then(res => res.data)
}

export const getActivitiesByCategory = (cat) => {
  return axios.get(`${BASE_URL}/api/v1/activitiesByCategory/${cat}`).then(res => res.data)
}

export const updateActivity = (activity) => {
  activity.id = slugify(activity.name)
  return axios.patch(`${BASE_URL}/api/v1/activities/${activity._id}`, activity)
  .then(res => res.data)
}

export const updateFavourites = (user) => {
  console.log(user)
  return axios.patch(`${BASE_URL}/api/v1/favourites/${user.user}`, user)
  .then(res => res.data)
}

export const deleteActivity = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/activities/${id}`)
  // return axios.delete(`${BASE_URL}/api/v1/activities/${id}`).then(res => res.data)
}