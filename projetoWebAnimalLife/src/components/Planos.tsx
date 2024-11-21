import "../styles/planos.css";

export default function Plans() {
    return (
        <section className="plans">
            <div className="plans-container">
                <h5>Planos e preços</h5>
                <h2>Nossos planos</h2>

                <div className="plans-cards">
                    <div className="plan-card">
                        <h3>Plano Básico 🐾</h3>
                        <p>Ideal para monitoramento essencial de animais.</p>
                        <p className="price">R$ 100,00/mês</p>
                        <button className="plan-button">Adquirir Agora</button>
                        <ul>
                            <li>Monitoramento de sinais vitais.</li>
                            <li>Histórico de dados dos últimos 7 dias.</li>
                            <li>Armazenamento offline com sincronização automática.</li>
                        </ul>
                    </div>

                    <div className="plan-card premium">
                        <h3>Plano Premium 🌟</h3>
                        <p>Solução completa para monitoramento avançado.</p>
                        <p className="price">R$ 150,00/mês</p>
                        <button className="plan-button premium-button">Adquirir Agora</button>
                        <ul> Tudo do Plano Básico, mais:
                            <li>Histórico de dados por 30 dias.</li>
                            <li>Alertas personalizados de saúde.</li>
                            <li>Relatórios de comportamento e saúde animal.</li>
                            <li>Suporte técnico prioritário.</li>
                        </ul>
                    </div>

                    <div className="plan-card">
                        <h3>Plano Empresarial 🏢</h3>
                        <p>A melhor opção para grandes operações e empresas.</p>
                        <p className="price">R$ 200,00/mês</p>
                        <button className="plan-button">Adquirir Agora</button>
                        <ul>Tudo do Plano Premium, mais:
                            <li>Monitoramento em tempo real para múltiplos animais.</li>
                            <li>Histórico de dados de todo o periodo.</li>
                            <li>Relatórios personalizados e exportação de dados</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
