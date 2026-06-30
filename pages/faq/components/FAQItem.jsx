import { useState } from "react";
import "../faq.css";

function FAQItem ({item, isActive, onClick}) {
    const [lightbox, setLightbox] = useState(null);

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
                        <img key={index} src={img} className="faq-image" onClick={() => setLightbox(img)} />
                        ))}
                        </div>
                     )}
                </div>
            )}
                
            {lightbox && (
                <div className="faq-lightbox" onClick={() => setLightbox(null)}>
                <button className="faq-lightbox-close" onClick={() => setLightbox(null)}>X</button>
                    <img src={lightbox} className="faq-lightbox-img" onClick={(e) => e.stopPropagation()} />
                </div>
            )}
        </div>
    );
}

export default FAQItem;