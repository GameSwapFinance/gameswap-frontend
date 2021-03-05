import React from 'react'
import styled from 'styled-components'
import { Text } from '@gameswapfinance/uikit'
import { Nft } from 'config/constants/types'

interface CollectibleCardProps {
  nft: Nft
}

const PreviewImage = styled.img`
  border-radius: 4px;
  margin-bottom: 8px;
`

const CollectibleCard: React.FC<CollectibleCardProps> = ({ nft }) => (
  <div>
    <PreviewImage src={`/images/nfts/${nft.images.lg}`} />
    <Text bold mb="8px">
      {nft.name}
    </Text>
    <Text as="p" fontSize="12px" color="textSubtle">
      {nft.description}
    </Text>
  </div>
)

export default CollectibleCard
