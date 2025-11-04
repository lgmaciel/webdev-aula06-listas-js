const fs = require("node:fs")
const usuarios = [
    "ana",
    "beatriz",
    "carolina",
    "daniela",
]
let listagemDeUsuarios = ''

for (i=0; i<usuarios.length; i++) {
    listagemDeUsuarios += `<li> ${usuarios[i]} </li> \n`
}

const meta = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Usuários</title>
    <link rel="stylesheet" href="https://cdn.simplecss.org/simple.css">
</head>
`
const header = `
<header>
    <h2>Lista de Usuários</h2>
</header>
`
const main = `
<main>
    <ul>
        <!--Parte variável/dinâmica
        (gerado no servidor pelo script)
        -->
        ${listagemDeUsuarios}
        <!--Fim da parte dinâmica-->
    </ul>
</main>
`
const footer = `
<footer>lista de usuários 2025</footer>
`
const html = meta + header + main + footer
fs.writeFileSync("usuarios.html", html)