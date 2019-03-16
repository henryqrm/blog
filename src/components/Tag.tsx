import styled from 'styled-components'

export default styled.li`
  display: inline;
  list-style: none;
  padding: 0;
  margin: 0;
  &:not(:first-child)::before {
    content: ', ';
  }
`
