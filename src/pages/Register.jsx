import { useState } from "react";

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    );
};

function Register() {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [image, setImage] = useState("");
    const [password, setPassword] = useState({ 
        value: "", 
        isTouched: false, 
    }); 
    const [industry, setIndustry] = useState("");
    const [summary, setSummary] = useState("");

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
        setRole("role");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account created!");
        clearForm();
    };

    return (
        <>
            <h1>I'm a Startup </h1>
            <br/>
            
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="Field">
                        <label>Name</label>
                        <input
                            className="input input-bordered input-secondary w-full max-w-xs"   
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            placeholder="Name"
                        />
                    </div>
                    <div className="Field">
                        <label>Username</label>
                        <input
                            className="input input-bordered input-secondary w-full max-w-xs"
                            value={userName}
                            onChange={(e) => {
                                setUserName(e.target.value);
                            }}
                            placeholder="Username"
                        />
                    </div>
                    <div className="Field">
                        <label>Image</label>
                        <input
                            className="input input-bordered input-secondary w-full max-w-xs"
                            value={image}
                            onChange={(e) => {
                                setImage(e.target.value);
                            }}
                            placeholder="Image"
                        />
                    </div>
                    <div className="Field">
                        <label>Password</label>
                        <input
                            className="input input-bordered input-secondary w-full max-w-xs"
                            value={password.value}
                            type="password"
                            onChange={(e) => {
                                setPassword({ ...password, value: e.target.value });
                            }}
                            placeholder="Password"
                        />
                    </div>

                    <div className="Field">
                        <label> Industry </label>
                        <input
                            className="input input-bordered input-secondary w-full max-w-xs"
                            value={industry.value}
                            onChange={(e) => {
                                setIndustry(e.target.industry);
                            }}
                        />
                    </div>

                    <label className="form-control w-full max-w-xs">
                        <span className="label">
                            Summary
                        </span>
                        <textarea className="textarea textarea-secondary" placeholder="Bio"></textarea>
                    </label>


                    <button type="submit">
                        Sign Up
                    </button>

                </fieldset>
            </form>            
        </>
    );
}

export default Register; 
