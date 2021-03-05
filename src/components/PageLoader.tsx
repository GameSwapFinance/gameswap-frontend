import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@gameswapfinance/uikit'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => (
  <Wrapper>
    <Spinner />
  </Wrapper>
)

export default PageLoader
