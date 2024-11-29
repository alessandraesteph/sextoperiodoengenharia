import React, { useState } from 'react';
import '../styles/contato.css';

export default function Contact() {
    const [mail, setEmail] = useState('');
    const [contentM, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false); 
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); 

        try {
            const response = await fetch('https://southamerica-east1-composite-ally-440320-i2.cloudfunctions.net/arch', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email: mail,
                    message: contentM 
                }),
            });

            if (response.ok) {
                setShowModal(true);
                setEmail('');  
                setMessage(''); 
            } else {
                const errorData = await response.json();
                alert(`Erro: ${errorData.error || 'Ocorreu um erro. Tente novamente mais tarde.'} 😞`);
            }
        } catch (error) {
            alert('Erro de conexão. Verifique sua internet e tente novamente.');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <section className="contact">
            <div className="contact-container">
                <h5>Envie sua dúvida</h5>
                <h2>Entre em contato</h2>
                <p>
                    Entre em contato, estamos dispostos a tirar qualquer dúvida,
                    seja um orçamento, uma dúvida técnica de algum de nossos produtos.
                    Estamos à disposição para responder. 🤗
                </p>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Seu melhor Email"
                        className="contact-input"
                        value={mail}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
                        className="contact-textarea"
                        value={contentM}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit" className="contact-button" disabled={loading}>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>
                </form>

                {showModal && (
                    <div className='modal-overlay'>
                        <div className='modal-content'>
                            <h3>Mensagem enviada com sucesso!</h3>
                            <p>Recebemos sua mensagem e entraremos em contato em breve. 🎉</p>
                            <button onClick={() => setShowModal(false)} className='modal-button'>
                                Fechar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
