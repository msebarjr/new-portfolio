import React from "react";

const SectionTitle = (props) => {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
                <div className="wpo-section-title">
                    <h2>{props.Title}</h2>
                    {props.quote && (
                        <figure>
                            <blockquote>"{props.quote}"</blockquote>
                            <figcaption>{props.caption}</figcaption>
                        </figure>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;
