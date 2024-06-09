import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AccessContext } from '../components/AccessContext'

import { motion } from 'framer-motion'

function Landing() {
    const { updateIsVC } = useContext(AccessContext)

    const navigate = useNavigate()

    function handleVC(e) {
        e.preventDefault()
        updateIsVC(true)
        navigate('/register')
    }
    
    function handleNotVC(e) {
        e.preventDefault()
        updateIsVC(false)
        navigate('/register')
    }

    return (
        <div className="flex flex-col w-auto lg:flex-row m-auto justify-center items-center h-100 ">
            <motion.div className="grid flex-grow h-[100vh] w-[100vw] card bg-slate-100 rounded-box rounded-l-[10%]
             justify-start items-end text-[28px]"
             onClick={handleNotVC}
             whileHover={{ scale: 0.9 }}
             >
                <h1 className='font-bold text-black text-left w-[50%]'>
                    I'm a Startup
                </h1>
            </motion.div>
            <motion.div className="
                grid flex-grow h-[100vh] w-[100vw] card bg-base-300 rounded-0
                bg-gradient-to-r from-[#C96FF4] to-[#FF35DF]
                justify-start items-end text-[28px]
                place-items-end"
                onClick={handleVC}
                whileHover={{ scale: 0.9 }}
                >
                <h1 className='font-bold text-white text-right w-[50%] flex m-3'>
                    I'm a Venture Capitalist
                </h1>
            </motion.div>
        </div>
    )
}

export default Landing;