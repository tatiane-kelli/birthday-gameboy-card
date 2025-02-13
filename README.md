# Gameboy Birthday Card 🎂🎮
![image](https://github.com/user-attachments/assets/eb9822d3-dc16-47d3-97c3-e53c14853517)

### Projeto desenvolvido em vanilla JS, HTML e CSS como um cartão virtual de aniversário para meu amado.
<p>🚀 Projeto em produção: https://gameboybdaycard.vercel.app/ </p>
<p>A proposta é um cartão virtual que simule um jogo de plataforma estilo gameboy, com movimentação de personagem linear e predominância dos traços em pixel art. O usuário deve movimentar o personagem para que ele colete os ícones de coisas que lembram aniversário (um bolo, presente, um cone de confetti e um balão) e, ao final, após coletar todos os itens o "jogo" é encerrado com uma mensagem de Level Up com a nova idade do usuário sendo o nível para o qual upou, e as felicitações em forma de pontos de experiência.</p>

### Sobre o projeto
O cartão de aniversário virtual utiliza vanilla JavaScript para gerenciar a simulação de um minigame no estilo retrô gameboy, definindo as variáveis que serão responsáveis por definir a aparência e disposição dos itens a serem colecionados na tela bem como desenha o player na tela e o movimenta. Temos um ```eventListener``` que permite que o player seja controlado pelas setas esquerda e direita do teclado do usuário; um ```forEach``` que gerencia a visibilidade dos ícones coletáveis na tela e identifica as colisões do player com os ícones e, por fim, exibe o overlay com a mensagem final de level up. O CSS aplica os estilos da tela, gerencia o posicionamento e define o background, e tanto ele quanto o JS são chamados no HTML que estrutura a página. Altamente customizável, com o código pode editar a idade (level), variar a soundtrack para sons de sua preferência e até mesmo mudar totalmente a temática do evento.
