import Header from "./header";
import Hero from "./Hero";
import SearchBar from './SearchBar';
import faqData from '../../../js/faqData';
import FAQItem from './FAQItem';
import { useState } from "react";
import Footer from "./footer";

function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);
    const [search, setSearch] = useState('');

    const filteredFaqs = faqData.filter((item) => item.question.toLowerCase().includes(search.toLowerCase()));

    return (
        <>

            <section className='faq'>

                <SearchBar search={search} setSearch={setSearch} />

                <div className='faq-container'>
                    
                    {/* renderização */}
                    {filteredFaqs.map((item, index) => (
                    <FAQItem key={index} item={item} isActive={activeIndex === index} 
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)} />
                    ))}

                    {
                        filteredFaqs.length === 0 && (
                            <div className="no-results">
                                <p>Nenhuma pergunta encontrada.</p>
                            </div>
                        )
                    }
                </div>
            </section>

        </>
    );
}

export default FAQ;