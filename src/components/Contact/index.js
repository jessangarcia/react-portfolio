import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <main>
            <section>
                <h1 data-testid='h1tag'>Contact Me</h1>
                <div id="contact-info">
                    <ul id="contact">
                        <li>
                            801-819-8551
                        </li>
                        <li>
                            <a href="mailto: jessenia.garcia998@gmail.com" target="_blank" rel="noreferrer">Email</a>
                        </li>
                        <li>
                            <a href="https://github.com/jessangarcia" target="_blank" rel="noreferrer">GitHub</a>
                        </li>
                        <li>
                            <a href="src/assets/resume/jessie-resume.pdf" download>Resume Download</a>
                        </li>
                    </ul>
                </div>
                <form id='contact-form' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' defaultValue={name} onBlur={handleChange} name='name' />
                    </div>
                    <div>
                        <label htmlFor='email'>Email address:</label>
                        <input type='email' defaultValue={email} onBlur={handleChange} name='email' />
                    </div>
                    <div>
                        <label htmlFor='message'>Message:</label>
                        <textarea name='message' defaultValue={message} onBlur={handleChange} rows='5' />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )}
                    <button data-testid='button' type='submit'>Submit</button>
                </form>
            </section>
        </main>
    )
}

export default Contact;