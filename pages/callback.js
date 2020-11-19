import React from 'react'
import auth0Client from '../services/auth0'
import { withRouter } from 'next/router'
import Cookies from 'js-cookie'

class Callback extends React.Component {

  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.router.push(Cookies.get('returnURL'))
  }

  render() {
    return (
      <div className="contain">
      <h1 className="message">Welcome back!</h1>
      <style jsx>{`
        h1 {
          margin: 40px;
        }
      `}</style>
      </div>
    )
  }
}

export default withRouter(Callback)