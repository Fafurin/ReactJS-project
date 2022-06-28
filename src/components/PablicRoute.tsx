import React, {FC} from "react"
import {useSelector} from "react-redux";
import {selectAuth} from "../store/profile/selectors";
import {Navigate, Outlet} from "react-router-dom";

interface PublicRouteProps {
    component?: JSX.Element
}

export const PublicRoute: FC<PublicRouteProps> = ({component}) => {
    const isAuth = useSelector(selectAuth);

    if(isAuth){
        return <Navigate to='/' replace/>
    }
    return component ? component : <Outlet/>;
}