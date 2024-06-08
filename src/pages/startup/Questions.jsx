import { useNavigate } from "react-router-dom";
import { AccessContext } from "../../components/AccessContext";
import { useContext, useEffect, useState } from "react";

function Questions({ server_endpoint }) {
    const { isVC } = useContext(AccessContext)
    // const navigate = useNavigate()

    const [questions, setQuestions] = useState([])
    // const [questionId, setQuestionId] = useState()

    const [progress, setProgress] = useState(0)
    const max_progress = 5

    // start up question
    const start_up_questions = [
        "Tell me more about yourself.",
        "What services or products are you selling?",
        "What separates yourself from others?"
    ]

    // // vc question
    // const vc_questions = [
    //     "What is your budget?",
    //     "What product are you interested in?"
    // ]

    useEffect(() => {
        // Declare a boolean flag that we can use to cancel the API request.
        let ignoreStaleRequest = false;

        // Call REST API to get the post's information
        fetch(`${server_endpoint}/api/v1/questions/?size=${max_progress}&username=yanchengpoon`,
                { credentials: "same-origin",
                  headers: {"ngrok-skip-browser-warning": "69420"} 
                })
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);
                console.log(response)
                return response.json();
            })
            .then((data) => {
                console.log(data)
                // If ignoreStaleRequest was set to true, we want to ignore the results of the
                // the request. Otherwise, update the state to trigger a new render.
                if (!ignoreStaleRequest) {
                    setQuestions(data)
                    // setQuestionId(data[0].question_id)
                }
            })
            .catch((error) => console.log(error));

        return () => {
            // This is a cleanup function that runs whenever the Post component
            // unmounts or re-renders. If a Post is about to unmount or re-render, we
            // should avoid updating state.
            ignoreStaleRequest = true;
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)

        const answer = formData.get("answer")

        // Console.log
        for (var pair of formData.entries()) {
            console.log(pair[0] + ', ' + pair[1]);
        }

    }

    return (
        // <div className="flex w-full h-full bg-[url('blob-discover.svg')] ">
        <>
            <h1>
                hello world
                {questions}
            </h1>
        </>
    )

{/* 

            <div className="w-1/4 pl-10 pt-7">
                <img src="arrow.svg" />
            </div>

            <div className="flex flex-col w-2/4 pt-10">
                <progress className="progress progress-secondary w-full h-4" value={progress} max={max_progress}></progress>

                <h1 className="py-10">
                    {start_up_questions[0]}
                </h1>

                <form
                    // onSubmit={handleSubmit}
                    method="post"
                    // action={`${endpoint}`}
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
                            onSubmit={handleSubmit}
                            // type="submit"
                            className="btn btn-active bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] text-white mt-20 w-1/6 ra"> Next
                        </button>
                    </div>
                </form>

            </div> */}

        // </div>
    // )
}

export default Questions;