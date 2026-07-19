# AFUPM Frontend

Aplicação frontend para a Associação de Futebol da Universidade Portuguesa.

## 🚀 Estrutura do Projeto

```
afupm-frontend/
├── app/                    # App Router do Next.js
├── components/             # Componentes React reutilizáveis
│   ├── layout/            # Componentes de layout
│   └── homepage/          # Componentes específicos da homepage
├── data/                  # Dados mock e configurações
├── lib/                   # Utilities e integrações (ex: Supabase)
├── types/                 # TypeScript type definitions
└── README.md              # Este arquivo
```

## 🛠️ Instalação

```bash
npm install
```

## 🏃 Executar em Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📦 Build para Produção

```bash
npm run build
npm start
```

## 🎨 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend as a Service

## 📝 Componentes Principais

### Layout
- `Header` - Cabeçalho da aplicação
- `Navigation` - Navegação principal
- `Footer` - Rodapé com informações

### Homepage
- `Hero` - Seção hero com call-to-action
- `QuoteSection` - Citações motivacionais
- `NewsSection` - Últimas notícias
- `EventsSection` - Próximos eventos
- `FeaturedSection` - Seção em destaque

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

## 📞 Contato

Para mais informações, entre em contato com a AFUPM.
