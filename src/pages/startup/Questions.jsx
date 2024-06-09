import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AccessContext } from "../../components/AccessContext";

function Questions({ server_endpoint }) {
    const [questions, setQuestions] = useState([])
    const [questionId, setQuestionId] = useState()
    const [progress, setProgress] = useState(0)
    const [loading, setLoading] = useState(false)

    const {isVC} = useContext(AccessContext)
    const navigate = useNavigate()

    const max_progress = 5

    // Data to post to back end
    const results = []

    useEffect(() => {
        // Declare a boolean flag that we can use to cancel the API request.
        let ignoreStaleRequest = false;

        // Call REST API to get the post's information
        fetch(`${server_endpoint}/api/v1/questions/?size=${max_progress}&username=ychengpoon`,
            {
                credentials: "same-origin",
                mode: "cors",
            })
            .then((response) => {
                if (!response.ok) throw Error(response.statusText);
                return response.json();
            })
            .then((data) => {
                // If ignoreStaleRequest was set to true, we want to ignore the results of the
                // the request. Otherwise, update the state to trigger a new render.
                if (!ignoreStaleRequest) {
                    let data_questions = []
                    let data_questions_id = []

                    data.questions.forEach(question => {
                        data_questions_id.push(question.question_id)
                        data_questions.push(question.text)
                    })

                    setQuestionId(data_questions_id)
                    setQuestions(data_questions)
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
        results.push({
            "question_id": questionId[progress],
            "answer": answer
        })

        setProgress(progress + 1)

        if (progress == max_progress - 1) {
            fetch(`${server_endpoint}/api/v1/answers/?username=ychengpoon`,
                {
                    credentials: "same-origin",
                    mode: "cors",
                    method: "post",
                    body: JSON.stringify({
                        "data": results
                    }),
                    headers: new Headers({
                        'Content-Type': 'application/json; charset=UTF-8'
                    })
                })
                .then((response) => {
                    if (!response.ok) throw Error(response.statusText);
                    setLoading(true)

                    if (isVC){
                        navigate('/discover')
                    } else {
                        navigate('/build')
                    }

                    return response.json();
                })
                .catch((error) => console.log(error));
        }

        e.target.reset()
    }

    return (
        <>
            {loading
                ?
                <div className="h-screen flex justify-center items-center">
                    <div className="loading loading-spinner loading-lg text-secondary w-1/5"> hello </div>
                </div>
                :
                <div className="flex w-full h-full bg-[url('blob-discover.svg')] ">
                    <div className="w-1/4 pl-12 pt-7">
                        <img src="arrow.svg" />
                    </div>

                    <div className="flex flex-col w-2/4 pt-10">
                        <progress className="progress progress-secondary w-full h-4" value={progress} max={max_progress}></progress>

                        <h1 className="py-10">
                            {questions[progress]}
                        </h1>

                        <form
                            onSubmit={handleSubmit}
                            method="post"
                            // action={`${endpoint}`}
                            // enctype="multipart/form-data"
                        >
                            <textarea
                                name="answer"
                                rows={15}
                                className="textarea textarea-bordered w-full"
                                required
                            />
                            <div className="flex justify-end">
                                <button
                                    // type="submit"
                                    className="btn btn-active bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] text-white mt-20 w-1/6 ra">
                                    {progress == max_progress - 1
                                        ? "Submit"
                                        : "Next"
                                    }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>

    )
}

export default Questions;