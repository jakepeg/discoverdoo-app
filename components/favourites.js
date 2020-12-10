import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import auth0 from '../services/auth0'
import { updateFavourites } from '../actions'
import Heart from './heart'
 
const Favourites = (props) => {
  const [isClick, setClick] = useState(false);
  const activityId = props.activityId
  let user = {favourites: {}, user: ""}

  if (auth0.isAuthenticated()) {
    // do I need to refresh this to reflect the cookie after any upadates? shouldn't user use useState?
    user = 
    {
      user: Cookies.get('sub'), 
      favourites: JSON.parse(Cookies.get('favourites').substring(1, Cookies.get('favourites').length-1))
    }
    console.log(user)
  }

  const favourites = user.favourites

  const clickHeart = () => {
    if (auth0.isAuthenticated()) {
      setClick(!isClick)
      if (isClick === true) {
        favourites[activityId] = false
        updateFavourites(user)
        auth0.setFavesCookie()
        user = 
        {
          user: Cookies.get('sub'), 
          favourites: JSON.parse(Cookies.get('favourites').substring(1, Cookies.get('favourites').length-1))
        }
      }
      if (isClick === false) {
        // if (favourites[activityId] === false) {
        //   favourites[activityId] = true
        // } else {
        //   user.favourites[0].push({activityId: true});
        // }
        favourites[activityId] = true
        updateFavourites(user)
        auth0.setFavesCookie()
        user = 
        {
          user: Cookies.get('sub'), 
          favourites: JSON.parse(Cookies.get('favourites').substring(1, Cookies.get('favourites').length-1))
        }
      }
    } else {
      auth0.login()
    }
  }

  useEffect(() => {
    if (auth0.isAuthenticated()) {
      if (favourites[activityId] === true) {
        setClick(true)
      }
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