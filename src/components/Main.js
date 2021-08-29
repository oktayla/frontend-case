import { Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

const Main = () => (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-10 mx-auto">
                <div className="row">
                    <div className="col-md-12">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path="/contact" component={Contact}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Main;