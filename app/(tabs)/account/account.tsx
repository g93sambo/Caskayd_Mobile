import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useRouter } from "expo-router";
import { Avatar, Text } from "react-native-elements";

export default function Account() {
  const router = useRouter();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <View style={styles.headerWrapper}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <AntDesign name="arrowleft" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 30 }}>
            <Avatar
              rounded
              title="CJ"
              size="large"
              overlayContainerStyle={{ backgroundColor: "#888" }}
            />
          </View>
          <View style={styles.business}>
            <View style={styles.sub}>
              <Text style={styles.subHeader}>Business Name:</Text>
              <Text style={styles.footer}>Caterpillar Inc.</Text>
            </View>
          </View>
          <View style={styles.business1}>
            <View style={styles.sub2}>
              <View style={styles.sub3}>
                <View style={{ width: "31%" }}>
                  <Ionicons name="settings-outline" size={20} color="black" />
                </View>
                <Text style={{color: 'black'}}>Settings</Text>
              </View>
              <View style={{ width: "31%" }}>
                <Ionicons name="chevron-forward" size={20} color="black" />
              </View>
            </View>
            <View style={styles.sub2}>
              <View style={styles.sub3}>
                <View style={{ width: "31%" }}>
                  <Icon name="logout" size={24} color="#FF3B30" />
                </View>
                <Text style={{color: '#FF3B30'}}>logout</Text>
              </View>
              <View style={{ width: "31%" }}>
                <Ionicons name="chevron-forward" size={20} color="#FF3B30" />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: "#D8BFD8",
    alignItems: "center",
    width: "100%",
  },
  headerWrapper: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
  },

  backButton: {
    padding: 10,
    borderRadius: 30,
  },
  business: {
    marginTop: 100,
    display: "flex",
    width: "100%",
    height: "30%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 8,
  },
  sub: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 8,
  },
  subHeader: {
    fontSize: 18,
    marginTop: 30,
    textAlign: "left",
    color: "rgb(200, 200, 200)",
    fontWeight: "light",
  },
  footer: {
    fontSize: 18,
    marginTop: 30,
    textAlign: "left",
    color: "black",
    fontWeight: "light",
  },
  sub2: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 20,
    marginBottom: 20
  },
  business1: {
    marginTop: 80,
    display: "flex",
    width: "80%",
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    flexDirection: 'column',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 3,
  },
  sub3: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
});
