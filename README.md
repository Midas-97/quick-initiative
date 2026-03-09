# Quick Initiative Pro

**Versão / Version:** 1.0.0  
**Autor / Author:** O Vilão Midas  
**Foundry VTT:** v13  

---

## 🇧🇷 Português

### Sobre
**Quick Initiative Pro** é um sistema de iniciativa épico para o Foundry VTT v13. Substitui o tracker padrão por um banner visual imersivo com retratos dos combatentes, dados 3D animados (compatível com Dice So Nice), suporte a múltiplos sistemas de RPG e um tracker de combate em **carrossel** — sem fundo, flutuando sobre o mapa, totalmente reposicionável.

### Funcionalidades

#### Banner de Rolagem
- Faixa central dramática com retratos grandes dos combatentes, divididos entre **Inimigos** e **Heróis**
- Dados 3D animados ao rolar iniciativa (integração automática com Dice So Nice)
- Cada jogador pode rolar a iniciativa do próprio personagem
- GM pode rolar todos de uma vez com **Rolar Todos**

#### Tracker de Combate em Carrossel
- Personagem da vez no **centro**, em destaque com brilho dourado pulsante
- **5 personagens visíveis** sempre — independente de ter 50 na iniciativa
- Efeito carrossel circular: os cards dos lados se tornam menores e mais escuros progressivamente
- Sem fundo — os retratos flutuam diretamente sobre o mapa
- Badge **"Rodada N"** no topo do retrato central
- Badge de **iniciativa** na borda inferior de cada retrato
- Nome do personagem abaixo de cada retrato

#### Controles do Tracker
- **‹** — Turno anterior (esquerda)
- **›** — Próximo turno (direita)
- **✕** — Encerrar combate (acima do ›)
- **🔒 Cadeado** — Clique para desbloquear/travar posição; segure e arraste para mover o tracker livremente pela tela; ao travar novamente, fica onde você deixou

#### Funcionalidades Avançadas
- **Drag-and-Drop:** Reordene a iniciativa arrastando os cards no tracker
- **Menu de Contexto:** Clique direito num combatente para editar iniciativa, clonar, adicionar ou remover
- **Multiplayer via Socket:** Todos os jogadores veem o banner e o tracker sincronizados
- **Persistência:** Estado do combate salvo automaticamente — recarregar o Foundry retoma de onde parou
- **Animação de Entrada:** Novos cards entram com slide animado da direção correta

### Sistemas de Iniciativa Suportados

| Sistema | Fórmula |
|---|---|
| D&D 5e | 1d20 + modificador de Destreza |
| Fábula Ultima | Dado de DEX + Dado de INS (detecta automaticamente o tamanho da ficha) |
| Pathfinder 2e | 1d20 + modificador de Percepção |
| Genérico | Qualquer fórmula NdM — configurável pelo GM (`2d6`, `10d20`, `3d8`, etc.) |

### Instalação

> ⚠️ Este módulo requer **Foundry VTT v13**. Não é compatível com versões anteriores.

**Método 1 — Manifest URL (recomendado):**
1. No Foundry VTT, vá em **Configurações → Módulos → Instalar Módulo**
2. No campo **URL do Manifest**, cole o link fornecido pelo autor
3. Clique em **Instalar**
4. Ative o módulo **Quick Initiative Pro** nas configurações do mundo

**Método 2 — Manual:**
1. Baixe o `.zip` fornecido pelo autor
2. Extraia em `Data/modules/quick-initiative/`
3. Ative o módulo nas configurações do mundo

### Atalhos

| Atalho | Ação |
|---|---|
| `Ctrl+I` | Abrir configurador de combate |

### Como Usar
1. Pressione `Ctrl+I` para abrir o configurador
2. Escolha o sistema de iniciativa
3. Arraste os tokens da cena para as colunas **Inimigos** ou **Heróis**
4. Clique em **Iniciar Combate!**
5. Cada jogador clica no retrato do seu personagem para rolar — ou o GM clica em **Rolar Todos**
6. Quando todos rolarem, clique em **Iniciar Combate!** para ir para o tracker em carrossel
7. Use **‹** **›** para navegar os turnos e **✕** para encerrar o combate
8. Use o **🔒** para reposicionar o tracker onde quiser na tela

