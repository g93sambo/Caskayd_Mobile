import React, { useState, useRef } from "react";
import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import { MaterialIcons } from "@expo/vector-icons";

const HomePage = () => {
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const [activePage, setActivePage] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;
  const handlePageChange = (index: number) => {
    Animated.timing(translateX, {
      toValue: -index * SCREEN_WIDTH,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
    setActivePage(index);
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { label: "Facebook", value: "facebook" },
    { label: "Tiktok", value: "tiktok" },
    { label: "Twitter", value: "twitter" },
    { label: "Instagram", value: "instagram" },
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState([]);
  const [items2, setItems2] = useState([
    { label: "1K - 10K", value: "1k - 10k" },
    { label: "11K - 100K", value: "11k - 100k" },
    { label: "101K - 1M", value: "101k - 1m" },
    { label: ">1M", value: ">1m" },
  ]);
  const [open3, setOpen3] = useState(false);
  const [value3, setValue3] = useState([]);
  const [items3, setItems3] = useState([
    { label: "<5K", value: "<5k" },
    { label: "5K - 50K", value: "5k - 50k" },
    { label: "50K - 100K", value: "50k - 100k" },
    { label: ">100K", value: ">100k" },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={{
          flexDirection: "row",
          width: SCREEN_WIDTH * 3,
          height: "100%",
          transform: [{ translateX }],
        }}
      >
        {/**page 1 */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ width: SCREEN_WIDTH, flex: 1 }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
              <View style={styles.headerWrapper}>
                <View style={styles.profile}>
                  <Link href="/account/account"></Link>
                </View>
                <View style={styles.titleWrapper}>
                  <MaskedView
                    maskElement={
                      <Text
                        style={[
                          styles.gradientText,
                          {
                            backgroundColor: "transparent",
                            fontSize: 40,
                            right: 0,
                            left: 0,
                          },
                        ]}
                      >
                        Caskayd
                      </Text>
                    }
                  >
                    <LinearGradient
                      colors={[
                        "#3232A1",
                        "#354747",
                        "#5E3345",
                        "#722742",
                        "#7A254B",
                        "#843163",
                        "#684441",
                      ]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <Text
                        style={[
                          styles.gradientText,
                          { opacity: 0, fontSize: 40 },
                        ]}
                      >
                        Caskayd
                      </Text>
                    </LinearGradient>
                  </MaskedView>
                </View>
              </View>
              <View style={styles.stat}>
                <Text style={styles.mainHeader}>Stats</Text>
                <LinearGradient
                  colors={[
                    "#3232A1",
                    "#354747",
                    "#5E3345",
                    "#722742",
                    "#7A254B",
                    "#843163",
                    "#684441",
                  ]}
                  style={styles.gradientBorder}
                >
                  <View style={styles.box}>
                    <Text style={styles.subHeader}>Latest Ad:</Text>
                    <Text style={styles.bodytext}>1.5M impressions</Text>
                    <Text style={styles.footer}>Delve deeper</Text>
                  </View>
                </LinearGradient>
              </View>
              <View style={styles.creator}>
                <Text style={[styles.bodytext, { marginBottom: 10 }]}>
                  Find Creators
                </Text>
                <View style={styles.drop}>
                  <View style={{ width: "31%" }}>
                    <DropDownPicker
                      multiple={true}
                      open={open}
                      value={value}
                      items={items}
                      setOpen={setOpen}
                      setValue={setValue}
                      setItems={setItems}
                      placeholder="Platforms"
                      mode="SIMPLE"
                      listMode="SCROLLVIEW"
                      renderBadgeItem={() => null}
                      showBadgeDot={false}
                      showTickIcon={true}
                      textStyle={{
                        fontSize: 10,
                        color: "white",
                        fontWeight: "light",
                      }}
                      style={{
                        backgroundColor: "#8a496b",
                        borderColor: "#ccc",
                        flexWrap: "nowrap",
                        borderRadius: 20,
                      }}
                      ArrowDownIconComponent={({ style }) => (
                        <MaterialIcons
                          name="keyboard-arrow-down"
                          size={15}
                          color="#fff"
                        />
                      )}
                      ArrowUpIconComponent={({ style }) => (
                        <MaterialIcons
                          name="keyboard-arrow-up"
                          size={15}
                          color="#fff"
                        />
                      )}
                      dropDownContainerStyle={{
                        backgroundColor: "#f9f9f9",
                        flexWrap: "nowrap",
                        borderRadius: 20,
                      }}
                      listItemLabelStyle={{
                        color: "black",
                        fontSize: 12,
                        flexWrap: "nowrap",
                      }}
                    />
                  </View>
                  <View style={{ width: "31%" }}>
                    <DropDownPicker
                      multiple={true}
                      open={open2}
                      value={value2}
                      items={items2}
                      setOpen={setOpen2}
                      setValue={setValue2}
                      setItems={setItems2}
                      placeholder="Impressions"
                      mode="SIMPLE"
                      listMode="SCROLLVIEW"
                      renderBadgeItem={() => null}
                      showBadgeDot={false}
                      showTickIcon={true}
                      textStyle={{
                        fontSize: 8,
                        color: "white",
                        fontWeight: "light",
                      }}
                      style={{
                        backgroundColor: "#8a496b",
                        borderColor: "#ccc",
                        flexWrap: "nowrap",
                        borderRadius: 20,
                      }}
                      arrowIconContainerStyle={{
                        marginRight: 0,
                        paddingLeft: 0, 
                      }}
                      labelStyle={{
                        marginRight: 0, 
                        paddingRight: 0,
                      }}
                      ArrowDownIconComponent={({ style }) => (
                        <MaterialIcons
                          name="keyboard-arrow-down"
                          size={15}
                          color="#fff"
                        />
                      )}
                      ArrowUpIconComponent={({ style }) => (
                        <MaterialIcons
                          name="keyboard-arrow-up"
                          size={15}
                          color="#fff"
                        />
                      )}
                      dropDownContainerStyle={{
                        backgroundColor: "#f9f9f9",
                        flexWrap: "nowrap",
                        borderRadius: 20,
                      }}
                      listItemLabelStyle={{
                        color: "black",
                        fontSize: 12,
                        flexWrap: "nowrap",
                      }}
                    />
                  </View>
                  <View style={{ width: "31%" }}>
                    <DropDownPicker
                      multiple={true}
                      open={open3}
                      value={value3}
                      items={items3}
                      setOpen={setOpen3}
                      setValue={setValue3}
                      setItems={setItems3}
                      placeholder="Price"
                      mode="SIMPLE"
                      listMode="SCROLLVIEW"
                      renderBadgeItem={() => null}
                      showBadgeDot={false}
                      showTickIcon={true}
                      textStyle={{
                        fontSize: 12,
                        color: "white",
                        fontWeight: "light",
                      }}
                      style={{
                        backgroundColor: "#8a496b",
                        borderColor: "#ccc",
                        flexWrap: "nowrap",
                        borderRadius: 20,
                      }}
                      ArrowDownIconComponent={({ style }) => (
                        <MaterialIcons
                          name="keyboard-arrow-down"
                          size={15}
                          color="#fff"
                        />
                      )}
                      ArrowUpIconComponent={({ style }) => (
                        <MaterialIcons
                          name="keyboard-arrow-up"
                          size={15}
                          color="#fff"
                        />
                      )}
                      dropDownContainerStyle={{
                        backgroundColor: "#f9f9f9",
                        flexWrap: "nowrap",
                        borderRadius: 20,
                      }}
                      listItemLabelStyle={{
                        color: "black",
                        fontSize: 12,
                        flexWrap: "nowrap",
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
        {/** Page 2 */}
        <View
          style={{
            width: SCREEN_WIDTH,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
              <View style={styles.headerWrapper}></View>
              <Text style={{ fontSize: 24 }}>This is Page 2</Text>
            </View>
          </ScrollView>
        </View>

        {/** Page 3 */}
        <View
          style={{
            width: SCREEN_WIDTH,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Text style={{ fontSize: 24 }}>This is Page 3</Text>
        </View>
      </Animated.View>
      {/* Icon Bar */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <MaterialIcons
          name="home"
          size={24}
          color={activePage === 0 ? "#8a496b" : "gray"}
          onPress={() => handlePageChange(0)}
        />
        <MaterialIcons
          name="dashboard"
          size={24}
          color={activePage === 1 ? "#8a496b" : "gray"}
          onPress={() => handlePageChange(1)}
        />
        <MaterialIcons
          name="settings"
          size={24}
          color={activePage === 2 ? "#8a496b" : "gray"}
          onPress={() => handlePageChange(2)}
        />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 25,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  headerWrapper: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  titleWrapper: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  profile: {
    width: 45,
    height: 45,
    backgroundColor: "yellow",
    borderRadius: 20,
    position: "absolute",
    right: 4,
  },

  backButton: {
    padding: 10,
    borderRadius: 30,
  },
  gradientText: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  mainHeader: {
    fontSize: 16,
    marginTop: 15,
    left: 10,
    fontWeight: "light",
    textAlign: "left",
    width: "100%",
    fontStyle: "italic",
  },
  platform: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    position: "relative",
    zIndex: 1,
  },
  stat: {
    height: "25%",
    width: "95%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  gradientBorder: {
    padding: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  box: {
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    width: "100%",
    padding: 10,
    height: "100%",
    alignItems: "flex-start",
    textAlign: "left",
  },
  subHeader: {
    fontSize: 18,
    marginTop: 2,
    textAlign: "left",
    color: "black",
    fontWeight: "bold",
  },
  bodytext: {
    fontSize: 23,
    marginTop: 8,
    textAlign: "left",
    color: "black",
    fontWeight: "bold",
  },
  footer: {
    fontSize: 18,
    marginTop: 8,
    textAlign: "left",
    color: "black",
    fontWeight: "bold",
  },
  creator: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    width: "95%",
    alignItems: "flex-start",
  },

  drop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
