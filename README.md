# Adivinhe o Número

Jogo de adivinhação feito com Expo, React Native e Firebase (Realtime Database).

O jogador digita o nickname na primeira tela e vai para a tela do jogo. O app sorteia um número e o jogador tem até 15 tentativas para descobrir qual é. Os palpites aceitos vão de 0 a 100.

Depois de cada palpite aparece uma dica. Verde quer dizer que o número é maior que o palpite, vermelho que é menor. Quando o jogador acerta, a tela mostra em quantas tentativas ele conseguiu. Se as 15 acabarem, a tela mostra qual era o número.

Toda partida terminada, ganha ou perdida, é salva no Firebase. A tela de ranking lista primeiro quem acertou, do menor para o maior número de tentativas, e depois quem não acertou.

## Arquivos

- `src/app/index.tsx`: tela do nickname
- `src/app/jogo.tsx`: tela do jogo
- `src/app/ranking.tsx`: tela do ranking
- `src/app/_layout.tsx`: navegação entre as telas
- `src/components/Botao.tsx`: botão azul com letras pretas
- `src/estilos.ts`: estilos compartilhados (fundo cinza etc.)
- `src/services/ranking.ts`: salva e lê os resultados no Firebase
- `firebaseConfig.js`: configuração do Firebase

## Rodando

```bash
npm install
npx expo start
```

## Firebase

Os resultados ficam em `ranking/` no Realtime Database, assim:

```json
{ "nickname": "Lucius", "tentativas": 7, "venceu": true, "data": 1761600000000 }
```

As regras do banco precisam liberar leitura e escrita em `ranking`:

```json
{
  "rules": {
    "ranking": { ".read": true, ".write": true }
  }
}
```
