import { Pressable, Text } from "react-native";
import { ROXO } from "../estilos";

// Botão arredondado roxo com letras brancas, usado em todas as telas
export default function Botao({
  titulo,
  onPress,
}: {
  titulo: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: ROXO,
        paddingVertical: 16,
        borderRadius: 30,
        alignItems: "center",
        marginTop: 14,
        transform: [{ scale: pressed ? 0.97 : 1 }],
      })}
    >
      <Text style={{ color: "white", fontSize: 17, fontWeight: "800" }}>
        {titulo}
      </Text>
    </Pressable>
  );
}
