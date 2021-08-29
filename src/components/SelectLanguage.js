import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from 'bootstrap/js/src/dropdown';

const SelectLanguage = () => {
    const langDropdown = useRef(null);
    const [isOpen, setOpen] = useState(false);

    const { i18n } = useTranslation();

    useEffect(() => {
        const bs_dropdown = new Dropdown(langDropdown.current);
        isOpen ? bs_dropdown.show() : bs_dropdown.hide();
    });

    function changeLanguage(lang) {
        i18n.changeLanguage(lang);
        setOpen(false);
    }

    return (
        <div id="select-lang" className="select-language d-flex">
            <ul className="nav nav-tabs border-0">
                <li className="nav-item dropdown">
                    <button type="button" ref={langDropdown} onClick={() => setOpen(!isOpen)} className="p-1 px-2 nav-link dropdown-toggle rounded bg-white">
                        <span>{ (i18n.language === 'en' ? 'English' : 'Türkçe') }</span>
                    </button>
                    <ul className="dropdown-menu">
                        <li><button type="button" onClick={_ => changeLanguage('en')} className="dropdown-item">English</button></li>
                        <li><button type="button" onClick={_ => changeLanguage('tr')} className="dropdown-item">Türkçe</button></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default SelectLanguage;