import React, { useState } from "react";
import {View,Text,Image, StyleSheet,ScrollView,TouchableOpacity,Switch,TextInput,Alert,Platform} from "react-native";
import { Picker } from '@react-native-picker/picker';
import { Slider } from '@react-native-community/slider';

import img1 from "./assets/celticsxwarriors.png";
import img2 from "./assets/arsenalxchelsea.png";
import img3 from "./assets/flamengoxvasco.png";
import img4 from "./assets/liverpoolxcity.png";
import img5 from "./assets/realxbarca.png";

const Card = ({ title, description, image }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [palpite, setPalpite] = useState("");

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  const handlePalpiteSubmit = () => {
    const message = `Seu palpite para ${title}: ${palpite}`;
    if (Platform.OS === 'android') {
      Alert.alert("Palpite enviado", message);
    } else {
      Alert.alert("Palpite enviado", message);
    }
    setPalpite("");
  };

  return (
    <View style={styles.imageCard}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <TouchableOpacity onPress={() => setShowDescription(!showDescription)}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
        {showDescription && (
          <>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Digite seu palpite"
                placeholderTextColor="#aaa"
                value={palpite}
                onChangeText={setPalpite}
              />
              <TouchableOpacity style={styles.button} onPress={handlePalpiteSubmit}>
                <Text style={styles.buttonText}>Palpite</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.switchContainer}>
              <Text style={styles.switchLabel}>Receber notificações</Text>
              <Switch
                value={isEnabled}
                onValueChange={toggleSwitch}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const App = () => {
  const [selectedSport, setSelectedSport] = useState("futebol");
  const [confidence, setConfidence] = useState(50);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Descrição</Text>

      <View style={styles.selectorContainer}>
        <Text style={styles.selectorLabel}>Escolha seu esporte preferido:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedSport}
            onValueChange={(itemValue) => setSelectedSport(itemValue)}
            dropdownIconColor="#fff"
            style={styles.picker}
          >
            <Picker.Item label="Futebol" value="futebol" />
            <Picker.Item label="Basquete" value="basquete" />
            <Picker.Item label="Tênis" value="tenis" />
            <Picker.Item label="Vôlei" value="volei" />
          </Picker>
        </View>
        <Text style={styles.selectorLabel}>Confiança no palpite: {confidence}%</Text>
        <Slider
          style={{ width: 300, height: 40 }}
          minimumValue={0}
          maximumValue={100}
          step={1}
          minimumTrackTintColor="#1EB1FC"
          maximumTrackTintColor="#444"
          thumbTintColor="#1EB1FC"
          value={confidence}
          onValueChange={setConfidence}
        />
      </View>

      <Card
        title="Celtics x Warriors"
        description={(
          <Text>
            <Text style={styles.titledesc}>Celtics</Text>{"\n"}
            Fundação: 1946{"\n"}
            Títulos da NBA: 17{"\n"}
            Lendas: Bill Russell, Larry Bird, Paul Pierce{"\n\n"}
            <Text style={styles.titledesc}>Warriors</Text>{"\n"}
            Fundação: 1946{"\n"}
            Títulos da NBA: 7{"\n"}
            Lendas: Curry, Thompson, Durant
          </Text>
        )}
        image={img1}
      />

      <Card
        title="Arsenal x Chelsea"
        description={(
          <Text>
            <Text style={styles.titledesc}>Arsenal</Text>{"\n"}
            Fundação: 1886{"\n"}
            Títulos: 3{"\n"}
            Lendas: Henry, Bergkamp{"\n\n"}
            <Text style={styles.titledesc}>Chelsea</Text>{"\n"}
            Fundação: 1905{"\n"}
            Títulos: 6{"\n"}
            Lendas: Lampard, Drogba
          </Text>
        )}
        image={img2}
      />

      <Card
        title="Flamengo x Vasco"
        description={(
          <Text>
            <Text style={styles.titledesc}>Flamengo</Text>{"\n"}
            Fundação: 1895{"\n"}
            Cariocas: 37{"\n"}
            Lendas: Zico, Adriano{"\n\n"}
            <Text style={styles.titledesc}>Vasco</Text>{"\n"}
            Fundação: 1898{"\n"}
            Cariocas: 24{"\n"}
            Lendas: Roberto Dinamite, Edmundo
          </Text>
        )}
        image={img3}
      />

      <Card
        title="Liverpool x City"
        description={(
          <Text>
            <Text style={styles.titledesc}>Liverpool</Text>{"\n"}
            Fundação: 1892{"\n"}
            Premier League: 1{"\n"}
            Lendas: Gerrard, Dalglish{"\n\n"}
            <Text style={styles.titledesc}>City</Text>{"\n"}
            Fundação: 1880{"\n"}
            Premier League: 9{"\n"}
            Lendas: Agüero, De Bruyne
          </Text>
        )}
        image={img4}
      />

      <Card
        title="Real x Barcelona"
        description={(
          <Text>
            <Text style={styles.titledesc}>Real Madrid</Text>{"\n"}
            Fundação: 1902{"\n"}
            La Liga: 35{"\n"}
            Lendas: Di Stéfano, Ronaldo{"\n\n"}
            <Text style={styles.titledesc}>Barcelona</Text>{"\n"}
            Fundação: 1899{"\n"}
            La Liga: 27{"\n"}
            Lendas: Messi, Ronaldinho
          </Text>
        )}
        image={img5}
      />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#121212",
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 20,
    textAlign: "center",
  },
  selectorContainer: {
    width: '90%',
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  selectorLabel: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
  },
  picker: {
    height: 50,
    color: '#fff',
    backgroundColor: '#333',
  },
  imageCard: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    width: 360,
    backgroundColor: "#333",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: 340,
    height: 180,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    marginBottom: 8,
    color: "white",
    textAlign: "center",
  },
  description: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
  },
  titledesc: {
    fontWeight: "bold",
    color: "white"
  },
  switchContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  switchLabel: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 10,
    width: '75%',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
