import { Link } from "react-router-dom";
import circle from "../public/svg/circle.svg";
import rectangle from "../public/svg/rectangle.svg";
import square from "../public/svg/square.svg";
import triangle from "../public/svg/triangle.svg";
import { MathJax } from "better-react-mathjax";

export function HomePage() {
  return (
    <section className="home">
      <h1 className="title">MATH.SIMPLE</h1>
      <div className="home-container">
        <div className="single-geo-container">
          <div>
            <h2 className="subtitle">Single operations problems</h2>

            <article className="buttons-container">
              <Link to={"/add"}>
                <button>+</button>
              </Link>
              <Link to={"/sub"}>
                <button>-</button>
              </Link>
              <Link to={"/mult"}>
                <button>x</button>
              </Link>
              <Link to={"/div"}>
                <button>/</button>
              </Link>
              <Link to={"/exp"}>
                <button>
                  x<sup>2</sup>
                </button>
              </Link>
              <Link to={"/root"}>
                <button><MathJax>{"\\( \\sqrt{x} \\)"}</MathJax></button>
              </Link>
              <Link to={"/log"}>
                <button>log(x)</button>
              </Link>
            </article>
          </div>
          <div className="geo-operations">
            <h2 className="subtitle">Geometry, areas and perimeters</h2>
            <article className="buttons-container">
              <Link to={""}>
                <button>
                  <img src={triangle} alt="triangle" />
                </button>
              </Link>
              <Link to={""}>
                <button>
                  <img src={square} alt="square" />
                </button>
              </Link>
              <Link to={""}>
                <button>
                  <img src={rectangle} alt="rectangle" />
                </button>
              </Link>
              <Link to={""}>
                <button>
                  <img src={circle} alt="circle" />
                </button>
              </Link>
            </article>
          </div>
        </div>
        <div className="separator"></div>
        <div className="combined-container">
          <article>
            <h2 className="subtitle">Combined operations problems</h2>
          </article>
          <article className="buttons-container">
            <Link to={"/add-sub"}>
              <button>+ , -</button>
            </Link>
            <Link to={"/mult-div"}>
              <button>x , /</button>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
