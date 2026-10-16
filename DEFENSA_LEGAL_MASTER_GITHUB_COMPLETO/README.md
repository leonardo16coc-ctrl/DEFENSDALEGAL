# Defensa Legal Master — Sitio web oficial

Sitio web estático, responsive y preparado para publicar en **GitHub Pages**. No requiere npm, React, base de datos ni claves API. Basado en el diseño actualizado de Defensa Legal Master.

## Vista del proyecto

```text
Defensa-Legal-Master-GitHub/
├── index.html                 Página principal y estructura del sitio
├── css/
│   ├── styles.css             Diseño general responsive
│   └── brand.css              Identidad visual de Defensa Legal Master
├── js/
│   └── main.js                Menú, formulario de WhatsApp y avisos
├── assets/
│   ├── logo.webp              Logo del despacho
│   ├── equipo.webp            Imagen de la sección Nosotros
│   └── favicon.png            Icono del navegador
├── .github/workflows/
│   └── deploy.yml             Publicación automática en GitHub Pages
├── .nojekyll                  Evita procesamiento Jekyll
├── .gitignore
└── README.md
```

## Contacto configurado

- Despacho: **Defensa Legal Master**
- WhatsApp y teléfono: **+52 33 2326 9386**
- WhatsApp directo: https://wa.me/523323269386
- Dirección: **C. 14 2481, interior 1, Colón Industrial, 44940 Guadalajara, Jal., México**
- Cobertura indicada: Guadalajara, Zapopan, Tlaquepaque y Tonalá.

El formulario no almacena datos en un servidor: valida los campos y prepara un mensaje en **WhatsApp** para que el visitante decida enviarlo.

## Abrir el sitio en tu computadora

Abre `index.html` en Chrome, Safari o Firefox. Para un servidor local (opcional):

```bash
python3 -m http.server 8000
```

Y visita `http://localhost:8000`.

## Subir a GitHub

1. Entra a https://github.com/new e inicia sesión.
2. Ponle nombre al repositorio, por ejemplo `defensa-legal-master` y créalo.
3. Descomprime el ZIP de este proyecto. En GitHub selecciona **Add file → Upload files**.
4. Arrastra **el contenido de la carpeta**, incluyendo `index.html`, `assets`, `css`, `js`, y `.github` (los archivos ocultos pueden requerir usarse desde Terminal). Confirma con **Commit changes**.
5. En **Settings → Pages → Build and deployment**, selecciona **GitHub Actions** como fuente.
6. Abre **Actions** y verifica el workflow **Deploy GitHub Pages**. Al completarse, el sitio se publica generalmente en `https://TU-USUARIO.github.io/defensa-legal-master/`.

**Alternativa recomendada para incluir los archivos ocultos y el workflow:** utilizar `git`:

```bash
cd Defensa-Legal-Master-GitHub
git init
git add .
git commit -m "Sitio Defensa Legal Master listo para GitHub Pages"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/defensa-legal-master.git
git push -u origin main
```

> Cambia `TU-USUARIO` por tu usuario de GitHub. El repositorio y la URL no existen hasta que los crees.

## Personalizar

- **Texto y secciones:** modifica `index.html`.
- **Estilos:** cambia `css/styles.css` y `css/brand.css`.
- **Logo y fotografía:** reemplaza los archivos de `assets/` conservando sus nombres.
- **Número de WhatsApp:** busca `523323269386` y actualiza los enlaces en `index.html` y el mensaje del formulario en `js/main.js`.
- **Dirección:** cambia la dirección en `index.html`, `js/main.js` (texto de privacidad provisional) y los datos `application/ld+json`.
- **Foto del hero:** la página carga una imagen desde Unsplash por internet (`images.unsplash.com`), configurada en `css/brand.css`. Puedes sustituir la URL por tu propia fotografía local para tener un proyecto 100 % offline.
- **Tipografías:** usa Google Fonts y necesita conexión para esas fuentes, con fuentes de respaldo si no hay internet.

## Antes de publicar

- Verifica con el despacho la dirección, teléfono, cobertura y materiales gráficos.
- Revisa y completa el **Aviso de privacidad** y los **Términos y condiciones**: son textos provisionales de ejemplo y no están validados jurídicamente.
- Comprueba en dispositivo real WhatsApp, llamada, menú, mapa y formulario.

Este paquete contiene el código fuente del sitio. No se ha creado ningún repositorio en tu cuenta ni se ha publicado un dominio desde esta entrega.
