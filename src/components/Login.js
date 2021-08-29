import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LoginModal from "./LoginModal";
import UserInfo from "./UserInfo";

const Login = () => {
    const { t } = useTranslation('navbar');

    const [isModalOpen, setModalOpen] = useState(false);

    const localUser = JSON.parse(localStorage.getItem('userInfo')) || {};
    const [userInfo, setUserInfo] = useState(localUser);

    function isLogged() {
        return Object.keys(userInfo).includes('email');
    }

    function doLogin(userData) {
        if( !localStorage.userInfo ) {
            localStorage.setItem('userInfo', JSON.stringify(userData));
            setUserInfo(userData);
        }
    }

    function logOut() {
        localStorage.removeItem('userInfo');
        setUserInfo({});
    }

    function hideModal() {
        setModalOpen(false);
    }

    return (
        <>
            {isLogged()
                ?
                    <UserInfo user={userInfo} handleLogout={logOut} />
                :
                    <div className="login-user">
                        <button onClick={() => setModalOpen(true)}
                                className="p-1 px-2 btn btn-info mx-2">{t('login_btn')}</button>
                    </div>
            }
            <LoginModal open={isModalOpen} handleClose={hideModal} handleLogin={doLogin} />
        </>
    )
}

export default Login;