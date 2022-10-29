import { Text, Box, Button, Center } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from "@react-navigation/native";

const CameraScanning = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [animationLineHeight, setAnimationLineHeight] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [focusLineAnimation, setFocusLineAnimation] = useState(
    new Animated.Value(0)
  );

  const navigation = useNavigation();

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigation.navigate("Profile");
  };

  const animateLine = () => {
    Animated.sequence([
      Animated.timing(focusLineAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),

      Animated.timing(focusLineAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start(animateLine);
  };

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getBarCodeScannerPermissions();
    animateLine();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <Box flex={1} bg="#1111116a" justifyContent="center" alignItems={"center"}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.overlay}>
        <View style={styles.unfocusedContainer}></View>

        <View style={styles.middleContainer}>
          <View style={styles.unfocusedContainer}></View>
          <View
            onLayout={(e) =>
              setAnimationLineHeight({
                x: e.nativeEvent.layout.x,
                y: e.nativeEvent.layout.y,
                height: e.nativeEvent.layout.height,
                width: e.nativeEvent.layout.width,
              })
            }
            style={styles.focusedContainer}
          >
            {!scanned && (
              <Animated.View
                style={[
                  styles.animationLineStyle,
                  {
                    transform: [
                      {
                        translateY: focusLineAnimation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, animationLineHeight.height],
                        }),
                      },
                    ],
                  },
                ]}
              />
            )}

            {scanned && (
              <Button onPress={() => setScanned(false)}>
                Tap to Scan Again
              </Button>
            )}
          </View>
          <View style={styles.unfocusedContainer}></View>
        </View>
        <View style={styles.unfocusedContainer}></View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  unfocusedContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  middleContainer: {
    flexDirection: "row",
    flex: 1.5,
  },

  focusedContainer: {
    flex: 6,
  },
  animationLineStyle: {
    height: 2,
    width: "100%",
    backgroundColor: "red",
  },
  rescanIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CameraScanning;
