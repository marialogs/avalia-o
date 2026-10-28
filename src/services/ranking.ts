import { onValue, push, ref, set } from "firebase/database";
import { rtdb } from "../../firebaseConfig";

export type Resultado = {
  id: string;
  nickname: string;
  tentativas: number;
  venceu: boolean;
  data: number;
};

// Grava uma partida terminada em "ranking" no Realtime Database
export function salvarResultado(nickname: string, tentativas: number, venceu: boolean) {
  return set(push(ref(rtdb, "ranking")), { nickname, tentativas, venceu, data: Date.now() });
}

// Escuta o ranking e avisa sempre que mudar.
// Quem acertou vem primeiro, com menos tentativas na frente. Empate: quem jogou antes.
export function observarRanking(
  aoReceber: (lista: Resultado[]) => void,
  aoFalhar: (erro: Error) => void
) {
  return onValue(
    ref(rtdb, "ranking"),
    (snapshot) => {
      const dados = snapshot.val() ?? {};
      const lista: Resultado[] = Object.keys(dados).map((id) => ({ id, ...dados[id] }));
      lista.sort(
        (a, b) =>
          Number(b.venceu) - Number(a.venceu) || a.tentativas - b.tentativas || a.data - b.data
      );
      aoReceber(lista);
    },
    aoFalhar
  );
}
