import React, {useState, useEffect} from "react";
import {View, Alert} from "react-native";
import {AsyncStorage} from 'react-native';
import styles from './App.styles'
//import questions from './assets/data/imageMulatipleChoiceQuestions'
import ImageMultipleChoiceQuestion from "./src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion";
import OpenEndedQuestion from "./src/components/OpenEndedQuestion/OpenEndedQuestion";
import questions from './assets/data/allQuestions'
import Header from "./src/components/Header/Header";

const App = () => {

  // States
  const [selected, setSelected] = useState(null) 
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentIndex])
  const [lives, setLives] = useState(5)

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

  const restart = () => {
    setCurrentIndex(0)
    setLives(5)
  }

  const onWrong = () => {
    if(lives <= 1){
      Alert.alert("Game over!", "Try again", [
        {
          text: "Try again",
          onPress: () => {
            restart()
          }
        },
        {
          text: "Cancel",
          onPress: () => {
            restart()
          }
        },
      ])
    }else{
      setLives(lives-1)
      Alert.alert("Wrong!")
    }
  }
  
  return (
    <View style={styles.root}>
      <Header progress={currentIndex/questions.length} lives={lives}/>
      {
        currentQuestion.type === "IMAGE_MULTIPLE_CHOICE" &&
        <ImageMultipleChoiceQuestion 
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      }
      {
        currentQuestion.type === "OPEN_ENDED" &&
        <OpenEndedQuestion
          question={currentQuestion}
          onCorrect={onCorrect}
          onWrong={onWrong}
        />
      }
    </View>
  )
}


export default App;