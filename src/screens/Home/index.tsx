import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import shopping from "../../assets/shopping.png";

export function Home() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Lista de Compras</Text>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione um novo produto"
            placeholderTextColor="#808080"
            keyboardType="default"
            //onChangeText={setProductName}
            //value={productName}
          />

          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="add-circle-outline" size={16} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.produtosContainer}>
            <Text style={styles.textProdutos}>Produtos</Text>
            <Text style={styles.counterProdutos}>0</Text>
          </View>

          <View style={styles.finalizadosContainer}>
            <Text style={styles.textFinalizados}>Finalizados</Text>
            <Text style={styles.counterFinalizados}>0</Text>
          </View>
        </View>

        <View style={styles.emptyContainer}>
          <Image source={shopping} style={styles.Image} />
          <Text style={styles.textAviso1}>
            Você ainda não tem produtos na lista de compra
          </Text>

          <Text style={styles.textAviso2}>
            Adicione produtos e organize sua lista de compras
          </Text>
        </View>
      </View>
    </View>
  );
}
