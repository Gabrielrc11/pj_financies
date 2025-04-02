# Finanças Pessoais

Aplicação de gerenciamento de finanças para Pessoas Juridicas desenvolvida.

## Tecnologias Utilizadas

- React
- Vite
- Material-UI
- Docker
- Vercel

## Requisitos

- Node.js
- Docker e Docker Compose (opcional)
- npm

## Desenvolvimento Local

### Usando npm

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

### Usando Docker

```bash
# Iniciar ambiente de desenvolvimento
docker-compose up dev

# Construir e iniciar em modo de produção
docker-compose up app
```

## Build

```bash
# Construir para produção
npm run build

# Visualizar build de produção localmente
npm run preview
```

## Deploy na Vercel

O projeto está configurado para deploy automático na Vercel. Basta conectar seu repositório Git à Vercel e o deploy será realizado automaticamente a cada push.

Para deploy manual:

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel
```

## Docker

O projeto inclui configuração Docker para ambientes de desenvolvimento e produção.

- `docker-compose up dev` - Ambiente de desenvolvimento com hot-reload
- `docker-compose up app` - Versão de produção usando Nginx

## Estrutura do Projeto

```
/
├── public/             # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens e outros recursos
│   ├── components/     # Componentes React
│   ├── App.jsx         # Componente principal
│   └── main.jsx        # Ponto de entrada
├── Dockerfile          # Configuração do Docker
├── docker-compose.yml  # Configuração do Docker Compose
├── vercel.json         # Configuração da Vercel
└── vite.config.js      # Configuração do Vite
```