import React, { useState, useEffect } from 'react';
import { quizData } from '../data/quizData';
import logoImg from '../assets/logo.png';

export default function Quiz({ onFinish }) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [answers, setAnswers] = useState({});
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isTransitioning, setIsTransitioning] = useState(false);

    const currentStep = quizData[currentStepIndex];
    const progress = ((currentStepIndex + 1) / quizData.length) * 100;

    useEffect(() => {
        setSelectedOptions([]);
        setInputValue("");
        setIsTransitioning(false);
    }, [currentStepIndex]);

    const handleNext = (answerValue) => {
        setAnswers(prev => ({ ...prev, [currentStepIndex]: answerValue }));
        setIsTransitioning(true);

        setTimeout(() => {
            if (currentStepIndex < quizData.length - 1) {
                setCurrentStepIndex(prev => prev + 1);
            } else {
                onFinish(answers);
            }
        }, 300);
    };

    const handleMultiSelectToggle = (value) => {
        if (selectedOptions.includes(value)) {
            setSelectedOptions(prev => prev.filter(item => item !== value));
        } else {
            setSelectedOptions(prev => [...prev, value]);
        }
    };

    const renderContent = () => {
        const animationClass = isTransitioning ? 'animate-leave' : 'animate-enter';

        return (
            <div className={`step-content ${animationClass}`} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                {/* Header: Logo compacto e elegante */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <img src={logoImg} alt="Logo" style={{ height: '90px', objectFit: 'contain' }} />
                </div>

                <div className="progress-bar-container">
                    <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                </div>

                <h2 className="title" style={{ marginBottom: '2rem' }} dangerouslySetInnerHTML={{ __html: currentStep.question }}></h2>

                {/* Imagem do Passo: Ajustada para ser LEGÍVEL */}
                {currentStep.image && (
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                        <img
                            src={currentStep.image}
                            alt="Visual"
                            style={{
                                width: '100%',
                                maxWidth: '380px', // Aumentado para o texto da imagem aparecer
                                height: 'auto',
                                borderRadius: '12px',
                                objectFit: 'contain',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.4)'
                            }}
                        />
                    </div>
                )}

                {currentStep.description && (
                    <p style={{ marginBottom: '1.5rem', opacity: 0.8, textAlign: 'center', fontSize: '0.95rem' }}>
                        {currentStep.description}
                    </p>
                )}

                {/* Renderização dos Inputs/Botões conforme o tipo */}
                {currentStep.type === 'single_select' || currentStep.type === 'welcome' ? (
                    <div className={(currentStep.type === 'welcome' || (currentStep.type === 'single_select' && currentStep.options.length === 1)) ? '' : 'options-grid'} style={(currentStep.type === 'welcome' || (currentStep.type === 'single_select' && currentStep.options.length === 1)) ? { display: 'flex', justifyContent: 'center' } : {}}>
                        {currentStep.options.map((opt, idx) => (
                            <button
                                key={idx}
                                className={`btn ${(currentStep.type === 'welcome' || (currentStep.type === 'single_select' && currentStep.options.length === 1)) ? 'btn-primary' : 'btn-option'}`}
                                style={(currentStep.type === 'welcome' || (currentStep.type === 'single_select' && currentStep.options.length === 1)) ? { width: 'auto', minWidth: '280px', padding: '1.2rem 2rem' } : {}}
                                onClick={() => handleNext(opt.value)}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </div>
                ) : currentStep.type === 'multi_select' ? (
                    <>
                        <div className="options-grid">
                            {currentStep.options.map((opt, idx) => (
                                <button
                                    key={idx}
                                    className={`btn btn-option ${selectedOptions.includes(opt.value) ? 'selected' : ''}`}
                                    onClick={() => handleMultiSelectToggle(opt.value)}
                                >
                                    <span style={{ marginRight: '10px' }}>{selectedOptions.includes(opt.value) ? '✅' : '⬜'}</span>
                                    {opt.label}
                                </button>
                            ))}
                        </div>
                        <button
                            className="btn btn-primary"
                            style={{ marginTop: '1rem' }}
                            onClick={() => handleNext(selectedOptions)}
                            disabled={selectedOptions.length === 0}
                        >
                            {currentStep.buttonText || "CONTINUAR"}
                        </button>
                    </>
                ) : currentStep.type === 'informational_check' ? (
                    <>
                        <div style={{ textAlign: 'left', marginBottom: '1.2rem', background: 'rgba(0,0,0,0.2)', padding: '0.8rem', borderRadius: '12px', fontSize: '0.9rem' }}>
                            <ul style={{ listStyle: 'none' }}>
                                {currentStep.items.map((item, idx) => (
                                    <li key={idx} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'start' }}>
                                        <span style={{ marginRight: '0.5rem' }}>👉</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {currentStep.options.map((opt, idx) => (
                            <button
                                key={idx}
                                className="btn btn-primary"
                                onClick={() => handleNext(opt.value)}
                            >
                                {opt.label}
                            </button>
                        ))}
                    </>
                ) : currentStep.type === 'input' ? (
                    <>
                        <input
                            type={currentStep.inputType}
                            placeholder={currentStep.placeholder}
                            className="input-field"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button
                            className="btn btn-primary"
                            onClick={() => handleNext(inputValue)}
                            disabled={!inputValue}
                        >
                            {currentStep.buttonText || "PRÓXIMO"}
                        </button>
                    </>
                ) : null}
            </div>
        );
    };

    return (
        <div className="glass-panel quiz-responsive-container" style={{ width: '100%', margin: '0 auto' }}>
            {renderContent()}
        </div>
    );
}