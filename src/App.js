import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routers/routes";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App h-100">
        <Routes>
            <Route
                path='/'
                element={<Navigate to={'/home'}/>}/>
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