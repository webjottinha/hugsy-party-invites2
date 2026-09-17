# Beary Sweet Invitation

Crie um site de convite digital infantil, interativo, responsivo e visualmente sofisticado para uma festa de 5 anos.

EVENTO

Aniversariante: [NOME]

Idade: 5 anos

Data: 12 de outubro de 2026

Horário: [HORÁRIO]

Local: condominio village do oesteTema: Ursinhos Carinhosos

Festa: piscina

O site deve funcionar como uma pequena experiência digital, e não como uma simples imagem.

IDENTIDADE VISUAL

Criar uma estética infantil inspirada no universo dos Ursinhos Carinhosos, combinada com uma festa de piscina.

A identidade deve transmitir:

fofura;

infância;

alegria;

magia;

verão;

piscina;

diversão;

cores vibrantes e harmoniosas.

Usar uma paleta com tons de azul-céu, azul-piscina, rosa, amarelo, lilás, verde e branco.

Evitar aparência genérica, corporativa ou adulta.

O resultado deve parecer um convite infantil profissional produzido por um designer.

IMPORTANTE: não utilizar personagens protegidos de forma que pareça uma cópia exata de uma arte oficial. Criar elementos visuais originais inspirados no conceito de ursinhos fofos, céu, arco-íris, estrelas, nuvens, corações e piscina.

PRIMEIRA ETAPA — CONVITE

Criar uma seção principal de impacto.

Informações:

[NOME]
5 anos

"Prepare o sorriso, coloque a roupa de banho e venha viver uma aventura cheia de carinho e diversão!"

12 de outubro de 2026

[HORÁRIO]

[LOCAL]

Tema: Ursinhos Carinhosos + Festa na Piscina

Criar elementos visuais como:

piscina;

água;

boias;

bolhas;

estrelas;

nuvens;

arco-íris;

corações;

ursinhos ilustrados de forma original;

elementos de verão.

Adicionar pequenas animações suaves:

bolhas subindo;

elementos flutuando;

água se movimentando;

ursinhos fazendo pequenos movimentos;

entrada dos elementos com fade e movimento.

Não exagerar nas animações.

BOTÃO PRINCIPAL

Criar um botão grande e destacado:

"💗 Confirmar presença"

Ao clicar, fazer uma transição suave para a segunda etapa.

SEGUNDA ETAPA — CONFIRMAÇÃO

Mostrar um formulário dentro do próprio convite, sem abrir uma nova página.

Título:

"Confirme sua presença!"

Texto:

"É rapidinho! Preencha os dados para reservar sua vaga nessa aventura."

Campos:

Nome do responsável

Nome da(s) criança(s)

Acompanhante(s)

Todos os campos devem possuir aparência infantil, porém profissional e fácil de preencher por adultos.

O botão deve ser:

"✨ Enviar confirmação"

INTEGRAÇÃO COM GOOGLE FORMS

O formulário deve enviar os dados para este Google Forms:

https://docs.google.com/forms/d/e/1FAIpQLSfJQlfIG_OTedaU9wxzKl3guMbfrfmftbaHxr4Bz1WrxxIrXQ/viewform

Utilizar os seguintes campos:

Nome do responsável:
entry.1192086938

Nome da(s) criança(s):
entry.262603686

Acompanhante(s):
entry.702210003

Enviar os dados utilizando o endpoint:

https://docs.google.com/forms/d/e/1FAIpQLSfJQlfIG_OTedaU9wxzKl3guMbfrfmftbaHxr4Bz1WrxxIrXQ/formResponse

O envio deve ocorrer sem abrir o Google Forms para o usuário.

APÓS O ENVIO

Depois do envio, esconder o formulário e mostrar uma tela de confirmação bonita e animada.

Mostrar:

🎉

"Presença confirmada!"

"Estamos muito felizes em ter você nessa aventura!"

Adicionar uma pequena animação de comemoração, como confetes ou bolhas.

RESPONSIVIDADE

O site deve funcionar perfeitamente em:

celular;

tablet;

computador.

Priorizar a experiência mobile, pois o convite provavelmente será compartilhado pelo WhatsApp.

Os botões devem ser grandes o suficiente para serem facilmente tocados no celular.

ESTRUTURA

Criar:

Hero/convite principal

Informações da festa

Botão Confirmar presença

Formulário de confirmação

Tela de confirmação

Criar navegação simples e intuitiva.

CAMPOS EDITÁVEIS

Centralizar as informações do evento em uma configuração fácil de editar, por exemplo:

const eventData = {
name: "[NOME]",
age: 5,
date: "12 de outubro de 2026",
time: "[HORÁRIO]",
location: "[LOCAL]"
};

Alterar esses valores deve atualizar automaticamente o convite.

TECNOLOGIA

Pode utilizar React + Vite + CSS moderno.

Organizar o código de maneira profissional e limpa.

Separar componentes quando fizer sentido.

Não criar código desnecessariamente complexo.

O resultado final deve ser um site pronto para publicação.

EXPERIÊNCIA

A sensação deve ser de abrir um convite mágico de aniversário infantil.

Primeiro a pessoa vê o convite e sente vontade de participar.

Depois clica em "Confirmar presença".

Preenche os três campos.

Clica em "Enviar confirmação".

E recebe uma mensagem de comemoração.

Priorize beleza visual, experiência do usuário, responsividade, animações suaves e facilidade de edição.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://hugsy-party-invites.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ec45e38a-ce67-4c42-ab1c-3b5efe076fba).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
