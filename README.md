# Quick Initiative Pro

**Versão / Version:** 1.0.0
**Autor / Author:** O Vilão Midas
**Foundry VTT:** v13

---

## 🇧🇷 Português

### Sobre

**Quick Initiative Pro** é um sistema de iniciativa épico para o Foundry VTT v13. Substitui o tracker padrão por um banner visual imersivo com retratos dos combatentes, dados 3D animados (compatível com Dice So Nice), suporte a múltiplos sistemas de RPG e um tracker de combate em **carrossel** — sem fundo, flutuando sobre o mapa, totalmente reposicionável.

---

### Funcionalidades

#### 🎬 Banner Visual de Rolagem
- Faixa dramática com retratos grandes dos combatentes, divididos entre **Inimigos** e **Heróis**
- Dados 3D animados ao rolar iniciativa — integração automática com o **Dice So Nice**
- Cada jogador clica no próprio retrato para rolar a iniciativa
- GM pode rolar todos de uma vez com **Rolar Todos**

#### 🎠 Tracker de Combate em Carrossel
- Personagem da vez no **centro**, em destaque com brilho colorido pulsante
- Sempre exibe **5 combatentes** visíveis — independente de ter 50 na iniciativa
- Efeito carrossel circular: os cards dos lados ficam menores e mais escuros progressivamente
- Sem fundo — os retratos flutuam diretamente sobre o mapa
- Badge **"Rodada N"** no topo do retrato central
- Badge de **iniciativa** na borda inferior de cada retrato
- Nome do personagem abaixo de cada retrato

#### 🎮 Controles do Tracker

| Controle | Ação |
|---|---|
| **‹** | Turno anterior |
| **›** | Próximo turno |
| **✕** | Encerrar combate |
| **🔒 Cadeado** | Clique para desbloquear / arraste para mover / clique para travar |
| **Botão direito** | Menu de contexto: editar iniciativa, clonar, adicionar ou remover |
| **Arrastar card** | Reordenar a iniciativa manualmente |
| **Ctrl+I** | Abrir o configurador de combate |

#### ✨ Efeito no Token Ativo
- Brilho radial pulsante e colorido aparece no **mapa** ao redor do token do combatente da vez
- Suporta **imagem giratória personalizada** ao redor do token (PNG/WEBP com transparência)
- Cor do brilho segue a cor configurada para Heróis ou Inimigos

#### ⏱ Temporizador de Rolagem
- Configure um tempo limite em segundos para os jogadores rolarem a iniciativa
- Ao expirar, o GM pode rolar automaticamente para todos que ainda não rolaram
- Barra visual com cores: verde → amarelo → vermelho

#### ⚜️ Logo Central / Modelo 3D
- Exiba uma imagem **PNG/WEBP girando** no centro do banner de rolagem
- Ou carregue um **modelo 3D GLB/GLTF** (compatível com exportações do Meshy)

#### 💾 Persistência e Multiplayer
- **Multiplayer via Socket:** Banner e tracker sincronizados em tempo real para todos os jogadores
- **Persistência:** Estado do combate salvo automaticamente — recarregar o Foundry retoma de onde parou
- **Animação de Entrada:** Novos cards entram com slide animado da direção correta

---

### 🎲 Sistemas de Iniciativa Suportados

| Sistema | Fórmula |
|---|---|
| ⚔️ D&D 5e | 1d20 + modificador de Destreza |
| ✨ Fábula Ultima | Dado DEX + Dado INS — turnos alternados (detecta automaticamente o tamanho da ficha) |
| 🛡️ Pathfinder 2e | 1d20 + modificador de Percepção |
| 👑 Lord RPG | 2d6 + Fortitude (checkboxes marcadas) |
| 🎲 Genérico | Qualquer fórmula NdM — configurável pelo GM (`2d6`, `1d20+5`, `3d8`, etc.) |

> Configure quais sistemas aparecem no seletor em **Configurações → ⚔️ Configurar Sistemas**.

---

### 🎨 Personalização

Acesse **Configurações do Módulo → Quick Initiative Pro** para personalizar:

| Opção | Descrição |
|---|---|
| 🌐 **Idioma** | Português (Brasil) ou English — **aparece no topo das configurações** |
| 🎨 **Cores** | Cor separada para Heróis e Inimigos — brilhos, molduras e badges mudam |
| 📐 **Tamanho do Carrossel** | Pequeno, Médio ou Grande |
| ⏱ **Temporizador** | Tempo limite em segundos para rolar a iniciativa (0 = desativado) |
| 🖼️ **Imagem de Fundo** | Imagem personalizada atrás do banner de rolagem (PNG/JPG/WEBP) |
| ⚜️ **Logo Central** | Imagem girando ou modelo 3D GLB/GLTF no centro do banner |
| 🌀 **Token Glow Image** | Imagem giratória ao redor do token ativo no mapa |
| ✨ **Brilho do Token** | Ativa/desativa o brilho radial pulsante no token ativo |

