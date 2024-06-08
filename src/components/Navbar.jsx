import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {

    const location = useLocation()
    const navigate = useNavigate()

    const active = "font-bold"
    const normal = ""

    return (
        <div>
            <ul className="flex flex-row justify-evenly h-[76px] w-[144px] gap-10">
                <li>
                    <a 
                    className={`${location.pathname == "/discover" ? active : normal}`}
                    onClick={() => navigate('/discover')}
                    >
                        {location.pathname == "/discover" ? "_Discover_"
                        : "Discover"
                        }
                    </a></li>
                <li>
                    <a 
                    className={`${location.pathname == "/interested" ? active : normal}`}
                    onClick={() => navigate('/interested')}
                    >
                        {location.pathname == "/interested" ? "_Liked_"
                        : "Liked"
                        }
                        
                    </a></li>

            </ul>
        </div>
    )
}

export default Navbar;