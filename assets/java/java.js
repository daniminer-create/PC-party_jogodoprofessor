/* PC PARTY — systems for questions, rounds, minigames, events and the shop. */

const difficultySettings = {
    easy: { label: "🟢 FÁCIL", points: 100, timeScale: 1.25, extra: 0 },
    medium: { label: "🟡 MÉDIO", points: 200, timeScale: 1, extra: 1 },
    hard: { label: "🔴 DIFÍCIL", points: 300, timeScale: 0.75, extra: 2 }
};

function question(difficulty, title, description, answers, correctIndex, minigame) {
    return {
        difficulty,
        title,
        description,
        options: answers.map((text, index) => ({
            letter: String.fromCharCode(65 + index),
            text,
            id: `answer-${index}`
        })),
        answer: `answer-${correctIndex}`,
        minigame
    };
}

const questions = [
    question("easy", "Meu PC está muito lento.", "Tudo demora para abrir e às vezes trava.", ["Verificar espaço livre e programas iniciados com o Windows", "Aumentar o brilho do monitor", "Trocar o cabo HDMI", "Desligar o teclado"], 0, "storage"),
    question("medium", "O computador desliga durante os jogos.", "Acontece depois de alguns minutos com jogos pesados.", ["Limpar o histórico do navegador", "Verificar temperaturas e refrigeração", "Reinstalar a impressora", "Trocar o mouse"], 1, "heat"),
    question("easy", "Anúncios estranhos aparecem no navegador.", "Novas abas abrem sem eu clicar em nada.", ["Spyware/adware", "Pouca memória de vídeo", "Cabo de rede curto", "Monitor descalibrado"], 0, "spyware"),
    question("medium", "O PC não reconhece um pente de RAM.", "O módulo funciona às vezes, mas desaparece após reiniciar.", ["Verificar encaixe, compatibilidade e slot", "Apagar arquivos temporários", "Trocar o DNS", "Limpar o mouse"], 0, "ram"),
    question("easy", "O disco está quase sem espaço.", "O Windows avisa que não há espaço para atualizações.", ["Apagar arquivos pessoais sem conferir", "Identificar arquivos temporários e antigos antes de excluir", "Excluir a pasta Windows", "Desligar a proteção contra vírus"], 1, "storage"),
    question("medium", "A ventoinha faz muito barulho.", "O ruído aumenta quando abro jogos ou programas pesados.", ["Verificar poeira, ventoinhas e temperaturas", "Formatar o disco imediatamente", "Alterar o DNS", "Desativar o teclado"], 0, "heat"),
    question("hard", "A CPU fica em 95°C mesmo em tarefas leves.", "O cooler está instalado, mas a temperatura não baixa.", ["Verificar contato do cooler, pasta térmica e fluxo de ar", "Aumentar a resolução do monitor", "Instalar mais jogos", "Trocar o cabo USB"], 0, "heat"),
    question("easy", "Meu SSD novo não aparece no Explorador.", "Ele aparece na BIOS, mas não tem uma letra de unidade.", ["Inicializar/particionar o disco no gerenciamento de discos", "Apagar o System32", "Atualizar o papel de parede", "Trocar o roteador"], 0, "storage"),
    question("medium", "Um HDD faz cliques e demora para abrir arquivos.", "Os arquivos importantes ainda estão acessíveis.", ["Fazer backup imediatamente e diagnosticar a saúde do disco", "Desfragmentar repetidamente antes do backup", "Instalar mais RAM", "Limpar a tela"], 0, "backup"),
    question("hard", "A BIOS não detecta o SSD M.2.", "O modelo da placa-mãe tem mais de um slot M.2.", ["Conferir compatibilidade SATA/NVMe, slot compartilhado e encaixe", "Alterar o idioma do Windows", "Trocar a impressora", "Apagar os drivers de vídeo"], 0, "boot"),
    question("easy", "O monitor diz 'sem sinal'.", "O computador parece ligado, mas a tela fica preta.", ["Conferir entrada selecionada e cabo de vídeo", "Comprar outro teclado", "Esvaziar a lixeira", "Alterar o DNS"], 0, "cables"),
    question("medium", "O computador liga, mas não inicia o Windows.", "A mensagem é 'Boot device not found'.", ["Conferir disco detectado e ordem de boot na UEFI", "Aumentar a memória virtual", "Limpar a tela", "Trocar o cabo Ethernet"], 0, "boot"),
    question("hard", "Após uma atualização, o PC entra em loop de inicialização.", "O modo de segurança ainda pode ser acessado.", ["Usar recuperação do Windows para remover a atualização problemática", "Formatar sem salvar nada", "Remover a bateria do mouse", "Desativar o monitor"], 0, "boot"),
    question("medium", "A fonte faz um estalo e o PC apagou.", "Há cheiro de queimado vindo da parte traseira.", ["Desligar da tomada e não ligar novamente; avaliar/substituir a fonte", "Abrir a fonte ligada para olhar", "Trocar o DNS", "Continuar jogando"], 0, "boot"),
    question("easy", "O Wi-Fi conecta, mas nenhum site abre.", "Outros dispositivos também estão sem internet.", ["Verificar modem/roteador e conexão do provedor", "Trocar a pasta térmica", "Instalar mais RAM", "Limpar os arquivos pessoais"], 0, "cables"),
    question("medium", "Sites abrem pelo IP, mas não pelo nome.", "A conexão está ativa e ping para IP funciona.", ["Investigar resolução DNS e limpar o cache DNS", "Trocar o cabo do monitor", "Aumentar a memória RAM", "Formatar a impressora"], 0, "boot"),
    question("hard", "A rede cai quando grandes arquivos são enviados.", "O cabo está conectado, mas o link oscila.", ["Verificar cabo/conectores, erros da interface e negociação de velocidade", "Excluir os arquivos enviados", "Trocar a GPU", "Alterar o brilho"], 0, "cables"),
    question("easy", "O teclado USB não responde.", "A porta frontal não funciona, mas as traseiras funcionam.", ["Testar outra porta e verificar conexão/cabeamento frontal", "Reinstalar o Windows imediatamente", "Trocar o monitor", "Liberar espaço no SSD"], 0, "cables"),
    question("medium", "A impressora aparece como offline.", "Ela está conectada à mesma rede do computador.", ["Verificar alimentação, rede/fila de impressão e impressora padrão", "Trocar a memória RAM", "Desativar o firewall sem verificar", "Excluir a pasta Documentos"], 0, "boot"),
    question("easy", "O mouse fica desconectando.", "O problema começou após ligar um hub USB sem alimentação.", ["Testar outra porta e verificar energia/cabo do hub", "Mudar o DNS", "Apagar arquivos antigos", "Atualizar a BIOS sem necessidade"], 0, "cables"),
    question("medium", "O driver de vídeo parou de funcionar.", "O problema começou depois de instalar uma versão nova.", ["Reverter ou reinstalar o driver compatível do fabricante", "Limpar a lixeira", "Desativar o áudio", "Trocar o cabo de energia"], 0, "boot"),
    question("easy", "Um antivírus encontrou um arquivo suspeito.", "O arquivo veio de um anexo que eu não esperava.", ["Isolar/quarentenar e verificar a origem sem executar", "Abrir como administrador", "Enviar para todos os contatos", "Desativar o antivírus"], 0, "virus"),
    question("medium", "Meus arquivos mudaram de extensão e não abrem.", "Uma mensagem exige pagamento para recuperá-los.", ["Desconectar da rede, isolar o equipamento e restaurar backup seguro", "Pagar e executar o anexo", "Apagar os backups", "Desativar as atualizações"], 0, "backup"),
    question("hard", "Vários PCs da rede estão infectados ao mesmo tempo.", "O malware se espalha sem ação direta do usuário.", ["Isolar máquinas e investigar um worm e sua propagação na rede", "Trocar a resolução de tela", "Desfragmentar cada disco", "Atualizar o papel de parede"], 0, "worms"),
    question("medium", "Um programa desconhecido envia dados em segundo plano.", "O tráfego continua mesmo sem o navegador aberto.", ["Investigar processos/conexões e verificar spyware", "Aumentar o brilho", "Limpar a ventoinha do monitor", "Trocar o cabo HDMI"], 0, "spyware"),
    question("hard", "Um instalador parece legítimo, mas instala outro programa escondido.", "O arquivo veio de um site não oficial.", ["Tratar como possível trojan e analisar sem executar", "Executar para confirmar", "Desativar as proteções", "Apagar os documentos"], 0, "virus"),
    question("easy", "Recebi um e-mail pedindo a senha com urgência.", "O link parece parecido com o endereço do banco.", ["Não clicar; conferir o domínio e reportar como phishing", "Responder com a senha", "Baixar o anexo", "Encaminhar para colegas"], 0, "spyware"),
    question("medium", "O navegador mostra extensões que não instalei.", "A página inicial também mudou sozinha.", ["Remover extensões suspeitas e fazer varredura antimalware", "Aumentar o volume", "Alterar a taxa de atualização", "Desligar o roteador para sempre"], 0, "spyware"),
    question("easy", "O PC ficou lento depois de baixar um 'otimizador'.", "O aplicativo não é de um fabricante conhecido.", ["Desinstalar com cuidado e verificar malware/adware", "Instalar outros otimizadores desconhecidos", "Desativar o firewall", "Formatar o monitor"], 0, "virus"),
    question("medium", "Os arquivos da empresa precisam ser protegidos.", "Há documentos únicos e espaço limitado no destino.", ["Selecionar dados importantes e validar uma cópia segura", "Copiar apenas atalhos", "Incluir executáveis suspeitos", "Guardar a única cópia no mesmo disco"], 0, "backup"),
    question("hard", "A cópia de segurança concluiu, mas ninguém testou a restauração.", "Um backup nunca foi usado para recuperar arquivos.", ["Fazer teste de restauração e manter cópia isolada/versionada", "Assumir que está íntegro", "Apagar a cópia anterior", "Guardar senha junto aos arquivos"], 0, "backup"),
    question("easy", "O gabinete está cheio de poeira.", "O computador está desligado e desconectado.", ["Limpar com cuidado usando ar adequado e evitar tocar nos componentes", "Usar líquido diretamente na placa", "Limpar ligado com aspirador doméstico", "Cobrir as entradas de ar"], 0, "heat"),
    question("medium", "Depois de trocar a pasta térmica, a CPU aquece mais.", "O cooler foi removido e reinstalado.", ["Conferir quantidade, montagem e pressão uniforme do cooler", "Aplicar pasta em todos os conectores", "Desativar todas as ventoinhas", "Apagar a BIOS"], 0, "heat"),
    question("hard", "O PC reinicia ao iniciar um jogo e a GPU está estável.", "O consumo de energia aumenta muito durante o jogo.", ["Verificar capacidade, qualidade e conectores da fonte sob carga", "Trocar o teclado", "Reinstalar a impressora", "Apagar arquivos temporários"], 0, "boot"),
    question("medium", "A placa-mãe não dá vídeo após uma montagem.", "Os LEDs acendem, mas a tela permanece preta.", ["Rever alimentação ATX/CPU, montagem e códigos de diagnóstico", "Limpar o histórico do navegador", "Trocar o DNS", "Formatar o SSD"], 0, "cables"),
    question("hard", "Um módulo de RAM funciona sozinho, mas não em dual-channel.", "A placa tem quatro slots e manual com pares recomendados.", ["Instalar os módulos nos slots pareados indicados no manual", "Usar qualquer slot e forçar o módulo", "Apagar a partição EFI", "Trocar o cabo de rede"], 0, "ram"),
    question("easy", "O Windows pede espaço para atualizar.", "Há muitos arquivos temporários e downloads antigos.", ["Revisar e remover itens dispensáveis, preservando dados pessoais", "Excluir System32", "Desativar atualizações permanentemente", "Apagar a pasta de drivers"], 0, "storage"),
    question("medium", "Um dispositivo USB não é reconhecido.", "O mesmo dispositivo funciona em outro computador.", ["Testar porta/cabo, Gerenciador de Dispositivos e driver", "Trocar a GPU", "Mudar o DNS", "Desligar o monitor"], 0, "cables"),
    question("easy", "O PC demora para iniciar com muitos aplicativos.", "Vários programas abrem automaticamente ao entrar no Windows.", ["Revisar aplicativos de inicialização e desativar os desnecessários", "Excluir arquivos do sistema", "Trocar a fonte sem diagnóstico", "Apagar todos os drivers"], 0, "boot"),
    question("hard", "A UEFI detecta a unidade, mas o sistema operacional sumiu.", "O problema apareceu após alterar configurações de inicialização.", ["Conferir modo UEFI/Legacy, ordem de boot e recuperação do carregador", "Apagar os dados de backup", "Trocar o mouse", "Desativar a memória RAM"], 0, "boot"),
    question("medium", "Um processo chamado 'svch0st.exe' consome rede.", "O nome lembra um processo do Windows, mas há um zero no nome.", ["Verificar caminho, assinatura e comportamento; não confiar só no nome", "É sempre legítimo porque parece do Windows", "Desligar o monitor", "Desfragmentar a impressora"], 0, "spyware"),
    question("hard", "A ventoinha da GPU para e a temperatura dispara.", "O computador ainda está ligado.", ["Interromper carga e verificar ventoinha, obstruções e controle térmico", "Continuar usando até desligar", "Apagar os arquivos do jogo", "Aumentar a resolução"], 0, "heat"),
    question("easy", "O computador foi infectado por um vírus de pendrive.", "O mesmo pendrive precisa ser usado para recuperar documentos.", ["Isolar, analisar e limpar o dispositivo em ambiente protegido", "Conectar em todos os PCs", "Executar todos os arquivos", "Desativar o antivírus"], 0, "virus"),
    question("medium", "Há cabos desconectados após mover o gabinete.", "O PC não liga e o botão frontal parece solto.", ["Conferir energia e conectores do painel frontal pelo manual da placa", "Formatar o SSD", "Mudar o DNS", "Remover o cooler"], 0, "cables"),
    question("hard", "Após uma queda de energia, arquivos recentes sumiram.", "Havia uma cópia automática configurada.", ["Verificar integridade do disco e recuperar da cópia validada", "Continuar gravando no disco defeituoso", "Apagar as versões anteriores", "Desativar o backup"], 0, "backup"),
    question("medium", "O sistema congela quando a memória fica cheia.", "O Gerenciador de Tarefas mostra uso elevado de RAM.", ["Identificar o processo, reduzir carga e avaliar capacidade/diagnóstico da RAM", "Apagar o System32", "Trocar o cabo HDMI", "Desativar a ventoinha"], 0, "ram"),
    question("hard", "A placa-mãe mostra erro de bateria CMOS.", "Data, hora e configurações da UEFI se perdem ao desligar.", ["Substituir a bateria CMOS e reconfigurar a UEFI", "Trocar o roteador", "Limpar os arquivos do usuário", "Instalar um driver de impressora"], 0, "boot"),
    question("easy", "Quero liberar espaço sem perder fotos.", "A pasta Downloads contém itens antigos e repetidos.", ["Revisar os arquivos e fazer backup antes de remover os dispensáveis", "Apagar Documentos inteiro", "Excluir System32", "Desativar o SSD"], 0, "storage"),
    question("medium", "O PC não acessa um compartilhamento de rede.", "A internet funciona, mas o nome do servidor não resolve.", ["Verificar DNS, endereço e permissões do compartilhamento", "Trocar pasta térmica", "Aumentar a memória de vídeo", "Desligar a impressora"], 0, "cables")
];

