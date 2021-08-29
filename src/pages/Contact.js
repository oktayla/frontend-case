import { useState } from 'react';
import { useTranslation } from "react-i18next";
import Select from 'react-select'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [text, setText] = useState('');

    const [sent, setSent] = useState(false);
    const [validPhone, setValidPhone] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};

    const { t } = useTranslation('contact');

    const countryList = t('countries', {returnObjects: true});

    function checkEmail(event) {
        const isValid = event.target.validity.valid;
        setValidEmail(isValid);
        setEmail(event.target.value);
    }

    function checkPhone(event) {
        const value = event.target.value;
        const number = Number(value);
        const valid = (!isNaN(number) && value.length === 10);

        setValidPhone( valid );
        setPhone(value);
    }

    function handleCountry(country) {
        setCountry(country.value);
    }

    function submitForm(event) {
        event.preventDefault();

        const formData = {name, email, phonenumber: phone, country_code: country, text}
        console.log( JSON.stringify(formData, null, 2) );
        setSent(true);
    }

    return (
        <div id="contact-page">
            <h1 className="h3 fw-bold">{ t('title') }</h1>
            <p className="small">{ t('text') }</p>

            {sent
                ?
                <div className="bg-white p-3 py-5 shadow-sm rounded thanks text-success text-center">
                    <h3 className="mb-0 h4 py-5">{ t('thanks') }</h3>
                </div>
                :
                <form className="bg-white p-3 shadow-sm rounded"
                      onSubmit={(e) => submitForm(e)}>

                    <div className="mb-3">
                        <label className="form-label fw-bold">{ t('labels.name') }</label>
                        <input type="text" className="form-control" placeholder="John Doe"
                               defaultValue={userInfo?.name} required
                               onChange={e => setName(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">{ t('labels.email') }</label>
                        <input type="email"
                               className={'form-control ' + (email !== '' ? (validEmail ? 'border-success' : 'border-danger') : '')}
                               placeholder="name@example.com"
                               defaultValue={userInfo?.email} required
                               onChange={e => checkEmail(e)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">{ t('labels.phone') }</label>
                        <input type="phone"
                               className={'form-control ' + (phone !== '' ? (validPhone ? 'border-success' : 'border-danger') : '')}
                               placeholder="5320009988" required
                               onChange={e => checkPhone(e)} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">{ t('labels.country') }</label>
                        <Select placeholder={t('select_country')} options={countryList} onChange={handleCountry} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">{ t('labels.message') }</label>
                        <textarea className="form-control" rows="4"
                                  onChange={e => setText(e.target.value)} />
                    </div>

                    <button className="btn btn-primary fw-bold">{ t('submit') }</button>
                </form>
            }
        </div>
    );
}

export default Contact;