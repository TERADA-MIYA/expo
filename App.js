import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Body from './component/body'

export default function App() {
  return (
    <>
      <View style={styles.siteHead}>
        <Text style={styles.siteText}>여기는 사이트 헤드입니다</Text>
      </View>
      <Body />
      <View style={styles.siteFooter}>
        <Text style={styles.siteText}>여기는 사이트 푸터입니다.</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  siteHead: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  siteFooter: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  siteText: {
    color: 'white',
  },
});
