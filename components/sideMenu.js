import React from "react";
import Link from 'next/link'
import auth0 from '../services/auth0'
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
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '-0px'
  },
  bmMenu: {
    background: '#0b334d',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    border: '3px solid #cccccc'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0)'
  },

}

const SideMenu = () => {


  return (

    <>

{ auth0.isAuthenticated() &&
  <Menu className="burger" right styles={ styles }>

    <Link href="/">
      <a className="menu-item">Home</a>
    </Link>

    <Link href="/create">
      <a className="menu-item">Add activity</a>
    </Link>

    <Link href="/my-activities">
      <a className="menu-item">My activities</a>
    </Link>

    <a className="menu-item" onClick={auth0.logout}>Logout</a>

  </Menu>

  }




{ auth0.isAuthenticated() === false &&
<Menu className="burger" right styles={ styles }>
<a className="menu-item" href="/">Home</a>
<a className="menu-item" onClick={auth0.loginAddActivity}>Add activity</a>
<a className="menu-item" onClick={auth0.login}>Sign in</a>
<span>is not Authenticated</span>
</Menu>

  }


  <style jsx>{`

.menu-item {
  display: block;
}

`}</style>






</>
  )

};

export default SideMenu;