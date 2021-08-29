import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation('footer');

    return (
        <div className="container">
            <footer className="bg-light p-3 mt-5">
                <p className="mb-0 text-center text-muted">{ t('text') } &copy; 2021</p>
            </footer>
        </div>
    );
}

export default Footer;