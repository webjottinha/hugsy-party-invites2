# Convite mágico de 5 anos

## Visão geral
Criar uma experiência de convite infantil de Aurora em uma única página, priorizando celular, com as ilustrações de ursinhos enviadas e uma festa na piscina. A pessoa verá Aurora e os detalhes do evento, abrirá a confirmação na própria página, enviará os dados ao Google Forms sem sair do convite e receberá uma comemoração animada.

## O que será construído
- Convite principal com o nome Aurora, idade, data, horário, local e tema centralizados em uma configuração fácil de editar; data e horário aparecerão como “a definir”.
- Uso das ilustrações de ursinhos enviadas pelo usuário, combinadas com elementos autorais de arco-íris, nuvens, corações, boias e piscina.
- Foto de Aurora integrada ao convite como destaque pessoal, com enquadramento delicado e sem alterar sua aparência.
- Informações da festa organizadas para leitura rápida e botão destacado de confirmação.
- Transição suave para um formulário com responsável, crianças e acompanhantes.
- Envio silencioso ao endpoint informado do Google Forms, usando os três identificadores de campo fornecidos.
- Estado de envio, tratamento de falha e mensagem de sucesso com confetes e bolhas.
- Layout adaptado para celular, tablet e computador, com áreas de toque confortáveis e movimento reduzido quando solicitado pelo aparelho.

## Direção visual
- Céu claro e água azul-piscina como base, com rosa, amarelo, lilás e verde em detalhes equilibrados.
- Tipografia arredondada e expressiva nos títulos, acompanhada por texto muito legível para adultos.
- Composição vertical imersiva, com Aurora, a piscina e os ursinhos como primeiro impacto e os dados da festa integrados à cena.
- Animações pequenas e controladas: flutuação, bolhas, ondulação da água e entradas suaves.

## Detalhes técnicos
- Manter a aplicação em React com a estrutura atual do projeto.
- Criar componentes focados para convite, dados da festa, formulário e confirmação.
- Usar tokens semânticos no sistema visual global e evitar cores soltas nos componentes.
- Validar os campos antes do envio e enviar os valores codificados ao `formResponse` do Google Forms.
- Usar um envio compatível com as restrições do Google Forms, sem redirecionar nem abrir outra página.
- Adicionar metadados próprios da página para compartilhamento e publicação.

## Validação
- Confirmar compilação sem erros.
- Testar o fluxo completo no navegador, incluindo transição, validação, envio e tela final.
- Conferir visualmente em tamanhos de celular e computador, garantindo que textos e controles não se sobreponham.
