import { router } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import Botao from "../components/Botao";
import { estilos } from "../estilos";

// Primeira tela: pede o nickname e manda o jogador para a tela do jogo
export default function Nome() {
  const [nick, setNick] = useState("");

  function comecar() {
    if (nick.trim() === "") {
      Alert.alert("Digite o seu nickname para começar");
      return;
    }
    router.push({ pathname: "/jogo", params: { nick: nick.trim() } });
  }

  return (
    <View style={estilos.tela}>
      <Text style={estilos.titulo}>Qual é o seu nickname? 👋</Text>
      <TextInput
        style={estilos.campo}
        value={nick}
        onChangeText={setNick}
        placeholder="Seu nickname"
        maxLength={20}
        autoCapitalize="none"
        onSubmitEditing={comecar}
      />
      <Botao titulo="Começar" onPress={comecar} />
      <Botao titulo="Ver ranking" onPress={() => router.push("/ranking")} />
    </View>
  );
}
