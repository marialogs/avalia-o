import { StyleSheet } from "react-native";

export const FUNDO = "#FFF6E5";
export const ROXO = "#5B3FD1";
export const ROXO_ESCURO = "#3B2796";

export const estilos = StyleSheet.create({
  tela: { flex: 1, backgroundColor: FUNDO, padding: 28, paddingTop: 48 },
  titulo: {
    fontSize: 30,
    fontWeight: "800",
    textAlign: "left",
    color: ROXO_ESCURO,
    marginBottom: 24,
  },
  texto: { fontSize: 17, textAlign: "left", color: "#4A4A4A", marginBottom: 6 },
  dica: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    marginVertical: 24,
    paddingVertical: 18,
    paddingHorizontal: 12,
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
  },
  campo: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: ROXO,
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 18,
    marginBottom: 8,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 16,
    borderLeftWidth: 6,
    borderLeftColor: ROXO,
    marginBottom: 12,
  },
  nome: { fontSize: 18, fontWeight: "700", color: ROXO_ESCURO },
});
