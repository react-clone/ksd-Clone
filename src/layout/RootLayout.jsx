import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />


            {/* <main className="flex-grow"> */}
            <main className='container mx-auto flex-grow'>
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}

export default RootLayout
