import { Stack } from "expo-router";
import { FUNDO, ROXO } from "../estilos";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: ROXO },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "800" },
        contentStyle: { backgroundColor: FUNDO },
      }}
    >
      <Stack.Screen name="index" options={{ title: "🎯 Adivinhe o Número" }} />
      <Stack.Screen name="jogo" options={{ title: "🎲 Jogo" }} />
      <Stack.Screen name="ranking" options={{ title: "🏆 Ranking" }} />
    </Stack>
  );
}
