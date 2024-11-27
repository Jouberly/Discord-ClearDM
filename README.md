# Self BOT para Discord - Clear DM

## ⚠️ Aviso Importante
Este projeto é um **self-bot**, o que significa que utiliza a conta de um usuário para executar ações automatizadas no Discord. **O uso de self-bots é contra os Termos de Serviço do Discord** e pode resultar no banimento da conta associada. Use este código por sua conta e risco.

## 📜 Sobre o Projeto
O **Self BOT - ClearDM** é um script programado em **node.js** usando a biblioteca [discord.js-selfbot-v13](https://github.com/aiko-chan-ai/discord.js-selfbot-v13). Ele permite que o usuário limpe mensagens específicas enviadas em DMs, uma solução automatizada para gerenciar seu histórico de conversas.

## 🚀 Funcionalidades
- Detecta um comando específico ".clear" que foi definido no arquivo `config.json` para iniciar a limpeza.
- Ao enviar .clear em uma DM no Discord, todas as suas mensagens enviadas serão apagadas automaticamente.
- Ao executar este comando, fica tudo registrado no terminal do Visual Studio Code ou do IDE que você esteja usando.
- Prazo médio para conclusão: Poucas mensagens (1 minuto), Muitas mensagens (3 a 5 minutos)

## 🛠️ Configuração
1. Clone o repositório:
   ```bash
   git clone https://github.com/Jouberly/Discord-ClearDM.git

2. Instale as dependências:
   ```bash
   npm install
  
3. Configure o arquivo config.json:
   ```json
   {
    "token": "SEU_TOKEN_AQUI",
    "trigger": ".clear"
   }

 - token: Seu token pessoal da conta Discord.
 - trigger: Comando para iniciar a limpeza das mensagens.

4. Execute o script:
   ```bash
   node index.js

📋 Exemplo de Uso
1. Envie uma mensagem contendo o comando especificado no trigger em uma DM.
2. O script irá automaticamente buscar e deletar mensagens enviadas pela conta no canal alvo.

⚠️ Responsabilidade
- Este projeto foi criado para fins educacionais e para demonstração de habilidades de programação. **Eu não incentivo o uso deste código em ambientes que violem políticas de qualquer serviço, incluindo o Discord.** Use de maneira ética e responsável.


   - Caso precise de ajuda, pode me contatar via [Discord](https://discord.com/users/1291470900557910102).




