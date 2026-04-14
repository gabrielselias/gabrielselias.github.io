# Gabriel Santos Elias — Site Pessoal / Personal Website

Site acadêmico bilíngue (PT/EN) construído com Next.js, Tailwind CSS e exportação estática.

Bilingual academic website (PT/EN) built with Next.js, Tailwind CSS, and static export.

## Primeiros Passos / Getting Started

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura do Projeto / Project Structure

```
src/
  app/              # Páginas (PT na raiz, EN em /en/)
  components/       # Componentes reutilizáveis
  data/             # Dados do site (publicações, textos, ensino, pessoal)
  locales/          # Traduções (pt.json, en.json)
  lib/              # Utilitários de i18n
```

## Como Atualizar o Conteúdo / Updating Content

### Informações Pessoais
Edite `src/data/personal.ts` — bio, links, email, afiliações.

### Publicações Acadêmicas
Edite `src/data/publications.ts` — adicione ou remova entradas no array `publications`.
Cada entrada tem `title`, `year`, `venue`, `abstract`, e `url` com versões PT e EN.

### Textos Públicos (Op-eds, Notas Técnicas)
Edite `src/data/writing.ts` — mesmo padrão das publicações.

### Disciplinas / Cursos
Edite `src/data/teaching.ts` — marque `current: true` para disciplinas atuais.

### Traduções da Interface
Edite `src/locales/pt.json` e `src/locales/en.json`.

## TODOs — Conteúdo Placeholder

Busque por `// TODO:` no código para encontrar todos os placeholders que precisam ser substituídos:

- **Email**: `src/data/personal.ts` — substituir `gabriel@example.com`
- **Links acadêmicos**: `src/data/personal.ts` — URLs do Lattes, Google Scholar, ORCID, ResearchGate, Twitter
- **Publicações**: `src/data/publications.ts` — URLs reais e publicações adicionais
- **Textos**: `src/data/writing.ts` — URLs reais quando publicados
- **Domínio**: `src/app/layout.tsx` — substituir `https://gabrielelias.com` na metadataBase

## Deploy

### Vercel (recomendado)
1. Faça push do repositório para o GitHub
2. Importe o projeto no [Vercel](https://vercel.com)
3. O deploy acontece automaticamente

### Netlify
1. Faça push do repositório para o GitHub
2. Importe no [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `out`

### GitHub Pages
1. Execute `npm run build`
2. O conteúdo estático será gerado em `out/`
3. Configure o GitHub Pages para servir a pasta `out/`

## Tecnologias

- [Next.js 16](https://nextjs.org) com App Router e exportação estática
- [Tailwind CSS 4](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- Google Fonts: Inter (corpo) + Playfair Display (títulos)
- Dark mode automático (prefers-color-scheme)
