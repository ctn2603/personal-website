import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Header } from './layouts/header/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
