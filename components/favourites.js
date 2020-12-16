import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import auth0 from '../services/auth0'
import { updateFavourites } from '../actions'
import Heart from './heart'
 
const Favourites = (props) => {
  const [isClick, setClick] = useState();
  const activityId = props.activityId
  let user = {favourites: [{}], user: ""}
  // let favourites = {}

  const setUser = () => {

    // setTimeout(() => {
      user = 
      {
        user: Cookies.get('sub'), 
        favourites: JSON.parse(Cookies.get('favourites').substring(1, Cookies.get('favourites').length-1))
      }
    // }, 1000);
console.log(user)
  }



  // if the user is authenticated and the cookies have been set
  if (auth0.hasFavourites()) {
    // do I need to refresh this to reflect the cookie after any upadates? shouldn't user use useState?
    setUser()
  }

  const clickHeart = () => {
    // if the user is logged in then allow them to add / remove favourites
    if (auth0.isAuthenticated()) {
      // update isClick state to what it wasn't before
      setClick(!isClick)
      // 
      user.favourites[activityId] = !isClick
      console.log(user.favourites[activityId])
      // update favourites in mongoDB
      updateFavourites(user)
      
      // auth0.setFavesCookie()
      Cookies.set('favourites', JSON.stringify([user.favourites]))
      console.log(user.favourites)
      // make sure what 
      setUser()
    } 
    // if the user is not logged in the show login popup
    else 
    {
      auth0.login()
    }
  }

  useEffect(() => {
    if (auth0.isAuthenticated()) {
      if (user.favourites[activityId] === true) {
        setClick(true)
      }
    }
    if (auth0.hasFavourites()) {
      // do I need to refresh this to reflect the cookie after any upadates? shouldn't user use useState?
      setUser()
    }
  }, [])

  return (
    <>
      <div className="heart">
        { auth0.isAuthenticated() &&
          <Heart isClick={isClick} onClick={() => clickHeart()} />
        }
        { auth0.isAuthenticated() === false &&
          <img src="https://res.cloudinary.com/jakepeg/image/upload/v1606743872/heart_ozpqja.png" className="heart-img" onClick={() => clickHeart()} alt="heart icon" />
        }
      </div>

      <style jsx>{`
        .heart {
          position: absolute;
          z-index: 10;
          margin-left: -25px;
          margin-top: -25px;
        } 

        .heart-img {
          cursor: pointer;
        }
      `}</style>
    </>
  );
}

export default Favourites