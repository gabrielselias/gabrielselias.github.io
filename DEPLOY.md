# Guia de Deploy — GitHub Pages

## 1. Crie o repositório no GitHub

Duas opções principais:

**Opção A — Site "de usuário" (URL mais curta)**
- Nome do repositório: `<seu-usuario>.github.io` (ex: `gabrielelias.github.io`)
- URL final: `https://<seu-usuario>.github.io`
- Vantagem: sem subpasta no URL
- **Nada a mudar no código** — `basePath` fica vazio automaticamente.

**Opção B — Repositório de projeto**
- Nome qualquer (ex: `site-pessoal`)
- URL final: `https://<seu-usuario>.github.io/site-pessoal/`
- O workflow do GitHub Actions já detecta isso e aplica o `basePath`
  automaticamente via `actions/configure-pages`.

## 2. Faça push do código

Na sua máquina, dentro da pasta do projeto:

```bash
git add .
git commit -m "configuração de deploy e links de publicações"
git branch -M main
git remote add origin https://github.com/<seu-usuario>/<nome-do-repo>.git
git push -u origin main
```

## 3. Ative GitHub Pages com GitHub Actions

No GitHub, vá em:
**Settings → Pages → Build and deployment → Source: GitHub Actions**

(Não escolha "Deploy from a branch" — o workflow já cuida de tudo.)

## 4. Aguarde o primeiro deploy

Vá em **Actions** no seu repositório. O workflow `Deploy to GitHub Pages`
vai rodar automaticamente a cada push para `main`. Leva 1–3 minutos.

Quando terminar, a URL aparece na página de Actions e em **Settings → Pages**.

## 5. (Opcional) Domínio próprio

Se tiver um domínio (ex: `gabrielelias.com.br`):

1. Em **Settings → Pages → Custom domain**, coloque seu domínio e salve.
2. No provedor do domínio, crie registros DNS apontando para o GitHub:
   - Tipo `CNAME`: `www` → `<seu-usuario>.github.io`
   - Ou quatro registros `A` apontando para: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Marque "Enforce HTTPS" quando liberar.

## Atualizações futuras

Qualquer commit no `main` redisponibiliza o site automaticamente.
Para adicionar publicações, edite `src/data/publications.ts` e faça push.

## Substituindo a foto

O arquivo `public/profile.jpg` hoje é um placeholder. Substitua por sua
foto real (mantendo o nome e formato). Recomendo quadrada, ≥600×600 px.
