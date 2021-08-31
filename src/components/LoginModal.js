import { useRef, useEffect, useState } from 'react';
import SelectLanguage from "./SelectLanguage";
import {useTranslation} from "react-i18next";

const LoginModal = ({open, handleLogin, handleClose}) => {
    const loginWrapper = useRef(null);
    let [isOpen, setOpen]  = useState(open);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { t } = useTranslation('login');

    function handleSubmit(event) {
        event.preventDefault();

        const userInfo = {name, email, password}
        handleLogin(userInfo);

        handleClose();
    }

    function modalBgOnClick(event) {
        if( event.target === loginWrapper.current ) {
            handleClose();
        }
    }

    useEffect(() => {
       setOpen(open);
    }, [open, setOpen]);

    return (
        <div className={'login-wrapper ' + (isOpen ? 'show' : 'hide')} ref={loginWrapper} onClick={e => modalBgOnClick(e)}>
            <div className="login-modal">
                <div className="d-flex justify-content-between align-items-center border-bottom pb-2">
                    <h3 className="h4 fw-bold">{ t('title') }</h3>
                    <button className="btn btn-close" onClick={() => handleClose()}></button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="my-3">
                        <label className="form-label">{ t('labels.name') }</label>
                        <input name="name" type="text" className="form-control" placeholder={ t('placeholders.name') } onChange={e => setName(e.target.value)} required />
                    </div>
                    <div className="my-3">
                        <label className="form-label">{ t('labels.email') }</label>
                        <input name="email" type="email" className="form-control" placeholder={ t('placeholders.email') } onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div className="my-3">
                        <label className="form-label">{ t('labels.password') }</label>
                        <input name="password" type="password" className="form-control" placeholder={ t('placeholders.password') } onChange={e => setPassword(e.target.value)} required />
                    </div>

                    <div className="row gx-2">
                        <div className="col">
                            <button type="submit" className="btn btn-success btn-login fw-bold">{ t('login') }</button>
                        </div>
                        <div className="col text-end">
                            <SelectLanguage />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginModal;