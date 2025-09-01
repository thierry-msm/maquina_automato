// 1. Definição do Autômato Finito (FSM)
const fsm = {
    states: {
        '0c': { id: '0c', isInitial: true, isFinal: false, isMoneyState: true },
        '5c': { id: '5c', isInitial: false, isFinal: false, isMoneyState: true },
        '10c': { id: '10c', isInitial: false, isFinal: false, isMoneyState: true },
        '15c': { id: '15c', isInitial: false, isFinal: false, isMoneyState: true },
        '20c': { id: '20c', isInitial: false, isFinal: false, isMoneyState: true },
        '25c': { id: '25c', isInitial: false, isFinal: false, isMoneyState: true },
        '30c': { id: '30c', isInitial: false, isFinal: false, isMoneyState: true },
        '35c': { id: '35c', isInitial: false, isFinal: false, isMoneyState: true },
        '40c': { id: '40c', isInitial: false, isFinal: false, isMoneyState: true },
        '45c': { id: '45c', isInitial: false, isFinal: false, isMoneyState: true },
        '50c': { id: '50c', isInitial: false, isFinal: false, isMoneyState: true },
        '55c': { id: '55c', isInitial: false, isFinal: false, isMoneyState: true },
        'a1': { id: 'a1', isInitial: false, isFinal: false, isMoneyState: false }, // Intermediate state for product A category selection
        'b1': { id: 'b1', isInitial: false, isFinal: false, isMoneyState: false }, // Intermediate state for product B category selection
        'af': { id: 'af', isInitial: false, isFinal: true, isMoneyState: false },  // Final state: Product A dispensed
        'bf': { id: 'bf', isInitial: false, isFinal: true, isMoneyState: false }   // Final state: Product B dispensed
    },
    transitions: [
        // --- Transições de Inserção de Moedas (Input: 5, 10, 25, 50; Output: ε) ---
        // As transições são baseadas EXATAMENTE no diagrama fornecido (Figura 1 do artigo).
        // A lógica do `processInput` ajustará o `currentBalance` e o `lastOutput` de forma dinâmica.

        // De 0c
        { from: '0c', to: '5c', input: '5', output: 'ε', action: { type: 'add_money', amount: 5 } },
        { from: '0c', to: '10c', input: '10', output: 'ε', action: { type: 'add_money', amount: 10 } },
        { from: '0c', to: '25c', input: '25', output: 'ε', action: { type: 'add_money', amount: 25 } },
        { from: '0c', to: '50c', input: '50', output: 'ε', action: { type: 'add_money', amount: 50 } },

        // De 5c
        { from: '5c', to: '10c', input: '5', output: 'ε', action: { type: 'add_money', amount: 5 } },
        { from: '5c', to: '15c', input: '10', output: 'ε', action: { type: 'add_money', amount: 10 } },
        { from: '5c', to: '30c', input: '25', output: 'ε', action: { type: 'add_money', amount: 25 } },
        { from: '5c', to: '55c', input: '50', output: 'ε', action: { type: 'add_money', amount: 50 } },

        // De 10c
        { from: '10c', to: '15c', input: '5', output: 'ε', action: { type: 'add_money', amount: 5 } },
        { from: '10c', to: '20c', input: '10', output: 'ε', action: { type: 'add_money', amount: 10 } },
        { from: '10c', to: '35c', input: '25', output: 'ε', action: { type: 'add_money', amount: 25 } },
        { from: '10c', to: '55c', input: '50', output: 'ε', action: { type: 'add_money', amount: 50 } },

        // De 15c
        { from: '15c', to: '20c', input: '5', output: 'ε', action: { type: 'add_money', amount: 5 } },
        { from: '15c', to: '25c', input: '10', output: 'ε', action: { type: 'add_money', amount: 10 } },
        { from: '15c', to: '40c', input: '25', output: 'ε', action: { type: 'add_money', amount: 25 } },
        { from: '15c', to: '55c', input: '50', output: 'ε', action: { type: 'add_money', amount: 50 } },

        // De 20c
        { from: '20c', to: '25c', input: '5', output: 'ε', action: { type: 'add_money', amount: 5 } },
        { from: '20c', to: '30c', input: '10', output: 'ε', action: { type: 'add_money', amount: 10 } },
        { from: '20c', to: '45c', input: '25', output: 'ε', action: { type: 'add_money', amount: 25 } },
        { from: '20c', to: '55c', input: '50', output: 'ε', action: { type: 'add_money', amount: 50 } },

        // De 25c
        { from: '25c', to: '30c', input: '5', output: 'ε', action: { type: 'add_money', amount: 5 } },
        { from: '25c', to: '35c', input: '10', output: 'ε', action: { type: 'add_money', amount: 10 } },
        { from: '25c', to: '50c', input: '25', output: 'ε', action: { type: 'add_money', amount: 25 } },
        { from: '25c', to: '55c', input: '50', output: 'ε', action: { type: 'add_money', amount: 50 } },

        // De 30c
        { from: '30c', to: '35c', input: '5', output: 'ε', action: { type: 'add_money', amount: 5 } },
        { from: '30c', to: '40c', input: '10', output: 'ε', action: { type: 'add_money', amount: 10 } },
        { from: '30c', to: '55c', input: '25', output: 'ε', action: { type: 'add_money', amount: 25 } },
        { from: '30c', to: '55c', input: '50', output: 'ε', action: { type: 'add_money', amount: 50 } },

        // De 35c
        { from: '35c', to: '40c', input: '5', output: 'ε', action: { type: 'add_money', amount: 5 } },
        { from: '35c', to: '45c', input: '10', output: 'ε', action: { type: 'add_money', amount: 10 } },
        { from: '35c', to: '55c', input: '25', output: 'ε', action: { type: 'add_money', amount: 25 } },
        { from: '35c', to: '55c', input: '50', output: 'ε', action: { type: 'add_money', amount: 50 } },

        // De 40c
        { from: '40c', to: '45c', input: '5', output: 'ε', action: { type: 'add_money', amount: 5 } },
        { from: '40c', to: '50c', input: '10', output: 'ε', action: { type: 'add_money', amount: 10 } },
        { from: '40c', to: '55c', input: '25', output: 'ε', action: { type: 'add_money', amount: 25 } },
        { from: '40c', to: '55c', input: '50', output: 'ε', action: { type: 'add_money', amount: 50 } },

        // De 45c
        { from: '45c', to: '50c', input: '5', output: 'ε', action: { type: 'add_money', amount: 5 } },
        { from: '45c', to: '55c', input: '10', output: 'ε', action: { type: 'add_money', amount: 10 } },
        { from: '45c', to: '55c', input: '25', output: 'ε', action: { type: 'add_money', amount: 25 } },
        { from: '45c', to: '55c', input: '50', output: 'ε', action: { type: 'add_money', amount: 50 } },

        // De 50c
        { from: '50c', to: '55c', input: '5', output: 'ε', action: { type: 'add_money', amount: 5 } },
        { from: '50c', to: '55c', input: '10', output: 'ε', action: { type: 'add_money', amount: 10 } },
        { from: '50c', to: '55c', input: '25', output: 'ε', action: { type: 'add_money', amount: 25 } },
        { from: '50c', to: '55c', input: '50', output: 'ε', action: { type: 'add_money', amount: 50 } },

        // --- Transições de Seleção de Categoria de Produto (Input: a, b; Output: Troco) ---
        // Categoria 'a' (Custo: 25c)
        { from: '25c', to: 'a1', input: 'a', output: '00', action: { type: 'category_selection', product_category: 'A' } },
        { from: '30c', to: 'a1', input: 'a', output: '05', action: { type: 'category_selection', product_category: 'A' } },
        { from: '35c', to: 'a1', input: 'a', output: '10', action: { type: 'category_selection', product_category: 'A' } },
        { from: '40c', to: 'a1', input: 'a', output: '15', action: { type: 'category_selection', product_category: 'A' } },
        { from: '45c', to: 'a1', input: 'a', output: '20', action: { type: 'category_selection', product_category: 'A' } },
        { from: '50c', to: 'a1', input: 'a', output: '25', action: { type: 'category_selection', product_category: 'A' } },
        { from: '55c', to: 'a1', input: 'a', output: '30', action: { type: 'category_selection', product_category: 'A' } },

        // Categoria 'b' (Custo: 50c)
        { from: '50c', to: 'b1', input: 'b', output: '00', action: { type: 'category_selection', product_category: 'B' } },
        { from: '55c', to: 'b1', input: 'b', output: '05', action: { type: 'category_selection', product_category: 'B' } },

        // --- Transições de Escolha de Produto Final (Input: p, q; Output: p, q) ---
        // Após seleção da categoria 'a' (do estado a1)
        { from: 'a1', to: 'af', input: 'p', output: 'p', action: { type: 'dispense_product_p' } },
        { from: 'a1', to: 'af', input: 'q', output: 'q', action: { type: 'dispense_product_q' } },

        // Após seleção da categoria 'b' (do estado b1)
        { from: 'b1', to: 'bf', input: 'p', output: 'p', action: { type: 'dispense_product_p' } },
        { from: 'b1', to: 'bf', input: 'q', output: 'q', action: { type: 'dispense_product_q' } },

        // --- Transições de Reembolso/Cancelamento (Input: p, q; Output: ε) ---
        // Do diagrama: p e q levam de qualquer estado de dinheiro de volta para 0c.
        // Ação: reembolso do saldo atual.
        { from: '5c', to: '0c', input: 'p', output: 'ε', action: { type: 'refund' } },
        { from: '5c', to: '0c', input: 'q', output: 'ε', action: { type: 'refund' } },
        { from: '10c', to: '0c', input: 'p', output: 'ε', action: { type: 'refund' } },
        { from: '10c', to: '0c', input: 'q', output: 'ε', action: { type: 'refund' } },
        { from: '15c', to: '0c', input: 'p', output: 'ε', action: { type: 'refund' } },
        { from: '15c', to: '0c', input: 'q', output: 'ε', action: { type: 'refund' } },
        { from: '20c', to: '0c', input: 'p', output: 'ε', action: { type: 'refund' } },
        { from: '20c', to: '0c', input: 'q', output: 'ε', action: { type: 'refund' } },
        { from: '25c', to: '0c', input: 'p', output: 'ε', action: { type: 'refund' } },
        { from: '25c', to: '0c', input: 'q', output: 'ε', action: { type: 'refund' } },
        { from: '30c', to: '0c', input: 'p', output: 'ε', action: { type: 'refund' } },
        { from: '30c', to: '0c', input: 'q', output: 'ε', action: { type: 'refund' } },
        { from: '35c', to: '0c', input: 'p', output: 'ε', action: { type: 'refund' } },
        { from: '35c', to: '0c', input: 'q', output: 'ε', action: { type: 'refund' } },
        { from: '40c', to: '0c', input: 'p', output: 'ε', action: { type: 'refund' } },
        { from: '40c', to: '0c', input: 'q', output: 'ε', action: { type: 'refund' } },
        { from: '45c', to: '0c', input: 'p', output: 'ε', action: { type: 'refund' } },
        { from: '45c', to: '0c', input: 'q', output: 'ε', action: { type: 'refund' } },
        { from: '50c', to: '0c', input: 'p', output: 'ε', action: { type: 'refund' } },
        { from: '50c', to: '0c', input: 'q', output: 'ε', action: { type: 'refund' } },
        { from: '55c', to: '0c', input: 'p', output: 'ε', action: { type: 'refund' } },
        { from: '55c', to: '0c', input: 'q', output: 'ε', action: { type: 'refund' } },

        // --- Transições de Reset (do estado final para o estado inicial 0c) ---
        // O diagrama mostra (p,ε) e (q,ε) de af/bf para 0c. Isso implica um reset após a dispensa do produto.
        // Na simulação, faremos isso automaticamente após um pequeno delay para visualização.
        { from: 'af', to: '0c', input: 'p', output: 'ε', action: { type: 'reset_after_dispense' } },
        { from: 'af', to: '0c', input: 'q', output: 'ε', action: { type: 'reset_after_dispense' } },
        { from: 'bf', to: '0c', input: 'p', output: 'ε', action: { type: 'reset_after_dispense' } },
        { from: 'bf', to: '0c', input: 'q', output: 'ε', action: { type: 'reset_after_dispense' } },
    ]
};

