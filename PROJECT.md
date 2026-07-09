# PROJECT — Site Salestime

Plano de ação e controle de progresso. Segue o `PLAYBOOK.md`. Marcar `[x]` conforme conclui.

## Project meta
- **Nome:** salestime-site
- **fileKey Figma:** `oDdbLbgRn54eoWK86VtfLJ`
- **Home Desktop node:** `4048-6873` (1440px)
- **Home Mobile node:** `4058-13174`
- **Fonte(s):** Manrope (500 Medium, 600 SemiBold, 700 Bold — 400/800 para apoio)
- **Domínio final:** a definir

### Paleta (get_variable_defs)
| Token | Hex | Uso provável |
|---|---|---|
| blue-900 | `#0a0755` | fundos escuros / CTA |
| blue-600 | `#18137b` | brand primária (botões, headings) |
| blue-300 | `#332ade` | brand secundária / accent |
| blue-100 | `#9995ef` | detalhes / hover suave |
| lemon | `#e7e600` | accent (badges, ícones destaque) |
| gray-900 | `#3f3e55` | texto forte |
| gray-600 | `#7d7c8c` | texto secundário |
| gray-500 | `#92919e` | texto mute |
| gray-200 | `#d0cfd5` | bordas |
| gray-100 | `#e4e4e7` | bordas suaves |
| gray-50 | `#f5f6f9` | fundos neutros |
| white | `#ffffff` | base |

---

## Fases de processo

- [x] **Fase 0 — Design intake** (mapeamento de seções, cores, screenshots)
- [x] **Fase 1 — Setup** (`npm install`, `dev` e `build` sanity check)
- [x] **Fase 2 — Design tokens** (`global.css`: cores, fonts, utilitárias `.h1/.h2/.body/.btn/.eyebrow`)
- [x] **Fase 3 — Componentes globais** (Header, Footer, Button, Eyebrow, SectionHeader, Icons)
- [x] **Fase 4 — Loop de seções** (9/9 seções pixel-perfect, ver abaixo)
- [x] **Fase 7 — SEO** (title/description/OG/JSON-LD/sitemap/robots/canonical)
- [x] **Fase 8 — Performance** (Lighthouse mobile **100**)
- [x] **Fase 9 — Acessibilidade** (Lighthouse mobile **100** — contraste do footer ajustado p/ AA)
- [x] **Fase 10 — Build & entrega** (`npm run build` + `preview` OK)

### Lighthouse (mobile, preset throttled)
| Categoria | Score |
|---|---|
| Performance | **100** (FCP 0.8s · LCP 1.9s · CLS 0.001) |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | **100** |

### TODOs antes do deploy (pendências reais)
- [ ] **Endpoint dos formulários** (diagnóstico + newsletter): hoje `action="#"`. Ligar a Formspree/API real.
- [ ] Confirmar **domínio final** (usado `salestime.com.br` como placeholder em `astro.config.mjs` e `Base.astro`).
- [ ] Links de nav/rodapé são âncoras placeholder (`#servicos`, `#blog`, etc.) — criar páginas internas ou ajustar destinos.
- [ ] Confirmar contraste do footer com o designer (escurecido de `gray-600`→`gray-900` para passar AA).

### Ajustes pós-review (rodada 2)
- **`EyebrowBadge.astro` + `Filter.astro`** — detalhe correto do eyebrow (2 elipses sobrepostas + ícone de funil); usado no Hero, CTA e Modal.
- **`DiagnosticModal.astro`** — modal `<dialog>` nativo (ESC/foco/backdrop blur, animação) aberto por todos os CTAs "Agende um diagnóstico" (`a[href="#diagnostico"]`). Form com 3 selects (cargo, serviço, nº vendedores).
- **Serviços** — 4 cards (Estratégia comercial, Consultoria de Vendas, Terceirização de SDR/BDR, Implementação de CRM); todos brancos por padrão, **hover → azul** (estado ativo).
- **Logos** — marquee automático **infinito** (lista duplicada, loop contínuo) + **arrastar com o mouse** + pausa no hover + `prefers-reduced-motion`.
- **Header** — some ao rolar para baixo, reaparece ao rolar para cima.
- **FAQ** — abertura/fechamento animados (altura via JS) + ícone +/− rotaciona.
- **Newsletter** — caixa azul 100% da altura encostada; cabeça do modelo vaza acima do card.
- **Hero** — vetor decorativo encostado na lateral direita, do topo (header) ao fim.
- **Footer** — logo à esquerda (corrigido esticamento SVG); ano dinâmico via JS.
- **Botões/links** — hover com leve elevação + sombra, active com "press", seta desliza.
- **Metodologia** — detalhe acima do título com 6px (arredondado).

