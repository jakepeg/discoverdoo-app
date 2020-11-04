import Link from 'next/link'
import auth0 from '../services/auth0'
import SideMenu from './sideMenu'

const Login = () => {
  return (
    <span className="nav-link" onClick={auth0.login}>SIGN IN</span>
  )
}

const LoginAddActivity = () => {
  return (
    <span className="nav-link" onClick={auth0.loginAddActivity}>ADD ACTIVITY</span>
  )
}

const Logout = () => {
  return (
    <span className="nav-link" onClick={auth0.logout}>LOGOUT</span>
  )
}

const AddActivity = () => {
  return (
    <Link href="/create">
      <span className="nav-link">ADD ACTIVITY</span>
    </Link>
  )
}

const MyActivities = () => {
  return (
    <Link href="/my-activities">
      <span className="nav-link">MY ACTIVITIES</span>
    </Link>
  )
}

const Nav = () => {

  return (
    <header className="header">
      <div className="main-header contain">
        <Link href="/">
        <a className="logo-group">
        <img src="/logo.svg" className="logo-img" alt="doo logo" />
        <h1 className="logo-type">discoverdoo</h1>
        </a>
      </Link>

      <div className="menu">
          { auth0.isAuthenticated() &&
          <>
          <div className="loggedin top-menu">
            <AddActivity />
            <MyActivities />
            <Logout />
          </div>
          <SideMenu />
          </>
          }
          { auth0.isAuthenticated() === false &&
          <>
            <span className="top-menu">
              <LoginAddActivity />
              <Login />
            </span>
            <SideMenu />
          </>
          }
        </div>
      </div>
      <style jsx>{`

        header {
          background-color: #0b334d;
        }

        .main-header {
          display: flex;
          justify-content: space-between;
          padding-top: 15px;
          padding-bottom: 20px;
        }

        .menu {
          display: flex;
          justify-content: flex-end;
          width: 450px;
          margin-top: 4px;
        }

        .logo-group {
          display: flex;
          text-decoration: none;
          margin-top: 0px;
          margin-left: -5px;
        }

        .logo-img {
          margin-top: 4px;
          width: 60px;
          height: 35px;
        }

        .logo-type {
          color: white;
          font-size: 1.1rem;
          font-weight: 400;
          margin-top: 12px;
          font-family: sans-serif;
          letter-spacing: 1px;
        }
      `}</style>
    </header>
  )
}

export default Nav