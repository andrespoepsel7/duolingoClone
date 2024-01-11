import React, {useState, useEffect} from "react";
import {View, Alert} from "react-native";
import styles from './App.styles'
//import questions from './assets/data/imageMulatipleChoiceQuestions'
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/OpenEndedQuestion";
import questions from './assets/data/openEndedQuestions'

const App = () => {

  // States
  const [selected, setSelected] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentIndex])

  // Useefect
  useEffect(() => {
    if(currentIndex >= questions.length){
      Alert.alert("You won")
      setCurrentIndex(0)
    }else{
      setCurrentQuestion(questions[currentIndex])
    }
  },[currentIndex])

  const onCorrect = () => {
    setCurrentIndex(currentIndex+1)
  }

  const onWrong = () => {
    Alert.alert("Wrong!")
  }
  
  return (
    <View style={styles.root}>
      {/* <ImageMultipleChoiceQuestion 
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      /> */}
      <OpenEndedQuestion
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
    </View>
  )
}


export default App;