### Ajustes pós-review (rodada 1)
- **`EyebrowBadge.astro`** — componente do detalhe do eyebrow (2 elipses sobrepostas: contorno + preenchida com ícone de funil `Filter.astro`). `tone="brand"` (hero, azul+funil lemon) / `tone="accent"` (CTA, lemon+funil azul).
- **SVGs de logo** — removido `preserveAspectRatio="none"` que esticava (footer logo, logos de clientes).
- **Assets HQ** — imagens substituídas pelas versões enviadas: `woman-hero`→hero (já traz os cards embutidos, `StatCard` removido), `felipe`, `joana-oliveira`, `exclusive-content`, `solvis-logo`, `hero-bg-vector`.
- **Marca** — `logo-salestime.svg` (símbolo) = favicon · `logotipo-salestime.svg` (logotipo) = header/footer/newsletter/schema.

---

## Componentes globais

| Componente | Node Figma | Status |
|---|---|---|
| Header (Menu) | `4171:4419` | [ ] |
| Footer | `4280:1554` | [ ] |
| Button (primary/outline/ghost · sm/md/lg) | — | [ ] |
| Eyebrow / Badge | — | [ ] |
| SectionHeader | — | [ ] |
| Icons (wrapper SVG) | — | [ ] |

---

## Seções da Home (ordem de desenvolvimento)

Uma seção por vez. Só avança quando a anterior estiver pixel-perfect (desktop + mobile).

| # | Seção | Componente | Node desktop | Descrição |
|---|---|---|---|---|
| 1 | ✅ Hero | `HeroSection.astro` | `4048:6898` | "Construa uma operação comercial escalável" + foto + cards flutuantes |
| 2 | ✅ Logos / prova social | `LogosSection.astro` | `4048:7284` | "+200 empresas confiam" + faixa de logos |
| 3 | ✅ Problema / Intro | `MethodologySection.astro` | `4048:7378` | "Sabemos que pode ser difícil identificar os gargalos..." (2 colunas) |
| 4 | ✅ Serviços | `ServicesSection.astro` | `4048:7391` | "Como ajudamos a sua empresa" — carrossel de cards |
| 5 | ✅ Sobre | `AboutSection.astro` | `4048:7466` | "Experiência prática e resultados reais" — Felipe Traína |
| 6 | ✅ Cases | `CasesSection.astro` | `4048:7494` | "Conheça casos reais" + depoimento Solvis |
| 7 | ✅ CTA + Formulário | `CtaFormSection.astro` | `4297:2992` | "Chegou a hora..." + form de diagnóstico (fundo navy) — ⚠️ TODO: definir endpoint real do form |
| 8 | ✅ FAQ | `FaqSection.astro` | `4302:8563` | "Perguntas frequentes" (accordion) |
| 9 | ✅ Newsletter | `NewsletterSection.astro` | `4280:706` | "Conteúdos exclusivos por e-mail" — ⚠️ TODO: endpoint real |

> Nota: `Frame 30` (barra "Em breve...") está **hidden** no Figma → não implementar.
> `Frame 94/96` são o bloco do CTA+formulário (fundo navy) com decoração de onda.

### Checklist por seção (repetir Fase 4 do playbook)
Para cada seção: coleta (`get_design_context` + screenshots desktop/mobile) → implementação → comparação pixel-perfect → fecho (tokens, DRY, build passa).

---

## Log de progresso
- 2026-07-08 — Fase 0 iniciada: seções mapeadas, paleta extraída, screenshot da home baixado (`docs/reference/home-desktop-full.png`).
