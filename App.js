import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {
  const [outputText, setOuputText] = useState('')
  return (
    <View style={styles.container}>
      <Text>This is a Text</Text>
      <TextInput
        style={{height: 100}}
        placeholder='This is a Text Input'
        onChangeText={outputText => setOuputText(outputText)}
        defaultValue={outputText}
      />
      <Button title='This is a button' onPress={() => setOuputText('You pressed the button')}/>
      <Image
      source={{uri: 'https://images.pexels.com/photos/1680140/pexels-photo-1680140.jpeg'}}
      style={{width: 200, height: 200, margin: 40}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
