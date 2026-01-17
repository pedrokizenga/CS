import symptomsImg from '../assets/0.png';
import statsImg from '../assets/news_stats.png';

export const quizData = [
  {
    step: 1,
    type: 'welcome',
    question: "Você sente pelo menos 1 desses sintomas na sua vida profissional?",
    image: symptomsImg, // Support for image
    options: [
      { label: "SIM! SINTO PELO MENOS 1 DELES 😔", value: "yes", isNext: true }
    ]
  },
  {
    step: 2,
    type: 'multi_select',
    question: "Dos sintomas listados abaixo, quais mais te <span class='text-highlight-red'>impedem de fazer dinheiro HOJE</span>? Por favor, sinceridade!",
    options: [
      { label: "😓 Excesso de ideias sem execução", value: "excesso_ideias" },
      { label: "😫 Medo de arriscar e perder dinheiro", value: "medo_arriscar" },
      { label: "😴 Cansaço de trabalhar muito e ganhar pouco", value: "cansaco" },
      { label: "🤷‍♂️ Vontade excessiva de fazer mais um curso/formação", value: "curso_excessivo" },
      { label: "😖 Perda de foco constante", value: "perda_foco" },
      { label: "😞 Frustração ao ver outros terem sucesso", value: "frustracao" },
      { label: "🥱 Adiar tarefas importantes para amanhã", value: "adiar_tarefas" },
      { label: "🙁 Sensação de estar estagnado no mesmo lugar", value: "estagnado" },
    ],
    buttonText: "CONTINUAR"
  },
  {
    step: 3,
    type: 'informational_check',
    question: "Você foi exposto a alguma dessas situações?",
    items: [
      "📚 Leitura de livros teóricos que não ensinam a vender.",
      "📱 Consumo excessivo de vídeos de 'motivação' vazia.",
      "🍵 Conselhos de pessoas que nunca abriram um negócio.",
      "🏖️ Espera pelo 'momento perfeito' ou o 'sócio ideal.",
      "🥬 Planeamento excessivo em cadernos que ficam na gaveta.",
      "👨🏾‍💻 Cursos caros que só dão teoria e nada de prática."
    ],
    options: [
      { label: "SIM! JÁ FUI EXPOSTO", value: "yes", isNext: true }
    ]
  },
  {
    step: 4,
    type: 'single_select',
    question: "Você já tentou abrir um negócio de maneira séria nos <span class='text-highlight-yellow'>ÚLTIMOS 6 MESES</span>?",
    options: [
      { label: "😱 Não, ainda não tentei de verdade.", value: "no" },
      { label: "🙂 Sim, eu já tentei mas não tive lucro.", value: "yes_no_profit" }
    ]
  },
  {
    step: 5,
    type: 'single_select',
    question: "A <span class='text-highlight-red'>falta de dinheiro</span> atrapalha tua vida? Familiar, pessoal, liberdade...",
    options: [
      { label: "💔 Sim, muito", value: "yes_lot" },
      { label: "😕 Sim, eu já até acostumei com a falta de dinheiro", value: "yes_used_to" },
      { label: "😥 Se você não tivesse falado, eu nem saberia que isso era um bloqueio mental", value: "yes_subconscious" },
      { label: "😌 Não me atrapalha não", value: "no" }
    ]
  },
  {
    step: 6,
    type: 'single_select',
    image: statsImg,
    options: [
      { label: "SIM! JÁ FUI EXPOSTO", value: "yes", isNext: true }
    ]
  },
  {
    step: 7,
    question: "Concordas que fomos treinados para ser um <span class='text-highlight-red'>empregado</span> e não para abrir <span class='text-highlight-yellow'>nosso próprio negócio</span>?",
    type: "single_select",
    options: [
      { label: "😁 Sim, eu concordo mesmo!", value: "agree" },
      { label: "😕 Concordo em partes", value: "partial" }
    ]
  },
  {
    step: 8,
    question: "Você tem noção de que tua ideia está <span class='text-highlight-red'>morrendo</span> e o seu dinheiro indo para o bolso de outra pessoa a cada dia que <span class='text-highlight-red'>você não executa</span>?",
    type: "single_select",
    options: [
      { label: "😫 Sim, eu entendi a gravidade de continuar parado(a).", value: "understood" },
      { label: "😰 Não me importo com esse assunto", value: "dont_care" }
    ]
  },
  {
    step: 9,
    type: 'input',
    inputType: 'number',
    placeholder: "Valor em Kwanzas (ex: 50.000)",
    question: "Qual é o valor que você <span class='text-highlight-yellow'>deseja alcançar</span>? Por favor, seja sincero.",
    buttonText: "PRÓXIMO"
  },
  {
    step: 10,
    type: 'input',
    inputType: 'number',
    placeholder: "Ex: 2 horas por dia",
    question: "Sendo realista: quanto tempo você consegue da tua rotina pra parar de brincar e <span class='text-highlight-yellow'>começar a fazer dinheiro</span>?",
    buttonText: "PRÓXIMO"
  },
  {
    step: 11,
    type: 'single_select',
    question: "<span class='text-highlight-yellow'>Para quem tem o tempo contado:</span>  você prefere EXECUÇÃO EM 48H ou vai aceitar a lentidão dos <span class='text-highlight-red'>métodos tradicionais</span> que levam meses?",
    options: [
      { label: "😌 Execução em 48h é melhor", value: "yes" },
      { label: "😰 Não me importo com esse assunto", value: "no" }
    ]
  },
  {
    step: 12,
    type: 'single_select',
    question: "<span class='text-highlight-yellow'>O que pesa mais hoje:</span> o medo de lançar algo imperfeito ou a agonia de ver sua ideia morrer na tua mente <span class='text-highlight-red'>enquanto outros lucram</span>? Escolha seu lado.",
    options: [
      { label: "😫 Lançar algo imperfeito", value: "no" },
      { label: "😰 Gastar minha vida montando", value: "imagined" }
    ]
  }
];
