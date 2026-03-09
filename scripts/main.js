/**
 * Quick Initiative Pro v1.0
 * Author: O Vilão Midas
 */
'use strict';

const QI_ID = 'quick-initiative';

/* ══════════════════════════════════════════════════════════════════════════
   DICIONÁRIOS EMBUTIDOS — EN / PT-BR
   ══════════════════════════════════════════════════════════════════════════ */
const QI_LANG = {
    'en': {
        "QI.App.Title"               : "Quick Initiative Pro — Configure Combat",
        "QI.Sidebar.Tooltip"         : "Quick Initiative — Configure Combat (Ctrl+I)",
        "QI.Section.Initiative"      : "Initiative System",
        "QI.Side.Villains"           : "💀 Enemies",
        "QI.Side.Heroes"             : "⚔️ Heroes",
        "QI.Badge.Villains"          : "💀 {n} Enemies",
        "QI.Badge.Heroes"            : "⚔️ {n} Heroes",
        "QI.Roll.Click"              : "Roll",
        "QI.Roll.All"                : "Roll All",
        "QI.Roll.Waiting"            : "⚔️ Click your character to roll!",
        "QI.Roll.AlternatingTurns"   : "Alternating turns: winner → loser",
        "QI.Roll.InitiativeOf"       : "— Initiative: {n}",
        "QI.Combat.Start"            : "Start Combat!",
        "QI.Combat.Started"          : "⚔️ Combat started!",
        "QI.Combat.Ended"            : "Combat ended.",
        "QI.Combat.RolledInitiative" : "rolled initiative",
        "QI.Combat.Reordered"        : "⚔️ Initiative order reordered!",
        "QI.Tracker.Round"           : "Round {n}",
        "QI.Tracker.PrevTurn"        : "Previous turn",
        "QI.Tracker.NextTurn"        : "Next turn",
        "QI.Tracker.EndCombat"       : "End combat",
        "QI.Tracker.LockHint"        : "Click to unlock / Hold to drag",
        "QI.Context.EditInit"        : "✏️ Edit Initiative",
        "QI.Context.EditInitTitle"   : "✏️ Initiative of {name}",
        "QI.Context.EditInitChanged" : "✏️ {name}'s initiative changed to {val}",
        "QI.Context.Clone"           : "Clone",
        "QI.Context.Add"             : "Add Combatant",
        "QI.Context.Remove"          : "Remove",
        "QI.Context.Removed"         : "💀 {name} removed from combat",
        "QI.Picker.Hint"             : "Click to roll initiative and join combat",
        "QI.Picker.NoTokens"         : "No new tokens available in the scene.",
        "QI.State.CombatState"       : "Combat State",
        "QI.Error.InvalidNumber"     : "Invalid number.",
        "QI.Drop.Heroes"             : "Drag heroes here",
        "QI.Drop.Villains"           : "Drag enemies here",
        "QI.Scene.Title"             : "🧑 On Scene",
        "QI.Scene.Empty"             : "No tokens on scene",
        "QI.Scene.Refresh"           : "Refresh",
        "QI.Combat.NeedCombatant"    : "Add at least one combatant!",
        "QI.Sys.Label"               : "System",
        "QI.Sys.Dice"                : "Dice",
        "QI.Sys.Generic"             : "Generic"
    },
    'pt-BR': {
        "QI.App.Title"               : "Quick Initiative Pro — Configurar Combate",
        "QI.Sidebar.Tooltip"         : "Quick Initiative — Configurar Combate (Ctrl+I)",
        "QI.Section.Initiative"      : "Sistema de Iniciativa",
        "QI.Side.Villains"           : "💀 Inimigos",
        "QI.Side.Heroes"             : "⚔️ Heróis",
        "QI.Badge.Villains"          : "💀 {n} Inimigos",
        "QI.Badge.Heroes"            : "⚔️ {n} Heróis",
        "QI.Roll.Click"              : "Rolar",
        "QI.Roll.All"                : "Rolar Todos",
        "QI.Roll.Waiting"            : "⚔️ Clique no seu personagem para rolar!",
        "QI.Roll.AlternatingTurns"   : "Turnos alternados: vencedor → perdedor",
        "QI.Roll.InitiativeOf"       : "— Iniciativa: {n}",
        "QI.Combat.Start"            : "Iniciar Combate!",
        "QI.Combat.Started"          : "⚔️ Combate iniciado!",
        "QI.Combat.Ended"            : "Combate encerrado.",
        "QI.Combat.RolledInitiative" : "rolou iniciativa",
        "QI.Combat.Reordered"        : "⚔️ Ordem de iniciativa reordenada!",
        "QI.Tracker.Round"           : "Rodada {n}",
        "QI.Tracker.PrevTurn"        : "Turno anterior",
        "QI.Tracker.NextTurn"        : "Próximo turno",
        "QI.Tracker.EndCombat"       : "Encerrar combate",
        "QI.Tracker.LockHint"        : "Clique para desbloquear / Segure para mover",
        "QI.Context.EditInit"        : "✏️ Editar Iniciativa",
        "QI.Context.EditInitTitle"   : "✏️ Iniciativa de {name}",
        "QI.Context.EditInitChanged" : "✏️ Iniciativa de {name} alterada para {val}",
        "QI.Context.Clone"           : "Clonar",
        "QI.Context.Add"             : "Adicionar Combatente",
        "QI.Context.Remove"          : "Remover",
        "QI.Context.Removed"         : "💀 {name} removido do combate",
        "QI.Picker.Hint"             : "Clique para rolar iniciativa e entrar no combate",
        "QI.Picker.NoTokens"         : "Nenhum token novo disponível na cena.",
        "QI.State.CombatState"       : "Estado do Combate",
        "QI.Error.InvalidNumber"     : "Número inválido.",
        "QI.Drop.Heroes"             : "Arraste heróis aqui",
        "QI.Drop.Villains"           : "Arraste inimigos aqui",
        "QI.Scene.Title"             : "🧑 Na Cena",
        "QI.Scene.Empty"             : "Nenhum token na cena",
        "QI.Scene.Refresh"           : "Atualizar",
        "QI.Combat.NeedCombatant"    : "Adicione ao menos um combatente!",
        "QI.Sys.Label"               : "Sistema",
        "QI.Sys.Dice"                : "Dados",
        "QI.Sys.Generic"             : "Genérico"
    }
};

/* ══════════════════════════════════════════════════════════════════════════
   i18n helper — respeita a setting de idioma do módulo
   ══════════════════════════════════════════════════════════════════════════ */
function qi18n(key, subs = {}) {
    // Tenta ler a setting de idioma forçado; fallback para idioma do Foundry
    let lang = 'auto';
    try { lang = game.settings.get(QI_ID, 'language') ?? 'auto'; } catch(e) {}

    let str;
    if (lang !== 'auto' && QI_LANG[lang]?.[key]) {
        str = QI_LANG[lang][key];
    } else {
        // Usa o dicionário embutido correspondente ao idioma do Foundry como fallback
        const foundryLang = game.i18n?.lang ?? 'en';
        str = QI_LANG[foundryLang]?.[key]
           ?? QI_LANG['en']?.[key]
           ?? game.i18n?.localize(key)
           ?? key;
    }

    for (const [k, v] of Object.entries(subs)) str = str.replaceAll(`{${k}}`, v);
    return str;
}

/* ══════════════════════════════════════════════════════════════════════════
   HELPER GLOBAL: ordena combatentes para o tracker
   Chamado em TODOS os lugares — garante consistência
   ══════════════════════════════════════════════════════════════════════════ */
function buildOrder(combatants, system) {
    // Se nenhum combatente está marcado como 'rolled' (ex: reload após combate
    // já iniciado, estado perdido em crash), trata TODOS como válidos para
    // não deixar o tracker vazio.
    let rolled = combatants.filter(c => c.rolled);
    if (rolled.length === 0 && combatants.length > 0) {
        rolled = combatants.map(c => ({
            ...c,
            rolled     : true,
            initiative : c.initiative ?? 0
        }));
    }

    if (system !== 'fabula') {
        // D&D / PF2e / Genérico: maior iniciativa primeiro
        return [...rolled].sort((a, b) => b.initiative - a.initiative);
    }

    /*
     * Fábula Ultima — turnos alternados
     * ─────────────────────────────────
     * 1. Ordena heróis DESC e vilões DESC dentro de cada grupo
     * 2. Compara MELHOR herói vs MELHOR vilão para decidir quem começa
     * 3. Intercala: vencedor[0] → perdedor[0] → vencedor[1] → perdedor[1] → …
     *
     * Exemplo: heróis=[Jack:14, Gui:14]  vilões=[Gal:17, Hope:10]
     *   Vilões ganham (17 > 14)
     *   → Gal(17) → Jack(14) → Hope(10) → Gui(14)
     *      ^ villains[0]  ^ heroes[0]   ^ villains[1]  ^ heroes[1]
     */
    const heroes   = [...rolled.filter(c => c.side === 'hero'   )].sort((a,b) => b.initiative - a.initiative);
    const villains = [...rolled.filter(c => c.side === 'villain' )].sort((a,b) => b.initiative - a.initiative);

    const topH = heroes[0]?.initiative   ?? -Infinity;
    const topV = villains[0]?.initiative ?? -Infinity;
    // Empate: heróis ganham
    const first  = topH >= topV ? heroes   : villains;
    const second = topH >= topV ? villains : heroes;

    const result = [];
    const len = Math.max(first.length, second.length);
    for (let i = 0; i < len; i++) {
        if (first[i])  result.push(first[i]);
        if (second[i]) result.push(second[i]);
    }
    return result;
}

/* ══════════════════════════════════════════════════════════════════════════
   HELPER: HP do ator
   ══════════════════════════════════════════════════════════════════════════ */
function getHP(actorId) {
    const a = game.actors.get(actorId);
    if (!a) return null;
    const hp = a.system?.attributes?.hp
            ?? a.system?.stats?.hp
            ?? a.system?.resources?.hp
            ?? a.system?.health;
    if (!hp) return null;
    const v = hp.value ?? hp.current ?? hp.val;
    const m = hp.max;
    if (v == null || !m) return null;
    return { value: v, max: m, pct: Math.max(0, Math.min(100, Math.round((v / m) * 100))) };
}

/* ══════════════════════════════════════════════════════════════════════════
   SISTEMAS DE INICIATIVA
   ══════════════════════════════════════════════════════════════════════════ */
const QI_SYSTEMS = {
    dnd5e: {
        label  : 'D&D 5e  (1d20 + Des)',
        icon   : '⚔️',
        _getMod(actor) {
            return actor?.system?.abilities?.dex?.mod
                ?? actor?.system?.abilities?.dexterity?.mod
                ?? actor?.system?.attributes?.dex?.mod
                ?? actor?.system?.stats?.dex?.mod
                ?? 0;
        },
        formula(actor) { const m = this._getMod(actor); return m !== 0 ? `1d20 + ${m}` : '1d20'; },
        roll(actor) {
            const mod = this._getMod(actor);
            const die = Math.ceil(Math.random() * 20);
            return { die, mod, total: die + mod, formula: `d20(${die}) + ${mod}` };
        }
    },
    fabula: {
        label  : 'Fábula Ultima (DEX + INS)',
        icon   : '✨',

        /* Tenta todos os paths conhecidos do sistema Fábula Ultima no Foundry.
         * O sistema oficial usa chaves curtas (dex, ins, mig, wlp) com sub-campo
         * que pode ser: base | current | value | die | size  — todos como número.
         * Fallback: 8 (d8) se nada for encontrado.
         */
        _getDieSize(actor, keys) {
            const SA = actor?.system?.attributes ?? {};
            const clamp = n => [4,6,8,10,12].includes(Number(n))
                ? Number(n)
                : [4,6,8,10,12].reduce((p,c) => Math.abs(c - Number(n)) < Math.abs(p - Number(n)) ? c : p);

            for (const k of keys) {
                const attr = SA[k];
                if (!attr) continue;
                // tenta cada sub-campo em ordem de prioridade
                for (const sub of ['base','current','value','die','size','current.value']) {
                    const raw = sub.includes('.')
                        ? sub.split('.').reduce((o,s) => o?.[s], attr)
                        : attr[sub];
                    if (raw != null && Number(raw) >= 4) return clamp(raw);
                }
            }
            // Debug: lista o que existe para ajudar a descobrir paths
            if (Object.keys(SA).length) {
                console.log('[Quick Initiative] Fábula attrs disponíveis:',
                    Object.fromEntries(Object.entries(SA).map(([k,v]) => [k, JSON.stringify(v).slice(0,80)])));
            }
            return 8; // fallback d8
        },

        formula(actor) {
            const df = this._getDieSize(actor, ['dex','dexterity','des','DEX','DES']);
            const di = this._getDieSize(actor, ['ins','insight','int','ast','INT','AST','INS']);
            return `1d${df} + 1d${di}`;
        },

        roll(actor) {
            const df = this._getDieSize(actor, ['dex','dexterity','des','DEX','DES']);
            const di = this._getDieSize(actor, ['ins','insight','int','ast','INT','AST','INS']);
            const rDex = Math.ceil(Math.random() * df);
            const rIns = Math.ceil(Math.random() * di);
            return {
                die    : Math.max(rDex, rIns),
                total  : rDex + rIns,
                formula: `d${df}(${rDex}) + d${di}(${rIns}) = ${rDex + rIns}`
            };
        }
    },
    pf2e: {
        label  : 'Pathfinder 2e (1d20 + Per)',
        icon   : '🛡️',
        formula: (actor) => {
            const per = actor?.system?.skills?.perception?.value ?? actor?.system?.perception?.mod ?? 0;
            return per !== 0 ? `1d20 + ${per}` : '1d20';
        },
        roll: (actor) => {
            const per = actor?.system?.skills?.perception?.value ?? actor?.system?.perception?.mod ?? 0;
            const die = Math.ceil(Math.random() * 20);
            return { die, mod: per, total: die + per, formula: `d20(${die}) + Per(${per})` };
        }
    },
    generic: {
        label  : 'Genérico',
        formula: (_actor) => (QiState.genericDice || '1d20').trim().toLowerCase(),
        icon : '🎲',
        roll : (_actor) => {
            const formula = (QiState.genericDice || '1d20').trim().toLowerCase();
            const match   = formula.match(/^(\d+)d(\d+)$/);
            if (!match) {
                const die = Math.ceil(Math.random() * 20);
                return { die, mod: 0, total: die, formula: `1d20 = ${die}` };
            }
            const numDice = Math.max(1, Math.min(99, parseInt(match[1])));
            const dieSize = Math.max(2, Math.min(1000, parseInt(match[2])));
            const rolls   = [];
            for (let i = 0; i < numDice; i++) rolls.push(Math.ceil(Math.random() * dieSize));
            const total = rolls.reduce((a, b) => a + b, 0);
            const detail = numDice > 1 ? `(${rolls.join('+')})` : '';
            return { die: Math.max(...rolls), mod: 0, total, formula: `${formula}${detail} = ${total}` };
        }
    },
    lord: {
        label  : 'Lord (2d6 + Fortitude)',
        icon   : '👑',

        /* Conta checkboxes marcadas em atributos.fortitude (c1–10) */
        _getFortitude(actor) {
            const fort = actor?.system?.atributos?.fortitude;
            if (!fort) return 0;
            let n = 0;
            for (let i = 1; i <= 10; i++) { if (fort[`c${i}`]) n++; }
            return n;
        },

        formula(actor) {
            const f = this._getFortitude(actor);
            return f > 0 ? `2d6 + ${f}` : '2d6';
        },

        roll(actor) {
            const fort = this._getFortitude(actor);
            const d1 = Math.ceil(Math.random() * 6);
            const d2 = Math.ceil(Math.random() * 6);
            const total = d1 + d2 + fort;
            return {
                die    : Math.max(d1, d2),
                total,
                formula: fort > 0
                    ? `d6(${d1}) + d6(${d2}) + Fort(${fort}) = ${total}`
                    : `d6(${d1}) + d6(${d2}) = ${total}`
            };
        }
    }
};

