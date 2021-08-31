import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation('about');

    const items = t('info_items', {returnObjects: true});

    return (
        <>
            <h1 className="h3 fw-bold">{ t('title') }</h1>
            <p className="lead">{ t('paragraphs.one') }</p>
            <p>{ t('paragraphs.one') }</p>
            <p>{ t('paragraphs.one') }</p>

            <h3 className="h5 fw-bold">{ t('info_title') }</h3>
            <ul className="list-group list-group-flush">
                {items && items.map((item, index) => (
                    <li className="list-group-item" key={index}>{ item }</li>
                ))}
            </ul>
        </>
    );
}

export default About;