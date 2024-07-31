import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AdditionSubtraction } from "../pages/operationsPages/Addition-substraction";
import { MultiplicationDivision } from "../pages/operationsPages/Multiplication-division";
import { Intermediate } from "../pages/intermediates/Add-subs";
import { Exponentials } from "../pages/operationsPages/Exponentials";
import { Addition } from "../pages/operationsPages/Addition";
import { Substraction } from "../pages/operationsPages/Substraction";
import { Multiplication } from "../pages/operationsPages/Multiplication";
import { ExponentialIntermediate } from "../pages/intermediates/Expo";
import { DivisionIntermediate } from "../pages/intermediates/Div";
import { Division } from "../pages/operationsPages/Division";
import { Root } from "../pages/operationsPages/Root";
import { RootIntermediate } from "../pages/intermediates/RootInter";
import { LogarithmsIntermediate } from "../pages/intermediates/Log";
import { Logarithms } from "../pages/operationsPages/Logarithms";
import { GeometryIntermediate } from "../pages/intermediates/Geo";
import { Triangle } from "../pages/GeometryPages/Triangle";

export default function RoutesApp() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home page */}

          <Route path="/" element={<HomePage />} />

          {/* Intermediates pages */}

          <Route path="/add-sub" element={<Intermediate />} />
          <Route path="/exp" element={<ExponentialIntermediate />} />
          <Route path="/div" element={<DivisionIntermediate />} />
          <Route path="/root" element={<RootIntermediate />} />
          <Route path="/log" element={<LogarithmsIntermediate />} />
          <Route path="/geo/:figure" element={<GeometryIntermediate />} />

          {/* Basic operations pages */}

          <Route
            path="/exp/:selectedCard/:exponent"
            element={<Exponentials />}
          />
          <Route path="/add" element={<Addition />} />
          <Route path="/sub" element={<Substraction />} />
          <Route path="/mult" element={<Multiplication />} />
          <Route path="/div/:type" element={<Division />} />
          <Route path="/root/:selectedCard/:root" element={<Root />} />
          <Route path="/log/:selectedCard/:log" element={<Logarithms />} />

          {/* Combined operations pages */}

          <Route
            path="/add-sub/:userNumbers/:userOperators"
            element={<AdditionSubtraction />}
          />
          <Route path="/mult-div" element={<MultiplicationDivision />} />

          {/* Geometry operations pages */}

          <Route path="/geo/:figure/:selection" element={<Triangle />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
