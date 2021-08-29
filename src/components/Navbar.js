import { useState, useEffect, useRef } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Collapse from 'bootstrap/js/src/collapse';

import SelectLanguage from "./SelectLanguage";
import Login from "./Login";

const Navbar = () => {
    const navbarCollapse = useRef(null);
    const [toggle, setToggle] = useState(false);

    const { t } = useTranslation('navbar');

    useEffect(() => {
        const nvbcollapse = navbarCollapse.current;
        const bs_collapse = new Collapse(navbarCollapse.current, {toggle});
        toggle ? bs_collapse.show() : bs_collapse.hide();

        nvbcollapse.addEventListener('hidden.bs.collapse', () => {
           setToggle(false);
        });

        return () => {
            nvbcollapse.removeEventListener('hidden.bs.collapse', () => {
                setToggle(false);
            });
        }
    });

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
                <span className="navbar-brand fw-bold d-flex align-items-center">
                    <span className="logo-icon me-2"></span>
                    <Switch>
                        <Route exact path="/">
                            <span>FrontendCase</span>
                        </Route>
                        <Route path="/about">
                            <span>About</span>
                        </Route>
                        <Route path="/contact">
                            <span>Contact</span>
                        </Route>
                    </Switch>
                </span>
                <button className="navbar-toggler" type="button" onClick={_ => setToggle(!toggle)}>
                    <span className={'navbar-toggler-icon ' + (toggle ? 'open' : 'closed')}></span>
                </button>
                <div className="collapse navbar-collapse" ref={navbarCollapse}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">{ t('links.home') }</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{ t('links.about') }</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">{ t('links.contact') }</Link>
                        </li>
                    </ul>
                    <SelectLanguage />
                    <Login />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;