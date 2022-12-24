import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routers/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Image} from "react-bootstrap";
import React from "react";
function App() {
    return (
        <div className="App h-100">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.element;
                    console.log(Page);
                    console.log(route.path);
                    return <Route key={index} path={route.path} element={
                        <Page/>
                    }/>
                })}
            </Routes>
        </div>
    );
}

export default App;