/* ══════════════════════════════════════════════════════════════════════════
   PALETA DE CORES — hero / villain dinâmicos
   ══════════════════════════════════════════════════════════════════════════ */
const QI_COLOR_PALETTE = {
    gold  : { label:'✨ Dourado', r:200, g:146, b:42,  rl:232, gl:184, bl:74  },
    red   : { label:'🔴 Vermelho',r:192, g:64,  b:64,  rl:240, gl:112, bl:112 },
    blue  : { label:'🔵 Azul',   r:64,  g:128, b:200, rl:112, gl:176, bl:240 },
    green : { label:'🟢 Verde',  r:46,  g:160, b:80,  rl:80,  gl:200, bl:120 },
    purple: { label:'🟣 Roxo',   r:140, g:60,  b:200, rl:180, gl:110, bl:240 },
    orange: { label:'🟠 Laranja',r:220, g:110, b:30,  rl:255, gl:160, bl:80  },
    yellow: { label:'🟡 Amarelo',r:220, g:200, b:40,  rl:255, gl:235, bl:80  },
    teal  : { label:'🩵 Ciano',  r:40,  g:180, b:180, rl:80,  gl:220, bl:220 },
    pink  : { label:'🩷 Rosa',   r:220, g:80,  b:160, rl:255, gl:130, bl:200 },
    silver: { label:'⚪ Prata',  r:160, g:170, b:190, rl:210, gl:215, bl:230 },
    black : { label:'⬛ Preto',  r:40,  g:40,  b:50,  rl:100, gl:100, bl:110 },
};

/* ══════════════════════════════════════════════════════════════════════════
   TOKEN GLOW — brilho dourado pulsante no token do combatente ativo
   ══════════════════════════════════════════════════════════════════════════ */
const QiTokenGlow = {
    _activeTokenId: null,
    _activeSide   : null,
    _container    : null,
    _animFrame    : null,

    setActive(tokenId, side) {
        this.clear();
        if (!tokenId) return;
        this._activeTokenId = tokenId;
        this._activeSide    = side ?? null;
        this._draw();
    },

    clear() {
        if (this._animFrame) { cancelAnimationFrame(this._animFrame); this._animFrame = null; }
        if (this._container) { try { this._container.destroy({ children: true }); } catch(e) {} this._container = null; }
        this._activeTokenId = null;
        this._activeSide    = null;
    },

    /* Retorna { base, mid, bright } como inteiros 0xRRGGBB para o lado ativo */
    _getColors() {
        let colorKey = 'gold';
        try {
            const side = this._activeSide;
            if (side === 'villain') colorKey = game.settings.get(QI_ID, 'villainColor') || 'red';
            else                    colorKey = game.settings.get(QI_ID, 'heroColor')    || 'gold';
        } catch(e) {}

        const c = QI_COLOR_PALETTE[colorKey] ?? QI_COLOR_PALETTE.gold;
        // base: cor da paleta; mid: ligeiramente mais claro; bright: bem claro (núcleo)
        const toHex = (r,g,b) => (r << 16) | (g << 8) | b;
        const clamp = v => Math.min(255, Math.max(0, v));
        return {
            base  : toHex(c.r, c.g, c.b),
            mid   : toHex(clamp(c.rl), clamp(c.gl), clamp(c.bl)),
            bright: toHex(clamp(c.rl + 40), clamp(c.gl + 40), clamp(c.bl + 40))
        };
    },

    _draw() {
        const token = canvas?.tokens?.placeables?.find(t => t.id === this._activeTokenId);
        if (!token || !window.PIXI) return;

        // Verifica se o brilho está habilitado nas settings
        let glowEnabled = true;
        let glowImage   = '';
        try {
            glowEnabled = game.settings.get(QI_ID, 'tokenGlowEnabled') ?? true;
            glowImage   = game.settings.get(QI_ID, 'tokenGlowImage')   ?? '';
        } catch(e) {}

        // Nada para desenhar
        if (!glowEnabled && !glowImage) return;

        const PIXI = window.PIXI;
        const container = new PIXI.Container();
        container.zIndex = -1;
        token.addChildAt(container, 0);
        this._container = container;

        const W  = token.w  ?? (token.document?.width  ?? 1) * (canvas.grid?.size ?? 100);
        const H  = token.h  ?? (token.document?.height ?? 1) * (canvas.grid?.size ?? 100);
        const cx = W / 2;
        const cy = H / 2;
        const r  = Math.max(W, H) * 0.52;

        // ── Brilho radial (Graphics) ───────────────────────────────────────
        let outerG = null, innerG = null;
        if (glowEnabled) {
            outerG = new PIXI.Graphics();
            innerG = new PIXI.Graphics();
            container.addChild(outerG);
            container.addChild(innerG);
        }

        // ── Imagem giratória ──────────────────────────────────────────────
        let spinSprite = null;
        if (glowImage) {
            try {
                const tex = PIXI.Texture.from(glowImage);
                spinSprite = new PIXI.Sprite(tex);
                // Centraliza e dimensiona para cobrir bem o token (2× raio de each side)
                const size = r * 2.4;
                spinSprite.width  = size;
                spinSprite.height = size;
                spinSprite.anchor.set(0.5);
                spinSprite.x = cx;
                spinSprite.y = cy;
                spinSprite.alpha = 0.92;
                // Insere ABAIXO dos gráficos de brilho para ficar atrás
                container.addChildAt(spinSprite, 0);
            } catch(e) {
                console.warn('[Quick Initiative] Erro ao carregar imagem do glow:', e);
            }
        }

        let phase = 0;
        const tick = () => {
            if (!this._container || !token?.parent) { this.clear(); return; }
            phase += 0.028;
            const p = 0.6 + Math.sin(phase) * 0.35;

            // Brilho radial pulsante
            if (glowEnabled && outerG && innerG) {
                const { base, mid, bright } = this._getColors();

                outerG.clear();
                for (let i = 5; i >= 1; i--) {
                    outerG.beginFill(base, p * (i / 5) * 0.38);
                    outerG.drawCircle(cx, cy, r * (1 + (5 - i) * 0.10));
                    outerG.endFill();
                }

                innerG.clear();
                innerG.beginFill(bright, p * 0.32);
                innerG.drawCircle(cx, cy, r * 0.72);
                innerG.endFill();
                innerG.beginFill(mid, p * 0.55);
                innerG.drawCircle(cx, cy, r * 0.48);
                innerG.endFill();
                innerG.beginFill(bright, p * 0.35);
                innerG.drawCircle(cx, cy, r * 0.24);
                innerG.endFill();
            }

            // Imagem girando suavemente
            if (spinSprite) {
                spinSprite.rotation += 0.008; // ~0.46°/frame → volta completa em ~13s
            }

            this._animFrame = requestAnimationFrame(tick);
        };
        this._animFrame = requestAnimationFrame(tick);
    },

    refresh() {
        const id   = this._activeTokenId;
        const side = this._activeSide;
        if (!id) return;
        this.clear();
        this._activeTokenId = id;
        this._activeSide    = side;
        this._draw();
    }
};

/* ══════════════════════════════════════════════════════════════════════════
   ESTADO GLOBAL
   ══════════════════════════════════════════════════════════════════════════ */
const QiState = {
    active     : false,
    system     : 'dnd5e',
    combatants : [],
    round      : 1,
    currentTurn: 0,
    phase      : 'roll',
    genericDice: '1d20',

    reset() {
        this.active = false; this.combatants = [];
        this.round  = 1;     this.currentTurn = 0; this.phase = 'roll';
        this.manualOrder = [];
        // NÃO reseta genericDice — preserva a preferência do usuário
    },

    // Usa buildOrder() — fonte única da verdade
    order() { return buildOrder(this.combatants, this.system); }
};

/* ══════════════════════════════════════════════════════════════════════════
   BANNER + TRACKER
   ══════════════════════════════════════════════════════════════════════════ */
