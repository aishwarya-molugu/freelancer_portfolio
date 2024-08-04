import React, { useState } from 'react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    
    const toggleTab = (index) =>{
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <h3 className="services__title">Presentation Skills Training</h3>
                    </div> 

                    <span className="services__button" onClick={() => toogleTab(1)}>
                        View more <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__model-content">
                            <i  onclick={() => toggleTab(0)} className="ui uil-times services__model-close"></i>
                            <h3 className="services__modal-title">Presentation Skills Training</h3>
                            <p className="services__modal-description">  Service with more than 8 years of experience</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Structure engaging presentation content.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Learn to maintain audience interest and attention.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Use visual aids and multimedia effectively.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Get personalized feedback for improvement.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Practice presentations in a supportive setting.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <h3 className="services__title">Public Speaking Coaching</h3>
                    </div>

                    <span  onClick={() => toogleTab(2)} className="services__button">View more <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__model-content">
                        <i  onclick={() => toggleTab(0)} className="ui uil-times services__model-close"></i>
                            <h3 className="services__modal-title">Public Speaking Coaching</h3>
                            <p className="services__modal-description">  Service with more than 8 years of experience</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Build confidence and reduce speaking anxiety.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Improve vocal delivery and body language.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Tailor messages to diverse audiences.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Receive personalized coaching and feedback.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Enhance public speaking through practical exercises.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <h3 className="services__title">Interpersonal Communication Skills</h3>
                    </div>

                    <span onClick={() => toogleTab(3)} className="services__button">View more <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__model-content">
                        <i  onclick={() => toggleTab(0)} className="ui uil-times services__model-close"></i>
                            <h3 className="services__modal-title">Interpersonal Communication Skills</h3>
                            <p className="services__modal-description">  Service with more than 8 years of experience</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Improve active listening and response.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Master verbal and non-verbal communication.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Develop conflict resolution strategies.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Build and maintain professional relationships.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Practice real-world scenarios through role-playing.</p>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service