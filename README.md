# Chalé Gabi - versão clássica

Este pacote é uma conversão do projeto gerado no Lovable para uma estrutura clássica, sem React, TypeScript, Vite ou Tailwind.

## Estrutura

```text
index.html          Página principal
styles.css          Estilos CSS puros
script.js           JavaScript puro para menu, dados, mapa e lightbox
assets/             Imagens do site
java/               Servidor Java simples opcional
```

## Como abrir sem Java

Basta abrir o arquivo `index.html` no navegador.

## Como rodar com Java

A partir da pasta do projeto, execute:

```bash
javac java/ChaleGabiServer.java
java -cp java ChaleGabiServer
```

Depois acesse:

```text
http://localhost:8080
```

## Onde editar os dados principais

No arquivo `script.js`, edite o bloco `SITE`:

```js
const SITE = {
  airbnbUrl: "...",
  coordinates: {
    lat: -22.66530961966471,
    lng: -45.66862383295059
  },
  property: {
    guests: "X hóspedes",
    bedrooms: "X quartos",
    beds: "X camas",
    bathrooms: "X banheiros",
    price: "A partir de R$ XXX por noite"
  }
};
```

## Onde trocar imagens

Substitua os arquivos dentro da pasta `assets/`, mantendo os mesmos nomes, ou altere os caminhos no `index.html` e no array `galleryItems` dentro de `script.js`.

## Observação

As comodidades com “a confirmar” foram mantidas como placeholders, para evitar afirmar informações ainda não validadas.
