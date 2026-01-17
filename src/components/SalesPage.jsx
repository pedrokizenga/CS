import React, { useState, useEffect } from 'react';
import mockupImg from '../assets/mockup.png';
import logoImg from '../assets/logo.png';
import proof1 from '../assets/proof1.png';
import proof2 from '../assets/proof2.png';

export default function SalesPage() {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const [currentProof, setCurrentProof] = useState(0);
    const proofs = [proof1, proof2];

    const nextProof = () => {
        setCurrentProof((prev) => (prev + 1) % proofs.length);
    };

    const prevProof = () => {
        setCurrentProof((prev) => (prev - 1 + proofs.length) % proofs.length);
    };

    const scrollToOffer = () => {
        document.getElementById('offer-section').scrollIntoView({ behavior: 'smooth' });
    };

    const [showNotes, setShowNotes] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowNotes(true);
                }
            },
            { threshold: 0.5 }
        );

        const imgElement = document.getElementById('product-presentation');
        if (imgElement) observer.observe(imgElement);

        return () => {
            if (imgElement) observer.unobserve(imgElement);
        };
    }, []);

    return (
        <div className="animate-enter sales-container" style={{ width: '100%', padding: '0 1rem 4rem 1rem', margin: '0 auto' }}>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <img src={logoImg} alt="Logo" style={{ height: '90px', objectFit: 'contain' }} />
            </div>

            {/* SEÇÃO 1: IMPACTO BRUTAL */}
            <section style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '3rem' }}>
                <div style={{ marginBottom: '1.5rem' }}>
                    <div className="typing-effect h2 title" style={{ fontSize: '1.1rem', borderRightColor: 'var(--primary)', whiteSpace: 'normal', display: 'block', marginBottom: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        Diagnóstico Implacável:
                    </div>
                    <h1 className="title hero-headline" style={{ lineHeight: '1', marginTop: '0.5rem', color: '#fff' }}>
                        Tens uma <span className="highlight-primary">Mente de Milhões</span>,<br />mas uma conta bancária de <span className="zero-kwanzas-text">ZERO KWANZAS.</span>
                    </h1>
                </div>

                <p style={{ fontSize: '1.15rem', opacity: 0.9, marginBottom: '2.5rem', lineHeight: '1.5', color: '#eee' }}>
                    Enquanto continuas a "planear" e a agir como um <span className="highlight-secondary">eterno estudante</span>, o mercado de Angola está a enriquecer quem tem metade da tua inteligência, mas o <span className="highlight-primary">triplo da tua coragem</span>.
                </p>

                <div className="neon-box shadow-lg" style={{ marginBottom: '2rem' }}>
                    <p style={{ fontSize: '1rem', fontWeight: '600', color: 'var(--primary)', lineHeight: '1.4' }}>
                        ⚠️ Cuidado: O custo de continuar parado é mais caro que qualquer investimento.
                    </p>
                </div>

                <button className="btn btn-primary" style={{ padding: '1.5rem', fontSize: '1.3rem', animation: 'pulse-glow 2s infinite' }} onClick={scrollToOffer}>
                    QUERO PARAR DE PERDER DINHEIRO ↓
                </button>
            </section>

            {/* SEÇÃO 2: CONEXÃO EMOCIONAL */}
            <section className="section-spacer">
                <div className="glass-panel" style={{ background: 'rgba(0,0,0,0.7)', border: 'none' }}>
                    <div style={{ marginBottom: '1rem', padding: '1.2rem', borderLeft: '4px solid var(--secondary)', background: 'rgba(230, 57, 70, 0.1)', borderRadius: '0 12px 12px 0' }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.4rem' }}>🚫 Esquece a <span className="highlight-secondary">Teoria</span></h3>
                        <p style={{ fontSize: '0.95rem' }}>"Tu não precisas de mais um curso teórico de 40 horas."</p>
                    </div>

                    <div style={{ marginBottom: '1.5rem', padding: '1.5rem', borderLeft: '4px solid var(--primary)', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '0 12px 12px 0' }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '0.4rem' }}>⚔️ Vai para a <span className="highlight-primary">Guerra</span></h3>
                        <p style={{ fontSize: '0.95rem' }}>"Tu precisas de um Protocolo de Guerra para a <span className="highlight-primary">nossa realidade</span>."</p>
                    </div>

                    <div style={{ padding: '0.5rem 1rem' }}>
                        <p style={{ fontSize: '1rem', fontStyle: 'italic', opacity: 0.8, textAlign: 'center' }}>
                            "Sem escritórios caros na Talatona. Apenas tu, o teu <span className="highlight-primary">WhatsApp</span> e o método certo."
                        </p>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 3: REVELAÇÃO DO SISTEMA */}
            <section className="section-spacer" style={{ textAlign: 'center' }}>
                <h2 className="title">Apresento-te o Protocolo de Ativação 48H</h2>

                <div id="product-presentation" style={{ margin: '1.5rem auto', position: 'relative', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                        src={mockupImg}
                        alt="Protocolo Mockup"
                        style={{
                            maxWidth: '100%',
                            height: 'auto',
                            maxHeight: '300px',
                            filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.3))',
                            animation: showNotes ? 'float 6s ease-in-out infinite' : 'none',
                            transition: 'all 1s ease'
                        }}
                    />

                    {/* Floating Notes */}
                    <div className={`product-note ${showNotes ? 'visible' : ''}`} style={{ top: '5%', left: '0%', animationDelay: '0.5s', fontSize: '0.7rem' }}>Script WhatsApp 📱</div>
                    <div className={`product-note ${showNotes ? 'visible' : ''}`} style={{ top: '25%', right: '0%', animationDelay: '1s', fontSize: '0.7rem' }}>Calculadora Lucro 🧮</div>
                    <div className={`product-note ${showNotes ? 'visible' : ''}`} style={{ bottom: '15%', left: '5%', animationDelay: '1.5s', fontSize: '0.7rem' }}>Guia 48H ⏱️</div>
                    <div className={`product-note ${showNotes ? 'visible' : ''}`} style={{ bottom: '0%', right: '10%', animationDelay: '2s', fontSize: '0.7rem' }}>Zero Burocracia 🚫</div>
                </div>

                <div className="glass-panel" style={{ textAlign: 'left', marginBottom: '1rem', padding: '1.5rem' }}>
                    <h3 style={{ color: '#FFD700', marginBottom: '0.5rem', fontSize: '1.2rem' }}>1. O Filtro de Oportunidades</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>"Descobre em 60 segundos se a tua ideia vai pôr comida na mesa ou se é apenas um Rasso."</p>
                </div>

                <div className="glass-panel" style={{ textAlign: 'left', marginBottom: '1rem', padding: '1.5rem' }}>
                    <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>2. Scripts de Fecho Express</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>"Copia e cola as palavras exatas que fazem o cliente sentir urgência em fazer a transferência agora."</p>
                </div >

                <div className="glass-panel" style={{ textAlign: 'left', padding: '1.5rem' }}>
                    <h3 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '1.2rem' }}>3. A Calculadora de Lucro Real</h3>
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>"Saiba exatamente quanto vai sobrar no teu bolso antes de gastares um único Kwanza em stock."</p>
                </div >
            </section >

            {/* SEÇÃO PROVA SOCIAL */}
            {/* SEÇÃO PROVA SOCIAL IMAGENS */}
            <section className="section-spacer">
                <h2 className="title" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Resultados <span className="highlight-primary">Reais</span> em Angola:</h2>

                <div className="carousel-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                    <div style={{
                        overflow: 'hidden',
                        borderRadius: '20px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                        position: 'relative'
                    }}>
                        <div style={{
                            display: 'flex',
                            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                            transform: `translateX(-${currentProof * 100}%)`
                        }}>
                            {proofs.map((img, index) => (
                                <div key={index} style={{ minWidth: '100%', padding: '0.5rem' }}>
                                    <div className="glass-panel" style={{ padding: '0.3rem', border: 'none' }}>
                                        <img
                                            src={img}
                                            alt={`Prova Social ${index + 1}`}
                                            style={{
                                                width: '100%',
                                                borderRadius: '16px',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <button
                        onClick={prevProof}
                        className="carousel-btn prev"
                        style={{
                            position: 'absolute',
                            left: '-15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'var(--primary)',
                            color: '#000',
                            border: 'none',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                        }}
                    >
                        ❮
                    </button>
                    <button
                        onClick={nextProof}
                        className="carousel-btn next"
                        style={{
                            position: 'absolute',
                            right: '-15px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'var(--primary)',
                            color: '#000',
                            border: 'none',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                            zIndex: 10,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
                        }}
                    >
                        ❯
                    </button>

                    {/* Dots indicator */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '1rem' }}>
                        {proofs.map((_, index) => (
                            <div
                                key={index}
                                onClick={() => setCurrentProof(index)}
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    background: currentProof === index ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                    <p style={{ fontSize: '1.1rem', color: '#aaa' }}>
                        "Enquanto tu duvidas, eles transferem. <span className="highlight-primary">Qual o teu próximo passo?</span>"
                    </p>
                </div>
            </section>

            {/* SEÇÃO: O DILEMA (IDIOTA SE NÃO COMPRAR) */}
            <section className="section-spacer">
                <div className="glass-panel" style={{ border: '2px dashed var(--secondary)', background: 'rgba(230, 57, 70, 0.05)' }}>
                    <h2 className="title" style={{ color: 'var(--secondary)' }}>A Pergunta de 1 Milhão:</h2>
                    <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                        O que é mais <span className="highlight-secondary">estúpido</span>?
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                        <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', opacity: 0.7 }}>
                            <p>❌ Gastar <strong>4.500 Kz</strong> em mulher ou em saldo que acaba em 2 dias e não te traz retorno nenhum.</p>
                        </div>
                        <div style={{ padding: '1.5rem', border: '1px solid var(--primary)', background: 'rgba(255, 215, 0, 0.1)', borderRadius: '12px' }}>
                            <p>✅ Investir os mesmos <strong>4.500 Kz</strong> num sistema validado que vai colocar <strong>50.000 Kz</strong> no teu bolso ainda esta semana.</p>
                        </div>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1.5rem', fontStyle: 'italic', color: '#ff3333' }}>
                        "Só um BURRO escolhe a primeira opção sabendo que a segunda existe."
                    </p>
                </div>
            </section>

            {/* SEÇÃO 5: A OFERTA AGRESSIVA */}
            <section id="offer-section" className="section-spacer">
                <div className="neon-box" style={{ background: 'rgba(0,0,0,0.95)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <span className="badge-offer">
                            Acesso Imediato - Oportunidade Única
                        </span>
                    </div>

                    <h2 className="title" style={{ fontSize: '2.2rem', marginBottom: '0.25rem' }}>Protocolo de Ativação 48H</h2>
                    <p style={{ textAlign: 'center', color: '#FFD700', marginBottom: '2rem', fontWeight: 'bold', fontSize: '1rem' }}>
                        "A Chave para o Teu Dinheiro no Bolso"
                    </p>

                    <ul style={{ listStyle: 'none', marginBottom: '2.5rem', fontSize: '1rem' }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--primary)', fontScale: '1.5', marginRight: '15px' }}>⚡</span>
                            <span>O Filtro de Oportunidades (Rápido e Brutal)</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--primary)', fontScale: '1.5', marginRight: '15px' }}>🔥</span>
                            <span>Scripts de Fecho que Vendem Sozinhos</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                            <span style={{ color: 'var(--primary)', fontScale: '1.5', marginRight: '15px' }}>📈</span>
                            <span>Calculadora de Lucro (0% de Erro)</span>
                        </li>
                    </ul>

                    <div style={{ textAlign: 'center', marginBottom: '2rem', background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '16px' }}>
                        <div style={{ fontSize: '1.1rem', color: '#888', marginBottom: '0.5rem' }}>Preço de Alguém Sem Visão: <span className="strike-through">30.000 Kz</span></div>
                        <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--primary)', textShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}>4.500 Kz</div>
                        <div style={{ fontSize: '0.9rem', color: '#E63946', fontWeight: 'bold', marginTop: '0.5rem' }}>OU O CONTINUAS POBRE.</div>
                    </div>

                    <a
                        href="https://www.clickpayon.com/checkout/5a9a012a-5a6a-4c38-ad11-b485a58d7848"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{
                            fontSize: '1.4rem',
                            padding: '1.5rem',
                            textTransform: 'uppercase',
                            fontWeight: '900',
                            letterSpacing: '1px',
                            textDecoration: 'none',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >
                        ATIVAR MEU PROTOCOLO AGORA 🚀
                    </a>
                    <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 'bold' }}>
                        ⚠️ Restam apenas 12 vagas com este preço promocional local.
                    </p>
                </div>
            </section>

            {/* SEÇÃO 6: FECHO COM GARANTIA */}
            < section style={{ textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }
            }>
                <h3 style={{ marginBottom: '1rem' }}>🛡️ Garantia de Ferro</h3>
                <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
                    "Tens 7 dias para aplicar. Se não sentires o poder da execução nas tuas mãos, eu devolvo cada Kwanza. O risco de falhar é meu.
                    Mas, se me provares que aplicaste tudo."
                </p>
            </section >

            {/* SEÇÃO 4: QUEBRA DE OBJEÇÕES */}
            < section className="section-spacer" >
                <h2 className="title" style={{ fontSize: '1.8rem' }}>Perguntas Frequentes</h2>

                {
                    [
                        { q: "Funciona se eu não tiver capital?", a: "Exatamente. O Protocolo ensina-te a validar a ideia usando a intenção de compra do cliente para gerar o teu primeiro capital." },
                        { q: "Tenho medo de falhar de novo...", a: "O medo vem da falta de método. Com o Protocolo, tu não 'tentas', tu testas. Se não faturar em 48h, deitas fora e passas para a próxima sem prejuízo." },
                        { q: "Preciso de ser um génio da tecnologia?", a: "Se sabes mandar um áudio no WhatsApp, tens toda a tecnologia necessária para dominar este sistema." }
                    ].map((item, idx) => (
                        <div key={idx} className={`accordion-item ${activeAccordion === idx ? 'active' : ''}`}>
                            <div className="accordion-header" onClick={() => toggleAccordion(idx)}>
                                {item.q}
                                <span>{activeAccordion === idx ? '−' : '+'}</span>
                            </div>
                            <div className="accordion-body">
                                {item.a}
                            </div>
                        </div>
                    ))
                }
            </section >

        </div >
    );
}