const QiBanner = {
    _roll : null,
    _track: null,
    _backdrop: null,

    _ensureBackdrop() {
        if (this._backdrop) return;
        this._backdrop = document.createElement('div');
        this._backdrop.id = 'qc-roll-backdrop';
        document.body.appendChild(this._backdrop);
        // Aplica imagem de fundo customizada (salva nas configurações do módulo)
        this._applyBackdropBg();
    },

    _applyBackdropBg() {
        if (!this._backdrop) return;
        let img = '', fit = false;
        try {
            img = game.settings.get(QI_ID, 'bannerBg')    ?? '';
            fit = game.settings.get(QI_ID, 'bannerBgFit') ?? false;
        } catch(e) {}

        if (img) {
            const dimmer = 'linear-gradient(rgba(0,0,0,.52),rgba(0,0,0,.52))';
            if (fit) {
                // Tela cheia — estica para cobrir o backdrop inteiro
                this._backdrop.style.background =
                    `${dimmer}, url('${img}') center/cover no-repeat`;
            } else {
                // Tamanho natural — centralizado, sem esticar
                this._backdrop.style.background =
                    `${dimmer}, url('${img}') center/auto no-repeat`;
            }
        } else {
            this._backdrop.style.background = '';
        }
    },



    /* ── Fase de rolagem: faixa crimson central ── */
    showRoll(state) {
        this._ensureRoll();
        this._ensureBackdrop();
        this._applyColors();
        this._renderRoll(state);
        requestAnimationFrame(() => {
            this._roll.classList.add('visible');
            this._backdrop.classList.add('visible');
        });
    },

    hide() {
        this._roll?.classList.remove('visible');
        this._track?.classList.remove('visible');
        this._backdrop?.classList.remove('visible');
    },

    update(state) {
        if (state.phase === 'roll') this._renderRoll(state);
        else                        this._renderTrack(state);
    },

    /* Atualiza apenas o badge do card sem spawnar dados SVG (usado quando Dice So Nice rodou) */
    _updateCard(combatantId, result) {
        if (!this._roll) return;
        const card = this._roll.querySelector(`[data-cid="${combatantId}"]`);
        if (!card) return;
        card.classList.add('rolled'); card.classList.remove('can-roll');
        const badge = card.querySelector('.qc-badge');
        if (badge) { badge.textContent = result.total; badge.className = 'qc-badge gold'; }
        card.querySelector('.qc-overlay')?.remove();
        const allDone = QiState.combatants.every(c => c.rolled);
        if (allDone && game.user.isGM) {
            this._roll?.querySelector('.qc-go-btn')?.classList.add('show');
        }
    },

    /* Dados 3D caindo */
    animateDice(combatantId, result) {
        // Spawn 4 dice: 3 random ghost dice + final result die (larger, centered)
        for (let i = 0; i < 3; i++) {
            setTimeout(() => this._spawnDie(Math.ceil(Math.random() * 20), false), i * 140);
        }
        setTimeout(() => this._spawnDie(result.die, true), 520);

        setTimeout(() => {
            if (!this._roll) return;
            const card = this._roll.querySelector(`[data-cid="${combatantId}"]`);
            if (card) {
                card.classList.add('rolled'); card.classList.remove('can-roll');
                const badge = card.querySelector('.qc-badge');
                if (badge) { badge.textContent = result.total; badge.className = 'qc-badge gold'; }
                card.querySelector('.qc-overlay')?.remove();
            }
            // Mostra botão "Iniciar Combate" quando todos rolaram (apenas GM)
            const allDone = QiState.combatants.every(c => c.rolled);
            if (allDone && game.user.isGM) {
                this._roll?.querySelector('.qc-go-btn')?.classList.add('show');
            }
        }, 980);
    },

    /* ── Transição para o tracker ── */
    showTracker(state) {
        if (this._roll) {
            this._roll.classList.add('exit');
            setTimeout(() => this._roll?.classList.remove('visible', 'exit'), 500);
        }
        this._backdrop?.classList.remove('visible');
        this._ensureTrack();
        this._applyColors();
        this._renderTrack(state);
        // Restaura posição salva (somente GM)
        try {
            const saved = game.user.isGM ? game.settings.get(QI_ID, 'trackerPosition') : null;
            if (saved) {
                const pos = JSON.parse(saved);
                if (pos.left && pos.top) {
                    this._track.style.left      = pos.left;
                    this._track.style.top       = pos.top;
                    this._track.style.bottom    = 'auto';
                    this._track.style.right     = 'auto';
                    this._track.style.transform = 'none';
                }
            }
        } catch(e) {}
        requestAnimationFrame(() => this._track.classList.add('visible'));
    },

    /* ── Render: faixa central de rolagem ── */
    _renderRoll(state) {
        if (!this._roll) return;
        const isGM    = game.user.isGM;
        const sys     = QI_SYSTEMS[state.system] ?? QI_SYSTEMS.generic;
        const myOwned = this._myActorIds();

        const makeCard = (c) => {
            const canRoll = (myOwned.has(c.actorId) || isGM) && !c.rolled;
            return `
            <div class="qc-pcard ${c.side} ${c.rolled?'rolled':''} ${canRoll?'can-roll':''}"
                 data-cid="${c.id}" title="${c.name}${c.rolled?' '+qi18n('QI.Roll.InitiativeOf',{n:c.initiative}):''}">
                <div class="qc-portrait" style="background-image:url('${c.img}')">
                    ${canRoll ? `<div class="qc-overlay"><i class="fas fa-dice-d20"></i><span>${qi18n('QI.Roll.Click')}</span></div>` : ''}
                    <div class="qc-badge ${c.rolled?'gold':'gray'}" title="${c.formula??''}">${c.rolled?c.initiative:'?'}</div>
                </div>
            </div>`;
        };

        const villains  = state.combatants.filter(c => c.side === 'villain');
        const heroes    = state.combatants.filter(c => c.side === 'hero');
        const allRolled = state.combatants.length > 0 && state.combatants.every(c => c.rolled);
        const isFabula  = state.system === 'fabula';

        this._roll.innerHTML = `
        <div class="qc-banner-inner">
            <div class="qc-side left">
                <div class="qc-side-label villain-label">${qi18n('QI.Side.Villains')}</div>
                <div class="qc-cards-row">
                    ${villains.map(makeCard).join('') || '<div class="qc-empty-banner">—</div>'}
                </div>
            </div>

            <div class="qc-center">
                <div class="qc-sys-name">${sys.icon} ${sys.label}</div>
                ${isFabula ? `
                <div class="qc-fabula-hint">
                    ✨ Role o <b>dado de DEX + dado de INS</b><br>
                    Maior total age primeiro<br>
                    ${qi18n('QI.Roll.AlternatingTurns')}
                </div>` : ''}
                <div id="qc-dice-stage"></div>
                <div class="qc-center-btns">
                    ${isGM ? `
                    <button class="qc-roll-all"><i class="fas fa-dice-d20"></i> ${qi18n('QI.Roll.All')}</button>
                    <button class="qc-go-btn ${allRolled?'show':''}">
                        <i class="fas fa-swords"></i> ${qi18n('QI.Combat.Start')}
                    </button>
                    <button class="qc-cancel-x" title="Cancelar"><i class="fas fa-times"></i></button>
                    ` : `<div class="qc-waiting">${qi18n('QI.Roll.Waiting')}</div>`}
                </div>
            </div>

            <div class="qc-side right">
                <div class="qc-side-label hero-label">${qi18n('QI.Side.Heroes')}</div>
                <div class="qc-cards-row">
                    ${heroes.map(makeCard).join('') || '<div class="qc-empty-banner">—</div>'}
                </div>
            </div>
        </div>`;

        // Clique nos cards
        this._roll.querySelectorAll('.qc-pcard.can-roll').forEach(el =>
            el.addEventListener('click', () => QuickInitiative.rollFor(el.dataset.cid))
        );
        if (isGM) {
            this._roll.querySelector('.qc-roll-all')?.addEventListener('click', () => QuickInitiative.rollAll());
            this._roll.querySelector('.qc-go-btn')?.addEventListener('click',   () => QuickInitiative.goToCombat());
            this._roll.querySelector('.qc-cancel-x')?.addEventListener('click', () => QuickInitiative.endCombat());
        }
    },

    /* ── Render: tracker carrossel ──
     * Fix 1: sempre mostra 5 visíveis, ativo no centro, carrossel circular
     * Fix 2: botões (‹ ✕ ›) ao lado dos retratos, alinhados verticalmente
     * Fix 3: ao travar, tracker fica onde está (não volta ao lugar)
     * Fix 4: "Rodada N" logo acima do retrato central
     * direction: 'next' | 'prev' | null — para animação de carrossel
     */
    _renderTrack(state, direction = null) {
        if (!this._track) return;

        const ordered = (state.manualOrder?.length)
            ? state.manualOrder.map(id => state.combatants.find(c => c.id === id)).filter(Boolean)
            : buildOrder(state.combatants, state.system);
        const isGM = game.user.isGM;
        const idx  = state.currentTurn ?? 0;
        const source = ordered.length > 0 ? ordered : state.combatants;
        const total  = source.length;

        // Salva posição/estado ANTES de limpar innerHTML
        const wasUnlocked = this._track.classList.contains('unlocked');
        const savedLeft   = this._track.style.left;
        const savedTop    = this._track.style.top;
        const savedBottom = this._track.style.bottom;
        const savedRight  = this._track.style.right;
        const savedTransform = this._track.style.transform;

        /*
         * Carrossel: sempre 5 slots visíveis (−2 −1 [ATIVO] +1 +2)
         * Com menos de 5 combatentes, repete circularmente para preencher.
         * Com 1 combatente, mostra só ele no centro.
         */
        const VISIBLE = Math.min(5, total % 2 === 0 ? total + 1 : total); // sempre ímpar
        const half = Math.floor(VISIBLE / 2);
        const slots = [];
        // Só gera slots se houver combatentes
        if (total > 0) {
            for (let offset = -half; offset <= half; offset++) {
                const realIdx = ((idx + offset) % total + total) % total;
                const c = source[realIdx];
                if (c) slots.push({ combatant: c, realIdx, offset });
            }
        }

        const cards = slots.map(({ combatant: c, realIdx, offset }, i) => {
            const cls = offset === 0 ? 'active-turn'
                      : Math.abs(offset) === 1 ? 'adj-turn'
                      : 'far-turn';
            const roundBadge = offset === 0
                ? `<div class="qt-round-label">${qi18n('QI.Tracker.Round',{n:state.round})}</div>`
                : '';

            // Detecta virada de rodada entre slots adjacentes
            let divider = '';
            if (i > 0 && total > 1) {
                const prevRealIdx = slots[i - 1].realIdx;
                const crossesEnd = (prevRealIdx === total - 1 && realIdx === 0)
                                || (prevRealIdx === 0 && realIdx === total - 1);
                if (crossesEnd) {
                    divider = `<div class="qt-round-divider"><span class="qt-round-divider-label">↺</span></div>`;
                }
            }

            return `${divider}
            <div class="qt-card ${c.side ?? 'hero'} ${cls}" data-idx="${realIdx}">
                <div class="qt-portrait" style="background-image:url('${c.img ?? ''}')">
                    ${roundBadge}
                    <div class="qt-init-badge ${offset === 0 ? 'gold' : 'gray'}">${c.initiative ?? '?'}</div>
                </div>
                <div class="qt-card-name">${c.name ?? ''}</div>
            </div>`;
        }).join('');

        this._track.innerHTML = `
            <div class="qt-inner">
                <div class="qt-left-col">
                    <button class="qt-lock-btn" title="${qi18n('QI.Tracker.LockHint')}"><i class="fas fa-lock"></i></button>
                    ${isGM ? `<button class="qt-nav qt-nav-prev" title="${qi18n('QI.Tracker.PrevTurn')}"><i class="fas fa-chevron-left"></i></button>` : ''}
                </div>
                <div class="qt-carousel" id="qt-cards-list">
                    ${cards}
                </div>
                <div class="qt-right-col">
                    ${isGM ? `<button class="qt-nav qt-nav-end"  title="${qi18n('QI.Tracker.EndCombat')}"><i class="fas fa-times"></i></button>
                    <button class="qt-nav qt-nav-next" title="${qi18n('QI.Tracker.NextTurn')}"><i class="fas fa-chevron-right"></i></button>` : ''}
                </div>
                ${isGM ? `<div class="qt-dock-btn-col">
                    <button class="qt-lock-btn" title="${qi18n('QI.Tracker.LockHint')}"><i class="fas fa-lock"></i></button>
                    <button class="qt-nav qt-nav-end"  title="${qi18n('QI.Tracker.EndCombat')}"><i class="fas fa-times"></i></button>
                    <button class="qt-nav qt-nav-prev" title="${qi18n('QI.Tracker.PrevTurn')}"><i class="fas fa-chevron-left"></i></button>
                    <button class="qt-nav qt-nav-next" title="${qi18n('QI.Tracker.NextTurn')}"><i class="fas fa-chevron-right"></i></button>
                </div>` : `<div class="qt-dock-btn-col">
                    <button class="qt-lock-btn" title="${qi18n('QI.Tracker.LockHint')}"><i class="fas fa-lock"></i></button>
                </div>`}
            </div>`;

        // Restaura posição e estado de unlock
        if (wasUnlocked) {
            this._track.classList.add('unlocked');
            if (savedLeft)      this._track.style.left      = savedLeft;
            if (savedTop)       this._track.style.top       = savedTop;
            if (savedBottom)    this._track.style.bottom    = savedBottom;
            if (savedRight)     this._track.style.right     = savedRight;
            if (savedTransform) this._track.style.transform = savedTransform;
            this._track.querySelector('.qt-lock-btn i')?.classList.replace('fa-lock','fa-up-down-left-right');
        }

        // Animação simples: só o card que entra pela borda anima
        if (direction) {
            requestAnimationFrame(() => {
                const allCards = this._track.querySelectorAll('.qt-card');
                if (direction === 'next') {
                    allCards[allCards.length - 1]?.classList.add('entering-right');
                } else {
                    allCards[0]?.classList.add('entering-left');
                }
                allCards.forEach(c => c.addEventListener('animationend', () => {
                    c.classList.remove('entering-right','entering-left','sliding-left','sliding-right');
                }, { once: true }));
            });
        }


        /* ── Lock/drag disponível para TODOS os usuários ── */
        const updateDock = () => {
            const r  = this._track.getBoundingClientRect();
            const cx = r.left + r.width  / 2;
            const cy = r.top  + r.height / 2;
            const W  = window.innerWidth;
            const H  = window.innerHeight;
            this._track.classList.remove('dock-top','dock-bottom','dock-left','dock-right');
            if      (cy < H * 0.30)  this._track.classList.add('dock-top');
            else if (cx < W * 0.25)  this._track.classList.add('dock-left');
            else if (cx > W * 0.75)  this._track.classList.add('dock-right');
            else                     this._track.classList.add('dock-bottom');
        };
        requestAnimationFrame(updateDock);

        const syncLockIcons = (unlocked) => {
            this._track.querySelectorAll('.qt-lock-btn').forEach(b => {
                b.querySelector('i').className = unlocked ? 'fas fa-up-down-left-right' : 'fas fa-lock';
            });
        };

        this._track.querySelectorAll('.qt-lock-btn').forEach(btn => {
            let _dragged = false, _sx, _sy, _ex, _ey;
            btn.addEventListener('mousedown', (e) => {
                if (!this._track.classList.contains('unlocked')) return;
                _dragged = false;
                _sx = e.clientX; _sy = e.clientY;
                const r = this._track.getBoundingClientRect();
                _ex = r.left; _ey = r.top;
                e.preventDefault(); e.stopPropagation();
                const onMove = (ev) => {
                    const dx = ev.clientX - _sx, dy = ev.clientY - _sy;
                    if (Math.abs(dx) + Math.abs(dy) > 3) _dragged = true;
                    if (!_dragged) return;
                    const tw = this._track.offsetWidth;
                    const th = this._track.offsetHeight;
                    const newLeft = Math.max(0, Math.min(window.innerWidth  - tw, _ex + dx));
                    const newTop  = Math.max(0, Math.min(window.innerHeight - th, _ey + dy));
                    this._track.style.left      = newLeft + 'px';
                    this._track.style.top       = newTop  + 'px';
                    this._track.style.bottom    = 'auto';
                    this._track.style.right     = 'auto';
                    this._track.style.transform = 'none';
                    updateDock();
                };
                const onUp = () => {
                    document.removeEventListener('mousemove', onMove);
                    document.removeEventListener('mouseup', onUp);
                    updateDock();
                    // Salva posição para o GM
                    if (game.user.isGM) {
                        try {
                            game.settings.set(QI_ID, 'trackerPosition', JSON.stringify({
                                left     : this._track.style.left,
                                top      : this._track.style.top,
                                unlocked : true
                            }));
                        } catch(e) {}
                    }
                };
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onUp);
            });
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (_dragged) { _dragged = false; return; }
                const isUnlocked = this._track.classList.contains('unlocked');
                if (isUnlocked) {
                    this._track.classList.remove('unlocked');
                    syncLockIcons(false);
                } else {
                    this._track.classList.add('unlocked');
                    syncLockIcons(true);
                }
            });
        });

        if (isGM) {
            this._track.querySelectorAll('.qt-nav-prev').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); QuickInitiative.prevTurn(); }));
            this._track.querySelectorAll('.qt-nav-next').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); QuickInitiative.nextTurn(); }));
            this._track.querySelectorAll('.qt-nav-end' ).forEach(b => b.addEventListener('click', e => { e.stopPropagation(); QuickInitiative.endCombat(); }));

            this._setupDragOrder(ordered);
            this._setupContextMenu(ordered);
        }

    },

    /* Drag-and-drop de reordenação no tracker */
    _setupDragOrder(ordered) {
        const container = document.getElementById('qt-cards-list');
        if (!container) return;

        let dragSrc = null;

        container.querySelectorAll('.qt-card').forEach((card, i) => {
            card.draggable = true;
            card.style.cursor = 'grab';

            card.addEventListener('dragstart', function(e) {
                dragSrc = this;
                e.dataTransfer.effectAllowed = 'move';
                setTimeout(() => this.classList.add('qt-dragging'), 0);
            });
            card.addEventListener('dragend', function() {
                this.classList.remove('qt-dragging');
                container.querySelectorAll('.qt-card').forEach(c => c.classList.remove('qt-drag-over'));
            });
            card.addEventListener('dragover', function(e) {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                container.querySelectorAll('.qt-card').forEach(c => c.classList.remove('qt-drag-over'));
                if (this !== dragSrc) this.classList.add('qt-drag-over');
            });
            card.addEventListener('drop', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (!dragSrc || dragSrc === this) return;

                const fromRealIdx = parseInt(dragSrc.dataset.idx);
                const toRealIdx   = parseInt(this.dataset.idx);

                const ids = ordered.map(c => c.id);
                const [moved] = ids.splice(fromRealIdx, 1);
                ids.splice(toRealIdx, 0, moved);

                QuickInitiative.reorderTurns(ids);
            });
        });
    },

    /* Menu de contexto no tracker (botão direito) — apenas GM */
    _setupContextMenu(ordered) {
        const container = document.getElementById('qt-cards-list');
        if (!container) return;
        document.getElementById('qt-ctx-menu')?.remove();

        const closeMenu = () => {
            document.getElementById('qt-ctx-menu')?.remove();
            document.getElementById('qt-ctx-edit-dialog')?.remove();
        };

        const showEditDialog = (combatant, anchorEl) => {
            document.getElementById('qt-ctx-edit-dialog')?.remove();
            const dialog = document.createElement('div');
            dialog.id = 'qt-ctx-edit-dialog';
            dialog.className = 'qt-ctx-edit-dialog';

            const rect = anchorEl.getBoundingClientRect();
            dialog.innerHTML = `
                <div class="qt-ced-title">${qi18n('QI.Context.EditInitTitle',{name:combatant.name})}</div>
                <div class="qt-ced-row">
                    <input class="qt-ced-input" id="qt-ced-val" type="number"
                           value="${combatant.initiative ?? 0}" min="1" max="99" autofocus>
                    <button class="qt-ced-ok"><i class="fas fa-check"></i></button>
                    <button class="qt-ced-cancel"><i class="fas fa-times"></i></button>
                </div>`;

            document.body.appendChild(dialog);

            // Posiciona acima do card
            const dw = 210;
            let left = rect.left + rect.width / 2 - dw / 2;
            left = Math.max(8, Math.min(left, window.innerWidth - dw - 8));
            const top = Math.max(8, rect.top - 90);
            dialog.style.left = left + 'px';
            dialog.style.top  = top  + 'px';
            dialog.style.width = dw + 'px';

            const input = dialog.querySelector('#qt-ced-val');
            input.focus();
            input.select();

            const confirm = () => {
                const val = parseInt(input.value);
                if (isNaN(val)) { ui.notifications.warn(qi18n('QI.Error.InvalidNumber')); return; }
                dialog.remove();
                QuickInitiative.editInitiative(combatant.id, val);
            };

            dialog.querySelector('.qt-ced-ok').onclick     = confirm;
            dialog.querySelector('.qt-ced-cancel').onclick = () => dialog.remove();
            input.addEventListener('keydown', ev => {
                if (ev.key === 'Enter')  { ev.preventDefault(); confirm(); }
                if (ev.key === 'Escape') { ev.preventDefault(); dialog.remove(); }
            });

            // Fecha ao clicar completamente fora
            setTimeout(() => {
                const outside = (ev) => {
                    if (!dialog.contains(ev.target)) { dialog.remove(); document.removeEventListener('mousedown', outside); }
                };
                document.addEventListener('mousedown', outside);
            }, 60);
        };

        const showMenu = (e, combatant, cardIdx) => {
            e.preventDefault();
            e.stopPropagation();
            closeMenu();

            const menu = document.createElement('div');
            menu.id = 'qt-ctx-menu';
            menu.className = 'qt-ctx-menu';
            menu.innerHTML = `
                <div class="qt-ctx-header">${combatant.name}</div>
                <button class="qt-ctx-item" data-action="edit">
                    <i class="fas fa-pencil-alt"></i> ${qi18n('QI.Context.EditInit')}
                </button>
                <button class="qt-ctx-item" data-action="clone">
                    <i class="fas fa-copy"></i> ${qi18n('QI.Context.Clone')}
                </button>
                <button class="qt-ctx-item" data-action="add">
                    <i class="fas fa-user-plus"></i> ${qi18n('QI.Context.Add')}
                </button>
                <div class="qt-ctx-sep"></div>
                <button class="qt-ctx-item danger" data-action="remove">
                    <i class="fas fa-skull"></i> ${qi18n('QI.Context.Remove')}
                </button>`;

            document.body.appendChild(menu);
            const mx = Math.min(e.clientX, window.innerWidth  - 210 - 10);
            const my = Math.min(e.clientY, window.innerHeight - 200 - 10);
            menu.style.left = mx + 'px';
            menu.style.top  = my + 'px';
            menu.classList.add('show');

            menu.querySelector('[data-action="edit"]').onclick = () => {
                menu.remove();
                // Usa o card do DOM como âncora para o diálogo
                const card = container.querySelectorAll('.qt-card')[cardIdx];
                showEditDialog(combatant, card ?? menu);
            };

            menu.querySelector('[data-action="clone"]').onclick = () => {
                menu.remove();
                QuickInitiative.cloneCombatant(combatant.id);
            };

            menu.querySelector('[data-action="add"]').onclick = () => {
                menu.remove();
                QuickInitiative.openAddCombatantPicker(combatant.side);
            };

            menu.querySelector('[data-action="remove"]').onclick = () => {
                menu.remove();
                QuickInitiative.removeCombatant(combatant.id);
            };

            // Fecha ao clicar fora
            const close = (ev) => {
                if (!menu.contains(ev.target)) { menu.remove(); document.removeEventListener('mousedown', close); }
            };
            setTimeout(() => document.addEventListener('mousedown', close), 50);
        };

        container.querySelectorAll('.qt-card').forEach((card) => {
            const realIdx   = parseInt(card.dataset.idx);
            const combatant = ordered[realIdx];
            if (!combatant) return;
            card.addEventListener('contextmenu', (e) => showMenu(e, combatant, realIdx));
        });
    },

    /* ── Dado SVG 3D bronze ── */
    _spawnDie(value, isHero = false) {
        const stage = document.getElementById('qc-dice-stage');
        if (!stage) return;
        const die = document.createElement('div');
        die.className = 'qc-die' + (isHero ? ' qc-die-hero' : '');

        // Ghost dice: smaller, semi-transparent; hero die: bright and big
        const gradId = `dg${value}${isHero ? 'H' : Math.random().toString(36).slice(2,6)}`;
        const mainColor   = isHero ? '#FFD700' : '#FFE88A';
        const glowColor   = isHero ? '#ff9900' : '#c8a830';
        const strokeColor = isHero ? '#6b3300' : '#7a4500';
        const fontSize    = isHero ? '26' : '22';
        const stopMid     = isHero ? '#e08800' : '#a06820';

        die.innerHTML = `
        <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="${gradId}" cx="38%" cy="28%">
              <stop offset="0%"   stop-color="${isHero ? '#ffe066' : '#f0c870'}"/>
              <stop offset="50%"  stop-color="${stopMid}"/>
              <stop offset="100%" stop-color="#3a1500"/>
            </radialGradient>
            ${isHero ? `<filter id="glow${gradId}"><feGaussianBlur stdDeviation="3.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>` : ''}
          </defs>
          <polygon points="40,4 72,20 72,56 40,76 8,56 8,20" fill="url(#${gradId})"
                   stroke="${glowColor}" stroke-width="${isHero ? '2.2' : '1.5'}"
                   ${isHero ? `filter="url(#glow${gradId})"` : ''}/>
          <polygon points="40,4 72,20 56,38"  fill="rgba(255,230,120,${isHero?'0.18':'0.10'})" stroke="${glowColor}" stroke-width="1"/>
          <polygon points="8,20 40,4 24,38"   fill="rgba(60,30,0,${isHero?'0.22':'0.16'})"    stroke="${glowColor}" stroke-width="1"/>
          <polygon points="40,76 72,56 56,38" fill="rgba(60,30,0,${isHero?'0.28':'0.20'})"    stroke="${glowColor}" stroke-width="1"/>
          <polygon points="8,56 40,76 24,38"  fill="rgba(255,190,60,${isHero?'0.14':'0.08'})" stroke="${glowColor}" stroke-width="1"/>
          <text x="40" y="47" text-anchor="middle" dominant-baseline="middle"
                fill="${mainColor}" font-size="${fontSize}" font-weight="900"
                font-family="Georgia,serif" stroke="${strokeColor}" stroke-width="0.8">${value}</text>
        </svg>`;

        const spread = isHero ? 40 : 100;
        const tx  = (Math.random() - .5) * spread;
        const ty  = isHero ? (stage.clientHeight / 2 - 48) : (10 + Math.random() * 80);
        const rot = isHero ? ((Math.random() - .5) * 160) : ((Math.random() - .5) * 720);
        die.style.setProperty('--tx',  `${tx}px`);
        die.style.setProperty('--ty',  `${ty}px`);
        die.style.setProperty('--rot', `${rot}deg`);
        die.style.left = isHero ? '50%' : `calc(50% + ${(Math.random() - .5) * 80}px)`;
        stage.appendChild(die);
        requestAnimationFrame(() => die.classList.add('falling'));
        setTimeout(() => die.remove(), isHero ? 2200 : 1500);
    },

    /* ── Aplica CSS dinâmico baseado nas cores salvas nas settings ── */
    _applyColors() {
        let heroKey    = 'gold', villainKey = 'red';
        try {
            heroKey    = game.settings.get(QI_ID, 'heroColor')    || 'gold';
            villainKey = game.settings.get(QI_ID, 'villainColor') || 'red';
        } catch(e) {}

        const h  = QI_COLOR_PALETTE[heroKey]    ?? QI_COLOR_PALETTE.gold;
        const v  = QI_COLOR_PALETTE[villainKey] ?? QI_COLOR_PALETTE.red;
        const hc  = `${h.r},${h.g},${h.b}`;
        const vc  = `${v.r},${v.g},${v.b}`;
        const hlc = `${h.rl},${h.gl},${h.bl}`;
        const vlc = `${v.rl},${v.gl},${v.bl}`;

        let el = document.getElementById('qi-dyn-colors');
        if (!el) { el = document.createElement('style'); el.id = 'qi-dyn-colors'; document.head.appendChild(el); }

        el.textContent = `
/* ── QI Dynamic Colors (hero=${heroKey}, villain=${villainKey}) ── */

/* Banner — labels */
.villain-label{color:rgba(${vlc},.95)!important;text-shadow:0 0 12px rgba(${vc},.5)!important;}
.hero-label   {color:rgba(${hlc},.95)!important;text-shadow:0 0 12px rgba(${hc},.5)!important;}

/* Banner — moldura do retrato */
.qc-pcard.villain .qc-portrait::before{
    border-color:rgba(${vc},.5)!important;
    background:
        radial-gradient(circle at 0%   0%,   rgba(${vc},.5) 0%,transparent 28%),
        radial-gradient(circle at 100% 0%,   rgba(${vc},.5) 0%,transparent 28%),
        radial-gradient(circle at 0%   100%, rgba(${vc},.5) 0%,transparent 28%),
        radial-gradient(circle at 100% 100%, rgba(${vc},.5) 0%,transparent 28%)!important;
    box-shadow:inset 0 0 0 1px rgba(${vc},.15),inset 0 0 20px rgba(0,0,0,.6),0 0 18px rgba(${vc},.2),0 0 0 1px rgba(0,0,0,.8)!important;
}
.qc-pcard.hero .qc-portrait::before{
    border-color:rgba(${hc},.5)!important;
    background:
        radial-gradient(circle at 0%   0%,   rgba(${hc},.5) 0%,transparent 28%),
        radial-gradient(circle at 100% 0%,   rgba(${hc},.5) 0%,transparent 28%),
        radial-gradient(circle at 0%   100%, rgba(${hc},.5) 0%,transparent 28%),
        radial-gradient(circle at 100% 100%, rgba(${hc},.5) 0%,transparent 28%)!important;
    box-shadow:inset 0 0 0 1px rgba(${hc},.15),inset 0 0 20px rgba(0,0,0,.6),0 0 18px rgba(${hc},.2),0 0 0 1px rgba(0,0,0,.8)!important;
}

/* Setup — colunas */
.villain-col .qi-col-title{color:rgba(${vlc},1)!important;background:rgba(${vc},.07)!important;}
.hero-col    .qi-col-title{color:rgba(${hlc},1)!important;background:rgba(${hc},.07)!important;}
.villain-col .qi-dropzone {border-color:rgba(${vc},.25)!important;}
.hero-col    .qi-dropzone {border-color:rgba(${hc},.25)!important;}
.villain-col .qi-card     {border-left-color:rgba(${vc},1)!important;}
.hero-col    .qi-card     {border-left-color:rgba(${hc},1)!important;}
.villain-col .qi-card-img {border-color:rgba(${vc},1)!important;}
.hero-col    .qi-card-img {border-color:rgba(${hc},1)!important;}

/* Setup — badges de rodapé */
.qi-badge-v{color:rgba(${vlc},1)!important;background:rgba(${vc},.08)!important;border-color:rgba(${vc},.28)!important;}
.qi-badge-h{color:rgba(${hlc},1)!important;background:rgba(${hc},.08)!important;border-color:rgba(${hc},.28)!important;}

/* Tracker — portraits base */
.qt-card.villain .qt-portrait{border-color:rgba(${vc},.3)!important;}
.qt-card.hero    .qt-portrait{border-color:rgba(${hc},.3)!important;}

/* Tracker — badge de iniciativa por lado */
.qt-card.villain .qt-init-badge.gold{
    border-color:rgba(${vc},1)!important;
    color:rgba(${vlc},1)!important;
    box-shadow:0 0 14px rgba(${vc},.55)!important;
}
.qt-card.hero .qt-init-badge.gold{
    border-color:rgba(${hc},1)!important;
    color:rgba(${hlc},1)!important;
    box-shadow:0 0 14px rgba(${hc},.55)!important;
}

/* Tracker — nome do card ativo por lado */
.qt-card.active-turn.villain .qt-card-name{color:rgba(${vlc},1)!important;text-shadow:0 0 10px rgba(${vc},.6)!important;}
.qt-card.active-turn.hero    .qt-card-name{color:rgba(${hlc},1)!important;text-shadow:0 0 10px rgba(${hc},.6)!important;}

/* Banner — badge de iniciativa revelado (qc-badge.gold) por lado */
.qc-pcard.villain .qc-badge.gold{
    border-color:rgba(${vc},1)!important;
    color:rgba(${vlc},1)!important;
    box-shadow:0 0 16px rgba(${vc},.55),0 2px 8px rgba(0,0,0,.8)!important;
}
.qc-pcard.hero .qc-badge.gold{
    border-color:rgba(${hc},1)!important;
    color:rgba(${hlc},1)!important;
    box-shadow:0 0 16px rgba(${hc},.55),0 2px 8px rgba(0,0,0,.8)!important;
}

.qt-card.active-turn.villain .qt-portrait{
    border-color:rgba(${vc},.8)!important;
    animation:qi-glow-v 2s ease infinite!important;
}
@keyframes qi-glow-v{
    0%,100%{box-shadow:0 0 0 2px rgba(${vc},.45),0 0 36px rgba(${vc},.65),0 0 80px rgba(${vc},.3),0 24px 60px rgba(0,0,0,.98);}
    50%    {box-shadow:0 0 0 4px rgba(${vc},.65),0 0 52px rgba(${vc},.92),0 0 100px rgba(${vc},.45),0 24px 60px rgba(0,0,0,.98);}
}
.qt-card.active-turn.hero .qt-portrait{
    border-color:rgba(${hc},.8)!important;
    animation:qi-glow-h 2s ease infinite!important;
}
@keyframes qi-glow-h{
    0%,100%{box-shadow:0 0 0 2px rgba(${hc},.45),0 0 36px rgba(${hc},.65),0 0 80px rgba(${hc},.3),0 24px 60px rgba(0,0,0,.98);}
    50%    {box-shadow:0 0 0 4px rgba(${hc},.65),0 0 52px rgba(${hc},.92),0 0 100px rgba(${hc},.45),0 24px 60px rgba(0,0,0,.98);}
}
`;
    },

    _applyTrackerSize() {
        let size = 'medium';
        try { size = game.settings.get(QI_ID, 'trackerSize') || 'medium'; } catch(e) {}

        // Tamanhos: active / adj / far  (width × height)
        const SIZES = {
            small : { aw:72,  ah:96,  adjw:63,  adjh:84,  fw:54,  fh:72,  badge:26, badgeFt:10, badgeBot:-13 },
            medium: { aw:95,  ah:128, adjw:84,  adjh:112, fw:72,  fh:96,  badge:34, badgeFt:12, badgeBot:-17 },
            large : { aw:118, ah:158, adjw:105, adjh:140, fw:90,  fh:120, badge:42, badgeFt:14, badgeBot:-21 }
        };
        const s = SIZES[size] ?? SIZES.medium;

        let el = document.getElementById('qi-dyn-size');
        if (!el) { el = document.createElement('style'); el.id = 'qi-dyn-size'; document.head.appendChild(el); }

        el.textContent = `
/* ── QI Dynamic Tracker Size (${size}) ── */
.qt-card.active-turn .qt-portrait { width:${s.aw}px !important; height:${s.ah}px !important; }
.qt-card.adj-turn    .qt-portrait { width:${s.adjw}px !important; height:${s.adjh}px !important; }
.qt-card.far-turn    .qt-portrait { width:${s.fw}px !important;  height:${s.fh}px !important;  }
.qt-card.active-turn .qt-init-badge { width:${s.badge}px !important; height:${s.badge}px !important; font-size:${s.badgeFt}px !important; bottom:${s.badgeBot}px !important; }
`;
    },

    _ensureRoll() {
        if (this._roll) return;
        this._roll = document.createElement('div');
        this._roll.id = 'qc-roll-banner';
        document.body.appendChild(this._roll);
    },
    _ensureTrack() {
        if (this._track) return;
        this._track = document.createElement('div');
        this._track.id = 'qc-tracker';
        document.body.appendChild(this._track);
    },
    _myActorIds() {
        const ids = new Set();
        try {
            // Forma mais direta: personagem linkado ao usuário
            if (game.user.character) { ids.add(game.user.character.id); return ids; }
            // Fallback: todos os atores que o usuário possui (OWNER = 3)
            const OWNER = CONST?.DOCUMENT_OWNERSHIP_LEVELS?.OWNER ?? 3;
            game.actors.forEach(a => {
                if ((a.ownership?.[game.user.id] ?? a.data?.permission?.[game.user.id]) >= OWNER) {
                    ids.add(a.id);
                }
            });
        } catch(err) {
            console.warn('[Quick Initiative] _myActorIds falhou:', err);
        }
        return ids;
    }
};

/* ══════════════════════════════════════════════════════════════════════════
   LÓGICA CENTRAL
   ══════════════════════════════════════════════════════════════════════════ */
class QuickInitiative {
    static init()  {
        console.log('Quick Initiative Pro v1.3 | Init');

        // ── Sistemas habilitados (dual-list picker) ───────────────────────
        game.settings.register(QI_ID, 'enabledSystems', {
            name   : 'Enabled Initiative Systems',
            scope  : 'world',
            config : false,
            type   : String,
            default: JSON.stringify(Object.keys(QI_SYSTEMS))
        });

        // ── Último sistema selecionado (persiste entre sessões) ───────────
        game.settings.register(QI_ID, 'lastSystem', {
            scope  : 'world',
            config : false,
            type   : String,
            default: 'dnd5e'
        });

        // ── Menu de configuração de sistemas visíveis ─────────────────────
        game.settings.registerMenu(QI_ID, 'systemsMenu', {
            name      : '⚔️ Quick Initiative — Sistemas de Iniciativa Visíveis',
            label     : '⚔️ Configurar Sistemas',
            hint      : 'Escolha quais sistemas de iniciativa aparecem no seletor de combate.',
            icon      : 'fas fa-dice-d20',
            type      : QiSystemPickerApp,
            restricted: true
        });

        // ── Tamanho do carrossel do tracker ──────────────────────────────
        game.settings.register(QI_ID, 'trackerSize', {
            name   : '🎠 Quick Initiative — Tamanho do Carrossel',
            hint   : 'Define o tamanho dos retratos do tracker de combate. Pequeno para telas menores, Grande para mais impacto visual.',
            scope  : 'client',
            config : true,
            type   : String,
            choices: {
                'small' : '🔹 Pequeno',
                'medium': '🔷 Médio (padrão)',
                'large' : '🔶 Grande'
            },
            default : 'medium',
            onChange: () => QiBanner._applyTrackerSize()
        });

        // ── Posição salva do tracker (por usuário) ───────────────────────
        game.settings.register(QI_ID, 'trackerPosition', {
            scope  : 'client',
            config : false,
            type   : String,
            default: ''
        });

        // ── Controle de janela de boas-vindas (exibe uma vez por mundo) ──
        game.settings.register(QI_ID, 'welcomeSeen', {
            scope  : 'world',
            config : false,
            type   : Boolean,
            default: false
        });

        game.settings.register(QI_ID, 'combatState', {
            name   : 'Combat State',
            hint   : 'Estado interno salvo automaticamente.',
            scope  : 'world',
            config : false,
            type   : Object,
            default: {}
        });

        // ── Idioma do módulo ──────────────────────────────────────────────
        game.settings.register(QI_ID, 'language', {
            name   : '🌐 Quick Initiative — Idioma / Language',
            hint   : 'Força o idioma de todos os textos do módulo. "Automático" segue o idioma do Foundry.',
            scope  : 'client',
            config : true,
            type   : String,
            choices: {
                'auto' : '🌐 Automático (segue o Foundry)',
                'pt-BR': '🇧🇷 Português (Brasil)',
                'en'   : '🇺🇸 English'
            },
            default  : 'auto',
            onChange : () => {
                // Re-renderiza qualquer janela de setup aberta
                const setup = Object.values(ui.windows ?? {}).find(w => w.id === 'qi-setup');
                if (setup) setup.render(false);
            }
        });

        // ── Imagem de fundo do banner de rolagem ──────────────────────────
        game.settings.register(QI_ID, 'bannerBg', {
            name   : 'Quick Initiative — Imagem de Fundo do Banner',
            hint   : [
                '🖼️ Imagem exibida atrás do banner de rolagem de iniciativa.',
                'Por padrão a imagem aparece no seu tamanho real (ex: 1280×300 → ocupa 1280×300px).',
                'Para preencher a tela inteira ative a opção "Forçar tela cheia" abaixo.',
                '✅ Recomendado para tela cheia: 1920 × 360 px  |  Mínimo: 1280 × 360 px',
                'Formatos: PNG, JPG ou WEBP. Clique no ícone 📁 para selecionar o arquivo.'
            ].join('  '),
            scope  : 'world',
            config : true,
            type   : String,
            default: ''
        });

        game.settings.register(QI_ID, 'bannerBgFit', {
            name   : 'Quick Initiative — 🖥️ Forçar Imagem em Tela Cheia',
            hint   : 'Quando ativado, a imagem é esticada para cobrir todo o backdrop (cover). Quando desativado, a imagem aparece no seu tamanho original centralizada.',
            scope  : 'world',
            config : true,
            type   : Boolean,
            default: false,
            onChange: () => QiBanner._applyBackdropBg()
        });

        // ── Cores dinâmicas: Heróis e Inimigos ───────────────────────────
        const colorChoices = Object.fromEntries(
            Object.entries(QI_COLOR_PALETTE).map(([k, v]) => [k, v.label])
        );
        game.settings.register(QI_ID, 'heroColor', {
            name   : '⚔️ Cor dos Heróis',
            hint   : 'Cor das molduras, badges e brilhos dos personagens heróis no banner e no tracker.',
            scope  : 'world',
            config : true,
            type   : String,
            choices: colorChoices,
            default: 'gold',
            onChange: () => QiBanner._applyColors()
        });
        game.settings.register(QI_ID, 'villainColor', {
            name   : '💀 Cor dos Inimigos',
            hint   : 'Cor das molduras, badges e brilhos dos personagens inimigos no banner e no tracker.',
            scope  : 'world',
            config : true,
            type   : String,
            choices: colorChoices,
            default: 'red',
            onChange: () => QiBanner._applyColors()
        });

        // ── Brilho no token do mapa ───────────────────────────────────────
        game.settings.register(QI_ID, 'tokenGlowEnabled', {
            name   : '✨ Exibir brilho colorido no token ativo',
            hint   : 'Quando ativado, aparece um brilho radial pulsante atrás do token do personagem da vez no mapa.',
            scope  : 'world',
            config : true,
            type   : Boolean,
            default: true,
            onChange: () => QiTokenGlow.refresh()
        });

        game.settings.register(QI_ID, 'tokenGlowImage', {
            name   : '🌀 Imagem giratória ao redor do token ativo',
            hint   : 'Imagem PNG/WEBP (de preferência com transparência) que girará infinitamente ao redor do token ativo no mapa. Use imagens quadradas para melhor resultado.',
            scope  : 'world',
            config : true,
            type   : String,
            default: '',
            onChange: () => QiTokenGlow.refresh()
        });

        // Injeta swatches visuais nas settings para facilitar a escolha de cor
        Hooks.on('renderSettingsConfig', (_app, html) => {
            const root = html instanceof HTMLElement ? html : html[0];
            if (!root) return;

            ['heroColor', 'villainColor'].forEach(key => {
                const select = root.querySelector(`[name="${QI_ID}.${key}"]`);
                if (!select) return;
                const wrap = select.closest('.form-group') ?? select.parentElement;
                if (!wrap) return;

                // Painel de swatches abaixo do select
                const swatchRow = document.createElement('div');
                swatchRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;';

                Object.entries(QI_COLOR_PALETTE).forEach(([k, clr]) => {
                    const hex = `rgb(${clr.r},${clr.g},${clr.b})`;
                    const hexL = `rgb(${clr.rl},${clr.gl},${clr.bl})`;
                    const btn = document.createElement('button');
                    btn.type = 'button';
                    btn.title = clr.label;
                    btn.dataset.colorKey = k;
                    btn.style.cssText = [
                        `width:28px;height:28px;border-radius:50%;cursor:pointer;`,
                        `background:radial-gradient(circle at 35% 35%, ${hexL}, ${hex});`,
                        `border:2px solid ${select.value === k ? '#fff' : 'rgba(255,255,255,.18)'};`,
                        `box-shadow:0 2px 8px rgba(0,0,0,.6)${select.value === k ? `,0 0 0 2px ${hex}` : ''};`,
                        `transform:${select.value === k ? 'scale(1.18)' : 'scale(1)'};`,
                        `transition:all .15s;`
                    ].join('');

                    btn.addEventListener('click', () => {
                        select.value = k;
                        select.dispatchEvent(new Event('change', { bubbles: true }));
                        // Atualiza estilos de todos os swatches do mesmo grupo
                        swatchRow.querySelectorAll('button').forEach(b => {
                            const isActive = b.dataset.colorKey === k;
                            const c = QI_COLOR_PALETTE[b.dataset.colorKey];
                            const cx = `rgb(${c.r},${c.g},${c.b})`;
                            b.style.border = `2px solid ${isActive ? '#fff' : 'rgba(255,255,255,.18)'}`;
                            b.style.boxShadow = `0 2px 8px rgba(0,0,0,.6)${isActive ? `,0 0 0 2px ${cx}` : ''}`;
                            b.style.transform = isActive ? 'scale(1.18)' : 'scale(1)';
                        });
                    });
                    btn.addEventListener('mouseenter', () => { btn.style.transform = 'scale(1.22)'; });
                    btn.addEventListener('mouseleave', () => {
                        btn.style.transform = select.value === k ? 'scale(1.18)' : 'scale(1)';
                    });
                    swatchRow.appendChild(btn);
                });

                // Insere após o select
                select.parentNode.insertBefore(swatchRow, select.nextSibling);
            });
        });
        Hooks.on('renderSettingsConfig', (_app, html) => {
            // html pode ser HTMLElement (v13 ApplicationV2) ou jQuery (v12)
            const root = html instanceof HTMLElement ? html : html[0];
            if (!root) return;
            const input = root.querySelector(`[name="${QI_ID}.bannerBg"]`);
            if (!input) return;

            // Envolve input + botão num wrapper flex
            const wrap = document.createElement('div');
            wrap.style.cssText = 'display:flex;align-items:center;gap:6px;width:100%;';
            input.parentNode.insertBefore(wrap, input);
            wrap.appendChild(input);
            input.style.flex = '1';

            // Preview de imagem (pequeno, ao lado)
            const preview = document.createElement('img');
            preview.style.cssText = 'width:36px;height:36px;object-fit:cover;border-radius:4px;border:1px solid rgba(200,146,42,.4);display:none;flex-shrink:0;';
            const updatePreview = (src) => {
                if (src) { preview.src = src; preview.style.display = 'block'; }
                else      { preview.style.display = 'none'; }
            };
            updatePreview(input.value);
            input.addEventListener('input', () => updatePreview(input.value));
            wrap.appendChild(preview);

            // Botão FilePicker
            const btn = document.createElement('button');
            btn.type      = 'button';
            btn.title     = 'Selecionar imagem';
            btn.innerHTML = '<i class="fas fa-folder-open"></i>';
            btn.style.cssText = 'flex-shrink:0;padding:4px 8px;background:rgba(200,146,42,.12);border:1px solid rgba(200,146,42,.4);border-radius:4px;color:#c8922a;cursor:pointer;font-size:13px;line-height:1;';
            btn.addEventListener('mouseenter', () => btn.style.background = 'rgba(200,146,42,.28)');
            btn.addEventListener('mouseleave', () => btn.style.background = 'rgba(200,146,42,.12)');
            btn.addEventListener('click', () => {
                new FilePicker({
                    type    : 'imagevideo',
                    current : input.value || '',
                    callback: (path) => {
                        input.value = path;
                        updatePreview(path);
                        // Dispara change para frameworks que escutam eventos
                        input.dispatchEvent(new Event('change', { bubbles: true }));
                    }
                }).render(true);
            });
            wrap.appendChild(btn);

            // ── FilePicker para tokenGlowImage ────────────────────────────
            const glowInput = root.querySelector(`[name="${QI_ID}.tokenGlowImage"]`);
            if (glowInput) {
                const glowWrap = document.createElement('div');
                glowWrap.style.cssText = 'display:flex;align-items:center;gap:6px;width:100%;';
                glowInput.parentNode.insertBefore(glowWrap, glowInput);
                glowWrap.appendChild(glowInput);
                glowInput.style.flex = '1';

                const glowPreview = document.createElement('img');
                glowPreview.style.cssText = 'width:36px;height:36px;object-fit:cover;border-radius:50%;border:1px solid rgba(200,146,42,.4);display:none;flex-shrink:0;';
                const updateGlowPreview = (src) => {
                    if (src) { glowPreview.src = src; glowPreview.style.display = 'block'; }
                    else      { glowPreview.style.display = 'none'; }
                };
                updateGlowPreview(glowInput.value);
                glowInput.addEventListener('input', () => updateGlowPreview(glowInput.value));
                glowWrap.appendChild(glowPreview);

                const glowBtn = document.createElement('button');
                glowBtn.type      = 'button';
                glowBtn.title     = 'Selecionar imagem giratória';
                glowBtn.innerHTML = '<i class="fas fa-folder-open"></i>';
                glowBtn.style.cssText = 'flex-shrink:0;padding:4px 8px;background:rgba(200,146,42,.12);border:1px solid rgba(200,146,42,.4);border-radius:4px;color:#c8922a;cursor:pointer;font-size:13px;line-height:1;';
                glowBtn.addEventListener('mouseenter', () => glowBtn.style.background = 'rgba(200,146,42,.28)');
                glowBtn.addEventListener('mouseleave', () => glowBtn.style.background = 'rgba(200,146,42,.12)');
                glowBtn.addEventListener('click', () => {
                    new FilePicker({
                        type    : 'imagevideo',
                        current : glowInput.value || '',
                        callback: (path) => {
                            glowInput.value = path;
                            updateGlowPreview(path);
                            glowInput.dispatchEvent(new Event('change', { bubbles: true }));
                        }
                    }).render(true);
                });
                glowWrap.appendChild(glowBtn);
            }
        });
    }

    static ready() {
        // TODOS os clientes (GM e jogadores) registram o listener de socket
        // "socket": true no module.json é OBRIGATÓRIO para isso funcionar
        game.socket.on(`module.${QI_ID}`, msg => {
            try {
                if (!msg?.action) return;
                switch (msg.action) {
                    case 'start' : this._recv(msg.state, () => QiBanner.showRoll(QiState));    break;
                    case 'dice'  : this._recv(msg.state, () => QiBanner.animateDice(msg.id, msg.result)); break;
                    case 'update': this._recv(msg.state, () => QiBanner.update(QiState));      break;
                    case 'combat': this._recv(msg.state, () => QiBanner.showTracker(QiState)); break;
                    case 'end'   : this._recv(msg.state);
                        if (QiBanner._roll)  { QiBanner._roll.remove();  QiBanner._roll  = null; }
                        if (QiBanner._track) { QiBanner._track.remove(); QiBanner._track = null; }
                        if (QiBanner._backdrop) { QiBanner._backdrop.remove(); QiBanner._backdrop = null; }
                        document.getElementById('qt-ctx-menu')?.remove();
                        document.getElementById('qt-ctx-edit-dialog')?.remove();
                        document.getElementById('qt-add-picker')?.remove();
                        break;
                }
            } catch(err) {
                console.error(`[Quick Initiative] Erro ao processar mensagem socket (${msg?.action}):`, err);
            }
        });

        console.log(`[Quick Initiative] Socket listener registrado para o usuário: ${game.user.name}`);

        // Aplica cores e tamanho imediatamente ao carregar (antes de qualquer combate)
        QiBanner._applyColors();
        QiBanner._applyTrackerSize();

        // Recupera estado de combate em andamento após reload
        if (QuickInitiative._loadState()) {
            if (QiState.phase === 'combat') {
                QiBanner.showTracker(QiState);
            } else if (QiState.phase === 'roll') {
                QiBanner.showRoll(QiState);
            }
        }

        // Eleva o canvas do Dice So Nice acima de tudo via MutationObserver
        // (necessário pois o plugin define z-index via style inline)
        const _elevateDiceCanvas = () => {
            const MAX_Z = '2147483647';
            const selectors = ['#dice-box', '#dice-canvas', '[id*="dice3d"]', 'canvas.dsn-canvas', '[class*="dice-so-nice"]'];
            selectors.forEach(sel => {
                document.querySelectorAll(sel).forEach(el => {
                    if (el.style.zIndex !== MAX_Z) {
                        el.style.zIndex   = MAX_Z;
                        el.style.position = 'fixed';
                    }
                });
            });
        };
        // Observa o DOM para capturar o canvas quando Dice So Nice o cria
        const _diceObserver = new MutationObserver(_elevateDiceCanvas);
        _diceObserver.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style'] });
        // Roda imediatamente caso já exista
        _elevateDiceCanvas();

        // Ctrl+I — apenas GM abre o setup
        window.addEventListener('keydown', ev => {
            if ((ev.ctrlKey || ev.metaKey) && ev.key.toLowerCase() === 'i' && !ev.shiftKey && game.user.isGM) {
                if (window.getSelection()?.toString()) return;
                ev.preventDefault();
                new QuickInitiativeSetup().render(true);
            }
        });

        // Janela de boas-vindas — exibe apenas uma vez por mundo (somente GM)
        if (game.user.isGM) {
            const seen = (() => { try { return game.settings.get(QI_ID, 'welcomeSeen'); } catch(e) { return false; } })();
            if (!seen) setTimeout(() => new QiWelcomeApp().render(true), 800);
        }

    }

    static startCombat(combatants, system) {
        QiState.reset();
        QiState.active     = true;
        QiState.system     = system;
        QiState.phase      = 'roll';
        QiState.combatants = combatants.map(c => ({ ...c, initiative: null, formula: '', rolled: false }));
        this._emit('start');
        QiBanner.showRoll(QiState);     // GM vê também
    }

    static async rollFor(id) {
        const c = QiState.combatants.find(x => x.id === id);
        if (!c || c.rolled) return;
        const sys   = QI_SYSTEMS[QiState.system] ?? QI_SYSTEMS.generic;
        const actor = game.actors.get(c.actorId);

        let result      = sys.roll(actor); // fallback síncrono
        let usedNative  = false;
        try {
            const formula    = sys.formula ? sys.formula(actor) : '1d20';
            // Constrói e avalia o Roll nativo do Foundry
            const nativeRoll = await new Roll(formula).evaluate();
            const allResults = nativeRoll.dice.flatMap(d => d.results.map(r => r.result));
            result = {
                die    : allResults.length ? Math.max(...allResults) : nativeRoll.total,
                total  : nativeRoll.total,
                formula: `${nativeRoll.formula} = ${nativeRoll.total}`
            };
            // showForRoll(roll, user, synchronize=false) — exibe local, sem broadcast
            if (game.dice3d) {
                await game.dice3d.showForRoll(nativeRoll, game.user, false);
                usedNative = true;
            }
        } catch(err) {
            console.warn('[Quick Initiative] Dado nativo falhou, usando fallback:', err);
        }

        c.initiative = result.total; c.formula = result.formula; c.rolled = true;
        // Só mostra animação SVG se Dice So Nice NÃO rodou
        if (!usedNative) QiBanner.animateDice(id, result);
        else             QiBanner._updateCard(id, result); // só atualiza o badge, sem dados SVG
        game.socket.emit(`module.${QI_ID}`, { action:'dice', id, result, state: this._payload() });
    }

    static async rollAll() {
        const sys = QI_SYSTEMS[QiState.system] ?? QI_SYSTEMS.generic;
        const pending = QiState.combatants.filter(c => !c.rolled);

        for (let i = 0; i < pending.length; i++) {
            const c     = pending[i];
            const actor = game.actors.get(c.actorId);
            let result      = sys.roll(actor); // fallback síncrono
            let usedNative  = false;

            try {
                const formula    = sys.formula ? sys.formula(actor) : '1d20';
                const nativeRoll = await new Roll(formula).evaluate();
                const allResults = nativeRoll.dice.flatMap(d => d.results.map(r => r.result));
                result = {
                    die    : allResults.length ? Math.max(...allResults) : nativeRoll.total,
                    total  : nativeRoll.total,
                    formula: `${nativeRoll.formula} = ${nativeRoll.total}`
                };
                if (game.dice3d) {
                    // showForRoll local — aguarda animação terminar antes do próximo
                    await game.dice3d.showForRoll(nativeRoll, game.user, false);
                    usedNative = true;
                }
            } catch(err) {
                console.warn('[Quick Initiative] Dado nativo falhou em rollAll:', err);
            }

            c.initiative = result.total; c.formula = result.formula; c.rolled = true;
            // Só anima SVG se Dice So Nice NÃO rodou
            if (!usedNative) QiBanner.animateDice(c.id, result);
            else             QiBanner._updateCard(c.id, result);
            // Pequena pausa entre personagens para não sobrepor animações (só no fallback)
            if (!usedNative && i < pending.length - 1) await new Promise(r => setTimeout(r, 300));
        }

        this._emit('update');
        QiBanner.update(QiState);
    }

    static goToCombat() {
        // Garante que todos combatentes têm rolled:true antes do tracker
        QiState.combatants = QiState.combatants.map(c => ({
            ...c,
            rolled    : true,
            initiative: c.initiative ?? 0
        }));
        QiState.phase       = 'combat';
        QiState.round       = 1;
        QiState.currentTurn = 0;
        this._emit('combat');
        QiBanner.showTracker(QiState);  // GM vê local
        QiTokenGlow.setActive(this._getOrder()[0]?.tokenId ?? null, this._getOrder()[0]?.side ?? null);
    }

    /* nextTurn usa buildOrder() — mesma função do renderTrack */
    static nextTurn() {
        const ordered = this._getOrder();
        if (!ordered.length) return;
        QiState.currentTurn++;
        if (QiState.currentTurn >= ordered.length) {
            QiState.currentTurn = 0;
            QiState.round++;
        }
        QiBanner._renderTrack(QiState, 'next');
        QiTokenGlow.setActive(this._getOrder()[QiState.currentTurn]?.tokenId ?? null, this._getOrder()[QiState.currentTurn]?.side ?? null);
        this._emit('update');
    }

    /* Reordena turno por drag (GM) — sobrescreve a ordem automática */
    static reorderTurns(newOrderIds) {
        // Guarda a ordem manual no state
        QiState.manualOrder = newOrderIds;
        QiState.currentTurn = 0;

        QiBanner._renderTrack(QiState);
        this._emit('update');
        ui.notifications.info(qi18n('QI.Combat.Reordered'));
    }

    static prevTurn() {
        const ordered = this._getOrder();
        if (!ordered.length) return;
        if (QiState.currentTurn === 0) {
            if (QiState.round <= 1) return;
            QiState.currentTurn = ordered.length - 1;
            QiState.round--;
        } else {
            QiState.currentTurn--;
        }
        QiBanner._renderTrack(QiState, 'prev');
        QiTokenGlow.setActive(this._getOrder()[QiState.currentTurn]?.tokenId ?? null, this._getOrder()[QiState.currentTurn]?.side ?? null);
        this._emit('update');
    }

    static _getOrder() {
        // Se existe ordem manual (drag), usa ela; senão usa buildOrder
        if (QiState.manualOrder?.length) {
            return QiState.manualOrder
                .map(id => QiState.combatants.find(c => c.id === id))
                .filter(Boolean);
        }
        return buildOrder(QiState.combatants, QiState.system);
    }

    /* Abre picker para adicionar um personagem da cena ao combate em curso */
    static openAddCombatantPicker(preferredSide) {
        document.getElementById('qt-add-picker')?.remove();

        // Tokens já no combate
        const inCombat = new Set(QiState.combatants.map(c => c.tokenId));

        // Tokens disponíveis na cena
        const available = (canvas.tokens?.placeables ?? [])
            .filter(t => t.actor && !inCombat.has(t.id))
            .map(t => ({
                id     : foundry.utils.randomID(),
                name   : t.name,
                img    : t.actor.img ?? 'icons/svg/mystery-man.svg',
                actorId: t.actor.id,
                tokenId: t.id
            }));

        if (!available.length) {
            ui.notifications.info(qi18n('QI.Picker.NoTokens'));
            return;
        }

        const picker = document.createElement('div');
        picker.id = 'qt-add-picker';
        picker.className = 'qt-add-picker';

        picker.innerHTML = `
            <div class="qt-add-hd">
                <span>➕ ${qi18n('QI.Context.Add')}</span>
                <button class="qt-add-close"><i class="fas fa-times"></i></button>
            </div>
            <div class="qt-add-side-row">
                <label class="qt-add-side-lbl">
                    <input type="radio" name="qt-add-side" value="villain" ${preferredSide==='villain'?'checked':''}>
                    <span class="qt-add-side-v">${qi18n('QI.Side.Villains')}</span>
                </label>
                <label class="qt-add-side-lbl">
                    <input type="radio" name="qt-add-side" value="hero" ${preferredSide==='hero'?'checked':''}>
                    <span class="qt-add-side-h">${qi18n('QI.Side.Heroes')}</span>
                </label>
            </div>
            <div class="qt-add-list">
                ${available.map(t => `
                <div class="qt-add-token" data-id="${t.id}">
                    <div class="qt-add-token-img" style="background-image:url('${t.img}')"></div>
                    <span class="qt-add-token-name">${t.name}</span>
                </div>`).join('')}
            </div>
            <div class="qt-add-hint">${qi18n('QI.Picker.Hint')}</div>`;

        document.body.appendChild(picker);

        // Centraliza na tela
        picker.style.left = (window.innerWidth  / 2 - 150) + 'px';
        picker.style.top  = (window.innerHeight / 2 - 200) + 'px';

        picker.querySelector('.qt-add-close').onclick = () => picker.remove();

        // Clique num token: rola iniciativa e entra no combate
        picker.querySelectorAll('.qt-add-token').forEach(el => {
            el.addEventListener('click', () => {
                const tokenData = available.find(t => t.id === el.dataset.id);
                if (!tokenData) return;
                const side = picker.querySelector('[name="qt-add-side"]:checked')?.value ?? 'hero';
                picker.remove();
                QuickInitiative.addCombatantFromScene(tokenData, side);
            });
        });

        // Fecha ao clicar fora
        setTimeout(() => {
            const outside = (ev) => {
                if (!picker.contains(ev.target)) { picker.remove(); document.removeEventListener('mousedown', outside); }
            };
            document.addEventListener('mousedown', outside);
        }, 60);
    }

    /* Adiciona um combatente da cena ao combate em curso, rolando iniciativa */
    static addCombatantFromScene(tokenData, side) {
        const sys    = QI_SYSTEMS[QiState.system] ?? QI_SYSTEMS.generic;
        const actor  = game.actors.get(tokenData.actorId);
        const result = sys.roll(actor);

        const newC = {
            ...tokenData,
            side,
            initiative: result.total,
            formula   : result.formula,
            rolled    : true
        };
        QiState.combatants.push(newC);

        // Se há ordem manual, insere na posição correta por iniciativa
        if (QiState.manualOrder?.length) {
            QiState.manualOrder.push(newC.id);
        }

        QiBanner._renderTrack(QiState);
        this._emit('update');

        ui.notifications.info(
            `✨ <b>${newC.name}</b> entrou no combate com iniciativa <b>${result.total}</b>!<br>${result.formula}`
        );
    }

    /* Edita a iniciativa de um combatente */
    static editInitiative(id, newValue) {
        const c = QiState.combatants.find(x => x.id === id);
        if (!c) return;
        c.initiative = newValue;
        c.rolled     = true;

        // Salva quem é o combatente ativo antes de reordenar
        const activeId = this._getOrder()[QiState.currentTurn]?.id;

        // Limpa ordem manual para reordenar automaticamente por iniciativa
        QiState.manualOrder = [];

        // Reposiciona currentTurn no mesmo combatente após reordenação
        const newOrder = buildOrder(QiState.combatants, QiState.system);
        const newIdx   = newOrder.findIndex(x => x.id === activeId);
        if (newIdx >= 0) QiState.currentTurn = newIdx;

        QiBanner._renderTrack(QiState);
        QiTokenGlow.refresh(); // mantém o glow no token ativo
        this._emit('update');
        ui.notifications.info(qi18n('QI.Context.EditInitChanged',{name:c.name,val:newValue}));
    }

    /* Clona um combatente (cópia idêntica, mesma iniciativa) */
    static cloneCombatant(id) {
        const original = QiState.combatants.find(x => x.id === id);
        if (!original) return;
        const clone = {
            ...original,
            id  : foundry.utils.randomID(),
            name: original.name + ' ②'
        };
        QiState.combatants.push(clone);
        // Insere também na ordem manual logo depois do original
        if (QiState.manualOrder?.length) {
            const idx = QiState.manualOrder.indexOf(id);
            if (idx >= 0) QiState.manualOrder.splice(idx + 1, 0, clone.id);
            else QiState.manualOrder.push(clone.id);
        }
        QiBanner._renderTrack(QiState);
        this._emit('update');
        ui.notifications.info(`📋 <b>${clone.name}</b> adicionado ao combate`);
    }

    /* Remove um combatente do tracker */
    static removeCombatant(id) {
        const c = QiState.combatants.find(x => x.id === id);
        if (!c) return;
        const name = c.name;
        // Remove do array principal
        QiState.combatants = QiState.combatants.filter(x => x.id !== id);
        // Remove da ordem manual
        if (QiState.manualOrder?.length) {
            QiState.manualOrder = QiState.manualOrder.filter(x => x !== id);
        }
        // Ajusta turno atual se necessário
        const order = this._getOrder();
        if (QiState.currentTurn >= order.length) {
            QiState.currentTurn = Math.max(0, order.length - 1);
        }
        QiBanner._renderTrack(QiState);
        this._emit('update');
        ui.notifications.info(qi18n('QI.Context.Removed',{name}));
    }

    static endCombat() {
        // Emite 'end' para outros clientes fecharem o tracker
        game.socket.emit(`module.${QI_ID}`, { action: 'end', state: {} });

        // Remove todos os elementos do DOM completamente
        if (QiBanner._roll)  { QiBanner._roll.remove();  QiBanner._roll  = null; }
        if (QiBanner._track) { QiBanner._track.remove(); QiBanner._track = null; }
        if (QiBanner._backdrop) { QiBanner._backdrop.remove(); QiBanner._backdrop = null; }

        // Limpa eventuais overlays/menus que possam ter ficado
        document.getElementById('qt-ctx-menu')?.remove();
        document.getElementById('qt-ctx-edit-dialog')?.remove();
        document.getElementById('qt-add-picker')?.remove();

        QiState.reset();
        QiTokenGlow.clear();
        // Limpa o estado salvo DEPOIS do reset para que reloads não reabram o tracker
        if (game.user.isGM) {
            try { game.settings.set(QI_ID, 'combatState', { active: false }); } catch(e) {}
        }
        ui.notifications.info(qi18n('QI.Combat.Ended'));
    }

    /* ── Helpers internos ── */
    static _saveState() {
        if (!game.user.isGM || !QiState.active) return;
        try {
            game.settings.set(QI_ID, 'combatState', this._payload());
        } catch(e) { /* silencia — setting pode não estar pronto */ }
    }

    static _loadState() {
        try {
            const s = game.settings.get(QI_ID, 'combatState');
            if (s?.active && s?.combatants?.length > 0) {
                this._recv(s);
                // Garante que os combatentes sejam marcados como rolled
                // para que buildOrder os inclua mesmo após reload
                if (s.phase === 'combat') {
                    QiState.combatants = QiState.combatants.map(c => ({
                        ...c,
                        rolled    : true,
                        initiative: c.initiative ?? 0
                    }));
                }
                console.log('[Quick Initiative] Estado recuperado do setting.');
                return true;
            }
        } catch(e) { /* setting vazio ou corrompido */ }
        return false;
    }

    static _payload() {
        return {
            active     : QiState.active,
            system     : QiState.system,
            combatants : QiState.combatants,
            round      : QiState.round,
            currentTurn: QiState.currentTurn,
            phase      : QiState.phase,
            manualOrder: QiState.manualOrder ?? [],
            genericDice: QiState.genericDice ?? '1d20'
        };
    }
    static _emit(action) {
        const payload = this._payload();
        game.socket.emit(`module.${QI_ID}`, { action, state: payload });
        // Persiste estado no setting após toda emissão (só GM pode escrever)
        if (game.user.isGM) this._saveState();
    }
    static _recv(s, cb) {
        if (!s) { console.warn('[Quick Initiative] _recv: state vazio'); return; }
        try {
            QiState.active      = s.active      ?? QiState.active;
            QiState.system      = s.system      ?? QiState.system;
            QiState.combatants  = s.combatants  ?? QiState.combatants;
            QiState.round       = s.round       ?? QiState.round;
            QiState.currentTurn = s.currentTurn ?? QiState.currentTurn;
            QiState.phase       = s.phase       ?? QiState.phase;
            QiState.manualOrder = s.manualOrder ?? [];
            QiState.genericDice = s.genericDice ?? QiState.genericDice ?? '1d20';
            if (cb) cb();
        } catch(err) {
            console.error('[Quick Initiative] _recv erro:', err);
        }
    }
}

/* ══════════════════════════════════════════════════════════════════════════
   JANELA DE BOAS-VINDAS — exibe uma vez na primeira abertura do módulo
   ══════════════════════════════════════════════════════════════════════════ */
class QiWelcomeApp extends Application {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id       : 'qi-welcome',
            title    : '⚔️ Quick Initiative Pro',
            width    : 680,
            height   : 'auto',
            classes  : ['qi-app', 'qi-welcome-app'],
            resizable: false,
            popOut   : true
        });
    }

    async _renderInner() {
        const lang = (() => { try { return game.settings.get(QI_ID, 'language') ?? 'auto'; } catch(e) { return 'auto'; } })();
        const isPT = lang === 'pt-BR' || (lang === 'auto' && (game.i18n?.lang ?? 'en') === 'pt-BR');

        const t = isPT ? {
            badge    : 'Módulo Carregado com Sucesso!',
            sub      : 'Bem-vindo ao seu novo sistema de iniciativa épico para o Foundry VTT v13.',
            f1t: '🎬 Banner Visual de Rolagem',     f1d: 'Faixa dramática com retratos grandes dos combatentes divididos em <b>Inimigos</b> e <b>Heróis</b>, com dados 3D animados ao rolar (integração automática com o <b>Dice So Nice</b>).',
            f2t: '🎠 Tracker em Carrossel',          f2d: 'O personagem da vez fica no <b>centro</b> com brilho pulsante. Sempre exibe <b>5 combatentes</b> em carrossel circular — sem fundo, flutuando sobre o mapa, totalmente reposicionável.',
            f3t: '🎲 Múltiplos Sistemas',            f3d: 'Suporte nativo a <b>D&D 5e</b>, <b>Fábula Ultima</b> (turnos alternados), <b>Pathfinder 2e</b>, <b>Lord RPG</b> e <b>Genérico</b>. Configure quais aparecem no seletor via <b>Configurações → Sistemas de Iniciativa Visíveis</b>.',
            f4t: '✏️ Controles Completos',           f4d: 'Clique direito num combatente para <b>editar iniciativa, clonar ou remover</b>. Arraste cards para reordenar. Use o <b>🔒 cadeado</b> para mover o tracker livremente pela tela.',
            f5t: '🌐 Multiplayer Sincronizado',      f5d: 'Todos os jogadores veem o banner e o tracker em tempo real via <b>Socket</b>. Cada jogador clica no próprio retrato para rolar — ou o GM usa <b>Rolar Todos</b>.',
            f6t: '💾 Persistência Automática',       f6d: 'O estado do combate é salvo automaticamente. <b>Recarregar o Foundry</b> retoma o combate de onde parou, sem perder nada.',
            how : '⚡ Como Usar',
            s1  : 'Pressione <kbd>Ctrl+I</kbd> ou clique no botão <b>⚔️</b> na barra lateral',
            s2  : 'Escolha o sistema de iniciativa e arraste tokens para <b>Inimigos</b> ou <b>Heróis</b>',
            s3  : 'Clique em <b>Iniciar Combate!</b> — role a iniciativa e vá ao tracker',
            s4  : 'Use <b>‹ ›</b> para navegar os turnos e <b>✕</b> para encerrar o combate',
            btn : '⚔️ Entendido, vamos batalhar!'
        } : {
            badge    : 'Module Loaded Successfully!',
            sub      : 'Welcome to your new epic initiative system for Foundry VTT v13.',
            f1t: '🎬 Visual Roll Banner',            f1d: 'Dramatic banner with large combatant portraits split between <b>Enemies</b> and <b>Heroes</b>, with animated 3D dice (automatic <b>Dice So Nice</b> integration).',
            f2t: '🎠 Carousel Combat Tracker',       f2d: 'Active combatant stays in the <b>center</b> with pulsing glow. Always shows <b>5 combatants</b> in a circular carousel — no background, floating over the map, fully repositionable.',
            f3t: '🎲 Multiple Systems',              f3d: 'Native support for <b>D&D 5e</b>, <b>Fábula Ultima</b> (alternating turns), <b>Pathfinder 2e</b>, <b>Lord RPG</b> and <b>Generic</b>. Configure which ones appear via <b>Settings → Visible Initiative Systems</b>.',
            f4t: '✏️ Full Controls',                 f4d: 'Right-click a combatant to <b>edit initiative, clone or remove</b>. Drag cards to reorder. Use the <b>🔒 lock</b> to move the tracker freely on screen.',
            f5t: '🌐 Synchronized Multiplayer',      f5d: 'All players see the banner and tracker in real time via <b>Socket</b>. Each player clicks their own portrait to roll — or the GM uses <b>Roll All</b>.',
            f6t: '💾 Auto Persistence',              f6d: 'Combat state is saved automatically. <b>Reloading Foundry</b> resumes combat right where you left off.',
            how : '⚡ How to Use',
            s1  : 'Press <kbd>Ctrl+I</kbd> or click the <b>⚔️</b> button in the sidebar',
            s2  : 'Choose the initiative system and drag tokens to <b>Enemies</b> or <b>Heroes</b>',
            s3  : 'Click <b>Start Combat!</b> — roll initiative and go to the tracker',
            s4  : 'Use <b>‹ ›</b> to navigate turns and <b>✕</b> to end combat',
            btn : '⚔️ Got it, let\'s battle!'
        };

        const html = $(`
<div class="qiw-wrap">
    <div class="qiw-hero">
        <div class="qiw-logo">⚔️</div>
        <div class="qiw-title">Quick Initiative Pro</div>
        <div class="qiw-badge">${t.badge}</div>
        <div class="qiw-sub">${t.sub}</div>
    </div>

    <div class="qiw-features">
        ${[
            [t.f1t, t.f1d],
            [t.f2t, t.f2d],
            [t.f3t, t.f3d],
            [t.f4t, t.f4d],
            [t.f5t, t.f5d],
            [t.f6t, t.f6d]
        ].map(([title, desc]) => `
        <div class="qiw-feat">
            <div class="qiw-feat-title">${title}</div>
            <div class="qiw-feat-desc">${desc}</div>
        </div>`).join('')}
    </div>

    <div class="qiw-how">
        <div class="qiw-how-title">${t.how}</div>
        <ol class="qiw-steps">
            <li>${t.s1}</li>
            <li>${t.s2}</li>
            <li>${t.s3}</li>
            <li>${t.s4}</li>
        </ol>
    </div>

    <div class="qiw-footer">
        <div class="qiw-author">Desenvolvido por <b>O Vilão Midas</b> • <a href="https://www.patreon.com/cw/Midas316" target="_blank">Patreon</a></div>
        <button class="qiw-btn">${t.btn}</button>
    </div>
</div>`);

        html.find('.qiw-btn').on('click', () => this._dismiss());

        // Injeta estilos uma única vez
        if (!document.getElementById('qi-welcome-style')) {
            const st = document.createElement('style');
            st.id = 'qi-welcome-style';
            st.textContent = `
#qi-welcome .window-content{padding:0;overflow:hidden;background:transparent;}
#qi-welcome .window-header{background:linear-gradient(135deg,#1a1208,#2a1e08);border-bottom:1px solid rgba(201,162,39,.35);color:#c9a227;}
#qi-welcome .window-header .window-title{color:#c9a227;font-weight:700;letter-spacing:.04em;}
.qiw-wrap{background:linear-gradient(160deg,#0f0c06 0%,#1a1208 40%,#120e06 100%);color:#d4c8a8;font-family:inherit;max-height:82vh;overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(201,162,39,.3) transparent;}
.qiw-wrap::-webkit-scrollbar{width:5px;}
.qiw-wrap::-webkit-scrollbar-thumb{background:rgba(201,162,39,.3);border-radius:3px;}

/* Hero */
.qiw-hero{text-align:center;padding:28px 24px 20px;background:linear-gradient(180deg,rgba(201,162,39,.08) 0%,transparent 100%);border-bottom:1px solid rgba(201,162,39,.15);}
.qiw-logo{font-size:44px;line-height:1;margin-bottom:8px;filter:drop-shadow(0 0 18px rgba(201,162,39,.7));animation:qiw-pulse 3s ease infinite;}
@keyframes qiw-pulse{0%,100%{filter:drop-shadow(0 0 14px rgba(201,162,39,.55));}50%{filter:drop-shadow(0 0 28px rgba(201,162,39,.95));}}
.qiw-title{font-size:26px;font-weight:800;color:#c9a227;letter-spacing:.06em;text-shadow:0 0 24px rgba(201,162,39,.5);margin-bottom:8px;}
.qiw-badge{display:inline-block;background:linear-gradient(90deg,rgba(46,160,80,.22),rgba(46,160,80,.1));border:1px solid rgba(46,160,80,.45);border-radius:20px;color:#6ddf90;font-size:11px;font-weight:700;letter-spacing:.06em;padding:3px 14px;margin-bottom:10px;text-transform:uppercase;}
.qiw-sub{font-size:13px;color:#a09070;line-height:1.5;}

/* Features grid */
.qiw-features{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(201,162,39,.08);border-top:1px solid rgba(201,162,39,.1);border-bottom:1px solid rgba(201,162,39,.1);}
.qiw-feat{padding:14px 18px;background:#0f0c06;}
.qiw-feat:hover{background:rgba(201,162,39,.04);}
.qiw-feat-title{font-size:12px;font-weight:700;color:#c9a227;letter-spacing:.04em;margin-bottom:5px;}
.qiw-feat-desc{font-size:12px;color:#9a8e76;line-height:1.55;}
.qiw-feat-desc b{color:#c8b888;}

/* How to */
.qiw-how{padding:16px 24px 10px;border-bottom:1px solid rgba(201,162,39,.1);}
.qiw-how-title{font-size:13px;font-weight:700;color:#c9a227;letter-spacing:.04em;margin-bottom:10px;}
.qiw-steps{margin:0;padding-left:22px;}
.qiw-steps li{font-size:12px;color:#9a8e76;line-height:1.6;margin-bottom:3px;}
.qiw-steps li b{color:#c8b888;}
.qiw-steps li kbd{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:3px;padding:1px 6px;font-size:11px;color:#d4c8a8;font-family:monospace;}

/* Footer */
.qiw-footer{display:flex;align-items:center;justify-content:space-between;padding:14px 24px 18px;gap:16px;}
.qiw-author{font-size:11px;color:#6a6050;}
.qiw-author a{color:rgba(201,162,39,.7);text-decoration:none;}
.qiw-author a:hover{color:#c9a227;}
.qiw-btn{background:linear-gradient(135deg,#c9a227 0%,#a07820 60%,#7a5c14 100%);border:none;border-radius:6px;color:#fff;cursor:pointer;font-size:13px;font-weight:800;letter-spacing:.05em;padding:10px 28px;text-shadow:0 1px 3px rgba(0,0,0,.5);box-shadow:0 4px 16px rgba(201,162,39,.35),0 2px 4px rgba(0,0,0,.5);transition:all .2s;white-space:nowrap;}
.qiw-btn:hover{background:linear-gradient(135deg,#ddb840 0%,#b88c28 60%,#8a6c1c 100%);box-shadow:0 6px 24px rgba(201,162,39,.55),0 2px 4px rgba(0,0,0,.5);transform:translateY(-1px);}
.qiw-btn:active{transform:translateY(0);}
`;
            document.head.appendChild(st);
        }

        return html;
    }

    _dismiss() {
        try { game.settings.set(QI_ID, 'welcomeSeen', true); } catch(e) {}
        this.close();
    }

    // X no canto fecha e marca como visto também
    async close(options) {
        try { game.settings.set(QI_ID, 'welcomeSeen', true); } catch(e) {}
        return super.close(options);
    }
}

/* ══════════════════════════════════════════════════════════════════════════
   SELETOR DE SISTEMAS VISÍVEIS (abre pelas Settings do Foundry)
   ══════════════════════════════════════════════════════════════════════════ */
class QiSystemPickerApp extends FormApplication {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id       : 'qi-sys-picker',
            title    : '⚔️ Quick Initiative — Sistemas de Iniciativa Visíveis',
            template : null, // usa _renderInner em vez de template Handlebars
            width    : 560,
            height   : 'auto',
            classes  : ['qi-app'],
            resizable: false,
            popOut   : true
        });
    }

    /* FormApplication exige getData, mas usamos _renderInner custom */
    getData() { return {}; }

    async _renderInner() {
        let enabledKeys = [];
        try {
            const raw = game.settings.get(QI_ID, 'enabledSystems');
            enabledKeys = JSON.parse(raw);
        } catch(e) {
            enabledKeys = Object.keys(QI_SYSTEMS);
        }

        const all = Object.keys(QI_SYSTEMS);
        const enabled  = enabledKeys.filter(k => all.includes(k));
        const disabled = all.filter(k => !enabled.includes(k));

        const mkItem = (k) => {
            const s = QI_SYSTEMS[k];
            const lbl = k === 'generic' ? qi18n('QI.Sys.Generic') : (s.label ?? k);
            return `<div class="qisp-item" data-key="${k}" draggable="true">
                <span class="qisp-icon">${s.icon ?? '🎲'}</span>
                <span class="qisp-lbl">${lbl}</span>
                <i class="fas fa-grip-vertical qisp-grip"></i>
            </div>`;
        };

        const html = $(`
<form class="qisp-form">
  <p class="qisp-hint">
    Arraste os sistemas entre as colunas, ou clique nas setas.<br>
    Apenas os sistemas na coluna <b>Visíveis</b> aparecem no seletor de combate.
  </p>
  <div class="qisp-cols">
    <div class="qisp-col">
      <div class="qisp-col-hd">❌ Ocultos</div>
      <div class="qisp-list" id="qisp-disabled" data-side="disabled">
        ${disabled.map(mkItem).join('')}
      </div>
    </div>
    <div class="qisp-arrows">
      <button type="button" class="qisp-arrow" data-dir="enable"  title="Mover para Visíveis">▶</button>
      <button type="button" class="qisp-arrow" data-dir="disable" title="Mover para Ocultos" >◀</button>
    </div>
    <div class="qisp-col">
      <div class="qisp-col-hd">✅ Visíveis</div>
      <div class="qisp-list" id="qisp-enabled" data-side="enabled">
        ${enabled.map(mkItem).join('')}
      </div>
    </div>
  </div>
  <div class="form-footer">
    <button type="button" class="qisp-save"><i class="fas fa-save"></i> Salvar</button>
  </div>
</form>`);

        // ── Drag & drop entre colunas ──────────────────────────────────
        let dragKey = null, dragSide = null;

        html.find('.qisp-item')
            .on('dragstart', function(ev) {
                dragKey  = this.dataset.key;
                dragSide = $(this).closest('.qisp-list').data('side');
                this.classList.add('dragging');
            })
            .on('dragend', function() { this.classList.remove('dragging'); });

        html.find('.qisp-list')
            .on('dragover',  ev => { ev.preventDefault(); $(ev.currentTarget).addClass('hover'); })
            .on('dragleave', ev => $(ev.currentTarget).removeClass('hover'))
            .on('drop', ev => {
                ev.preventDefault();
                $(ev.currentTarget).removeClass('hover');
                const targetSide = $(ev.currentTarget).data('side');
                if (!dragKey || targetSide === dragSide) return;
                const $item = html.find(`.qisp-item[data-key="${dragKey}"]`);
                $(ev.currentTarget).append($item);
                dragSide = targetSide;
            });

        // ── Botões de seta ────────────────────────────────────────────
        html.find('.qisp-arrow').on('click', function() {
            const dir = this.dataset.dir;
            const srcId  = dir === 'enable'  ? '#qisp-disabled' : '#qisp-enabled';
            const dstId  = dir === 'enable'  ? '#qisp-enabled'  : '#qisp-disabled';
            const $items = html.find(srcId).find('.qisp-item');
            if (!$items.length) return;
            $items.first().appendTo(html.find(dstId));
        });

        // ── Salvar ─────────────────────────────────────────────────────
        html.find('.qisp-save').on('click', async () => {
            const newEnabled = html.find('#qisp-enabled .qisp-item').map(function() {
                return this.dataset.key;
            }).get();
            if (!newEnabled.length) {
                ui.notifications.warn('Selecione ao menos um sistema de iniciativa!');
                return;
            }
            await game.settings.set(QI_ID, 'enabledSystems', JSON.stringify(newEnabled));
            ui.notifications.info('✅ Sistemas de iniciativa atualizados!');
            this.close();
        });

        return html;
    }

    /* Injeta os estilos específicos do picker uma única vez */
    activateListeners(html) {
        super.activateListeners(html);
        if (!document.getElementById('qi-sysapp-style')) {
            const st = document.createElement('style');
            st.id = 'qi-sysapp-style';
            st.textContent = `
.qisp-form{padding:12px 16px 8px;}
.qisp-hint{font-size:12px;color:#bbb;margin-bottom:12px;line-height:1.5;}
.qisp-cols{display:flex;gap:10px;align-items:flex-start;}
.qisp-col{flex:1;background:rgba(0,0,0,.35);border:1px solid rgba(200,146,42,.2);border-radius:6px;min-height:180px;}
.qisp-col-hd{padding:8px 12px;font-size:12px;font-weight:700;color:#c8922a;border-bottom:1px solid rgba(200,146,42,.2);letter-spacing:.05em;}
.qisp-list{padding:6px;min-height:140px;transition:background .15s;}
.qisp-list.hover{background:rgba(200,146,42,.08);}
.qisp-item{display:flex;align-items:center;gap:8px;padding:7px 10px;margin-bottom:4px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:4px;cursor:grab;font-size:13px;user-select:none;transition:background .12s;color:#e8e0d0!important;}
.qisp-item:hover{background:rgba(200,146,42,.15);border-color:rgba(200,146,42,.3);}
.qisp-item.dragging{opacity:.45;}
.qisp-lbl{color:#e8e0d0!important;font-size:13px!important;flex:1;}
.qisp-icon{font-size:15px;flex-shrink:0;}
.qisp-grip{margin-left:auto;opacity:.35;font-size:11px;color:#aaa!important;}
.qisp-arrows{display:flex;flex-direction:column;gap:8px;justify-content:center;padding:8px 0;}
.qisp-arrow{background:rgba(200,146,42,.15);border:1px solid rgba(200,146,42,.4);border-radius:4px;color:#c8922a;cursor:pointer;padding:8px 10px;font-size:14px;transition:background .12s;}
.qisp-arrow:hover{background:rgba(200,146,42,.3);}
.qisp-save{background:linear-gradient(135deg,#c8922a,#a07020);border:none;border-radius:5px;color:#fff;cursor:pointer;font-size:13px;font-weight:700;padding:9px 22px;margin-top:12px;width:100%;transition:opacity .15s;}
.qisp-save:hover{opacity:.85;}
`;
            document.head.appendChild(st);
        }
    }
}

/* ══════════════════════════════════════════════════════════════════════════
   JANELA DE CONFIGURAÇÃO
   ══════════════════════════════════════════════════════════════════════════ */
class QuickInitiativeSetup extends Application {
    constructor() {
        super();
        this._heroes      = [];
        this._villains    = [];
        this._genericDice = QiState.genericDice || '1d20';
        this._available   = this._scan();

        // Carrega o último sistema salvo; valida se ainda está habilitado
        const enabledKeys = (() => {
            try { return JSON.parse(game.settings.get(QI_ID, 'enabledSystems')); } catch(e) { return Object.keys(QI_SYSTEMS); }
        })();
        const lastSys = (() => {
            try { return game.settings.get(QI_ID, 'lastSystem') || 'dnd5e'; } catch(e) { return 'dnd5e'; }
        })();
        // Usa o último sistema se ainda está habilitado, senão pega o primeiro habilitado
        this._system = enabledKeys.includes(lastSys) ? lastSys : (enabledKeys[0] ?? 'dnd5e');
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            id:'qi-setup', title:qi18n('QI.App.Title'),
            width:820, height:620, classes:['qi-app'], resizable:false, popOut:true
        });
    }

    _scan() {
        const used = new Set([...this._heroes, ...this._villains].map(c => c.tokenId));
        return (canvas.tokens?.placeables ?? [])
            .filter(t => t.actor && !used.has(t.id))
            .map(t => ({
                id:foundry.utils.randomID(), name:t.name,
                img:t.actor.img ?? 'icons/svg/mystery-man.svg',
                actorId:t.actor.id, tokenId:t.id
            }));
    }

    async _renderInner() {
        // Lê sistemas habilitados nas settings
        let enabledKeys;
        try { enabledKeys = JSON.parse(game.settings.get(QI_ID, 'enabledSystems')); } catch(e) { enabledKeys = Object.keys(QI_SYSTEMS); }
        if (!enabledKeys.length) enabledKeys = Object.keys(QI_SYSTEMS);

        // Sistemas principais filtrados (exceto genérico)
        const mainSystems = Object.entries(QI_SYSTEMS).filter(([k]) => k !== 'generic' && enabledKeys.includes(k));
        const allSystems  = enabledKeys.includes('generic')
            ? [...mainSystems, ['generic', QI_SYSTEMS.generic]]
            : mainSystems;

        // Se o sistema atual não está mais habilitado, reseta para o primeiro disponível
        if (!enabledKeys.includes(this._system)) this._system = enabledKeys[0] ?? 'dnd5e';

        // Widget dropdown customizado (o select nativo fica preto por CSS do Foundry)
        const currentSys = allSystems.find(([k]) => k === this._system) ?? allSystems[0];
        const dropItems  = allSystems.map(([k, s]) => `
            <div class="qi-sys-item ${k === this._system ? 'sel' : ''}" data-value="${k}">
                <span class="qi-sys-item-icon">${s.icon ?? '🎲'}</span>
                <span class="qi-sys-item-lbl">${k === 'generic' ? qi18n('QI.Sys.Generic') : s.label}</span>
            </div>`).join('');

        const sysRow = `
<div class="qi-sys-bar">
    <div class="qi-sys-select-wrap">
        <label class="qi-sys-select-label"><i class="fas fa-dice-d20"></i> ${qi18n('QI.Sys.Label')}</label>
        <div class="qi-sys-dropdown" tabindex="0">
            <div class="qi-sys-trigger">
                <span class="qi-sys-trigger-icon">${currentSys[1].icon ?? '🎲'}</span>
                <span class="qi-sys-trigger-lbl">${currentSys[0] === 'generic' ? qi18n('QI.Sys.Generic') : currentSys[1].label}</span>
                <i class="fas fa-chevron-down qi-sys-chev"></i>
            </div>
            <div class="qi-sys-panel">${dropItems}</div>
        </div>
    </div>
    <div class="qi-sys-generic-wrap ${this._system === 'generic' ? 'visible' : ''}">
        <label class="qi-sys-select-label"><i class="fas fa-dice"></i> ${qi18n('QI.Sys.Dice')}</label>
        <input class="qi-generic-dice-input" type="text"
               value="${this._genericDice}" placeholder="ex: 2d6"
               title="Fórmula de dados (NdM)" maxlength="8">
    </div>
</div>`;

        // X no canto direito, nome com flex-1 para não sobrepor
        const mkCard = (c, pool) => `
            <div class="qi-card" data-id="${c.id}" data-pool="${pool}" draggable="true">
                <div class="qi-card-img" style="background-image:url('${c.img}')"></div>
                <div class="qi-card-name">${c.name}</div>
                ${pool !== 'available' ? `<button class="qi-rm qi-rm-edge" data-id="${c.id}" data-pool="${pool}" title="Remover do combate">✕</button>` : ''}
            </div>`;

        const html = $(`
<div class="qi-setup">
    <div class="qi-sect-label"><i class="fas fa-dice-d20"></i> ${qi18n('QI.Section.Initiative')}</div>
    ${sysRow}

    <div class="qi-arena">
        <div class="qi-side-col villain-col">
            <div class="qi-col-title">${qi18n('QI.Side.Villains')} <span class="qi-cnt">${this._villains.length}</span></div>
            <div class="qi-dropzone" data-pool="villain">
                ${this._villains.map(c => mkCard(c,'villain')).join('')}
                ${!this._villains.length ? `<div class="qi-drop-hint">${qi18n('QI.Drop.Villains')}</div>` : ''}
            </div>
        </div>
        <div class="qi-center-col">
            <div class="qi-col-title">${qi18n('QI.Scene.Title')}</div>
            <div class="qi-pool" id="qi-pool">
                ${this._available.map(c => mkCard(c,'available')).join('')}
                ${!this._available.length ? `<p class="qi-empty">${qi18n('QI.Scene.Empty')}</p>` : ''}
            </div>
            <button class="qi-refresh"><i class="fas fa-sync-alt"></i> ${qi18n('QI.Scene.Refresh')}</button>
        </div>
        <div class="qi-side-col hero-col">
            <div class="qi-col-title">${qi18n('QI.Side.Heroes')} <span class="qi-cnt">${this._heroes.length}</span></div>
            <div class="qi-dropzone" data-pool="hero">
                ${this._heroes.map(c => mkCard(c,'hero')).join('')}
                ${!this._heroes.length ? `<div class="qi-drop-hint">${qi18n('QI.Drop.Heroes')}</div>` : ''}
            </div>
        </div>
    </div>

    <div class="qi-footer">
        <div class="qi-summary">
            <span class="qi-badge-v">${qi18n('QI.Badge.Villains',{n:this._villains.length})}</span>
            <span class="qi-badge-h">${qi18n('QI.Badge.Heroes',{n:this._heroes.length})}</span>
        </div>
        <button class="qi-start ${!this._heroes.length && !this._villains.length ? 'dis' : ''}">
            <i class="fas fa-swords"></i> Iniciar Combate!
        </button>
    </div>
</div>`);

        // Drag & Drop
        let dragId = null, dragPool = null;
        html.find('.qi-card')
            .on('dragstart', function() { dragId = this.dataset.id; dragPool = this.dataset.pool; this.classList.add('dragging'); })
            .on('dragend',   function() { this.classList.remove('dragging'); });

        html.find('.qi-dropzone, .qi-pool')
            .on('dragover',  ev => { ev.preventDefault(); $(ev.currentTarget).addClass('hover'); })
            .on('dragleave', ev => $(ev.currentTarget).removeClass('hover'))
            .on('drop', ev => {
                ev.preventDefault(); $(ev.currentTarget).removeClass('hover');
                const tp = $(ev.currentTarget).data('pool') || 'available';
                if (!dragId || tp === dragPool) return;
                const from = this._pool(dragPool);
                const idx  = from.findIndex(c => c.id === dragId);
                if (idx < 0) return;
                const [item] = from.splice(idx, 1);
                this._pool(tp).push(item);
                this._reRender();
            });

        // Custom dropdown — abre/fecha e seleciona sistema
        html.find('.qi-sys-trigger').on('click', (ev) => {
            ev.stopPropagation();
            const $dd = html.find('.qi-sys-dropdown');
            $dd.toggleClass('open');
        });
        html.find('.qi-sys-item').on('click', (ev) => {
            ev.stopPropagation();
            const val = $(ev.currentTarget).data('value');
            this._system = val;
            // Persiste o último sistema selecionado
            try { game.settings.set(QI_ID, 'lastSystem', val); } catch(e) {}
            const sys   = QI_SYSTEMS[val];
            const lbl   = val === 'generic' ? qi18n('QI.Sys.Generic') : sys.label;
            html.find('.qi-sys-trigger-icon').text(sys.icon ?? '🎲');
            html.find('.qi-sys-trigger-lbl').text(lbl);
            html.find('.qi-sys-item').removeClass('sel');
            $(ev.currentTarget).addClass('sel');
            html.find('.qi-sys-dropdown').removeClass('open');
            const isGen = val === 'generic';
            html.find('.qi-sys-generic-wrap').toggleClass('visible', isGen);
        });
        $(document).on('click.qi-sys-dd', () => html.find('.qi-sys-dropdown').removeClass('open'));

        // Sincroniza o input de dados genéricos
        html.on('input change', '.qi-generic-dice-input', ev => {
            const val = ev.target.value.trim();
            if (/^\d+d\d+$/i.test(val)) {
                this._genericDice = val.toLowerCase();
                QiState.genericDice = this._genericDice;
            }
        });

        html.on('click', '.qi-rm', ev => {
            ev.stopPropagation();
            const { id, pool } = ev.currentTarget.dataset;
            const arr = this._pool(pool);
            const idx = arr.findIndex(c => c.id === id);
            if (idx >= 0) { const [c] = arr.splice(idx, 1); if (pool !== 'available') this._available.push(c); }
            this._reRender();
        });

        html.find('.qi-refresh').on('click', () => { this._available = this._scan(); this._reRender(); });

        html.find('.qi-start').on('click', () => {
            const all = [
                ...this._heroes.map(c => ({ ...c, side:'hero'    })),
                ...this._villains.map(c => ({ ...c, side:'villain' }))
            ];
            if (!all.length) { ui.notifications.warn(qi18n('QI.Combat.NeedCombatant')); return; }
            QiState.genericDice = this._genericDice || '1d20';
            QuickInitiative.startCombat(all, this._system);
            this.close();
        });

        return html;
    }

    _pool(n) { return n==='hero' ? this._heroes : n==='villain' ? this._villains : this._available; }
    _reRender() { const p = this.position; this.render(false); if (p) this.setPosition(p); }
    async close(options) { $(document).off('click.qi-sys-dd'); return super.close(options); }
}

/* ══ BOTÃO QUICK INITIATIVE — Barra Nativa Foundry v13 ════════════════════
 * Foundry v13: <menu id="scene-controls-layers"> com <li><button>
 * Fallback para v12 incluído.
 * ══════════════════════════════════════════════════════════════════════════ */

function _injectQiSceneButton() {
    document.getElementById('qi-scene-btn')?.remove();

    const menu =
        document.querySelector('#scene-controls-layers') ||
        document.querySelector('#controls > ol.main-controls') ||
        document.querySelector('#controls ol');

    if (!menu || !game.user?.isGM) return;

    const li  = document.createElement('li');
    li.id     = 'qi-scene-btn';

    const btn = document.createElement('button');
    btn.type      = 'button';
    btn.className = 'control ui-control layer icon fa-solid fa-swords';
    btn.setAttribute('data-tooltip', qi18n('QI.Sidebar.Tooltip'));
    btn.setAttribute('aria-label',   'Quick Initiative');
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('data-action',  'control');
    btn.setAttribute('data-control', 'quick-initiative');

    btn.style.setProperty('color',       '#c9a227', 'important');
    btn.style.setProperty('text-shadow', '0 0 8px rgba(201,162,39,0.55)', 'important');

    btn.addEventListener('mouseenter', () => {
        btn.style.setProperty('color',       '#f0d060', 'important');
        btn.style.setProperty('text-shadow', '0 0 16px rgba(201,162,39,0.9)', 'important');
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.setProperty('color',       '#c9a227', 'important');
        btn.style.setProperty('text-shadow', '0 0 8px rgba(201,162,39,0.55)', 'important');
    });
    btn.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        btn.setAttribute('aria-pressed', 'false');
        new QuickInitiativeSetup().render(true);
    });

    li.appendChild(btn);
    menu.appendChild(li);
}

Hooks.on('renderSceneControls', () => setTimeout(_injectQiSceneButton, 70));
Hooks.once('ready',             () => setTimeout(_injectQiSceneButton, 450));

Hooks.once('init',  () => QuickInitiative.init());
Hooks.once('ready', () => QuickInitiative.ready());
