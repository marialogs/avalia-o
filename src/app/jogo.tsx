import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { salvarResultado } from "../services/ranking";
import Botao from "../components/Botao";
import { estilos } from "../estilos";

const MAX_TENTATIVAS = 15;
const INICIO = "Qual é o número, de 0 a 100?";
const COR_INICIAL = "#3B2796";

function sortear() {
  return Math.floor(Math.random() * 100) + 1;
}

// Segunda tela: o jogo em si
export default function Jogo() {
  const { nick } = useLocalSearchParams<{ nick: string }>();
  const [numeroSorteado, setNumeroSorteado] = useState(sortear);
  const [palpite, setPalpite] = useState("");
  const [tentativas, setTentativas] = useState(0);
  const [dica, setDica] = useState(INICIO);
  const [cor, setCor] = useState(COR_INICIAL);
  const [fim, setFim] = useState<"" | "ganhou" | "perdeu">("");

  function terminar(resultado: "ganhou" | "perdeu", total: number) {
    setFim(resultado);
    salvarResultado(nick, total, resultado === "ganhou").catch(() =>
      Alert.alert("Não foi possível salvar o resultado")
    );
  }

  function chutar() {
    const n = Number(palpite);
    if (palpite.trim() === "" || !Number.isInteger(n) || n < 0 || n > 100) {
      Alert.alert("Digite um número inteiro de 0 a 100");
      return;
    }
    const total = tentativas + 1;
    setTentativas(total);
    setPalpite("");

    if (n === numeroSorteado) {
      terminar("ganhou", total);
    } else if (total === MAX_TENTATIVAS) {
      terminar("perdeu", total);
    } else if (numeroSorteado > n) {
      setDica(`O número é MAIOR que ${n}`);
      setCor("#2E7D32");
    } else {
      setDica(`O número é MENOR que ${n}`);
      setCor("#C62828");
    }
  }

  function jogarDeNovo() {
    setNumeroSorteado(sortear());
    setPalpite("");
    setTentativas(0);
    setDica(INICIO);
    setCor(COR_INICIAL);
    setFim("");
  }

  return (
    <View style={estilos.tela}>
      <Text style={estilos.texto}>Jogador: {nick}</Text>
      <Text style={estilos.texto}>
        Tentativas: {tentativas} de {MAX_TENTATIVAS}
      </Text>

      {fim === "" ? (
        <>
          <Text style={[estilos.dica, { color: cor }]}>{dica}</Text>
          <TextInput
            style={estilos.campo}
            value={palpite}
            onChangeText={setPalpite}
            keyboardType="number-pad"
            placeholder="Seu palpite"
            maxLength={3}
            onSubmitEditing={chutar}
          />
          <Botao titulo="Chutar" onPress={chutar} />
        </>
      ) : (
        <>
          <Text style={[estilos.dica, { color: COR_INICIAL }]}>
            {fim === "ganhou"
              ? `Você acertou em ${tentativas} tentativa(s)!`
              : `Acabaram as tentativas. O número era ${numeroSorteado}.`}
          </Text>
          <Botao titulo="Jogar de novo" onPress={jogarDeNovo} />
          <Botao titulo="Ver ranking" onPress={() => router.push("/ranking")} />
        </>
      )}
    </View>
  );
}
