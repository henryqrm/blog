import { Route } from 'navi'
import React from 'react'
import { Link } from 'react-navi'
import ArticleMeta from './ArticleMeta'
import styled from 'styled-components'

interface ArticleSummaryProps {
  blogRoot: string
  route: Route
}

const Title = styled.h2`
  font-weight: 900;
  margin-bottom: 0;
  margin-top: 0;
  > a {
    text-decoration: none;
  }
`

const ArticleSummary = ({ blogRoot, route }: ArticleSummaryProps) => (
  <article>
    <Title>
      <Link href={route.url.href}>{route.title}</Link>
    </Title>
    <ArticleMeta blogRoot={blogRoot} data={route.data} />
    <p>{route.data.spoiler}</p>
  </article>
)

export default ArticleSummary
