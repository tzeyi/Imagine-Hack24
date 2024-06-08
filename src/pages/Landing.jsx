import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AccessContext } from '../components/AccessContext'

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
        navigate('/register')
    }

    return (
        <div className="flex flex-col w-[90vw] lg:flex-row margin-auto">
            <div className="grid flex-grow h-[860px] w-[100vw] card bg-base-300 rounded-box rounded-l-[10%]
             justify-start items-end text-[28px] border-y-2 border-l-2 border-black"
             onClick={handleNotVC}
             >
                <h1 className='font-bold text-black text-left w-[50%]'>
                    I'm a Startup
                </h1>
            </div>
            <div className="
                grid flex-grow h-[860px] w-[100vw] card bg-base-300
                rounded-r-[10%] place-items-center 
                bg-gradient-to-r from-[#C96FF4] to-[#FF35DF]
                justify-start items-end text-[28px]
                border-y-2 border-r-2 border-black"
                onClick={handleVC}
                >
                <h1 className='font-bold text-white text-right w-[50%] flex'>
                    I'm a Venture Capitalist
                </h1>
            </div>
        </div>
    )
}

export default Landing;