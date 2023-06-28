import React from 'react'
import { Route, Navigate} from 'react-router-dom'
function ProtectedRout({auth, element: Component, ...rest}) {
  return (
    <div>
        <Route {...rest} render={(props)=>{
            if(auth) return <Component {...props} />
            if(!auth) return <Navigate to={{path : '/', state : {from: props.location}}} />
        }} />
    </div>
  )
}

export default ProtectedRout