import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './i18n';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';

import './styles/App.css';

const App = () => {
    return (
        <Router>
            <Suspense fallback="">
                <div className="App">
                    <Navbar />
                    <Main />
                    <Footer />
                </div>
            </Suspense>
        </Router>
    );
}

export default App;
