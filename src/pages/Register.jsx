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

    return (
        <div className="w-100 h-100 p-10 flex flex-row bg-[url('blob-discover.svg')] bg-contain">
            <div className="w-1/4 pl-10 pt-5">
                <img src="arrow.svg"/>
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
                                <label>Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="input input-bordered input-secondary w-full max-w-xs"
                                    placeholder="Username"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <div className="flex flex-col justify-center items-start ">
                                <label>Picture </label>
                                <input
                                    type="file"
                                    name="file"
                                    className="file-input file-input-bordered file-input-secondary w-full max-w-xs" 
                                    placeholder="Image"
                                    required
                                />
                            </div>

                            <div className="flex flex-col justify-center items-start">
                                <label>Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="input input-bordered input-secondary w-full max-w-xs"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                        </div>
                                            
                        <div className="flex flex-col justify-center items-start">
                            <label> Industry </label>
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
                            </select>

                            {/* <input
                                type="text"
                                name="industry"
                                className="input input-bordered input-secondary w-full max-w-xs"
                                placeholder="Industry"
                            /> */}
                        </div>

                        <div className="flex flex-col justify-center items-start ">
                            <label> Summary </label>
                            <input 
                                type="text"
                                name="summary"
                                className="h-[10em] w-full rounded-box input input-bordered input-secondary"
                                required    
                            />
                        </div>

                        <br/>

                        <button 
                            type="submit"
                            className="btn btn-active bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] text-white flex"> Sign Up 
                        </button>
                    </form>                          
                </div>                          
            </div>
        </div>

    );

    /* <div className="pl-[10vw]">
                <img src="arrow.svg"/>
            </div>
            {/* <div className="font-bold mb-10">
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
            
            <div className="w-full max-w-lg h-[80%] flex justify-center items-center">
                <form 
                    onSubmit={handleSubmit}
                    class="w-full max-w-lg" 
                    method="post"
                    action={`${endpoint}/api/v1/account/create/`}
                    enctype="multipart/form-data">
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" placeholder="Jane" />
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                            Username
                        </label>
                        <input 
                            type="text"
                            name="username"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" placeholder="Doe" />
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Password
                        </label>
                        <input 
                        name="password"
                        type="password"
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="******************" />
                        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Image
                        </label>
                        <input
                            type="file"
                            name="file"
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" placeholder="Jane" />
                        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                            Industry
                        </label>
                        <div class="relative">
                            <select 
                            disabled={isVC}
                            name="industry"
                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option value={"automotive"}>Automotive</option>
                            <option value={"healthcare"}>Healthcare</option>
                            <option value={"technology"}>Technology</option>
                            <option value={"food"}>Food</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap -mx-3 mb-10">
                        <div class="w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                            Summary
                        </label>
                        <input 
                        name="summary"
                        type="text"
                        class="appearance-none block h-20 w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="Summary of your company" />
                        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
                        </div>
                    </div>
                    <button 
                            type="submit"
                            className="btn btn-active bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] text-white"> Sign Up 
                        </button>
                    </form>
            </div> */

}

export default Register; 