let currentState = fsm.states['0c'].id;
let currentBalance = 0; // em centavos
let lastOutput = 'N/A';

// Custos dos produtos (em centavos)
const productCosts = {
    'A': 25, // R$ 0,25
    'B': 50  // R$ 0,50
};

// Elementos da UI
const currentStateEl = document.getElementById('current-state');
const currentBalanceEl = document.getElementById('current-balance');
const lastOutputEl = document.getElementById('last-output');
const fsmGraphContainer = document.getElementById('fsm-graph');
const inputButtons = document.querySelectorAll('.buttons-group button:not(#reset-machine)');
const resetButton = document.getElementById('reset-machine');

// --- D3.js Visualization ---
const width = fsmGraphContainer.clientWidth;
const height = fsmGraphContainer.clientHeight;

const svg = d3.select(fsmGraphContainer).append('svg')
    .attr('width', width)
    .attr('height', height);

// Define a ponta de seta (arrowhead marker)
svg.append('defs').append('marker')
    .attr('id', 'arrowhead')
    .attr('viewBox', '0 -5 10 10') // Ajustado para ser mais centralizado
    .attr('refX', 8) // Distância da ponta da seta do centro do nó de destino
    .attr('refY', 0)
    .attr('orient', 'auto')
    .attr('markerWidth', 5)
    .attr('markerHeight', 5)
    .attr('xoverflow', 'visible')
    .append('svg:path')
    .attr('d', 'M0,-5L10,0L0,5') // Triângulo simples
    .attr('fill', '#95a5a6'); // Cor padrão da seta

