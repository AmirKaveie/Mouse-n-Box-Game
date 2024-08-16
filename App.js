import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';

const App = () => {
  const [mousePosition, setMousePosition] = useState({ top: -50, left: -50 });
  const [showMouse, setShowMouse] = useState(false);

  const handleTap = () => {
    // Randomize the mouse position outside the box
    const randomTop = Math.random() * 400 + 100;
    const randomLeft = Math.random() * 200 + 100;
    
    setMousePosition({ top: randomTop, left: randomLeft });
    setShowMouse(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.view}
        onPress={handleTap}
      >
        <Text style={styles.text}>Tap!</Text>
      </TouchableOpacity>
      
      {/* Display the mouse at the randomized position */}
      {showMouse && (
        <Animated.View style={[styles.mouse, { top: mousePosition.top, left: mousePosition.left }]}>
          <Text style={styles.mouseText}>🐭</Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hotpink',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
  mouse: {
    position: 'absolute',
  },
  mouseText: {
    fontSize: 30,
  },
});

export default App;
