import { useContext, useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import { AccessContext } from "../../components/AccessContext";

import axios from "axios";

function Interested({server_endpoint}) {

    const { requestList, likedList } = useContext(AccessContext)
    const [report, setReport] = useState("Data is processing...")
    const [summaryId, setSummaryId] = useState()
    const [companyUser, setCompanyUser] = useState("")
    const [url, setUrl] = useState("")

    useEffect(() => {

        if (companyUser in requestList) {
            setSummaryId(requestList[companyUser].summary_id)
            console.log(requestList[companyUser].summary_id)
            setUrl(requestList[companyUser].url + "/?username=ychengpoon")
            console.log(requestList[companyUser].url + "/?username=ychengpoon")
        } else {
            setReport("Data may not be available.")
        }

        // Declare a boolean flag that we can use to cancel the API request.
        let ignoreStaleRequest = false;

        axios
        .get(
            server_endpoint + url,
            {
                headers: {
                    "ngrok-skip-browser-warning": "69420",
                }
            }
        )
        .then((response) => {
            console.log(response)
            return response.data
        })
        .then((data) => {
            if (!ignoreStaleRequest) {
                console.log(data)
                setReport(data["summary"])
            }
        })
        .catch((error) => {
            console.error(error)
        });

        return () => {
            // This is a cleanup function that runs whenever the Post component
            // unmounts or re-renders. If a Post is about to unmount or re-render, we
            // should avoid updating state.
            ignoreStaleRequest = true;
        };

    })

    // function handleClick(e) {
    //     e.preventDefault()
    //     // const company_user = e.target.value
    //     setCompanyUser(e.target.value)
    //     console.log(company_user)

    //     // find matching username
    //     if (company_user in requestList) {
    //         setSummaryId(requestList[company_user].summary_id)
    //         console.log(requestList[company_user].summary_id)
    //         setUrl(requestList[company_user].url + "/?username=ychengpoon")
    //         console.log(requestList[company_user].url + "/?username=ychengpoon")
    //     }
    // }

//     summary_id
// : 
// 2
// url
// : 
// ":/api/v1/request_summary/2"
// username
// : 
// "yanC_startup"

    return (
        <div className="w-100 h-100 p-10 bg-[url('blob-1.svg')] bg-repeat-y">
            <div className="font-bold">
                <h1 className="text-black">What's&nbsp;<span className="bg-gradient-to-r from-[#C96FF4] to-[#FF35DF] inline-block text-transparent bg-clip-text">Next?&nbsp;</span>👀</h1>
            </div>
            <div className="h-[75vh] flex justify-center items-center">
                <div className="bg-base-200 w-[80%] h-[80%] flex flex-row rounded-box">
                    <div className="w-[20%] overflow-scroll relative">
                        <ul className="menu bg-base-200 w-100 text-lg rounded-box">
                            { 
                                likedList.map((item, idx) => (
                                    <li value={item.company_user} key={item.company_user + idx} 
                                    onClick={(e) => setCompanyUser(item.company_user)}
                                    ><a>{item.company_name}</a></li>
                                ))
                            }
                            <li><a>Meta</a></li>
                            <li><a>Micr*soft</a></li>
                            <li><a>Netflicks</a></li>
                            <li><a>Amazo0n</a></li>
                            <li><a>VSee</a></li>

                        </ul>
                    </div>
                    <div className="p-3 overflow-scroll relative max-w-[80%] text-left right-0">
                        {report == '' ? "Data is processing" : report}
                    </div>
                </div>
            </div>
            <div className="text-center w-100 flex justify-center"><Navbar /></div>
        </div>
    )
}

export default Interested;