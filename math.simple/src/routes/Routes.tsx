import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MultiplicationDivision } from "../pages/Multiplication-division";
import { HomePage } from "../pages/HomePage";
import { AdditionSubtraction } from "../pages/Addition-substraction";

export default function RoutesApp() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/add-sub" element={<AdditionSubtraction />} />
                    <Route path="/mult-div" element={<MultiplicationDivision />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}