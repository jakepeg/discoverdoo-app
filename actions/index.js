import axios from 'axios'
import slugify from 'react-slugify';

const BASE_URL = process.env.BASE_URL;
// const BASE_URL = 'http://localhost:3000'
// const BASE_URL = 'https://www.discoverdoo.com'
// const ACTIVITY_DATA = []
// const CATEGORY_DATA = [
//   {id: 'c-00', name: 'All Activities'},
//   {id: 'c-12', name: 'Accademic'},
//   {id: 'c-01', name: 'Adventure Sports'},
//   {id: 'c-02', name: 'Attractions'},
//   {id: 'c-03', name: 'Art, Crafts and Cooking'},
//   {id: 'c-04', name: 'Birthday Parties'},
//   {id: 'c-05', name: 'Events'},
//   {id: 'c-06', name: 'Holiday Camps'},
//   {id: 'c-07', name: 'Parks and Skate Parks'},
//   {id: 'c-08', name: 'Performing Arts'},
//   {id: 'c-09', name: 'Play Centres'},
//   {id: 'c-10', name: 'Sport and Games'}, 
//   {id: 'c-11', name: 'Theme Parks and Water Parks'}
// ]

// export const CATEGORY_LIST = [
//   {value: 'c-00', label: 'All Activities'},
//   {value: 'c-12', label: 'Accademic'},
//   {value: 'c-01', label: 'Adventure Sports'},
//   {value: 'c-02', label: 'Art, Crafts and Cooking'},
//   {value: 'c-03', label: 'Attractions'},
//   {value: 'c-04', label: 'Birthday Parties'},
//   {value: 'c-05', label: 'Events'},
//   {value: 'c-06', label: 'Holiday Camps'},
//   {value: 'c-07', label: 'Parks and Skate Parks'},
//   {value: 'c-08', label: 'Performing Arts'},
//   {value: 'c-09', label: 'Play Centres'},
//   {value: 'c-10', label: 'Sport and Games'}, 
//   {value: 'c-11', label: 'Theme Parks and Water Parks'}
// ]

export const CATEGORY_LIST = [
  {value: 'c-00', label: 'All activities'},
  {value: 'c-01', label: 'Academic'},
  {value: 'c-02', label: 'Art & Crafts'},
  {value: 'c-03', label: 'Cooking'},
  {value: 'c-04', label: 'Games'},
  {value: 'c-05', label: 'Performing Arts'},
  // {value: 'c-06', label: 'Outdoor'},
  {value: 'c-07', label: 'Sport & Fitness'}
]

export const CATEGORY_INFO = [
  {title: 'Academic', icon: 'v1603379623/academic-2-icon_cmqy0e.svg', tagline: 'academic and cultural', image: 'c_lpad,h_442,q_auto:best,w_550/v1603978229/academic-2_ismvtb.png'},
  {title: 'Arty', icon: 'v1603354032/art-craft-icon_s1afxl.svg', tagline: 'art and craft', image: 'c_lpad,h_442,q_auto:best,w_550/v1604042890/arty-2_wtcf9u.png'},
  {title: 'Foody', icon: 'v1603354032/cooking-icon_jxqnqa.svg', tagline: 'cooking and baking', image: 'c_lpad,h_442,q_auto:best,w_550/v1603979286/foody_zunytj.png'},
  {title: 'Gamer', icon: 'v1603354032/games-icon_kxite2.svg', tagline: 'game and esports', image: 'c_lpad,h_442,q_auto:best,w_550/v1604043832/gamer_uuenjf.png'},
  {title: 'Performer', icon: 'v1603354032/performing-arts-icon_l36asc.svg', tagline: 'music and dance', image: 'c_lpad,h_442,q_auto:best,w_550/v1604044131/performer_yeffh5.png'},
  {title: 'Sporty', icon: 'v1603434546/sport-fitness-2-icon_whusrj.svg', tagline: 'sport and fitness', image: 'c_lpad,h_442,q_auto:best,w_550/v1604047598/sporty_xjku8t.png'}
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
  // console.log(`${BASE_URL}/api/v1/activities`)
  return axios.get(`${BASE_URL}/api/v1/activities`).then(res => res.data)
}

export const createActivity = (activity) => {
  activity.id = slugify(activity.name)
  activity.promoted = false
  return axios.post(`${BASE_URL}/api/v1/activities`, activity)
  .then(res => res.data)
}

export const getActivityById = (id) => {
  // console.log(id)
  return axios.get(`${BASE_URL}/api/v1/activities/${id}`).then(res => res.data)
}

export const getActivitiesByCategory = (cat) => {
  console.log(cat)
  return axios.get(`${BASE_URL}/api/v1/activitiesByCategory/${cat}`).then(res => res.data)
}

export const updateActivity = (activity) => {
  //console.log(activity._id)
  activity.id = slugify(activity.name)
  return axios.patch(`${BASE_URL}/api/v1/activities/${activity._id}`, activity)
  .then(res => res.data)
}

export const deleteActivity = (id) => {
  return axios.delete(`${BASE_URL}/api/v1/activities/${id}`)
  // return axios.delete(`${BASE_URL}/api/v1/activities/${id}`).then(res => res.data)
}