import { Component } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards";

function Discover() {
    return (
        <div className="w-100 h-100 p-10 bg-[url('blob-discover.svg')]">
            <div className="font-bold">
                <h1><span className="bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] inline-block text-transparent bg-clip-text">Discover</span> Startups!</h1>
            </div>
            <div className="h-[80vh] flex justify-center items-center">
                <Cards spread="narrow">
                    <div className="h-[480px] w-[320px] pt-5 text-center bg-slate-500 text-white text-md rounded-[15px]">
                    First Card
                    </div>
                    <div className="h-[480px] w-[320px] pt-5 text-center bg-slate-500 text-white text-md rounded-[15px]">
                    Two Card
                    </div>
                    <div className="h-[480px] w-[320px] pt-5 text-center bg-slate-500 text-white text-md rounded-[15px]">
                    Third Card
                    </div>
                </Cards>
            </div>
            <div><Navbar /></div>
        </div>
    )
}

export default Discover;