import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const Home = () => {

    const { t } = useTranslation('home');

    return (
        <>
            <h1 className="h3 fw-bold">{ t('welcome.heading') }</h1>
            <p>{ t('welcome.paragraphs.one') }</p>
            <p>{ t('welcome.paragraphs.two') }</p>
            <p>{ t('welcome.paragraphs.three') }</p>

            <h2 className="h4 fw-bold">{ t('subtitle.heading') }</h2>
            <p>{ t('subtitle.paragraphs.one') }</p>

            <h3 className="h4">{ t('dummy_title.heading') }</h3>
            <p>{ t('dummy_title.paragraphs.one') }</p>

            <div className="actions mt-4">
                <Link to="/contact" className="btn btn-success btn-call-us fs-6 fw-bold me-2">{ t('buttons.callus') }</Link>
                <Link to="/about" className="btn btn-primary btn-more-info fs-6 fw-bold">{ t('buttons.moreinfo') }</Link>
            </div>
        </>
    );
}

export default Home;