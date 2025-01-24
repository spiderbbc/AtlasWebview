import React from 'react';
import { StyleSheet, View } from 'react-native'; // Import StyleSheet here
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView
        ignoreSslError={true} source={{uri: 'https://www.google.com'}}
        javaScriptEnabled={true}
        style={styles.webview}
        startInLoadingState={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});