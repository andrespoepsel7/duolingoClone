import React, { useState } from 'react';
import { View, Text, TextInput, Image, Keyboard } from 'react-native';
import styles from './styles';
import mascot from '../../../assets/images/mascot.png';
import Button from '../Button';
import { PropTypes } from 'prop-types';

const OpenEndedQuestion = ({ question, onCorrect, onWrong }) => {
  const [input, setInput] = useState('');

  const onButtonPress = () => {
    if ( question.answer.toLowerCase().trim() === input.toLowerCase().trim()) {
      onCorrect();
    }else{
      onWrong();
    }
    setInput('');
    // Add any logic you want to perform when the user submits their input
  };

  const handleSubmit = () => {
    Keyboard.dismiss(); // Dismiss the keyboard
    //onButtonPress(); // Call the existing button press logic
  };

  return (
    <>
      <Text style={styles.title}>Translate this sentence</Text>
      <View style={styles.row}>
        <Image source={mascot} style={styles.mascot} resizeMode='contain'/>
        <View style={styles.sentenceContainer}>
          <Text style={styles.sentence}>{question.text}</Text>
        </View>
      </View>

      <TextInput 
        placeholder='Type in English'
        style={styles.textInput} 
        value={input} 
        onChangeText={setInput}
        textAlignVertical="top"
        //multiline
        keyboardAppearance='dark'
        returnKeyType='done'
        onSubmitEditing={handleSubmit} // Call the submit function when the user presses the return key
      />

      <Button text='Continue' onPress={onButtonPress} disabled={!input}/>
    </>
  )
};

OpenEndedQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        correct: PropTypes.bool,
      })
    ).isRequired,
  }), 
  onCorrect: PropTypes.func.isRequired,
  onWrong: PropTypes.func.isRequired,
};

export default OpenEndedQuestion;
