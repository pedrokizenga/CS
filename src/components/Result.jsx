import React, { useEffect, useState } from 'react';

// For simplicity, we hardcode the status logic based on the user's request,
// which implies "Critical" is the main funnel outcome.
// Ideally, you'd calculate this based on answers.
const RESULTS = {
    critical: {
        status: "critical",
        themeClass: "theme-critical",
        title: "Executor com Bloqueio de Nível Crítico",
        description: "Você precisa de uma intervenção imediata. Os sintomas indicam que você tem todo o potencial, mas está \"travado\" no modo planejamento.",
        color: "#E63946"
    },
    moderate: {
        status: "moderate",
        themeClass: "theme-moderate",
        title: "Executor com Potencial Bloqueado",
        description: "Você tem iniciativa, mas está perdendo eficiência por falta de método.",
        color: "#FFD700"
    },
    safe: {
        status: "safe",
        themeClass: "theme-safe",
        title: "Executor Nato",
        description: "Você está no caminho certo, mas pode acelerar ainda mais.",
        color: "#2a9d8f"
    }
};

import logoImg from '../assets/logo.png';

export default function Result({ onContinue }) {
    // Simulating logic - defaulting to critical as per funnel design
    const [result, setResult] = useState(RESULTS.critical);

    return (
        <div style={{ width: '100%', maxWidth: '600px', paddingBottom: '2rem' }}>
            <div className={`glass-panel animate-enter ${result.themeClass}`} style={{ textAlign: 'center', padding: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <img src={logoImg} alt="Logo" style={{ height: '90px', objectFit: 'contain' }} />
                </div>
                <div style={{
                    background: `rgba(${parseInt(result.color.slice(1, 3), 16)}, ${parseInt(result.color.slice(3, 5), 16)}, ${parseInt(result.color.slice(5, 7), 16)}, 0.2)`,
                    border: `1px solid ${result.color}`,
                    borderRadius: '10px',
                    padding: '0.6rem 1rem',
                    marginBottom: '1.5rem',
                    display: 'inline-block'
                }}>
                    <h3 style={{ color: result.color, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                        ⚠️ Diagnóstico Final
                    </h3>
                </div>

                <h1 className="title" style={{ fontSize: 'clamp(1.4rem, 6vw, 2rem)', marginBottom: '0.75rem', lineHeight: '1.2' }}>
                    Perfil: <span style={{ color: '#ff3333', WebkitTextFillColor: '#ff3333', background: 'none' }}>{result.title}</span>
                </h1>

                <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem', opacity: 0.9, lineHeight: '1.5' }}>
                    {result.description}
                </p>

                {/* Custom Final Diagnosis Image */}
                <div style={{
                    position: 'relative',
                    width: '100%',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    marginBottom: '1.5rem',
                    background: 'rgba(255,255,255,0.05)',
                    minHeight: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <img
                        src="/src/assets/2.png"
                        alt="Diagnóstico Final"
                        style={{ width: '100%', display: 'block' }}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.innerHTML = '<p style="padding: 2rem; opacity: 0.5;">[Adicione diagnostico.png em src/assets]</p>';
                        }}
                    />
                </div>


                <button className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '1.2rem 1.5rem', textTransform: 'uppercase' }} onClick={onContinue}>
                    ACEDER AO PROTOCOLO DE ATIVAÇÃO 🚀
                </button>

                <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#888' }}>
                    Oferta disponível por <span className="highlight-secondary">tempo limitado</span>.
                </p>
            </div>
        </div>
    );
}
