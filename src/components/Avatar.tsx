import React from 'react'
import { getGravatarURL } from '../utils/getGravatarURL'
import styled from 'styled-components'

const Img = styled.img`
  border-radius: 50%;
  flex-shrink: 0;
  height: 3.5rem;
  margin-bottom: 0;
  margin-right: 0.875rem;
  width: 3.5rem;
`

const photoURL = getGravatarURL({
  email: 'henryqrm@gmail.com',
  size: 56,
})

export default () => <Img src={photoURL} alt="Eu" />
