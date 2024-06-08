import { useNavigate } from "react-router-dom";
import { AccessContext } from "../../components/AccessContext";
import { useContext } from "react";

function Questions() {
    const {isVC} = useContext(AccessContext)
    const navigate = useNavigate()
    const endpoint = "#"

    // Dummy data: to fetch from backend:
    const points = 5
    const questions = [
        "Tell me more about yourself.",
        "What services or products are you selling?",
        "What separates yourself from others?"
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        
        isVC
        ? navigate('/build')
        : navigate('/discover')
    }
    
    return (
        <div className="flex w-full h-full bg-[url('blob-discover.svg')] ">
            <div className="w-1/4 pl-10 pt-7">
                <img src="arrow.svg"/>
            </div>

            <div className="flex flex-col w-2/4 pt-10">
                <progress className="progress progress-secondary w-full h-4" value={points} max="10"></progress>
                
                <h1 className="py-10">
                     {questions[0]} 
                </h1>
 
                <form
                    onSubmit={handleSubmit}
                    method="post"
                    action={`${endpoint}`}
                    enctype="multipart/form-data"
                >
                    <textarea
                            name="answer"
                            rows={15}
                            className="textarea textarea-bordered w-full"
                            required
                    />
                    <div className="flex justify-end">
                        <button 
                            type="submit"
                            className="btn btn-active bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] text-white mt-20 w-1/6 ra"> Next
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Questions;