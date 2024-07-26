import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { AdditionSubtraction } from "../pages/operationsPages/Addition-substraction";
import { MultiplicationDivision } from "../pages/operationsPages/Multiplication-division";
import { Intermediate } from "../pages/intermediates/add-subs";
import { ExponentialIntermediate } from "../pages/intermediates/expo";
import { Exponentials } from "../pages/operationsPages/Exponentials";
import { Addition } from "../pages/operationsPages/Addition";
import { Substraction } from "../pages/operationsPages/Substraction";

export default function RoutesApp() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add-sub" element={<Intermediate />} />
                    <Route path="/exp" element={<ExponentialIntermediate />} />
                    <Route path="/add-sub/:userNumbers/:userOperators" element={<AdditionSubtraction />} />
                    <Route path="/exp/:selectedCard/:exponent" element={<Exponentials />} />
                    <Route path="/mult-div" element={<MultiplicationDivision />} />
                    <Route path="/add" element={<Addition />} />
                    <Route path="/sub" element={<Substraction />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}