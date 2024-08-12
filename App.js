import React from 'react';
// eslint-disable-next-line prettier/prettier
import { SafeAreaView, Text, View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const [text, locationSerch] = React.useState('');

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.title}>CleanMap</Text>
        <Text style={styles.catch}>깨끗하게!</Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          onChangeText={locationSerch}
          value={text}
          placeholder="지역명으로 쓰레기통 위치를 검색해보세요!"
          keyboardType="default"
        />
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.buttonTop}>분리수거 방법이 궁금하신가요? 🤔</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert('페이지로 이동합니다!')}>
          <Text style={styles.buttonText}>
            현재위치의 분리수거 방법을 알아보자
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    alignItems: 'center', // 버튼과 텍스트를 수평 중앙에 정렬
    width: '100%', // 또는 원하는 너비를 설정
    paddingHorizontal: 20,
    top: 500,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  title: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 8,
  },
  catch: {
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'skyblue', // 배경 색상
    padding: 10,
    borderRadius: 5,
    width: 300, // 버튼의 너비를 설정
  },
  buttonTop: {
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 8,
  },
  buttonText: {
    alignItems: 'center',
    color: '#fff', // 텍스트 색상
    fontSize: 16,
  },
});

export default App;
