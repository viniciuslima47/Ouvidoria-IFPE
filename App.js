import * as React from 'react';
import { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={ScreenLogin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={ScreenSignUp}
            options={{ title: "Criar Conta" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

function ScreenLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>

        <StatusBar barStyle="dark-content" />

        <Image
          style={styles.loginLogo}
          source={{
            uri: "https://marketplace.canva.com/A5alg/MAESXCA5alg/1/tl/canva-user-icon-MAESXCA5alg.png"
          }}
        />

        <View style={styles.container_inputs}>

          <Text style={styles.label}>E-mail</Text>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            placeholder="seu@email.com"
          />

          <Text style={styles.label}>Senha</Text>

          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="********"
          />

        </View>

        <View style={styles.container_btn}>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.texto}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.cadastro}>
              Não tem conta? Cadastre-se
            </Text>
          </TouchableOpacity>

        </View>

      </View>
    </ScrollView>
  );
}

function ScreenSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSignup() {
    if (!name || !email || !password || !confirmPassword) {
      alert("Preencha todos os campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não são iguais.");
      return;
    }

    if (password.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    alert("Cadastro realizado com sucesso!");

    // Aqui você pode enviar os dados para sua API/banco de dados
    console.log({
      name,
      email,
      password,
    });
  }

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainerCadastro}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.container_inputs}>

          <Text style={styles.label}>Nome Completo</Text>

          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="John Doe"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>E-mail</Text>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="seu@email.com"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Senha</Text>

          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Mínimo 8 caracteres"
            placeholderTextColor="#999"
          />

          <Text style={styles.label}>Confirmar Senha</Text>

          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholder="Digite a senha novamente"
            placeholderTextColor="#999"
          />

          <TouchableOpacity
            style={styles.botao}
            onPress={handleSignup}
          >
            <Text style={styles.texto}>
              Finalizar Cadastro
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },

  scrollContainerCadastro: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 30,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  loginLogo: {
    width: 80,
    height: 80,
    marginBottom: 30,
    borderRadius: 40,
  },

  container_inputs: {
    width: '100%',
    maxWidth: '95%',
  },

  input: {
    backgroundColor: "#f9f9f9",
    width: '100%',
    height: 55,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#00000067',
    fontSize: 18,
    padding: 15,
    borderRadius: 20,
  },

  label: {
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#333',
    fontWeight: 400,
    marginTop: 10,
  },

  container_btn: {
    marginTop: 20,
    width: '95%',
  },

  botao: {
    backgroundColor: "#2b3066",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    width: '100%',
  },

  texto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },

  cadastro: {
    textAlign: 'center',
    color: '#2b3066',
    marginTop: 15,
  },

});