const items = [
    { id: "dirty", icon: "🖌️", name: "Tela Suja", price: 60, description: "Atrasa visualmente o próximo minigame de um rival." },
    { id: "freeze", icon: "🧊", name: "Congelamento", price: 100, description: "Imobiliza um rival por alguns segundos no próximo minigame." },
    { id: "slow", icon: "🐌", name: "PC de 2008", price: 90, description: "Deixa o próximo minigame de um rival mais difícil." },
    { id: "virus", icon: "🦠", name: "Vírus", price: 80, description: "Adiciona ameaças ao próximo minigame de um rival." },
    { id: "ups", icon: "🔋", name: "Nobreak", price: 110, description: "Bloqueia uma queda ou pico de energia que atingir você." },
    { id: "antivirus", icon: "🛡️", name: "Antivírus", price: 100, description: "Remove ameaças extras e reduz worms no próximo minigame." },
    { id: "backup", icon: "💾", name: "Backup", price: 90, description: "Protege você de uma penalidade de pontuação." },
    { id: "clean", icon: "🧹", name: "Limpeza Profunda", price: 70, description: "Remove obstáculos extras do seu próximo minigame." }
];

const $ = id => document.getElementById(id);
const game = {
    players: [],
    currentPlayer: 0,
    round: 1,
    maxRounds: 8,
    currentProblem: null,
    waiting: false,
    roundQuestions: [],
    eventsProcessedRound: 0,
    global: {},
    timers: [],
    timeouts: [],
    miniFinished: false,
    diagnosisAnswered: false,
    ramTotal: 0,
    ramTarget: 0,
    playerEvent: "",
    mysteryResolved: false,
    devAuthorized: false,
    answerTimeLimit: 25,
    answerTimeRemaining: 25,
    answerTimer: null
};

const positiveItemIds = ["ups", "antivirus", "backup", "clean"];

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(screen => screen.classList.remove("active"));
    const screen = $(id);
    if (!screen) throw new Error(`Tela não encontrada: ${id}`);
    screen.classList.add("active");
}

function startGame(numberOfPlayers) {
    clearMinigameTasks();
    stopAnswerTimer();
    stopAnswerTimer();
    game.players = Array.from({ length: numberOfPlayers }, (_, index) => ({
        name: `Player ${index + 1}`,
        score: 0,
        credits: 100,
        debuffs: [],
        inventory: [],
        activeItems: []
    }));
    game.currentPlayer = 0;
    game.round = 1;
    game.eventsProcessedRound = 0;
    game.global = {};
    game.devAuthorized = false;
    pauseAnswerTimer();
    loadRound();
    showScreen("game");
}

