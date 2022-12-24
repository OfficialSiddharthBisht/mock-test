import React from 'react'
import { Outlet } from 'react-router-dom';

function AuthMainLayout() {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default AuthMainLayout