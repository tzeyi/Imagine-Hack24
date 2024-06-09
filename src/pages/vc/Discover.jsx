import { Component, useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import Card from "../../components/Card";
import { AccessContext } from "../../components/AccessContext";

import axios from "axios";

function Discover({server_endpoint}) {

    // const { baseURL } = useContext(AccessContext)

    const [startups, setStartups] = useState([])
    const [url, setUrl] = useState("/api/v1/startups/?username=ychengpoon")

    useEffect(() => {
        // window.sessionStorage.setItem("username", "ychengpoon")
        // window.localStorage.setItem("username", "ychengpoon")
        axios
            .get(
                server_endpoint + url,
                {
                    headers: {
                        "ngrok-skip-browser-warning": "69420",
                    }
                }
            )
            .then((response) => {
                console.log(response.data)
                return response.data
            })
            .then((data) => {
                console.log(data)
                setStartups([...startups, ...data["startups"]])
                setUrl(data["next"])
                console.log(startups)
                console.log(url)
            });

        // fetch(baseURL + '/', {
        //     method: "GET",
        //     mode: 'no-cors'
        // })
        //   .then((response) => {
        //     if (!response.ok) throw Error(response.statusText);
        //     console.log(response)
        //     console.log(response.json())
        //     // return response.json();
        //   })
        //   .then((data) => {
        //     setStartups([...startups, ...data.results]);
        //     console.log()
        //     setUrl(data.next);
        //   })
        //   .catch((error) => console.log(error));
    }, [])

    function renderStartups() {
        return (
  
            startups.map((comp) => (
                <Card 
                key={comp.name}
                name={comp.name}
                username={comp.username}
                filename={comp.filename}
                points={comp.points}
                industry={comp.industry}
                summary={comp.summary}
                server_endpoint={server_endpoint}
                />
            )   
        ))
    }

    return (
        <div className="w-100 h-100 p-10 bg-[url('blob-discover.svg')]">
            <div className="font-bold">
                <h1 className="text-black"><span className="bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] inline-block text-transparent bg-clip-text">Discover</span> Startups!</h1>
            </div>
            <div className="h-[75vh] flex justify-center items-center">
                <Cards spread="narrow" disable_fade_in={false}>
                    {
                        renderStartups()
                    }                    

                </Cards>
            </div>
            <div className="text-center w-100 flex justify-center"><Navbar /></div>
        </div>
    )
}

export default Discover;