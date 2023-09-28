import React from 'react'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const MainLayout = ({ children }) => {

    const location = useLocation();
    const [showFooter, setShowFooter] = useState(true);

    useEffect(() => {
        if (location.pathname === "/Login") {
            setShowFooter(false)
        } else {
            setShowFooter(true)
        }
    }, [location])

    return (
        <div>
            {children}
            {showFooter && <Footer />}
        </div>
    )
}
export default MainLayout
