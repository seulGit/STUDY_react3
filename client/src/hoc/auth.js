import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { auth } from '../_actions/user_action'
import { useNavigate } from 'react-router-dom';

export default function (SpecificComponent, option, adminRoute = null) {

    function AuthenticationCheck() {

        const dispatch = useDispatch();

        const navigate = useNavigate();

        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response)

                //로그인하지않은 상태
                if (!response.payload.isAuth){
                    if(option) {
                        navigate('/login')
                    }
                } else {
                    //로그인한 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        navigate('/')
                    } else {
                        if(option === false)
                        navigate('/')
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent />
        )
    }

    return <AuthenticationCheck />
}