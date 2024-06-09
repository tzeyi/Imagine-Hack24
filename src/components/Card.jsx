import { useContext, useEffect, useState } from "react"

import axios from "axios"
import { AccessContext } from "./AccessContext"

import { motion } from "framer-motion"

function Card({name, username, industry, filename, points, summary, server_endpoint}) {
    const { updateRequestList, updateLikedList } = useContext(AccessContext)
    const imageUrl = server_endpoint + "/api/v1/uploads/" + filename + '/'
    const imagePath = filename == "" ? 'replace-image.jpeg' : imageUrl
    const [liked, setLiked] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        if (!liked) {
            return
        }

        const url = server_endpoint + "/api/v1/request_startup_info/?username=ychengpoon&company=" + username

        updateLikedList({
            "company_name": name,
            "company_user": username
        })

        axios
            .post(
                url,
                {
                    headers: {
                        "ngrok-skip-browser-warning": "69420",
                    }
                }
            )
            .then((response) => {
                console.log(response.data)
                updateRequestList(username, response.data)
            })
            .then((data) => {
                console.log(data)
                console.log()
            })
            .catch((error) => {
                console.error(error)
            });
    }


    return (

        <div className={`h-[540px] w-[420px] pt-5 text-center text-white text-md rounded-[15px] bg-slate-50 
        overflow-hidden
        `}>
            <img src={imagePath} alt="company image" 
            className="scale-[180%] mt-20 bg-cover"
            />
            <div className="bg-gradient-to-t from-slate-900 
            w-[100%] h-[100%] absolute z-10 bottom-[-5px] rounded-b-[3%]
            flex items-end
            ">
                    <div className=" swap-off relative flex flex-col items-start  bottom-[15%] left-[10%] gap-3">
                        <h2 className="z-60 font-bold text-4xl text-nowrap">
                        {name}
                        </h2>     
                        <div className="z-60 font-bold">
                        {industry}
                        </div>     
                        <div className="z-60 font-bold inline-block text-left">
                        🔥 {points}
                        </div>     
                        <div className="font-bold w-100 text-left">
                            {summary}
                        </div> 
                    </div>
            <form 
                className="w-full max-w-lg"
                onSubmit={handleSubmit}

            >
                <input type="hidden" value="company_user" name="username" />
                <motion.button 
                className='absolute top-[85%] right-[10%] m-0 p-0 bg-transparent hover:border-0 z-100'
                    onClick={() => setLiked(!liked)}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.8}}
                >
                    <img src='heart-icon.png' width={50} height={50} className={`${liked ? "grayscale-0" : "[&:not(:hover)]:grayscale"}`} />
                </motion.button>
            </form>
            </div>
            {/* <img src='replace-image.png'  alt="icons" /> */}
        </div>
    )
}

export default Card