import { formatDate } from '../utils/formats'
import React from 'react'
import { Link } from 'react-navi'
import { join } from 'path'
import Tag from './Tag'
import Tags from './Tags'

interface ArticleMetaProps {
  blogRoot: string
  data: {
    date: Date,
    tags: string[],
  }
  readingTime?: any
}

interface ReadingTimeProps {
  minutes: number
}

const ReadingTime = ({ minutes }: ReadingTimeProps) => {
  const MINUTES_PER_CUP = 5
  const minutesToRead = Math.max(Math.round(minutes), 1)
  const cups = Math.round(minutesToRead / MINUTES_PER_CUP)
  return (
    <>
      {' '}
      &bull;{' '}
      <span>
        {Array(cups || 1)
          .fill('☕️')
          .join(' ')}{' '}
        {minutesToRead} min read
      </span>
    </>
  )
}

export default ({ blogRoot, data, readingTime }: ArticleMetaProps) => {
  return (
    <small>
      <time dateTime={data.date.toUTCString()}>{formatDate(data.date)}</time>
      {data.tags && data.tags.length && (
        <>
          {' '}
          &bull;{' '}
          <Tags>
            {data.tags.map((tag: string) => (
              <Tag key={tag}>
                <Link href={join(blogRoot, 'tags', tag)}>{tag}</Link>
              </Tag>
            ))}
          </Tags>
        </>
      )}
      {readingTime && <ReadingTime {...readingTime} />}
    </small>
  )
}