// Dados para os nós do grafo (posições x,y serão gerenciadas pela simulação de força)
const graphNodes = Object.values(fsm.states).map(s => ({ id: s.id, isInitial: s.isInitial, isFinal: s.isFinal, isMoneyState: s.isMoneyState }));

// Dados para as ligações do grafo, tratando múltiplas transições entre os mesmos nós
const graphLinks = [];
// Mapeia o caminho da transição para evitar duplicação e para agrupar rótulos
const linkMap = new Map();

fsm.transitions.forEach(t => {
    const linkId = `${t.from}-${t.to}`;
    if (!linkMap.has(linkId)) {
        linkMap.set(linkId, {
            source: t.from,
            target: t.to,
            labels: [],
            originalTransitions: [] // Para depuração e highlighting
        });
    }
    linkMap.get(linkId).labels.push(`${t.input}, ${t.output}`);
    linkMap.get(linkId).originalTransitions.push(t);
});

linkMap.forEach(link => {
    graphLinks.push({
        source: link.source,
        target: link.target,
        label: link.labels.join(' / '), // Concatena rótulos para exibição
        allTransitions: link.originalTransitions // Armazena todas as transições originais
    });
});


// Simulação de força para organizar os nós
const simulation = d3.forceSimulation(graphNodes)
    .force('link', d3.forceLink(graphLinks).id(d => d.id).distance(120).strength(0.8)) // Aumenta a distância e força
    .force('charge', d3.forceManyBody().strength(-400)) // Aumenta repulsão
    .force('center', d3.forceCenter(width / 2, height / 2))
    .force('collision', d3.forceCollide().radius(25)) // Evita sobreposição de nós
    .on('tick', ticked);

