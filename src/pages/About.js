import {useTranslation} from 'react-i18next';

const About = () => {
    const { t } = useTranslation('about');

    return (
        <>
            <h1 className="h3 fw-bold">{ t('title') }</h1>
            <p className="lead">{ t('paragraphs.one') }</p>
            <p>{ t('paragraphs.one') }</p>
            <p>{ t('paragraphs.one') }</p>

            <h3 className="h5 fw-bold">{ t('info_title') }</h3>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </>
    );
}

export default About;