import React from 'react'
import auth0Client from '../services/auth0'
import { withRouter } from 'next/router'
import Cookies from 'js-cookie'

class Callback extends React.Component {

  async componentDidMount() {
    await auth0Client.handleAuthentication();
    // this.props.router.push(Cookies.get('returnURL'))
    console.log(Cookies.get('returnURL'))
    this.props.router.push(Cookies.get('returnURL'))
  }

  render() {
    return (
      <>
      <h1>Welcome back!</h1>

      <style jsx>{`


        h1 {
          margin: 40px;
        }

      `}</style>
    


      </>
    )
  }
}

export default withRouter(Callback)