# P5.1 Sistema de diseño y componentes React con Tailwind
> Participantes: Marcos Alarcón Alguacil y Aitor González Barrera 
> Curso: S2DAW  
> Módulo: DIW 

## Descripción

-En esta práctica, los alumnos en grupo deberán transformar los wireframes diseñados en una en la práctica 4.1r en un sistema de diseño bien estructurado en Figma. Luego, deberán exportar los estilos a un proyecto en React con TypeScript, utilizando Tailwind CSS para la estilización.

### Definir el Sistema de Diseño en Figma
#### Elección de las fuentes y tipografías
- Hemos elegido la fuente Outfit de Google Fonts, una tipografía sans-serif que destaca por su excelente legibilidad en distintos tamaños. Además, aporta un toque elegante y estético que armoniza perfectamente con el estilo y la paleta de colores de la página.
#### Elección de paleta de colores
- Inicialmente, los tonos de la página iban a ser rosa cerezo, pero finalmente nos decantamos por el rojo rubí, ya que aporta un toque más personal. Combinado con el dorado como color secundario, ambos tonos se integran de manera armoniosa, logrando una estética sofisticada y equilibrada.
#### Definir los componentes básicos
Hemos definido varios componentes en Figma para su implementación y traducción a React con TypeScript, asegurando coherencia y eficiencia en el desarrollo:
  - Navbar
  - Diferentes botones
  - Acordeón
  - Formulario
  - Cards

## Enlace de interes

[Figma] (https://www.figma.com/design/srUQoB3xW4sDIrtRejIMZ1/AIKO'S-ENTERPRISE-Compartido?node-id=0-1&t=cTlVJS7FUt53NKqT-1)
[PáginaDesplegada] ()

# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t my-app .

# For pnpm
docker build -f Dockerfile.pnpm -t my-app .

# For bun
docker build -f Dockerfile.bun -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
