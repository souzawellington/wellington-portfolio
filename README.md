# Wellington Souza — Portfólio

Site de portfólio one-page, dark theme com acento âmbar, focado em conversão para serviços de desenvolvimento web e IA para dentistas (e profissionais com consultório próprio).

Stack: Vite + React + TypeScript + Tailwind CSS + Lucide Icons.

## Como rodar localmente

```bash
# 1. Instalar dependências
npm install

# 2. Subir o servidor de desenvolvimento
npm run dev
```

Abre em `http://localhost:5173`. O hot-reload tá ativo: salva o arquivo, atualiza automático.

## Antes de subir pra produção — checklist obrigatório

Substitua os 4 placeholders no código:

1. **Número de WhatsApp** — em `src/App.tsx`, busque por `5541999999999` e troque pelo seu número real, no formato `55 + DDD + número` (sem espaços, sem símbolos).

2. **Endpoint do formulário** — em `src/App.tsx`, busque por `SEU_FORMSPREE_ID` e substitua:
   - Crie conta gratuita em [formspree.io](https://formspree.io) (50 envios/mês grátis)
   - Ou em [web3forms.com](https://web3forms.com) (250/mês grátis)
   - Cole o ID/endpoint no lugar do placeholder

3. **Foto pessoal** — em `src/App.tsx`, na seção `Sobre`, substitua o `<div>` placeholder por uma `<img src="/foto.jpg" alt="Wellington Souza" className="aspect-square rounded-2xl object-cover w-[200px]" />`. Coloca a imagem em `public/foto.jpg`.

4. **E-mail** — busque por `contato@wellingtonsouza.com.br` e troque pelo seu e-mail real (ou configure esse com Zoho Mail/Google Workspace).

5. **Links do rodapé** — LinkedIn, GitHub. Troca os `href="#"` pelos URLs reais.

6. **Meta tags do `index.html`** — confira título, descrição, og:image (você precisa criar um arquivo PNG 1200x630px em `public/og-image.png` pra preview no WhatsApp/LinkedIn).

## Deploy no Vercel

```bash
# 1. Cria um repositório no GitHub e faz push
git init
git add .
git commit -m "feat: site de portfólio v1"
git remote add origin https://github.com/SEU_USUARIO/wellington-portfolio.git
git push -u origin main

# 2. No Vercel:
# - Conecta a conta GitHub
# - Importa o repositório
# - Deploy (detecta Vite automaticamente)

# 3. Aponta o domínio wellingtonsouza.com.br pro Vercel
# (Settings → Domains → Add → Configura CNAME no Registro.br)
```

Deploy total: 5 minutos depois do push.

## Estrutura

```
wellington-portfolio/
├── index.html              # Meta tags, fontes, schema.org
├── src/
│   ├── App.tsx             # Página inteira (~600 linhas, comentada)
│   ├── main.tsx            # Entry point
│   └── index.css           # Tailwind + tipografia
├── public/                 # Imagens estáticas (foto, og-image, favicon)
├── package.json
└── README.md
```

## Próximos passos sugeridos

Quando o site estiver no ar:

1. Criar 3 demos fictícias (Clínica Aurora, Dra. Mariana, Centro Odontológico) e linkar como cases reais
2. Substituir os placeholders dos cases (gradientes) por screenshots reais dos projetos
3. Configurar Google Analytics 4 ou Plausible
4. Verificar Google Search Console e enviar o sitemap
5. Criar perfil no LinkedIn alinhado e linkar
6. Materiais de divulgação (post de lançamento, capa de LinkedIn) — esses sim faz sentido gerar com Adobe Express / IA

## Notas de design

- **Cores**: zinc-950 (fundo), amber-400 (acento), zinc-100 (texto), zinc-400 (texto secundário). Trocar paleta inteira é trivial: edita o `tailwind.config.js` ou usa Find & Replace.
- **Tipografia**: Plus Jakarta Sans (sans) + JetBrains Mono (mono). Importadas via Google Fonts no `index.html`. São fontes intencionalmente diferentes do Inter genérico.
- **Responsivo**: mobile-first, breakpoints `md:` (768px) e `sm:` (640px) configurados.
- **Acessibilidade**: contraste AA, labels semânticos, aria-labels nos botões só com ícone.
