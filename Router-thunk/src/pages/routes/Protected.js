import React from 'react'
import { Redirect, Route } from 'react-router-dom'
function Protected({ components: Component, checkToken, setToken, ...rest }) {
  return (
    <Route {...rest} render={(...props) => (
      checkToken !== null ?
        <Component {...props} setToken={setToken} />
        :
        <Redirect to={{ pathname: "/" }} />
    )} />
  )
}
export default Protected