---

## ⚠️ Licença — Uso Pessoal

Este módulo é licenciado **apenas para uso pessoal** do comprador.

✔ **Permitido:**
- Usar em mundos Foundry VTT pessoais
- Modificar para uso pessoal

❌ **Não permitido:**
- Redistribuição em qualquer formato
- Compartilhamento com terceiros
- Upload para outras plataformas ou repositórios públicos
- Venda ou sublicenciamento
- Distribuição da versão modificada

A distribuição não autorizada pode resultar na perda de acesso a atualizações futuras.

---

## 🇺🇸 English

### About
**Quick Initiative Pro** is an epic initiative system for Foundry VTT v13. It replaces the default tracker with an immersive visual banner featuring combatant portraits, animated 3D dice (Dice So Nice compatible), support for multiple RPG systems, and a **carousel combat tracker** — no background, floating over the map, fully repositionable.

### Features

#### Roll Banner
- Dramatic central banner with large combatant portraits split between **Enemies** and **Heroes**
- Animated 3D dice when rolling initiative (automatic Dice So Nice integration)
- Each player can roll initiative for their own character
- GM can roll everyone at once with **Roll All**

#### Carousel Combat Tracker
- Active combatant in the **center**, highlighted with pulsing golden glow
- Always shows **5 characters** — even with 50 in the initiative order
- Circular carousel effect: side cards get progressively smaller and darker
- No background — portraits float directly over the map
- **"Round N"** badge at the top of the central portrait
- **Initiative** badge at the bottom edge of each portrait
- Character name below each portrait

#### Tracker Controls
- **‹** — Previous turn (left)
- **›** — Next turn (right)
- **✕** — End combat (above ›)
- **🔒 Lock** — Click to unlock/lock position; hold and drag to move the tracker freely anywhere on screen; when locked again, stays where you placed it

#### Advanced Features
- **Drag-and-Drop:** Reorder initiative by dragging cards in the tracker
- **Context Menu:** Right-click a combatant to edit initiative, clone, add, or remove
- **Multiplayer via Socket:** All players see the banner and tracker in sync
- **Persistence:** Combat state auto-saved — reloading Foundry resumes where you left off
- **Entry Animation:** New cards slide in from the correct direction

### Supported Initiative Systems

| System | Formula |
|---|---|
| D&D 5e | 1d20 + Dexterity modifier |
| Fábula Ultima | DEX die + INS die (auto-detects sheet sizes) |
| Pathfinder 2e | 1d20 + Perception modifier |
| Generic | Any NdM formula — configurable by GM (`2d6`, `10d20`, `3d8`, etc.) |

### Installation

> ⚠️ This module requires **Foundry VTT v13**. Not compatible with earlier versions.

**Method 1 — Manifest URL (recommended):**
1. In Foundry VTT, go to **Settings → Add-on Modules → Install Module**
2. In the **Manifest URL** field, paste the link provided by the author
3. Click **Install**
4. Enable **Quick Initiative Pro** in your world's module settings

**Method 2 — Manual:**
1. Download the `.zip` provided by the author
2. Extract to `Data/modules/quick-initiative/`
3. Enable the module in world settings

### Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+I` | Open combat configurator |

### How to Use
1. Press `Ctrl+I` to open the configurator
2. Choose an initiative system
3. Drag scene tokens into **Enemies** or **Heroes** columns
4. Click **Start Combat!**
5. Each player clicks their character's portrait to roll — or the GM clicks **Roll All**
6. Once everyone has rolled, click **Start Combat!** to go to the carousel tracker
7. Use **‹** **›** to navigate turns and **✕** to end combat
8. Use **🔒** to reposition the tracker anywhere on screen

---

## ⚠️ License — Personal Use Only

This module is licensed for the **purchaser's personal use only**.

✔ **Allowed:**
- Use in personal Foundry VTT worlds
- Modify for personal use

❌ **Not allowed:**
- Redistribution in any format
- Sharing with third parties
- Uploading to other platforms or public repositories
- Selling or sublicensing
- Distributing modified versions

Unauthorized distribution may result in loss of access to future updates.

---

*Desenvolvido por / Developed by **O Vilão Midas** • [Patreon](https://www.patreon.com/ovilaomidas)*
