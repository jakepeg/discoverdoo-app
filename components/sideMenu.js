import React, { useState } from 'react'
import { useRouter } from 'next/router'
import auth0 from '../services/auth0';
import { stack as Menu } from "react-burger-menu";

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '32px',
    height: '26px',
    right: '26px',
    top: '20px'
  },
  bmBurgerBars: {
    background: '#ffffff'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#ffffff'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '-0px',
  },
  bmMenu: {
    background: '#494949',
    padding: '',
    fontSize: '1.6em',
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '1em 0 0 0.8em',
  },
  bmItem: {
    display: 'block',
    padding: '0.2em 0',
    color: 'white',
    fontFamily: 'Paytone One',
    border: '0',
    outline: 'none'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0)',
  },
}

const SideMenu = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter()
  const home = () => {
    router.push('/')
    setMenuOpen(false)
  }
  const myActivities = () => {
    router.push('/my-activities')
    setMenuOpen(false)
  }
  const addActivity = () => {
    router.push('/create')
    setMenuOpen(false)
  }

  return (
    <>
      { auth0.isAuthenticated() === false &&
        <Menu className="burger" right styles={ styles } width={ '220px' } isOpen={ menuOpen }>
        <a href="/">Home</a>
        <a onClick={auth0.loginAddActivity}>Add activity</a>
        <a onClick={auth0.login}>Sign in</a>
        </Menu>
      }

      { auth0.isAuthenticated() &&
        <Menu className="burger" right styles={ styles } width={ '220px' } isOpen={ menuOpen }>
        <a onClick={home}>Home</a>
          <a onClick={myActivities}>My activities</a>
          <a onClick={addActivity}>Add activity</a>
          <a onClick={auth0.logout}>Logout</a>
        </Menu>
      }


    </>
  )
};

export default SideMenu;