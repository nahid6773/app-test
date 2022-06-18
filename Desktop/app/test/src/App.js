import React from "react"
import Form from "./component/form";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Edite from "./component/edit";


const App = () => {
    return (
        <>
            <div className="app">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Form />} />
                        <Route path="/edit" element={<Edite />} />
                    </Routes>
                </BrowserRouter>

            </div>
        </>
    )
}
export default App;