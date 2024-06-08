import { useContext, useState } from "react";
import { AccessContext } from "../components/AccessContext";
import { useNavigate } from "react-router-dom";

function Register( {server_endpoint} ) {
    const {isVC} = useContext(AccessContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/questions')
    };

    const handleBackArrow = (e) => {
        navigate('/')
    }

    return (
        <div className="w-100 h-100 p-10 flex flex-row bg-[url('blob-discover.svg')] bg-contain">
            <div className="w-1/4 pl-10 pt-5">
                <img src="arrow.svg"
                    onClick={handleBackArrow}/>
            </div>

            <div className ="w-2/4 pt-5">
                <div className="font-bold mb-10">
                    <h1>
                        I'm a&nbsp;
                        <span className="bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] inline-block text-transparent bg-clip-text">
                            {isVC
                            ? <>Venture Capitalist.</>
                            : <>Startup.</>
                            }
                        </span>
                    </h1>   
                </div>

                <div className="w-full flex justify-center">
                    <form
                        method="post"
                        action={`${server_endpoint}/api/v1/account/create/`}
                        enctype="multipart/form-data"
                        className="w-full max-w-lg"
                        onSubmit={handleSubmit}
                    >   

                        <input type="hidden" name="type" value={isVC} required/>

                        <div className="flex justify-between">
                            <div className="flex flex-col justify-center items-start">
                                <label className="text-black item-left">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="input input-bordered input-secondary w-full max-w-xs"   
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="flex flex-col justify-center items-start">
                                <label className="font-bold" >Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="input input-bordered input-secondary w-full max-w-xs"
                                    placeholder="Username"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex justify-between pt-8">
                            <div className="flex flex-col justify-center items-start ">
                                <label className="font-bold">Picture </label>
                                <input
                                    type="file"
                                    name="file"
                                    className="file-input file-input-bordered file-input-secondary w-full max-w-xs" 
                                    placeholder="Image"
                                    required
                                />
                            </div>
                                       
                            <div className="flex flex-col justify-center items-start">
                                <label className="font-bold"> Industry </label>
                                <select 
                                    disabled={isVC}
                                    name="industry"
                                    className="select select-secondary w-full max-w-xs"
                                    required
                                >
                                    <option value={"automotive"}>Automotive</option>
                                    <option value={"healthcare"}>Healthcare</option>
                                    <option value={"technology"}>Technology</option>
                                    <option value={"food"}>Food</option>
                                    <option value={"financial"}>Financial</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-start pt-7">
                            <label className="font-bold">Password</label>
                            <input
                                name="password"
                                type="password"
                                className="input input-bordered input-secondary w-full max-w-xs"
                                placeholder="Password"
                                required
                            />
                        </div>

                        <div className="flex flex-col justify-center items-start pt-7">
                            <label className="font-bold"> Summary </label>
                            <input 
                                type="text"
                                name="summary"
                                className="h-[10em] w-full rounded-box input input-bordered input-secondary"
                                required    
                            />
                        </div>

                        <br/>

                        <div className="flex justify-end pt-10">
                            <button 
                                type="submit"
                                className="btn btn-active bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] text-white font-bold"> Sign Up 
                            </button>
                        </div>
                    </form>                          
                </div>                          
            </div>
        </div>

    );
}

export default Register; 