let link, node, label, linkLabel;

function ticked() {
    // Para links de autoloop (mesmo source e target), ajuste manualmente a curva
    link.each(function(d) {
        if (d.source === d.target) {
            const r = 30; // Radius of the loop
            const x = d.source.x;
            const y = d.source.y;
            d3.select(this).attr('d', `M${x},${y - r} A${r},${r} 0 1,1 ${x},${y + r} A${r},${r} 0 1,1 ${x},${y - r}`);
        } else {
            // Para links normais, ajuste a linha para parar antes do círculo do nó
            const offset = 20; // Raio do círculo do nó
            const dx = d.target.x - d.source.x;
            const dy = d.target.y - d.source.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const scale = (distance - offset) / distance;
            const tx = d.source.x + dx * scale;
            const ty = d.source.y + dy * scale;
            d3.select(this).attr('x1', d.source.x).attr('y1', d.source.y).attr('x2', tx).attr('y2', ty);
        }
    });

    // Ajusta a posição das etiquetas das transições
    linkLabel
        .attr('x', d => {
            if (d.source === d.target) return d.source.x + 30; // Posição para autoloop
            return (d.source.x + d.target.x) / 2;
        })
        .attr('y', d => {
            if (d.source === d.target) return d.source.y; // Posição para autoloop
            return (d.source.y + d.target.y) / 2 - 10;
        });

    node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);

    label
        .attr('x', d => d.x)
        .attr('y', d => d.y + 3); // Ajusta a posição do label em relação ao nó
}


