import Link from 'next/link'
import auth0 from '../services/auth0'
import SideMenu from './sideMenu'

const Login = () => {
  return (
    // <button type="button" onClick={auth0.login}>Login</button>
    <span className="nav-link" onClick={auth0.login}>SIGN IN</span>
  )
}

const LoginAddActivity = () => {
  return (
    // <button type="button" className="cta" onClick={auth0.loginAddActivity}>Add activity</button>
    <span className="nav-link" onClick={auth0.loginAddActivity}>ADD ACTIVITY</span>
  )
}

const Logout = () => {
  return (
    // <button type="button" onClick={auth0.logout}>Logout</button>
    <span className="nav-link loggedin" onClick={auth0.logout}>LOGOUT</span>
  )
}

const Nav = () => {

  return (
    <>
      <header>
        <Link href="/">
          <a><img id="logo" src="/logo.svg" alt="DooZone logo" /></a>
        </Link>
        <div id="menu">
          { auth0.isAuthenticated() &&
          <>
            <Link href="/create">
              <span className="nav-link loggedin">ADD ACTIVITY</span>
            </Link>
            <Link href="/my-activities">
              <span className="nav-link loggedin">MY ACTIVITIES</span>
            </Link>
            <Logout />
            <SideMenu />
          </>
          }

          { auth0.isAuthenticated() === false &&
          <>
            <LoginAddActivity />
            <Login />
          </>
          }
        </div>
      </header>
      <style jsx>{`
        header {
          display: flex;
          padding: 15px 10px 15px 10px;
          margin-bottom: 20px;
          background-color: #0097A7;
        }

        #logo {
          width: 70px;
        }

        .country {
          color: #ffffff;
          margin-top: 12px;
        }

        .tagline {
          color: #ffffff;
          margin-top: 6px;
          font-size: 1.4rem;
        }

        #menu {
          margin-left: auto;
          margin-top: 5px;
          margin-right: 13px;
        }
      `}</style>
    </>
  )
}

export default Nav