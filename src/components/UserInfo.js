import { useRef, useState, useEffect } from 'react';
import Dropdown from 'bootstrap/js/src/dropdown';
import {useTranslation} from "react-i18next";

const UserInfo = ({ user, handleLogout }) => {
    const langDropdown = useRef(null);
    const [isOpen, setOpen] = useState(false);

    const { t } = useTranslation('login');

    useEffect(() => {
        const bs_dropdown = new Dropdown(langDropdown.current);
        isOpen ? bs_dropdown.show() : bs_dropdown.hide();
    });

    return (
        <div id="user-info" className="user-dropdown d-flex justify-content-between align-items-center mx-2">
            <ul className="nav nav-tabs border-0 d-none d-md-block d-lg-block">
                <li className="nav-item dropdown">
                    <button type="button"
                            ref={langDropdown} onClick={() => setOpen(!isOpen)}
                            className="p-1 px-2 nav-link dropdown-toggle rounded bg-white">
                        <span>{ user.name }</span>
                    </button>
                    <ul className="dropdown-menu user-dropdown-menu">
                        <li><span className="dropdown-item">{ user.email }</span></li>
                        <li>
                            <button onClick={handleLogout}
                                    type="button" className="dropdown-item">{ t('logout') }</button>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="d-block d-sm-none d-flex justify-content-between w-100">
                <div className="userInfo bg-light p-2 rounded">
                    <span className="d-block fw-bold">{ user.name }</span>
                    <span className="d-block small">{ user.email }</span>
                </div>
                <div className="logout bg-danger p-2 rounded">
                    <button onClick={handleLogout} className="btn btn-link text-decoration-none text-white">{ t('logout') }</button>
                </div>
            </div>
        </div>
    );
}

export default UserInfo;