function drawQuestion() {
    // Keep one shuffled pool for the whole round so players do not repeat questions.
    if (!game.roundQuestions.length) {
        const unused = questions.filter(item => !game.roundQuestions.includes(item));
        game.roundQuestions = shuffle(unused.length ? unused : questions.slice());
    }
    return game.roundQuestions.pop();
}

function shuffle(array) {
    const result = [...array];
    for (let index = result.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
}

function loadRound() {
    stopAnswerTimer();
    game.waiting = false;
    game.miniFinished = false;
    game.diagnosisAnswered = false;
    game.playerEvent = "";
    game.mysteryResolved = false;
    game.playerEffects = { timerPenalty: 0 };
    $("message").innerHTML = "";
    const player = game.players[game.currentPlayer];
    if (game.eventsProcessedRound !== game.round) {
        game.eventsProcessedRound = game.round;
        triggerGlobalEvent();
    }
    game.currentProblem = drawQuestion();
    if (Math.random() < 0.15) triggerPlayerEvent(player);

    $("round").textContent = `${game.round} / ${game.maxRounds}`;
    $("currentPlayer").textContent = player.name;
    $("problemTitle").textContent = game.currentProblem.title;
    $("problemDescription").textContent = game.currentProblem.description;
    renderDifficulty();
    $("diagnostic").classList.remove("hidden");
    $("minigame").classList.add("hidden");
    $("nextButton").classList.add("hidden");
    renderOptions();
    renderScoreboard();
    applyCustomerEvent();
    startAnswerTimer();
}

function renderDifficulty() {
    let indicator = $("difficultyBadge");
    if (!indicator) {
        indicator = document.createElement("div");
        indicator.id = "difficultyBadge";
        indicator.className = "difficulty-badge";
        $("problemTitle").insertAdjacentElement("afterend", indicator);
    }
    const settings = difficultySettings[game.currentProblem.difficulty];
    indicator.textContent = `${settings.label} — ${settings.points} PONTOS`;
}

function renderScoreboard() {
    $("scoreboard").innerHTML = "";
    const effectNames = {
        dirty: "🖌️ Tela Suja",
        freeze: "🧊 Congelamento",
        slow: "🐌 PC lento",
        virus: "🦠 Pop-ups",
        "global-virus": "🦠 Ataque global",
        outage: "⚡ Queda de energia"
    };
    game.players.forEach((player, index) => {
        const div = document.createElement("div");
        div.className = "col-6 col-md-3";
        const pendingEffects = player.debuffs.map(effect => effectNames[effect]).filter(Boolean);
        div.innerHTML = `<div class="player-card ${index === game.currentPlayer ? "current" : ""}">
            <div class="player-name">${index === game.currentPlayer ? "🔧 " : ""}${player.name}</div>
            <div class="score">${player.score} pts</div>
            <div class="credits">💰 ${player.credits}</div>
            ${pendingEffects.length ? `<small class="pending-effects">Próximo minigame: ${pendingEffects.join(", ")}</small>` : ""}
            <small class="inventory-label">${player.inventory.length + player.activeItems.length ? `🎒 ${player.inventory.length + player.activeItems.length} item(ns) · ${player.activeItems.length} ativo(s)` : "🎒 Sem itens"}</small>
        </div>`;
        $("scoreboard").appendChild(div);
    });
}

function renderOptions() {
    $("options").innerHTML = "";
    game.currentProblem.options.forEach(option => {
        const div = document.createElement("div");
        div.className = "col-12 col-md-6";
        const button = document.createElement("button");
        button.className = "option";
        button.disabled = game.playerEvent === "mystery" && !game.mysteryResolved;
        button.innerHTML = `<span class="option-letter">${option.letter}</span><strong>${option.text}</strong>`;
        button.addEventListener("click", () => chooseDiagnosis(option.id));
        div.appendChild(button);
        $("options").appendChild(div);
    });
}

function adjustScore(player, amount, allowShield = true) {
    if (amount < 0 && allowShield && consumeItem(player, "backup")) {
        return { amount: 0, message: "💾 Seu Backup bloqueou a penalidade!" };
    }
    player.score = Math.max(0, player.score + amount);
    return { amount, message: "" };
}

function startAnswerTimer() {
    game.answerTimeRemaining = game.answerTimeLimit;
    updateAnswerTimer();
    resumeAnswerTimer();
}

function resumeAnswerTimer() {
    if (game.answerTimeRemaining <= 0 || game.answerTimer || game.diagnosisAnswered || game.waiting) return;
    game.answerTimer = setInterval(() => {
        game.answerTimeRemaining = Math.max(0, game.answerTimeRemaining - 1);
        updateAnswerTimer();
        if (game.answerTimeRemaining === 0) stopAnswerTimer();
    }, 1000);
}

function stopAnswerTimer() {
    if (game.answerTimer) {
        clearInterval(game.answerTimer);
        game.timers = game.timers.filter(timer => timer !== game.answerTimer);
        game.answerTimer = null;
    }
}

function pauseAnswerTimer() {
    stopAnswerTimer();
}

function updateAnswerTimer() {
    const time = $("answerTime");
    const bonus = $("speedBonus");
    const fill = $("answerTimerFill");
    if (!time || !bonus || !fill) return;
    const availableBonus = Math.floor(100 * game.answerTimeRemaining / game.answerTimeLimit);
    time.textContent = game.answerTimeRemaining;
    bonus.textContent = availableBonus;
    fill.style.width = `${game.answerTimeRemaining / game.answerTimeLimit * 100}%`;
    fill.classList.toggle("timer-low", game.answerTimeRemaining <= 7);
}

function chooseDiagnosis(choice) {
    if (game.waiting || game.miniFinished || game.diagnosisAnswered) return;
    game.diagnosisAnswered = true;
    stopAnswerTimer();
    const player = game.players[game.currentPlayer];
    if (choice !== game.currentProblem.answer) {
        const penalty = adjustScore(player, -50);
        player.credits = Math.max(0, player.credits - 10);
        const penaltyText = penalty.amount ? "−50 pontos" : "seu Backup bloqueou a perda de pontos";
        $("message").innerHTML = `<div class="alert alert-danger score-loss">❌ Diagnóstico errado! ${penaltyText} e −10 créditos. ${penalty.message}</div>`;
        renderScoreboard();
        endRound();
        return;
    }
    const basePoints = difficultySettings[game.currentProblem.difficulty].points;
    const speedBonus = Math.floor(100 * game.answerTimeRemaining / game.answerTimeLimit);
    const points = basePoints + speedBonus;
    player.score += points;
    $("diagnostic").classList.add("hidden");
    $("minigame").classList.remove("hidden");
    $("message").innerHTML = `<div class="alert alert-success score-gain">✅ Diagnóstico certo! +${basePoints} pontos da pergunta${speedBonus ? ` e +${speedBonus} de bônus por rapidez` : ""}. Total: <strong>+${points} pontos</strong>.</div>`;
    renderScoreboard();
    startMinigame(game.currentProblem.minigame);
}

function startMinigame(type) {
    game.miniFinished = false;
    const player = game.players[game.currentPlayer];
    const debuffs = player.debuffs.splice(0);
    if (debuffs.includes("global-virus")) type = "virus";
    game.activeDebuffs = debuffs;
    game.activeDebuffs.push(...(game.global.virusAttack ? ["virus"] : []));
    game.global.virusAttack = false;
    game.playerEffects = {
        dirty: debuffs.includes("dirty"),
        freeze: debuffs.includes("freeze"),
        slow: debuffs.includes("slow"),
        virus: debuffs.includes("virus") || debuffs.includes("global-virus") || Boolean(game.global.extraViruses),
        antivirus: (type === "virus" || type === "worms") && consumeItem(player, "antivirus"),
        clean: consumeItem(player, "clean"),
        timerPenalty: (debuffs.includes("outage") ? 5 : 0) + (game.global.timerPenalty || 0) + (game.playerEvent === "heat" ? 3 : 0),
        internet: game.playerEvent === "internet"
    };
    game.global.timerPenalty = 0;
    const screen = $("minigame");
    screen.classList.toggle("dirty-screen", game.playerEffects.dirty);
    if (game.playerEffects.freeze) {
        game.freezePending = true;
    }
    const launch = () => {
        if (type === "virus") virusGame();
        else if (type === "storage") storageGame();
        else if (type === "heat") heatGame();
        else if (type === "ram") ramGame();
        else if (type === "spyware") spywareGame();
        else if (type === "worms") wormsGame();
        else if (type === "cables") cablesGame();
        else if (type === "boot") bootGame();
        else if (type === "backup") backupGame();
        else finishMinigame(false, 0, "Minigame não encontrado.");
        if (game.playerEffects.virus && type !== "virus") spawnSabotagePopups();
    };
    if (game.playerEffects.freeze) {
        $("message").insertAdjacentHTML("beforeend", '<div class="event-banner event-warning">🧊 Seu computador travou por alguns instantes...</div>');
        launch();
        const blocker = document.createElement("div");
        blocker.className = "freeze-overlay";
        blocker.textContent = "🧊 Sistema congelado! Aguarde...";
        $("minigame").appendChild(blocker);
        game.timeouts.push(setTimeout(() => blocker.remove(), 1800));
    }
    else launch();
}

function clearMinigameTasks() {
    game.timers.forEach(clearInterval);
    game.timeouts.forEach(clearTimeout);
    game.timers = [];
    game.timeouts = [];
}

function finishMinigame(success, bonus = 0, customMessage = "", suppressPenalty = false) {
    if (game.miniFinished) return;
    game.miniFinished = true;
    clearMinigameTasks();
    const player = game.players[game.currentPlayer];
    const result = success ? Math.max(0, Math.min(300, bonus)) : 0;
    let eventMessage = "";
    if (success) {
        player.score += result;
        player.credits += 35 + Math.floor(result / 4);
        eventMessage = `🏆 Minigame concluído! +${result} pontos e +${35 + Math.floor(result / 4)} créditos.`;
    } else if (!suppressPenalty) {
        const adjustment = adjustScore(player, -50);
        eventMessage = `⚠️ Serviço incompleto: −50 pontos. ${adjustment.message}`;
    }
    $("minigame").classList.remove("dirty-screen");
    $("minigame").querySelectorAll(".freeze-overlay").forEach(element => element.remove());
    $("message").innerHTML = `<div class="alert ${success ? "alert-success score-gain" : "alert-warning score-loss"}">${customMessage || eventMessage}</div>`;
    renderScoreboard();
    endRound();
}

function endRound() {
    game.waiting = true;
    $("nextButton").classList.remove("hidden");
}

function nextRound() {
    if (!game.waiting) return;
    clearMinigameTasks();
    if (game.currentPlayer + 1 < game.players.length) {
        game.currentPlayer++;
    } else {
        game.currentPlayer = 0;
        game.round++;
        if (game.round > game.maxRounds) {
            finishGame();
            return;
        }
        game.roundQuestions = [];
    }
    loadRound();
}

function showMinigame(title, instructions, body) {
    $("minigame").innerHTML = `<div class="text-center"><h3>${title}</h3><p>${instructions}</p>${body}</div>`;
}

function difficultyCount(easy, medium, hard) {
    const difficulty = game.currentProblem.difficulty;
    return difficulty === "easy" ? easy : difficulty === "medium" ? medium : hard;
}

function timerSeconds(base) {
    const settings = difficultySettings[game.currentProblem.difficulty];
    return Math.max(5, Math.floor(base * settings.timeScale) - (game.playerEffects.timerPenalty || 0) - (game.playerEffects.slow ? 3 : 0));
}

function virusGame() {
    const required = difficultyCount(5, 7, 9) + (game.playerEffects.virus ? 2 : 0);
    const decoys = Math.max(0, difficultyCount(1, 3, 5) - (game.playerEffects.antivirus || game.playerEffects.clean ? 1 : 0));
    const seconds = timerSeconds(22);
    showMinigame("🦠 Caça aos vírus", `Feche ${required} alertas maliciosos e não feche os avisos legítimos. Tempo: <strong id="virusTime">${seconds}</strong>s.`,
        `<div id="virusArena" class="minigame-screen virus-arena"></div><p>Ameaças removidas: <strong id="virusCount">0</strong> / ${required}</p>`);
    let count = 0;
    let remaining = seconds;
    let spawnedDecoys = 0;
    const arena = $("virusArena");
    function spawn() {
        if (game.miniFinished) return;
        const isDecoy = spawnedDecoys < decoys && Math.random() < 0.32;
        if (isDecoy) spawnedDecoys++;
        const popup = document.createElement("button");
        popup.className = `virus-popup ${isDecoy ? "legit-popup" : ""}`;
        popup.style.left = `${Math.random() * 72}%`;
        popup.style.top = `${Math.random() * 65}%`;
        popup.textContent = isDecoy ? "✅ Atualização confiável — ignorar" : "⚠️ ALERTA! Ameaça detectada — remover";
        let removed = false;
        const removePopup = () => {
            if (removed || game.miniFinished) return;
            removed = true;
            popup.remove();
            if (isDecoy) {
                game.timeouts.push(setTimeout(spawn, 250));
            }
        };
        popup.addEventListener("click", () => {
            if (isDecoy) {
                removePopup();
                return;
            }
            removed = true;
            count++;
            $("virusCount").textContent = count;
            popup.remove();
            if (count >= required) finishMinigame(true, 120 + count * 10);
            else spawn();
        });
        arena.appendChild(popup);
        if (isDecoy) {
            game.timeouts.push(setTimeout(removePopup, 2400));
        }
    }
    spawn();
    game.timers.push(setInterval(() => {
        remaining--;
        $("virusTime").textContent = remaining;
        if (remaining <= 0) finishMinigame(false, 0, "⏰ Os pop-ups tomaram conta do sistema!");
    }, 1000));
}

function spawnSabotagePopups() {
    const total = game.playerEffects.virus ? 2 : 0;
    const arena = $("minigame").querySelector(".minigame-screen") || $("minigame");
    let shown = 0;
    const showPopup = () => {
        if (game.miniFinished || shown >= total || !arena.isConnected) return;
        shown++;
        const popup = document.createElement("button");
        popup.className = "virus-popup sabotage-popup";
        popup.style.left = `${12 + Math.random() * 55}%`;
        popup.style.top = `${12 + Math.random() * 48}%`;
        popup.textContent = "🦠 ALERTA FALSO! Feche para continuar";
        popup.addEventListener("click", () => {
            popup.remove();
            if (shown < total) game.timeouts.push(setTimeout(showPopup, 1200));
        }, { once: true });
        arena.appendChild(popup);
        game.timeouts.push(setTimeout(() => {
            if (popup.isConnected) {
                popup.remove();
                if (shown < total) showPopup();
            }
        }, 5000));
    };
    showPopup();
}

const storageVersions = [
    [
        ["📁", "Documentos", true, true], ["📁", "Downloads", true, true], ["📁", "Jogos", true, true],
        ["📄", "fotos_antigas.zip", false], ["📄", "instalador_antigo.exe", false], ["📄", "cache_video.tmp", false],
        ["📄", "documentos_importantes.docx", true], ["📄", "impostos_2025.pdf", true], ["📁", "Windows", true, true], ["🪟", "System32", "system"]
    ],
    [
        ["📁", "Programas", true, true], ["📁", "Projetos", true, true], ["📄", "backup_familia.zip", true],
        ["📄", "setup_duplicado.exe", false], ["📄", "lixo_download_44.tmp", false], ["📄", "video_cache.dat", false],
        ["📄", "curriculo_final.docx", true], ["📁", "Windows", true, true], ["🪟", "System32", "system"], ["📄", "memes_2018.zip", false]
    ],
    [
        ["📁", "Área de Trabalho", true, true], ["📁", "Fotos", true, true], ["📄", "contrato_assinado.pdf", true],
        ["📄", "temporario_instalacao.tmp", false], ["📄", "filme_incompleto.part", false], ["📄", "instalador_gpu_antigo.exe", false],
        ["📄", "chaves_acesso.txt", true], ["📁", "Windows", true, true], ["🪟", "System32", "system"], ["📄", "fotos_borradas.zip", false]
    ]
];

function storageGame() {
    const difficulty = game.currentProblem.difficulty;
    const target = Math.max(1, difficultyCount(2, 3, 4) + (game.playerEffects.clean ? -1 : 0) + (game.playerEffects.slow ? 1 : 0));
    const files = shuffle(storageVersions[Math.floor(Math.random() * storageVersions.length)]);
    let seconds = timerSeconds(45);
    showMinigame("🗑️ Limpeza de armazenamento", `Explore os arquivos. Apague ${target} itens inúteis e preserve dados importantes. Tempo: <strong id="storageTime">${seconds}</strong>s. Dificuldade: ${difficultySettings[difficulty].label}.`,
        `<div class="storage-toolbar">💽 Este Computador <span>🔎 Pesquisar arquivos</span></div><div id="files" class="file-grid"></div><p class="mt-3">Itens inúteis removidos: <strong id="deleted">0</strong> / ${target}</p>`);
    let deleted = 0;
    files.forEach(([icon, name, important, isFolder]) => {
        const button = document.createElement("button");
        button.className = `file ${isFolder ? "folder" : ""}`;
        button.innerHTML = `<span>${icon}</span><span>${name}</span>`;
        button.setAttribute("aria-label", `Apagar ${name}`);
        button.addEventListener("click", () => {
            if (button.disabled || game.miniFinished) return;
            if (important === "system") {
                if (!window.confirm("⚠️ AVISO: Esta pasta é essencial para o funcionamento do Windows. Tem certeza?")) return;
                // This consequence is intentionally absolute and does not end the match.
                game.players[game.currentPlayer].score = 0;
                finishMinigame(false, 0, "💥 Você acabou de apagar o Windows. Parabéns, técnico. Sua pontuação nesta partida foi zerada — o jogo continua!", true);
                return;
            }
            button.disabled = true;
            if (important) {
                button.classList.add("file-protected");
                const adjustment = adjustScore(game.players[game.currentPlayer], -50);
                $("message").innerHTML = `<div class="alert alert-danger score-loss">🚫 ${name} era importante! −50 pontos. ${adjustment.message}</div>`;
                renderScoreboard();
                finishMinigame(false, 0, `🚫 Você apagou ${name}, um arquivo importante. O minigame terminou.`, true);
                return;
            }
            button.classList.add("file-deleted");
            deleted++;
            $("deleted").textContent = deleted;
            if (deleted >= target) finishMinigame(true, Math.min(220, 100 + deleted * 25));
        });
        $("files").appendChild(button);
    });
    game.timers.push(setInterval(() => {
        seconds--;
        $("storageTime").textContent = seconds;
        if (seconds <= 0) finishMinigame(false, 0, "⏰ O armazenamento continuou cheio quando o tempo acabou.");
    }, 1000));
}

function heatGame() {
    let temperature = 70;
    let seconds = timerSeconds(20);
    const interval = game.currentProblem.difficulty === "easy" ? 900 : game.currentProblem.difficulty === "medium" ? 600 : 380;
    showMinigame("🌡️ CPU pegando fogo!", "Clique para limpar o cooler e baixar a temperatura. Mantenha abaixo de 70°C.",
        `<div class="temperature"><div id="temperatureFill" class="temperature-fill"></div></div><h2 id="temperature">${temperature}°C</h2><p>Tempo: <strong id="heatTime">${seconds}</strong>s</p><button id="cleanButton" class="btn btn-danger btn-lg">🧹 LIMPAR COOLER</button><div id="heatObstacle"></div>`);
    function update() {
        $("temperature").textContent = `${temperature}°C`;
        $("temperatureFill").style.width = `${Math.min(100, temperature)}%`;
        $("temperatureFill").classList.toggle("critical", temperature >= 90);
    }
    $("cleanButton").addEventListener("click", () => {
        if ($("heatObstacle").querySelector('[data-blocked="true"]')) return;
        temperature -= game.playerEffects.clean ? 9 : 5;
        update();
        if (temperature <= 55) finishMinigame(true, 180);
    });
    game.timers.push(setInterval(() => {
        temperature += game.playerEffects.slow ? 3 : 2;
        if (game.currentProblem.difficulty === "hard" && Math.random() < 0.35) temperature += 2;
        update();
        if (temperature >= 110) finishMinigame(false, 0, "🔥 A temperatura crítica desligou o PC!");
    }, interval));
    game.timers.push(setInterval(() => {
        seconds--;
        $("heatTime").textContent = seconds;
        if (seconds <= 0) finishMinigame(false, 0, "⏰ O tempo acabou antes de resfriar o processador.");
    }, 1000));
    if (game.currentProblem.difficulty === "hard") {
        game.timers.push(setInterval(() => {
            if (game.miniFinished) return;
            const obstacle = document.createElement("button");
            obstacle.className = "heat-obstacle";
            obstacle.textContent = "🧹 Ventoinha obstruída — remover";
            obstacle.dataset.blocked = "true";
            obstacle.addEventListener("click", () => obstacle.remove());
            $("heatObstacle").replaceChildren(obstacle);
        }, 3500));
    }
}

function ramGame() {
    game.ramTotal = 0;
    game.ramTarget = difficultyCount(16, 32, 64);
    showMinigame("🧠 Instalação da RAM", `Instale módulos até atingir exatamente ${game.ramTarget} GB. Não ultrapasse a capacidade solicitada.`,
        `<div class="row g-2">${[8, 16, 32, 64].map(amount => `<div class="col-6 col-md-3"><button class="btn btn-outline-info w-100 ram-option" data-amount="${amount}">RAM ${amount} GB</button></div>`).join("")}</div><div id="ramSlots" class="row g-2 mt-3"></div><h4 class="mt-3">Memória: <span id="ramTotal">0</span> / ${game.ramTarget} GB</h4>`);
    document.querySelectorAll(".ram-option").forEach(button => button.addEventListener("click", () => addRAM(Number(button.dataset.amount))));
    let seconds = timerSeconds(30);
    const timer = document.createElement("p");
    timer.innerHTML = `Tempo restante: <strong id="ramTime">${seconds}</strong>s`;
    $("minigame").querySelector(".text-center").insertBefore(timer, $("ramSlots"));
    game.timers.push(setInterval(() => {
        seconds--;
        $("ramTime").textContent = seconds;
        if (seconds <= 0) finishMinigame(false, 0, "⏰ O computador não reconheceu a configuração de memória a tempo.");
    }, 1000));
}

function addRAM(amount) {
    if (game.miniFinished) return;
    game.ramTotal += amount;
    $("ramTotal").textContent = game.ramTotal;
    const slot = document.createElement("div");
    slot.className = "col-6 col-md-3";
    slot.innerHTML = `<div class="player-card">🧠 <strong>${amount} GB</strong></div>`;
    $("ramSlots").appendChild(slot);
    if (game.ramTotal === game.ramTarget) finishMinigame(true, 180);
    else if (game.ramTotal > game.ramTarget) finishMinigame(false, 0, "⚠️ Você ultrapassou a capacidade solicitada.");
}

const spywareProcessSets = [
    ["Chrome.exe", "Discord.exe", "Windows Explorer", "Spotify.exe", "svchost.exe", "SpyMonitor.exe", "Game.exe", "System"],
    ["firefox.exe", "Steam.exe", "Runtime Broker", "CloudSync.exe", "KeyWatch.exe", "SearchIndexer.exe", "AudioSrv.exe"],
    ["explorer.exe", "OneDrive.exe", "UpdateService.exe", "ScreenLogger.exe", "TaskHost.exe", "Defender.exe", "Game.exe"]
];

function spywareGame() {
    const processes = spywareProcessSets[Math.floor(Math.random() * spywareProcessSets.length)];
    const suspects = processes.filter(name => /SpyMonitor|KeyWatch|ScreenLogger/.test(name));
    const suspicious = suspects[Math.floor(Math.random() * suspects.length)];
    const count = Math.max(4, Math.min(processes.length, 6 + difficultySettings[game.currentProblem.difficulty].extra - (game.playerEffects.clean ? 1 : 0)));
    const shown = shuffle([...new Set([suspicious, ...processes.filter(name => name !== suspicious)])]).slice(0, count);
    const seconds = timerSeconds(18);
    showMinigame("🕵️ Caça ao spyware", `Identifique o processo espião. Tempo: <strong id="spyTime">${seconds}</strong>s.`,
        `<div id="processList" class="process-list"></div>`);
    shown.forEach(name => {
        const button = document.createElement("button");
        button.className = "process-item";
        button.textContent = `⚙️ ${name}`;
        button.addEventListener("click", () => {
            if (name === suspicious) finishMinigame(true, 160);
            else finishMinigame(false, 0, `❌ ${name} era um processo legítimo. O spyware escapou.`);
        });
        $("processList").appendChild(button);
    });
    let remaining = seconds;
    game.timers.push(setInterval(() => {
        remaining--;
        $("spyTime").textContent = remaining;
        if (remaining <= 0) finishMinigame(false, 0, "⏰ O spyware continuou coletando dados!");
    }, 1000));
}

function wormsGame() {
    const target = Math.max(3, difficultyCount(5, 8, 11) + (game.playerEffects.virus ? 2 : 0) - (game.playerEffects.antivirus || game.playerEffects.clean ? 2 : 0));
    const healthMax = 100;
    let health = healthMax;
    let kills = 0;
    let spawnCount = 0;
    showMinigame("🐛 Surto de worms", `Clique nos worms antes que infectem o sistema. Elimine ${target} para vencer.`,
        `<p>🖥️ INTEGRIDADE DO SISTEMA: <strong id="integrityText">${health}%</strong></p><div class="integrity-bar"><div id="integrityFill" class="integrity-fill"></div></div><div id="wormArena" class="minigame-screen worm-arena"></div><p>Worms eliminados: <strong id="wormCount">0</strong> / ${target}</p>`);
    function spawnWorm() {
        if (game.miniFinished) return;
        if (health <= 0) {
            finishMinigame(false, 0, "🦠 A integridade chegou a 0%. O sistema foi infectado!");
            return;
        }
        spawnCount++;
        const worm = document.createElement("button");
        worm.className = "worm";
        worm.textContent = "🐛";
        worm.style.left = `${Math.random() * 85}%`;
        worm.style.top = `${Math.random() * 70}%`;
        worm.addEventListener("click", () => {
            kills++;
            $("wormCount").textContent = kills;
            worm.remove();
            if (kills >= target) finishMinigame(true, Math.min(250, 120 + kills * 10));
        });
        $("wormArena").appendChild(worm);
        const baseLifetime = game.currentProblem.difficulty === "hard" ? 1600 : game.currentProblem.difficulty === "medium" ? 2300 : 3200;
        const lifetime = Math.max(700, baseLifetime - (game.playerEffects.slow ? 400 : 0));
        const timeout = setTimeout(() => {
            if (!worm.isConnected || game.miniFinished) return;
            worm.remove();
            health -= game.playerEffects.antivirus ? 10 : game.currentProblem.difficulty === "hard" ? 25 : 20;
            $("integrityText").textContent = `${Math.max(0, health)}%`;
            $("integrityFill").style.width = `${Math.max(0, health / healthMax * 100)}%`;
            spawnWorm();
        }, lifetime);
        game.timeouts.push(timeout);
    }
    const baseRate = game.currentProblem.difficulty === "hard" ? 1100 : game.currentProblem.difficulty === "medium" ? 1450 : 1900;
    const rate = Math.max(650, baseRate - (game.playerEffects.slow ? 300 : 0));
    spawnWorm();
    game.timers.push(setInterval(() => {
        if (spawnCount < target + 5) spawnWorm();
    }, rate));
}

function cablesGame() {
    const allMappings = [
        ["HDMI", "Monitor"], ["Ethernet", "Roteador"], ["USB", "Periférico"], ["Energia", "Fonte"],
        ["DisplayPort", "Monitor"], ["P2", "Caixas de som"]
    ];
    const cableCount = Math.max(3, difficultyCount(3, 4, 6) - (game.playerEffects.clean ? 1 : 0));
    const mappings = shuffle(allMappings).slice(0, cableCount);
    const targets = shuffle([...new Set(mappings.map(item => item[1]))]);
    showMinigame("🔌 Conecte os cabos", "Ligue cada cabo ao destino correto e confirme as conexões.",
        `<div id="cableRows" class="cable-list"></div><button id="checkCables" class="btn btn-info mt-3">Testar conexões</button>`);
    mappings.forEach(([cable]) => {
        const row = document.createElement("label");
        row.className = "cable-row";
        row.innerHTML = `<strong>🔌 ${cable}</strong><select class="form-select cable-target" data-cable="${cable}"><option value="">Escolha o destino</option>${targets.map(target => `<option value="${target}">${target}</option>`).join("")}</select>`;
        $("cableRows").appendChild(row);
    });
    let seconds = timerSeconds(35);
    const timer = document.createElement("p");
    timer.innerHTML = `Tempo restante: <strong id="cableTime">${seconds}</strong>s`;
    $("minigame").querySelector(".text-center").insertBefore(timer, $("cableRows"));
    game.timers.push(setInterval(() => {
        seconds--;
        $("cableTime").textContent = seconds;
        if (seconds <= 0) finishMinigame(false, 0, "⏰ O tempo acabou antes de conectar os cabos.");
    }, 1000));
    $("checkCables").addEventListener("click", () => {
        const correct = [...document.querySelectorAll(".cable-target")].every(select => mappings.find(item => item[0] === select.dataset.cable)[1] === select.value);
        if (correct) finishMinigame(true, 170);
        else finishMinigame(false, 0, "⚡ Há cabos conectados ao lugar errado. Revise o esquema!");
    });
}

const bootScenarios = [
    { prompt: "Erro: Boot device not found", solution: "Verificar se a unidade é detectada e revisar a ordem de boot" },
    { prompt: "Tela azul após instalar um driver", solution: "Iniciar em modo de segurança e reverter o driver recente" },
    { prompt: "O relógio e as configurações UEFI se perdem ao desligar", solution: "Verificar e substituir a bateria CMOS" },
    { prompt: "PC liga, mas não conclui o POST e emite bipes", solution: "Consultar o código de bipes e verificar RAM/conexões" }
];

function bootGame() {
    const scenario = bootScenarios[Math.floor(Math.random() * bootScenarios.length)];
    const wrong = shuffle(bootScenarios.filter(item => item !== scenario).map(item => item.solution)).slice(0, 3);
    const choices = shuffle([scenario.solution, ...wrong]).slice(0, game.playerEffects.clean ? 3 : 4);
    let seconds = timerSeconds(25);
    showMinigame("🖥️ Diagnóstico de inicialização", `<strong>${scenario.prompt}</strong><br>Escolha o primeiro diagnóstico seguro. Tempo: <strong id="bootTime">${seconds}</strong>s.`,
        `<div id="bootOptions" class="row g-2"></div>`);
    choices.forEach(solution => {
        const column = document.createElement("div");
        column.className = "col-12";
        const button = document.createElement("button");
        button.className = "option";
        button.textContent = solution;
        button.addEventListener("click", () => {
            if (solution === scenario.solution) finishMinigame(true, 170);
            else finishMinigame(false, 0, "❌ Esse diagnóstico não resolve a falha de inicialização.");
        });
        column.appendChild(button);
        $("bootOptions").appendChild(column);
    });
    game.timers.push(setInterval(() => {
        seconds--;
        $("bootTime").textContent = seconds;
        if (seconds <= 0) finishMinigame(false, 0, "⏰ O sistema não iniciou a tempo!");
    }, 1000));
}

function backupGame() {
    const files = shuffle([
        { name: "fotos_familia.jpg", kind: "personal", required: true },
        { name: "contrato_assinado.pdf", kind: "personal", required: true },
        { name: "projeto_escola.docx", kind: "personal", required: true },
        { name: "cache_browser.tmp", kind: "junk" },
        { name: "instalador_duplicado.exe", kind: "junk" },
        { name: "trojan_update.exe", kind: "malware" },
        { name: "senha_banco.txt.exe", kind: "malware" },
        { name: "video_grande.mp4", kind: "personal", required: game.currentProblem.difficulty === "hard" }
    ]);
    let seconds = timerSeconds(40) + (game.playerEffects.clean ? 5 : 0);
    showMinigame("💾 Backup seguro", `Inclua todos os arquivos pessoais importantes. Não inclua arquivos suspeitos. Tempo: <strong id="backupTime">${seconds}</strong>s.`,
        `<div id="backupFiles" class="backup-list"></div><button id="createBackup" class="btn btn-success mt-3">Criar backup seguro</button>`);
    files.forEach(file => {
        const label = document.createElement("label");
        label.className = "backup-file";
        label.innerHTML = `<input type="checkbox" class="backup-choice" data-kind="${file.kind}" data-required="${Boolean(file.required)}"> <span>${file.kind === "malware" ? "⚠️" : file.kind === "junk" ? "🗑️" : "📄"} ${file.name}</span>`;
        $("backupFiles").appendChild(label);
    });
    $("createBackup").addEventListener("click", () => {
        const valid = [...document.querySelectorAll(".backup-choice")];
        const selectedMalware = valid.some(input => input.checked && input.dataset.kind === "malware");
        const missingRequired = valid.some(input => input.dataset.required === "true" && !input.checked);
        if (!selectedMalware && !missingRequired) finishMinigame(true, 190);
        else finishMinigame(false, 0, selectedMalware ? "🦠 O backup incluiu malware! Nunca restaure esse arquivo." : "⚠️ Faltaram arquivos pessoais importantes no backup.");
    });
    game.timers.push(setInterval(() => {
        seconds--;
        $("backupTime").textContent = seconds;
        if (seconds <= 0) finishMinigame(false, 0, "⏰ O backup não ficou pronto a tempo.");
    }, 1000));
}

function triggerGlobalEvent() {
    game.global = {};
    // Global events are rarer than turn events and are rolled only once per round.
    if (Math.random() >= 0.08) return;
    const event = shuffle(["outage", "attack", "sale"])[0];
    if (event === "outage") {
        game.players.forEach(player => {
            if (!consumeItem(player, "ups")) player.debuffs.push("outage");
        });
        showEvent("⚡ QUEDA GERAL DE ENERGIA!", "Todos perdem 5 segundos no próximo minigame. Nobreaks protegem seus donos.", "event-warning");
    } else if (event === "attack") {
        game.players.forEach(player => player.debuffs.push("global-virus"));
        showEvent("🦠 ATAQUE GLOBAL!", "Todos enfrentarão ameaças extras em seu próximo minigame.", "event-warning");
    } else {
        game.global.sale = true;
        showEvent("💰 PROMOÇÃO GLOBAL!", "Todos os itens da loja custam 20% menos nesta rodada.", "event-good");
    }
}

function triggerPlayerEvent(player) {
    const event = shuffle(["power", "internet", "heat", "virus", "backup", "customer", "mystery"])[0];
    if (event === "power") {
        if (consumeItem(player, "ups")) showEvent("🔋 NOBREAK ATIVADO", "A queda de energia foi bloqueada pelo seu nobreak.", "event-good");
        else {
            player.debuffs.push("outage");
            showEvent(Math.random() < 0.5 ? "⚡ QUEDA DE ENERGIA" : "⚡ PICO DE ENERGIA", "Você perderá 5 segundos no minigame desta rodada.", "event-warning");
        }
    } else if (event === "internet") {
        game.playerEvent = "internet";
        showEvent("🌐 INTERNET CAIU", "Sem conexão externa por enquanto. O minigame terá uma distração extra.", "event-warning");
    } else if (event === "heat") {
        game.playerEvent = "heat";
        showEvent("🔥 SUPERAQUECIMENTO", "O tempo disponível no minigame foi reduzido em 3 segundos.", "event-warning");
    } else if (event === "virus") {
        player.debuffs.push("virus");
        showEvent("🦠 SURTO DE VÍRUS", "Mais ameaças aparecerão no seu próximo minigame.", "event-warning");
    } else if (event === "backup") {
        player.activeItems.push("backup");
        showEvent("💾 BACKUP AUTOMÁTICO", "Você ganhou proteção contra uma penalidade de pontuação.", "event-good");
    } else if (event === "customer") {
        game.playerEvent = "customer";
        showEvent("👻 CLIENTE CONFUSO", "O cliente descreveu o defeito de um jeito... peculiar.", "event-fun");
    } else {
        game.playerEvent = "mystery";
        showEvent("🎁 ARQUIVO MISTERIOSO", "Escolha analisar o arquivo com segurança ou arriscar abri-lo.", "event-fun");
    }
}

function showEvent(title, description, style) {
    const message = document.createElement("div");
    message.className = `event-banner ${style}`;
    message.innerHTML = `<strong>${title}</strong><div>${description}</div>`;
    $("message").appendChild(message);
}

function applyCustomerEvent() {
    if (game.playerEvent === "customer") {
        $("problemDescription").textContent = `👻 “Meu PC está fazendo um barulho de avião e só acontece quando abro o Minecraft!” — ${game.currentProblem.description}`;
    }
    if (game.playerEvent === "mystery") {
        const actions = document.createElement("div");
        actions.className = "mystery-actions";
        actions.innerHTML = `<strong>📦 update_final.exe</strong><button class="btn btn-outline-info btn-sm" id="analyzeMystery">🔎 Analisar</button><button class="btn btn-outline-danger btn-sm" id="openMystery">📂 Abrir mesmo assim</button>`;
        $("message").appendChild(actions);
        $("analyzeMystery").addEventListener("click", () => {
            if (game.mysteryResolved) return;
            game.mysteryResolved = true;
            game.players[game.currentPlayer].score += 25;
            game.playerEvent = "";
            actions.innerHTML = "✅ Arquivo analisado: era suspeito. Você ganhou +25 pontos!";
            document.querySelectorAll("#options .option").forEach(button => { button.disabled = false; });
            renderScoreboard();
        });
        $("openMystery").addEventListener("click", () => {
            if (game.mysteryResolved) return;
            game.mysteryResolved = true;
            const player = game.players[game.currentPlayer];
            const penalty = adjustScore(player, -50);
            game.playerEvent = "";
            actions.innerHTML = `💥 Era uma armadilha! −50 pontos. ${penalty.message}`;
            document.querySelectorAll("#options .option").forEach(button => { button.disabled = false; });
            renderScoreboard();
        });
    }
}

function openShop() {
    pauseAnswerTimer();
    showScreen("shop");
    renderShop();
}

function renderShop() {
    $("shopItems").innerHTML = "";
    items.forEach(item => {
        const price = game.global.sale ? Math.floor(item.price * 0.8) : item.price;
        const div = document.createElement("div");
        div.className = "col-12 col-md-6 col-lg-3";
        div.innerHTML = `<div class="shop-card"><div class="shop-icon">${item.icon}</div><h4>${item.name}</h4><p>${item.description}</p><div class="price mb-2">💰 ${price}</div><button class="btn btn-warning w-100" data-item="${item.id}">Comprar</button></div>`;
        div.querySelector("button").addEventListener("click", () => buyItem(item.id));
        $("shopItems").appendChild(div);
    });
    const current = game.players[game.currentPlayer];
    const status = document.createElement("p");
    status.className = "shop-balance";
    status.textContent = `${current.name}: ${current.credits} créditos · todos os itens comprados vão para o inventário.`;
    $("shopItems").prepend(status);
}

function closeShop() {
    showScreen("game");
    resumeAnswerTimer();
}

function openInventory() {
    if (!game.players.length) return;
    if (game.diagnosisAnswered && !game.waiting) {
        alert("Finalize o minigame antes de abrir o inventário.");
        return;
    }
    pauseAnswerTimer();
    renderInventory();
    showScreen("inventory");
}

function closeInventory() {
    showScreen("game");
    resumeAnswerTimer();
}

function renderInventory() {
    const player = game.players[game.currentPlayer];
    if (!player) return;
    $("inventoryPlayer").textContent = `${player.name} · ${player.inventory.length} item(ns) guardado(s) · ${player.activeItems.length} proteção(ões) ativa(s)`;
    const container = $("inventoryItems");
    container.innerHTML = "";
    const heldCounts = new Map();
    const activeCounts = new Map();
    player.inventory.forEach(id => heldCounts.set(id, (heldCounts.get(id) || 0) + 1));
    player.activeItems.forEach(id => activeCounts.set(id, (activeCounts.get(id) || 0) + 1));
    const availableItems = items.filter(item => heldCounts.has(item.id) || activeCounts.has(item.id));
    if (!availableItems.length) {
        container.innerHTML = '<div class="col-12"><div class="alert alert-secondary">🎒 Seu inventário está vazio. Compre itens na loja e volte aqui para decidir quando usá-los.</div></div>';
        return;
    }
    availableItems.forEach(item => {
        const held = heldCounts.get(item.id) || 0;
        const active = activeCounts.get(item.id) || 0;
        const column = document.createElement("div");
        column.className = "col-12 col-md-6 col-xl-4";
        const card = document.createElement("div");
        card.className = "inventory-card";
        card.innerHTML = `<div class="inventory-item-icon">${item.icon}</div><h3>${item.name}</h3><p>${item.description}</p><div class="inventory-count">Guardado: <strong>${held}</strong> · Ativo: <strong>${active}</strong></div>`;
        if (positiveItemIds.includes(item.id)) {
            if (held > 0) {
                const activate = document.createElement("button");
                activate.className = "btn btn-success w-100 mt-2";
                activate.textContent = "✅ Ativar proteção";
                activate.addEventListener("click", () => activateInventoryItem(item.id));
                card.appendChild(activate);
            }
            if (active > 0) {
                const disarm = document.createElement("button");
                disarm.className = "btn btn-outline-warning w-100 mt-2";
                disarm.textContent = "↩️ Desativar proteção";
                disarm.addEventListener("click", () => disarmInventoryItem(item.id));
                card.appendChild(disarm);
            }
        } else if (held > 0) {
            const targets = game.players.map((target, index) => ({ target, index })).filter(entry => entry.index !== game.currentPlayer);
            if (targets.length) {
                const label = document.createElement("label");
                label.className = "form-label mt-2";
                label.textContent = "Use contra:";
                const select = document.createElement("select");
                select.className = "form-select";
                targets.forEach(({ target, index }) => {
                    const option = document.createElement("option");
                    option.value = index;
                    option.textContent = target.name;
                    select.appendChild(option);
                });
                const use = document.createElement("button");
                use.className = "btn btn-danger w-100 mt-2";
                use.textContent = "💥 Usar sabotagem";
                use.addEventListener("click", () => useInventorySabotage(item.id, Number(select.value)));
                card.append(label, select, use);
            } else {
                const note = document.createElement("small");
                note.className = "text-warning";
                note.textContent = "É necessário haver outro jogador para usar esta sabotagem.";
                card.appendChild(note);
            }
        }
        column.appendChild(card);
        container.appendChild(column);
    });
}

function activateInventoryItem(id) {
    const player = game.players[game.currentPlayer];
    if (!positiveItemIds.includes(id)) throw new Error("Somente proteções positivas podem ser ativadas.");
    const index = player.inventory.indexOf(id);
    if (index < 0) return;
    player.inventory.splice(index, 1);
    player.activeItems.push(id);
    renderInventory();
    renderScoreboard();
}

function disarmInventoryItem(id) {
    const player = game.players[game.currentPlayer];
    const index = player.activeItems.indexOf(id);
    if (index < 0) return;
    player.activeItems.splice(index, 1);
    player.inventory.push(id);
    renderInventory();
    renderScoreboard();
}

function useInventorySabotage(id, targetIndex) {
    const player = game.players[game.currentPlayer];
    if (positiveItemIds.includes(id) || !game.players[targetIndex] || targetIndex === game.currentPlayer) {
        throw new Error("Alvo ou item de sabotagem inválido.");
    }
    const index = player.inventory.indexOf(id);
    if (index < 0) return;
    player.inventory.splice(index, 1);
    applyItem({ id }, targetIndex);
    renderInventory();
    renderScoreboard();
    $("inventoryPlayer").textContent = `${player.name} usou ${items.find(item => item.id === id).name} contra ${game.players[targetIndex].name}.`;
}

function buyItem(id) {
    if (game.playerEvent === "internet") {
        alert("🌐 Sem internet, a loja está temporariamente indisponível nesta rodada.");
        return;
    }
    const item = items.find(entry => entry.id === id);
    if (!item) throw new Error(`Item não encontrado: ${id}`);
    const player = game.players[game.currentPlayer];
    const price = game.global.sale ? Math.floor(item.price * 0.8) : item.price;
    if (player.credits < price) {
        alert("💸 Você não tem créditos suficientes!");
        return;
    }
    player.credits -= price;
    player.inventory.push(item.id);
    alert(`${item.icon} ${item.name} guardado no inventário de ${player.name}.`);
    renderScoreboard();
    renderShop();
}

function applyItem(item, target) {
    const victim = game.players[target];
    if (["dirty", "freeze", "slow", "virus"].includes(item.id)) victim.debuffs.push(item.id);
}

function consumeItem(player, id) {
    const index = player.activeItems.indexOf(id);
    if (index === -1) return false;
    player.activeItems.splice(index, 1);
    return true;
}

function finishGame() {
    clearMinigameTasks();
    showScreen("end");
    const ranking = [...game.players].sort((a, b) => b.score - a.score);
    const winner = ranking[0];
    $("winner").textContent = `🏆 ${winner.name} venceu!`;
    $("winnerDescription").textContent = `${winner.name} terminou com ${winner.score} pontos e foi coroado Técnico do Ano!`;
    $("finalScore").innerHTML = "";
    ranking.forEach((player, index) => {
        const div = document.createElement("div");
        div.className = "player-card mb-2";
        const medal = ["🥇", "🥈", "🥉"][index] || "🔧";
        div.textContent = `${medal} ${player.name} — ${player.score} pontos`;
        $("finalScore").appendChild(div);
    });
}

function openDevTools() {
    if (!game.players.length) {
        alert("Inicie uma partida antes de abrir as Dev Tools.");
        return;
    }
    game.devAuthorized = false;
    $("devLogin").classList.remove("hidden");
    $("devPanel").classList.add("hidden");
    $("devPassword").value = "";
    $("devLoginMessage").textContent = "";
    showScreen("devtools");
    $("devPassword").focus();
}

function closeDevTools() {
    game.devAuthorized = false;
    showScreen("game");
    resumeAnswerTimer();
}

function authorizeDevTools(event) {
    event.preventDefault();
    if ($("devPassword").value !== "abacate") {
        $("devLoginMessage").innerHTML = '<span class="text-danger">❌ Senha incorreta.</span>';
        $("devPassword").select();
        return;
    }
    game.devAuthorized = true;
    $("devLogin").classList.add("hidden");
    $("devPanel").classList.remove("hidden");
    $("devLoginMessage").textContent = "";
    renderDevTools();
}

function requireDevAuthorization() {
    if (!game.devAuthorized || $("devPanel").classList.contains("hidden")) {
        throw new Error("Ação bloqueada: autentique-se nas Dev Tools.");
    }
}

function renderDevTools() {
    requireDevAuthorization();
    $("devPlayer").innerHTML = "";
    game.players.forEach((player, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.textContent = `${player.name} · ${player.credits} créditos`;
        $("devPlayer").appendChild(option);
    });
    $("devRound").max = game.maxRounds;
    $("devCurrentRound").textContent = `${game.round} / ${game.maxRounds}`;
    $("devRoundInfo").textContent = `Rodada ${game.round} de ${game.maxRounds} · ${game.players.length} jogador(es) · Vez de ${game.players[game.currentPlayer].name}`;
    $("devPlayersView").innerHTML = Array.from({ length: game.maxRounds }, (_, index) => {
        const round = index + 1;
        const status = round < game.round ? "✅ Concluída" : round === game.round ? "▶️ Em andamento" : "⏳ Próxima";
        return `<div class="dev-round-row"><span>Rodada ${round}</span><span>${status}</span></div>`;
    }).join("");
}

function selectedDevPlayer() {
    requireDevAuthorization();
    const index = Number($("devPlayer").value);
    if (!Number.isInteger(index) || !game.players[index]) {
        throw new Error("Selecione um jogador válido nas Dev Tools.");
    }
    return game.players[index];
}

function changeDevCredits(action) {
    const player = selectedDevPlayer();
    const amount = Number($("devCredits").value);
    if (!Number.isFinite(amount) || amount < 0) {
        $("devTestResults").innerHTML = '<div class="alert alert-danger">Informe uma quantidade de créditos válida (zero ou maior).</div>';
        return;
    }
    const value = Math.floor(amount);
    if (action === "add") player.credits += value;
    else if (action === "subtract") player.credits = Math.max(0, player.credits - value);
    else if (action === "set") player.credits = value;
    else throw new Error(`Ação de créditos desconhecida: ${action}`);
    renderScoreboard();
    renderDevTools();
    $("devTestResults").innerHTML = `<div class="alert alert-success">${player.name} agora tem ${player.credits} créditos.</div>`;
}

function applyDevEffect(kind) {
    const player = selectedDevPlayer();
    if (kind === "positive") {
        const itemId = $("devPositiveEffect").value;
        if (!["ups", "antivirus", "backup", "clean"].includes(itemId)) {
            throw new Error("Efeito positivo inválido.");
        }
        player.inventory.push(itemId);
        $("devTestResults").innerHTML = `<div class="alert alert-success">✨ Proteção adicionada ao inventário de ${player.name}.</div>`;
    } else if (kind === "negative") {
        const effectId = $("devNegativeEffect").value;
        if (!["dirty", "freeze", "slow", "virus"].includes(effectId)) {
            throw new Error("Efeito negativo inválido.");
        }
        player.debuffs.push(effectId);
        $("devTestResults").innerHTML = `<div class="alert alert-warning">💥 Efeito negativo aplicado a ${player.name} para o próximo minigame.</div>`;
    } else {
        throw new Error(`Tipo de efeito desconhecido: ${kind}`);
    }
    renderScoreboard();
    renderDevTools();
}

function setDevRound() {
    requireDevAuthorization();
    const requestedRound = Number($("devRound").value);
    if (!Number.isInteger(requestedRound) || requestedRound < 1 || requestedRound > game.maxRounds) {
        $("devTestResults").innerHTML = `<div class="alert alert-danger">A rodada deve estar entre 1 e ${game.maxRounds}.</div>`;
        return;
    }
    clearMinigameTasks();
    game.round = requestedRound;
    game.roundQuestions = [];
    game.eventsProcessedRound = requestedRound - 1;
    game.waiting = false;
    loadRound();
    pauseAnswerTimer();
    renderDevTools();
    $("devTestResults").innerHTML = `<div class="alert alert-success">Partida ajustada para a rodada ${requestedRound}.</div>`;
}

function clearDevEffects() {
    requireDevAuthorization();
    const player = selectedDevPlayer();
    player.debuffs = [];
    renderScoreboard();
    renderDevTools();
    $("devTestResults").innerHTML = `<div class="alert alert-success">Efeitos pendentes removidos de ${player.name}.</div>`;
}

function runDevTests() {
    requireDevAuthorization();
    const checks = [
        {
            label: "Banco de perguntas com alternativas e respostas válidas",
            passed: questions.length >= 40 && questions.every(item =>
                item.options.length === 4 &&
                item.options.some(option => option.id === item.answer) &&
                Boolean(difficultySettings[item.difficulty])
            )
        },
        {
            label: "Telas principais e tela de Dev Tools presentes",
            passed: ["menu", "game", "shop", "inventory", "devtools", "end"].every(id => Boolean($(id)))
        },
        {
            label: "Nove funções de minigame disponíveis",
            passed: [virusGame, storageGame, heatGame, ramGame, spywareGame, wormsGame, cablesGame, bootGame, backupGame].every(fn => typeof fn === "function")
        },
        {
            label: "Jogadores com créditos, inventário e efeitos",
            passed: game.players.length > 0 && game.players.every(player =>
                Number.isFinite(player.credits) && Array.isArray(player.inventory) && Array.isArray(player.activeItems) && Array.isArray(player.debuffs)
            )
        }
    ];
    $("devTestResults").innerHTML = checks.map(check =>
        `<div class="dev-test-row ${check.passed ? "test-pass" : "test-fail"}">${check.passed ? "✅" : "❌"} ${check.label}</div>`
    ).join("") + `<div class="mt-2"><strong>${checks.filter(check => check.passed).length}/${checks.length} testes passaram.</strong> Banco: ${questions.length} perguntas.</div>`;
}

function returnToMenu() {
    if (!window.confirm("Voltar à tela inicial? A partida atual será descartada.")) return;
    clearMinigameTasks();
    stopAnswerTimer();
    game.players = [];
    game.currentProblem = null;
    game.waiting = false;
    game.devAuthorized = false;
    $("devPanel").classList.add("hidden");
    $("devLogin").classList.remove("hidden");
    showScreen("menu");
}

$("devLogin").addEventListener("submit", authorizeDevTools);
