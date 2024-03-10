import React from 'react'
import { DividerVertical, EndOfSeperator, DividerVerticalContainer, DividerHorizontal, DividerHorizontalContainer } from './styles'

const Seperator = ({type = 'start', axis = 'vertical'}) => {
  return axis === 'vertical' ? (
    <DividerVerticalContainer>
      {type === 'start' && <EndOfSeperator/>}
      <DividerVertical/>
      {type === 'end' && <EndOfSeperator/>}
    </DividerVerticalContainer>
  ) : (
    <DividerHorizontalContainer>
      {type === 'start' && <EndOfSeperator/>}
      <DividerHorizontal/>
      {type === 'end' && <EndOfSeperator/>}
    </DividerHorizontalContainer>
  )
}

export default Seperator