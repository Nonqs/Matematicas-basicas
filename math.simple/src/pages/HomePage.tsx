import { Link } from "react-router-dom";


export function HomePage() {
    return (
        <div className="home">
            <h1 className="title">MATH.SIMPLE</h1>

            <div>
                <Link to={"/add-sub"}>
                    <button>
                        + , -
                    </button>
                </Link>
                <Link to={"/mult-div"}>
                    <button>
                        x , /
                    </button>
                </Link>
            </div>
        </div>
    )
}