import { Route } from 'navi'
import React from 'react'
import { Link } from 'react-navi'
import siteMetadata from '../siteMetadata'
import ArticleSummary from '../components/ArticleSummary'
import Bio from '../components/Bio'
import Pagination from '../components/Pagination'
import styled from 'styled-components'

interface BlogIndexPageProps {
  blogRoot: string
  pageCount: number
  pageNumber: number
  postRoutes: Route[]
}

const Title = styled.h1`
  font-family: Montserrat, sans-serif;
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 3.5rem;
  margin-top: 0;
  margin-bottom: 2.625rem;
  text-rendering: optimizeLegibility;
  > a {
    color: black;
    text-decoration: none;
  }
`

const Footer = styled.footer`
  margin-top: 7rem;
  margin-bottom: 0.5rem;
`

const ArticlesList = styled.ul`
  padding: 0;
  margin: 0 0 2.625rem;
`

const ArticlesListItem = styled.li`
  list-style: none;
  padding: 0;
  margin: 0 0 2.625rem;
`

export default ({
  blogRoot: blogRoot,
  pageCount,
  pageNumber,
  postRoutes,
}: BlogIndexPageProps) => {
  return (
    <div>
      <header>
        <Title>
          <Link href={blogRoot}>{siteMetadata.title}</Link>
        </Title>
        <Bio />
      </header>
      <ArticlesList>
        {postRoutes.map((route: any) => (
          <ArticlesListItem key={route.url.href}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </ArticlesListItem>
        ))}
      </ArticlesList>
      {pageCount > 1 && (
        <Pagination blogRoot={blogRoot} pageCount={pageCount} pageNumber={pageNumber} />
      )}
      <Footer>
        <div>
          <a href="./rss.xml" target="_blank" style={{ float: 'right' }}>
            RSS
          </a>
          <Link href="./about">About</Link> &bull;
          <Link href="./tags">Tags</Link> &bull;{' '}
          <a href="https://github.com/frontarm/create-react-blog">Source</a>
        </div>
      </Footer>
    </div>
  )
}
