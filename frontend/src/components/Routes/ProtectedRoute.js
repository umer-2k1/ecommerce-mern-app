import React from 'react'
// import { useSelector} from "react-redux";
import { Outlet,Navigate} from "react-router-dom";
// import Loader from '../../layout/Loader';
const ProtectedRoute = ({isAuthenticate}) => {
    
//   const {isAuthenticate, newUser, loading} = useSelector((state)=> state.user)

//   return (

if (!isAuthenticate) {
    return <Navigate to={'/auth/loginUser'} />
}
return (

    // children ? children: <Outlet/>
    <Outlet/>
)


}

export default ProtectedRoute
