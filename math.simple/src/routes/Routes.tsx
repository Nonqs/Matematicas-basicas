import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MultiplicationDivision } from "../pages/Multiplication-division";
import { HomePage } from "../pages/HomePage";
import { AdditionSubtraction } from "../pages/Addition-substraction";
import { Intermediate } from "../pages/Intermediate";

export default function RoutesApp() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add-sub" element={<Intermediate />} />
                    <Route path="/add-sub/:userNumbers/:userOperators" element={<AdditionSubtraction />} />
                    <Route path="/mult-div" element={<MultiplicationDivision />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}