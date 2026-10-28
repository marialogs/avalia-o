import { useEffect, useState } from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { observarRanking, type Resultado } from "../services/ranking";
import { estilos } from "../estilos";

export default function Ranking() {
  const [lista, setLista] = useState<Resultado[]>([]);

  useEffect(() => {
    return observarRanking(setLista, (erro) =>
      Alert.alert("Erro ao carregar o ranking", erro.message)
    );
  }, []);

  return (
    <View style={estilos.tela}>
      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={estilos.texto}>Ninguém jogou ainda.</Text>}
        renderItem={({ item, index }) => (
          <View style={estilos.linha}>
            <Text style={estilos.nome}>
              {index + 1}º {item.nickname}
            </Text>
            <Text style={{ color: item.venceu ? "#2E7D32" : "#C62828", fontWeight: "600" }}>{item.venceu ? `${item.tentativas} tentativa(s)` : "não acertou"}</Text>
          </View>
        )}
      />
    </View>
  );
}
