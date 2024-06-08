import { Component, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";
import Card from "../../components/Card";
import { AccessContext } from "../../components/AccessContext";

function Discover() {

    // const { baseURL } = useContext(AccessContext)

    const baseURL = 'https://6b38-103-145-154-250.ngrok-free.app'

    const [startups, setStartups] = useState([])
    const [url, setUrl] = useState("/api/v1/questions/")

    const fetchMoreData = () =>
        fetch(baseURL + url, {method: "GET"})
          .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            console.log(response)
            // return response.json();
          })
          .then((data) => {
            setStartups([...startups, ...data.results]);
            console.log()
            setUrl(data.next);
          })
          .catch((error) => console.log(error));

    useEffect(() => {
        fetchMoreData();
    }, [])

    return (
        <div className="w-100 h-100 p-10 bg-[url('blob-discover.svg')]">
            <div className="font-bold">
                <h1 className="text-black"><span className="bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] inline-block text-transparent bg-clip-text">Discover</span> Startups!</h1>
            </div>
            <div className="h-[75vh] flex justify-center items-center">
                <Cards spread="narrow" disable_fade_in={true}>
                    <Card />
                    <Card />
                    <Card />
                </Cards>
            </div>
            <div className="text-center w-100 flex justify-center"><Navbar /></div>
        </div>
    )
}

export default Discover;