import React from 'react'
import { ArrowForwardIcon, Button, ButtonProps } from '@gameswapfinance/uikit'

const NextStepButton: React.FC<ButtonProps> = (props) => (
  <Button endIcon={<ArrowForwardIcon color="currentColor" />} {...props} />
)

export default NextStepButton
