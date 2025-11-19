import Cookies from "js-cookie";

const SESSION_COOKIE = "tdcx_session";

export function loginSession(username){
  // create a session cookie for this browser session (expires when browser closes)
  // js-cookie: set without expires will create a session cookie
  Cookies.set(SESSION_COOKIE, username);
}

export function logout(){
  Cookies.remove(SESSION_COOKIE);
  // don't forget to also clear any UI state if needed
}

export function isAuthenticated(){
  return !!Cookies.get(SESSION_COOKIE);
}