function renderGraph() {
    svg.selectAll('*').remove(); // Limpa o desenho anterior

    // Re-adiciona o marcador se removido
    svg.append('defs').append('marker')
        .attr('id', 'arrowhead')
        .attr('viewBox', '0 -5 10 10')
        .attr('refX', 8)
        .attr('refY', 0)
        .attr('orient', 'auto')
        .attr('markerWidth', 5)
        .attr('markerHeight', 5)
        .attr('xoverflow', 'visible')
        .append('svg:path')
        .attr('d', 'M0,-5L10,0L0,5')
        .attr('fill', '#95a5a6');


    // Desenha as ligações
    link = svg.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(graphLinks)
        .enter().append(d => d.source === d.target ? document.createElementNS(d3.namespaces.svg, "path") : document.createElementNS(d3.namespaces.svg, "line"))
        .attr('class', 'link')
        .attr('marker-end', 'url(#arrowhead)');

    // Desenha as etiquetas das ligações
    linkLabel = svg.append('g')
        .attr('class', 'link-labels')
        .selectAll('text')
        .data(graphLinks)
        .enter().append('text')
        .attr('class', 'link-label')
        .text(d => d.label);

    // Desenha os nós
    node = svg.append('g')
        .attr('class', 'nodes')
        .selectAll('circle')
        .data(graphNodes)
        .enter().append('circle')
        .attr('r', 20)
        .attr('class', d => `node ${d.isInitial ? 'initial' : ''} ${d.isFinal ? 'final' : ''}`)
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended));

    // Desenha as etiquetas dos nós
    label = svg.append('g')
        .attr('class', 'labels')
        .selectAll('text')
        .data(graphNodes)
        .enter().append('text')
        .attr('class', 'label')
        .text(d => d.id);

    // Reinicia a simulação
    simulation.nodes(graphNodes);
    simulation.force('link').links(graphLinks);
    simulation.alpha(1).restart();

    updateGraphHighlight();
}

function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

function updateGraphHighlight(prevNodeId = null, activeTransitionLink = null) {
    node.classed('current', d => d.id === currentState);
    node.classed('prev', d => d.id === prevNodeId); // Opcional: realça estado anterior

    // Remove destaque de transições anteriores antes de aplicar novas
    link.classed('active', false);
    if (activeTransitionLink) {
        link.filter(d => d === activeTransitionLink)
            .classed('active', true);

        // Remove a classe 'active' após um curto período
        setTimeout(() => {
            link.classed('active', false);
        }, 800); // Destaque por 0.8 segundos
    }
}

// --- Lógica do FSM ---
function updateUI() {
    currentStateEl.textContent = currentState;
    currentBalanceEl.textContent = (currentBalance / 100).toFixed(2); // Mostra em Reais
    lastOutputEl.textContent = lastOutput;
    updateGraphHighlight();
}

/**
 * Processa uma entrada do usuário e atualiza o estado do autômato e a UI.
 * @param {string} input - A entrada do usuário (e.g., '5', 'a', 'p').
 */
