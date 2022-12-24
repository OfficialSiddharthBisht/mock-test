import React from 'react'
import Header from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
function MainLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default MainLayout