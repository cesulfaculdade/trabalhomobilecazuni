import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#7A4A9E",
    width: "100%",
    height: 173,
    justifyContent: "center",
  },

  title: {
    fontSize: 18,
    color: "#F2F2F2",
    textAlign: "center",
    fontWeight: "bold",
  },

  mainContainer: {
    padding: 24,
    position: "relative",
  },

  inputContainer: {
    flexDirection: "row",
  },

  input: {
    flex: 1,
    backgroundColor: "#FFF",
    width: 289,
    height: 54,
    padding: 16,
    alignItems: "center",
    borderColor: "#808080",
    borderRadius: 6,
    marginRight: 4,
    borderWidth: 0.5,
    top: -50,
  },

  inpuText: {
    color: "#808080",
    fontSize: 16,
  },

  textButtom: {
    color: "#F2F2F2",
  },

  button: {
    backgroundColor: "#31C667",
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    borderRadius: 6,
    width: 52,
    height: 52,
    top: -50,
  },

  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  produtosContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  textProdutos: {
    fontSize: 14,
    color: "#31C667",
    fontWeight: "bold",
    marginRight: 8,
  },

  counterProdutos: {
    backgroundColor: "#D9D9D9",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  finalizadosContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  textFinalizados: {
    fontSize: 14,
    color: "#7A4A9E",
    fontWeight: "bold",
    marginRight: 8,
  },

  counterFinalizados: {
    backgroundColor: "#D9D9D9",
    borderRadius: 999,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },

  emptyContainer: {
    flexDirection: "column",
    paddingHorizontal: 48,
    paddingVertical: 20,
    borderTopColor: "#D9D9D9",
  },

  textAviso1: {
    fontSize: 14,
    color: "#808080",
    fontWeight: "bold",
    width: 345,
    justifyContent: "center",
    alignItems: "center",
  },

  textAviso2: {
    fontSize: 14,
    color: "#808080",
    width: 345,
    justifyContent: "center",
    alignItems: "center",
  },

  Image: {
    width: 56,
    right: 56,
    justifyContent: "center",
  },
});
