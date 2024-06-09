import { useEffect, useState } from "react";

function BuildProfile({ server_endpoint }) {
    const [questionId, setQuestionId] = useState()

    const [prevQuestions, setPrevQuestions] = useState([])
    const [prevAnswers, setPrevAnswers] = useState([])

    const vc_profile_pic = "apple-logo.webp"
    const start_up_profile_pic = "orange-cat.jpeg"

    useEffect(() => {
        // Declare a boolean flag that we can use to cancel the API request.
        let ignoreStaleRequest = false;

        // Call REST API to get the post's information
        fetch(`${server_endpoint}/api/v1/questions/?size=1&username=aaa`,
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
                    let data_question = data.questions[0].question
                    let data_question_id = data.questions[0].question_id

                    setQuestionId(data_question_id)
                    setPrevQuestions(() => [...prevQuestions, data_question])

                }
            })
            .catch((error) => console.log(error));

        return () => {
            // This is a cleanup function that runs whenever the Post component
            // unmounts or re-renders. If a Post is about to unmount or re-render, we
            // should avoid updating state.
            ignoreStaleRequest = true;
        };
    }, [prevAnswers]);


    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const dataAnswer = formData.get("answer")

        fetch(`${server_endpoint}/api/v1/answers/?username=aaa`,
        {
            credentials: "same-origin",
            mode: "cors",
            method: "post",
            body: JSON.stringify({
                "data": [{
                            "question_id": questionId,
                            "answer": dataAnswer
                        }]
            }),
            headers: new Headers({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        })
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);

            return response.json();
        })
        .catch((error) => console.log(error));

        setTimeout(() => {
            setPrevAnswers(() => [...prevAnswers, dataAnswer])}, 170);

        e.target.reset()
    }


    return (
        <div className="w-full h-screen bg-[url('blob-discover.svg')]">

            <h1 className="font-bold mt-8"> Build Your <span className="bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] inline-block text-transparent bg-clip-text"> Profile </span> </h1>

            <h2 className="font-bold my-5"> Please let us know more about you, as well as your company. </h2>

            <div className="mx-80 mt-12 h-3/4">
                <div className="overflow-y-auto h-3/4">
                    {prevQuestions.map((q, index) => 
                        <div className="mb-10" key={index}>
                            <div class="chat chat-start">
                                <div class="chat-image avatar">
                                    <div class="w-10 rounded-full">
                                    <img src={vc_profile_pic} />
                                    </div>
                                </div>
                                <div class="chat-header">
                                    Apple Inc (VC)
                                </div>
                                <div class="chat-bubble chat-bubble-secondary font-bold">{prevQuestions[index]}</div>
                            </div>

                            <div class="chat chat-end">
                                <div class="chat-image avatar">
                                    <div class="w-10 rounded-full">
                                    <img src={start_up_profile_pic} />
                                    </div>
                                </div>
                                <div class="chat-header">
                                    Cat.io (Startup)
                                </div>
                                <div class="chat-bubble chat-bubble-secondary font-bold">{prevAnswers[index]}</div>
                            </div>
                        </div>
                    )}
                </div>

                <form 
                    className="mt-10 w-full mr-12"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <input name="answer" className="input input-bordered input-secondary w-3/4 mt-10" required/>
                        <button
                            type="submit" 
                            className="btn btn-active bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] text-white w-1/6 ra font-bold">
                            Send
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default BuildProfile;