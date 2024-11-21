import '../styles/contato.css';

export default function Contact() {
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
                <form className="contact-form">
                    <input
                        type="email"
                        placeholder="Seu melhor Email"
                        className="contact-input"
                        required
                    />
                    <textarea
                        placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
                        className="contact-textarea"
                        required
                    />
                    <button type="submit" className="contact-button">
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    );
}
