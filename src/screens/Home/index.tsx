import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import shopping from "../../assets/shopping.png";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Lista de Compras</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione um novo produto"
            placeholderTextColor={"#808080"}
          />
          <TouchableOpacity style={styles.button}>
            <MaterialIcons name="add-circle-outline" size={16} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.statusContainer}>
          <View style={styles.productWrapper}>
            <Text style={styles.productCounterText}>Produtos</Text>
            <Text style={styles.productCounterNumber}>0</Text>
          </View>
          <View style={styles.finishedWrapper}>
            <Text style={styles.finishedCounterText}>Finalizados</Text>
            <Text style={styles.finishedCounterNumber}>0</Text>
          </View>
        </View>
        <View style={styles.emptyListContainer}>
          <Image source={shopping} />
          <Text style={styles.boldText}>
            Você ainda não tem produtos na lista de compras
          </Text>
          <Text style={styles.normalText}>
            Adicione produtos e organize sua lista de compras
          </Text>
        </View>
      </View>
    </View>
  );
};
