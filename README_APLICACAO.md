# Atualização ShaderGradient + Stack

## Arquivos novos

- `components/ShaderBackground.tsx`
- `components/ShaderBackgroundCanvas.tsx`

## Arquivos substituídos

- `app/globals.css`
- `app/layout.tsx`
- `app/page.tsx`
- `components/SpotlightCard.tsx`
- `components/TechStack.tsx`
- `components/icons/PythonAnimatedIcon.tsx`
- `components/icons/techIcons.tsx`
- `data/portfolio.ts`
- `package.json`

## Instalação

Copie os arquivos preservando as pastas e execute:

```bash
npm install
npm run build
npm run dev
```

O `npm install` atualiza o `package-lock.json` automaticamente.

## Otimizações aplicadas ao shader

- WebGL desabilitado em telas menores que 768 px, usando o gradiente CSS de fallback.
- WebGL desabilitado para `prefers-reduced-motion`.
- Animação pausada quando a aba fica em segundo plano.
- `pixelDensity` reduzido para `0.8`.
- Antialiasing desativado.
- GPU configurada com `powerPreference: low-power`.
- Velocidade reduzida de `0.4` para `0.28` para manter movimento leve.

## Stack

A seção foi separada em:

- Linguagens: Python e JavaScript como uso atual; C, C++, C# e Java como conhecimento prévio.
- Tecnologias e ferramentas: React, Vite, Tailwind, Framer Motion, Node.js, Django, FastAPI, Flask, PostgreSQL, SQL, Pandas, NumPy, Pytest, Git e GitHub.
