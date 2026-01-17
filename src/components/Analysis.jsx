import React, { useEffect, useState } from 'react';

import logoImg from '../assets/logo.png';

export default function Analysis({ onComplete }) {
    const [text, setText] = useState("Analisando Respostas...");

    useEffect(() => {
        const timers = [
            setTimeout(() => setText("Verificando perfil de execução..."), 1500),
            setTimeout(() => setText("Calculando potencial de lucro..."), 3000),
            setTimeout(() => setText("Identificando bloqueios..."), 4500),
            setTimeout(() => onComplete(), 6000)
        ];
        return () => timers.forEach(clearTimeout);
    }, [onComplete]);

    return (
        <div style={{ width: '100%', maxWidth: '500px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <img src={logoImg} alt="Logo" style={{ height: '90px', objectFit: 'contain' }} />
            </div>

            <div className="glass-panel result-loader animate-enter" style={{ textAlign: 'center', padding: '2rem' }}>
                <div className="spinner"></div>
                <h2 style={{ fontSize: '1.25rem', marginTop: '1rem' }}>{text}</h2>
            </div>
        </div>
    );
}