---

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

---

### Como Usar — Passo a Passo

1. Pressione **`Ctrl+I`** ou clique no botão **⚔️** na barra lateral da cena
2. Escolha o **sistema de iniciativa** no seletor
3. Arraste os tokens da cena para as colunas **Inimigos** ou **Heróis**
4. Clique em **Iniciar Combate!** para abrir o banner de rolagem
5. Cada jogador clica no **retrato do seu personagem** para rolar — ou o GM clica em **Rolar Todos**
6. Quando todos rolarem, clique em **Iniciar Combate!** para ir ao tracker em carrossel
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

---

### Features

#### 🎬 Visual Roll Banner
- Dramatic banner with large combatant portraits split between **Enemies** and **Heroes**
- Animated 3D dice when rolling initiative — automatic **Dice So Nice** integration
- Each player clicks their own portrait to roll initiative
- GM can roll everyone at once with **Roll All**

#### 🎠 Carousel Combat Tracker
- Active combatant in the **center**, highlighted with pulsing colored glow
- Always shows **5 combatants** — even with 50 in the initiative order
- Circular carousel effect: side cards get progressively smaller and darker
- No background — portraits float directly over the map
- **"Round N"** badge at the top of the central portrait
- **Initiative** badge at the bottom edge of each portrait
- Character name below each portrait

#### 🎮 Tracker Controls

| Control | Action |
|---|---|
| **‹** | Previous turn |
| **›** | Next turn |
| **✕** | End combat |
| **🔒 Lock** | Click to unlock / drag to move / click to lock in place |
| **Right-click** | Context menu: edit initiative, clone, add or remove |
| **Drag card** | Manually reorder initiative |
| **Ctrl+I** | Open the combat configurator |

#### ✨ Active Token Effect
- Pulsing colored radial glow appears on the **map** around the active combatant's token
- Supports a **custom spinning image** around the token (PNG/WEBP with transparency)
- Glow color follows the configured color for Heroes or Enemies

#### ⏱ Roll Timer
- Set a time limit in seconds for players to roll initiative
- When it expires, the GM can automatically roll for everyone who hasn't rolled yet
- Visual bar with color shift: green → yellow → red

#### ⚜️ Center Logo / 3D Model
- Display a **spinning PNG/WEBP image** in the center of the roll banner
- Or load a **GLB/GLTF 3D model** (compatible with Meshy exports)

#### 💾 Persistence and Multiplayer
- **Multiplayer via Socket:** Banner and tracker synced in real time for all players
- **Persistence:** Combat state auto-saved — reloading Foundry resumes where you left off
- **Entry Animation:** New cards slide in from the correct direction

---

### 🎲 Supported Initiative Systems

| System | Formula |
|---|---|
| ⚔️ D&D 5e | 1d20 + Dexterity modifier |
| ✨ Fábula Ultima | DEX die + INS die — alternating turns (auto-detects sheet die sizes) |
| 🛡️ Pathfinder 2e | 1d20 + Perception modifier |
| 👑 Lord RPG | 2d6 + Fortitude (checked boxes) |
| 🎲 Generic | Any NdM formula — configurable by GM (`2d6`, `1d20+5`, `3d8`, etc.) |

> Configure which systems appear in the selector at **Settings → ⚔️ Configure Systems**.

---

### 🎨 Customization

Go to **Module Settings → Quick Initiative Pro** to customize:

| Option | Description |
|---|---|
| 🌐 **Language** | English or Português (Brasil) — **appears at the top of settings** |
| 🎨 **Colors** | Separate color for Heroes and Enemies — glows, frames and badges change |
| 📐 **Carousel Size** | Small, Medium or Large |
| ⏱ **Timer** | Time limit in seconds to roll initiative (0 = disabled) |
| 🖼️ **Banner Background** | Custom image behind the roll banner (PNG/JPG/WEBP) |
| ⚜️ **Center Logo** | Spinning image or GLB/GLTF 3D model in the banner center |
| 🌀 **Token Glow Image** | Spinning image around the active token on the map |
| ✨ **Token Glow** | Enable/disable the radial pulsing glow on the active token |

---

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

---

### How to Use — Step by Step

1. Press **`Ctrl+I`** or click the **⚔️** button in the scene sidebar
2. Choose the **initiative system** from the selector
3. Drag scene tokens into the **Enemies** or **Heroes** columns
4. Click **Start Combat!** to open the roll banner
5. Each player clicks their **character portrait** to roll — or the GM clicks **Roll All**
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

*Desenvolvido por / Developed by **O Vilão Midas** • [❤️ Patreon](https://www.patreon.com/ovilaomidas)*