function processInput(input) {
    const oldState = currentState;
    let transitionFound = null;
    let relevantLink = null; // Link no grafo que corresponde à transição ativa

    // 1. Lógica para Reembolso/Cancelamento (p/q de estados de dinheiro)
    // Conforme o diagrama, 'p' ou 'q' de qualquer estado de dinheiro retorna a 0c.
    if ((input === 'p' || input === 'q') && fsm.states[currentState].isMoneyState && currentState !== '0c') {
        const refundAmount = currentBalance;
        currentBalance = 0;
        currentState = '0c';
        lastOutput = `Reembolso de ${refundAmount}c (R$ ${(refundAmount / 100).toFixed(2)}) efetuado.`;

        // Encontra o link correspondente para destaque no grafo
        relevantLink = graphLinks.find(
            l => l.source.id === oldState && l.target.id === currentState &&
                 l.allTransitions.some(t => t.input === input && t.output === 'ε')
        );
        updateGraphHighlight(oldState, relevantLink);
        updateUI();
        return;
    }

    // 2. Tenta encontrar uma transição explícita no FSM
    const possibleTransitions = fsm.transitions.filter(
        t => t.from === currentState && t.input === input
    );

    if (possibleTransitions.length > 0) {
        // Para inputs de moedas, a transição é direta
        if (['5', '10', '25', '50'].includes(input)) {
            transitionFound = possibleTransitions[0]; // Deve haver apenas uma para moedas
            currentBalance += transitionFound.action.amount;
            lastOutput = `Moeda de ${transitionFound.action.amount}c inserida. Saldo atual: ${currentBalance}c.`;
            currentState = transitionFound.to;
            relevantLink = graphLinks.find(
                l => l.source.id === oldState && l.target.id === currentState &&
                     l.allTransitions.some(t => t.input === input && t.output === 'ε')
            );
        }
        // Para seleção de categoria (a ou b)
        else if (['a', 'b'].includes(input)) {
            const productCategory = input.toUpperCase();
            const cost = productCosts[productCategory];

            if (currentBalance < cost) {
                lastOutput = `Saldo insuficiente para Categoria ${productCategory} (Custo: ${cost}c). Saldo atual: ${currentBalance}c.`;
                updateUI();
                return; // Impede a transição
            }

            transitionFound = possibleTransitions[0]; // Deve haver uma transição para a categoria
            const change = currentBalance - cost;
            currentBalance = change; // Troco é o novo saldo
            lastOutput = `Categoria ${productCategory} selecionada. Troco: ${change}c (R$ ${(change / 100).toFixed(2)}).`;
            currentState = transitionFound.to; // Move para a1 ou b1

            relevantLink = graphLinks.find(
                l => l.source.id === oldState && l.target.id === currentState &&
                     l.allTransitions.some(t => t.input === input && (t.output === change.toString().padStart(2, '0') || (change === 0 && t.output === '00')))
            );
        }
        // Para seleção de produto P ou Q (após categoria a1 ou b1)
        else if (['p', 'q'].includes(input) && (currentState === 'a1' || currentState === 'b1')) {
            transitionFound = possibleTransitions[0];
            const productType = input.toUpperCase();
            const dispensedCategory = currentState === 'a1' ? 'A' : 'B';
            lastOutput = `Produto ${productType} da Categoria ${dispensedCategory} dispensado!`;
            currentState = transitionFound.to; // Move para af ou bf

            relevantLink = graphLinks.find(
                l => l.source.id === oldState && l.target.id === currentState &&
                     l.allTransitions.some(t => t.input === input && t.output === input)
            );

            // Sequência de transições automáticas para resetar a máquina após a dispensa
            setTimeout(() => {
                const finalProductState = currentState; // af ou bf
                const resetTransition = fsm.transitions.find(t => t.from === finalProductState && (t.input === 'p' || t.input === 'q') && t.to === '0c'); // Qualquer p/q do final para 0c

                // Realça a transição de reset
                const resetLink = graphLinks.find(
                    l => l.source.id === finalProductState && l.target.id === '0c' &&
                         l.allTransitions.some(t => t.input === 'p' && t.output === 'ε') // Pode ser p ou q
                );
                updateGraphHighlight(finalProductState, resetLink);

                // Efetua o reset
                currentState = '0c';
                currentBalance = 0;
                lastOutput = 'Máquina pronta para nova operação.';
                updateUI();
            }, 1500); // Espera 1.5s para o usuário ver o estado final antes de resetar
            return; // Sai da função para que o timeout gerencie o restante
        }
    } else {
        lastOutput = `Entrada inválida ou transição não permitida do estado ${currentState} com input '${input}'.`;
    }

    // Atualiza a visualização do grafo e a UI
    updateGraphHighlight(oldState, relevantLink);
    updateUI();
}

// --- Event Listeners ---
inputButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Para botões de reembolso, usar a classe para diferenciar
        if (button.classList.contains('refund-button')) {
             processInput(button.dataset.input); // 'p' ou 'q' para reembolso
        } else if (['a', 'b'].includes(button.dataset.input)) {
            // Para seleção de categoria, processa como 'a' ou 'b'
            processInput(button.dataset.input);
        } else if (['p', 'q'].includes(button.dataset.input) && (currentState === 'a1' || currentState === 'b1')) {
            // Para seleção de produto p ou q, se estiver nos estados a1 ou b1
            processInput(button.dataset.input);
        } else if (['5', '10', '25', '50'].includes(button.dataset.input)) {
            // Para moedas
            processInput(button.dataset.input);
        } else {
            // Caso contrário, entrada não permitida no estado atual.
            lastOutput = `Ação '${button.dataset.input}' não permitida no estado atual (${currentState}).`;
            updateUI();
        }
    });
});

resetButton.addEventListener('click', () => {
    currentState = fsm.states['0c'].id;
    currentBalance = 0;
    lastOutput = 'Máquina reiniciada manualmente.';
    updateUI();
});

// Renderização inicial
renderGraph();
updateUI(); // Define os valores iniciais da UI