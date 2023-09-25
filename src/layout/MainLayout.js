import React from 'react'
import Footer from '../components/Footer'
// import Navigation from '../components/FirstNavbar'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const MainLayout = ({ children }) => {

    const location = useLocation();
    const [showFooter, setShowFooter] = useState(true);

    useEffect(() => {
        console.log("location is :", location)
        if (location.pathname === "/Login") {
            setShowFooter(false)
        } else {
            setShowFooter(true)
        }
    }, [location])
    return (
        <div>
            {/* <Navigation /> */}
            {children}
            {showFooter && <Footer />}
        </div>
    )
}
export default MainLayout
