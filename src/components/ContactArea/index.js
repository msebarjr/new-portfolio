import React from "react";
import ContactForm from "../ContactFrom/ContactForm";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useWindowSize } from "../../hooks/useWindowSize";

const ContactArea = (props) => {
    const windowSize = useWindowSize();

    return (
        <section
            className={`wpo-contact-area section-padding ${props.contactclass}`}
            id="contact"
        >
            <div className="wpo-wpo-contact-form-map">
                <div className="container">
                    <div className="row">
                        <SectionTitle Title={"Let’s Talk"} />
                    </div>
                    <div className="row">
                        <div className="co-lg-10 offset-lg-1  col-12">
                            <div className="row">
                                <div className="col col-lg-6 col-md-12 col-12">
                                    <div className="wpo-contact-form">
                                        <h2>Get In Touch</h2>
                                        <ContactForm />
                                    </div>
                                </div>
                                {windowSize.width > 990 && (
                                    <div className="col col-lg-6 col-md-12 col-12">
                                        <div className="wpo-contact-info">
                                            <div className="info-item">
                                                <div className="info-wrap">
                                                    <div className="info-icon">
                                                        <i className="fi flaticon-location"></i>
                                                    </div>
                                                    <div className="info-text">
                                                        <span>
                                                            West Palm Beach,
                                                            Florida
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="info-item">
                                                <div className="info-wrap">
                                                    <div className="info-icon">
                                                        <i className="fi flaticon-phone-call"></i>
                                                    </div>
                                                    <div className="info-text">
                                                        <a
                                                            href="tel:5616337757"
                                                            style={{
                                                                color: "white",
                                                            }}
                                                        >
                                                            (561) 633-7757
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-wk">
                <svg
                    width="1500"
                    height="1500"
                    viewBox="0 0 1500 1500"
                    fill="none"
                >
                    <g opacity="0.45" filter="url(#filter0_f_39_4214)">
                        <circle cx="750" cy="750" r="200" />
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_39_4214"
                            x="0"
                            y="0"
                            width="1500"
                            height="1500"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood
                                floodOpacity="0"
                                result="BackgroundImageFix"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="275"
                                result="effect1_foregroundBlur_39_4212"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default ContactArea;
