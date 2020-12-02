import auth0 from 'auth0-js'
import Cookies from 'js-cookie'
import { getUserFavourites } from '../actions'

const CLIENT_URL = process.env.CLIENT_URL;

class Auth0 {

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: 'jakepeg.eu.auth0.com',
      clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr',
      redirectUri: `${CLIENT_URL}/callback`,
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.login = this.login.bind(this);
    this.loginAddActivity = this.loginAddActivity.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          resolve();
        } else if (err) {
          reject(err);
        }
      });
    })
  }

  setSession(authResult) {
    // let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
    let date = new Date();
    let expiresAt = date.setDate(date.getDate() + 1);
    Cookies.set('user', authResult.idTokenPayload, { expires: 1 })
    Cookies.set('jwt', authResult.idToken, { expires: 1 })
    Cookies.set('expiresAt', expiresAt, { expires: 1 })
    Cookies.set('sub', authResult.idTokenPayload.sub, { expires: 1 })
    this.setFavesCookie()
  }

  // get user favourites from the db and set them in a cookie
  // can this be moved to the favourites component?
  setFavesCookie() {
    getUserFavourites(Cookies.get('sub')).then(data => Cookies.set('favourites', data[0].favourites, { expires: 1 }))
   }

  logout() {
    Cookies.remove('user')
    Cookies.remove('jwt')
    Cookies.remove('expiresAt')
    Cookies.remove('sub')
    Cookies.remove('returnURL')
    Cookies.remove('favourites')

    this.auth0.logout({
      returnTo: CLIENT_URL,
      clientID: '6w0luoKEKUH4QLOImluA81kNf3jLmWbr'
    })
  }

  login() {
    Cookies.set('returnURL', '/')
    this.auth0.authorize()
  }

  loginAddActivity() {
    Cookies.set('returnURL', '/create')
    this.auth0.authorize()
  }

  isAuthenticated() {
    const expiresAt = Cookies.get('expiresAt')
    return new Date().getTime() < expiresAt;
    }
}

const auth0Client = new Auth0();

export default auth0Client