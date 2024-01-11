import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Button from '../Button'
import ImageOption from '../ImageOption/ImageOption'
import styles from './styles'
import {PropTypes} from 'prop-types'

const ImageMultipleChoiceQuestion = ({question, onCorrect, onWrong}) => {

  const [selected, setSelected] = useState(null)

  const onButtonPress = () =>{
    if(selected.correct){
      onCorrect()
      setSelected(null)
    }else{
      onWrong()
    }
  }
  return (
    <>
      <Text style={styles.title}>
        {question.question}
      </Text>
      <View style={styles.optionsContainer}>
        {
          question.options.map((o) => (
            <ImageOption 
              key={o.id} 
              image={o.image} 
              text={o.text}
              isSelected={selected?.id === o.id}
              onPress={()=> setSelected(o)}
            />
          ))
        }
      </View>
      <Button text='Continue' onPress={onButtonPress} disabled={!selected}/>
    </>
  )
}

ImageMultipleChoiceQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        image:PropTypes.string.isRequired,
        correct: PropTypes.bool,
      })
    ).isRequired,
  })
}

export default ImageMultipleChoiceQuestion