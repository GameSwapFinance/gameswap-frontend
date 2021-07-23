import React from 'react'
import styled from 'styled-components'
import { Image, Button } from '@gameswapfinance/uikit'
import { CommunityTag } from 'components/Tags'
import useI18n from 'hooks/useI18n'
import Card from './Card'
import CardTitle from './CardTitle'

const Balance = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  font-weight: 600;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
  margin-bottom: 16px;
`

const DetailPlaceholder = styled.div`
  display: flex;
  font-size: 14px;
`
const Value = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`

const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => (theme.isDark ? '#524B63' : '#E9EAEB')};
  padding: 24px;
`
const Coming: React.FC = () => {
  const TranslateString = useI18n()

  return (
    <Card>
      <div style={{ padding: '24px' }}>
        <CardTitle>Next Flash Pool</CardTitle>

        <br />
        <Label>7 day non-native token staking</Label>
        <Button variant="subtle" fullWidth mb="16px" onClick={(e) => {
          e.preventDefault();
          window.location.href = 'https://snapshot.org/#/game-swap.eth';
        }}>
          <span style={{ fontSize: 'x-large' }}>Vote Here</span>
        </Button>
      </div>
      <Footer>
        <div style={{ flex: 1 }}> Let us know what <b>FLASH</b> pools you would like to see next!</div>
      </Footer>
    </Card>
  )
}

export default Coming
