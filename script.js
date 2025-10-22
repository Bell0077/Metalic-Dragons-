// Retorne no console todas as imagens do site
const imagem = document.querySelectorAll("img")
console.log(imagem)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const img = document.querySelectorAll('img[src^="criaturas/imagem"]')
console.log (img)

// Selecione todos os links internos (onde o href começa com #)
const linkss = document.querySelectorAll('[href^="#"]')
console.log (linkss)

// Selecione o primeiro h2 dentro de .animais-descricao
const h2a = document.querySelector('.animais-descricao h2')
console.log(h2a)

// Selecione o último p do site

const paragrafos = document.querySelectorAll('p')
console.log (paragrafos[paragrafos.length -1])