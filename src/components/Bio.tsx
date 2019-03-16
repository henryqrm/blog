import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

interface BioProps {
  className?: string
}

const WrapperBio = styled.div`
  display: flex;
  margin-bottom: 4.375rem;
`

export default (props: BioProps) => (
  <WrapperBio className={props.className || ''}>
    <Avatar />
    <p>Aqui vem minha Bio...</p>
  </WrapperBio>
)
