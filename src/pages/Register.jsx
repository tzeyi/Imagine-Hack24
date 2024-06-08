import { useContext, useState } from "react";
import { AccessContext } from "../components/AccessContext";

function Register() {
    const {isVC} = useContext(AccessContext)

    const endpoint = "https://6b38-103-145-154-250.ngrok-free.app/"

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${name}, ${userName}, ${image}`);
        clearForm();
    };


    return (
        <div className="flex flex-row w-[100vw] h-[100vh] pt-[5vh] bg-[url('blob-discover.svg')]">
            <div className="pl-[10vw]">
                <img src="arrow.svg"/>
            </div>

            <div>
                <div>
                    {{isVC} 
                    ? <h1>I'm a Startup. </h1>
                    : <h1> I'm a Venture Capitalist. </h1>
                    }
                </div>
                
                <form
                    method="post"
                    action={`${endpoint}/api/v1/account/create/`}
                    enctype="multipart/form-data"
                >

                    <input type="hidden" name="type" value={isVC} required/>

                    <div className="Field">
                        <label> Name</label>
                        <input
                            type="text"
                            name="name"
                            className="input input-bordered input-secondary w-full max-w-xs"   
                            placeholder="Name"
                            required
                        />
                    </div>
                    <div className="Field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            className="input input-bordered input-secondary w-full max-w-xs"
                            placeholder="Username"
                        />
                    </div>
                    <div className="Field">
                        <label>Image</label>
                        <input
                            type="file"
                            name="file"
                            className="file-input file-input-bordered file-input-secondary w-full max-w-xs" 
                            placeholder="Image"
                        />
                    </div>
                    <div className="Field">
                        <label>Password</label>
                        <input
                            name="password"
                            className="input input-bordered input-secondary w-full max-w-xs"
                            type="password"
                            placeholder="Password"
                        />
                    </div>

                    <div className="Field">
                        <label> Industry </label>
                        <input
                            type="text"
                            name="industry"
                            className="input input-bordered input-secondary w-full max-w-xs"
                            placeholder="Industry"
                        />
                    </div>

                    
                    <label> Summary <label/>
                        <input 
                            type="text"
                            name="summary"
                            placeholder="Summary"
                        />
                    </label>


                    <br/>
                        <button 
                            type="submit"
                            className="btn btn-active bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] text-white"> Sign Up 
                        </button>
                </form>                          
            </div>
       
        </div>
    );
}

export default Register; 
