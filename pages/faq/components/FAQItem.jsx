import { useState } from "react";
import "../faq.css";

function FAQItem ({item, isActive, onClick}) {
    return (
        <div className= {`faq-item ${isActive ? "active" : ""}`}>

            <button className="faq-question" onClick={onClick}>
                {item.question}
                <img  className="faq-icon" src="/img/chevron-up-solid.svg" />
            </button>

            {isActive && (
                <div className="faq-answer">

                    {item.isHtml ? (
                        <div className="answer-text" dangerouslySetInnerHTML={{ __html: item.answer }} />
                    ) : (
                        <p>{item.answer}</p>
                    )}
                
                    {/* imagens */}
                    {item.images && ( 
                        <div className="faq-images">
                            { item.images.map((img, index) => (
                        <img key={index} src={img} className="faq-image" />
                        ))}
                        </div>
                     )}
                </div>
            )}
        </div>
    );
}

export default FAQItem;