import styled from 'styled-components/macro'
import getTagName from '../lib/getTagName'

export default function TourTags({ tagIds }) {
  return (
    <Wrapper>
      {Array.isArray(tagIds)
        ? tagIds
            .sort(() => Math.random() - 0.5)
            .map((tagId) => (
              <span className="tourtag" key={tagId}>
                {getTagName(tagId)}
              </span>
            ))
        : '-'}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 10px;

  span.tourtag {
    font-size: 0.9em;
    margin-right: 5px;
    margin-bottom: 4px;
    background-color: #3e382b30;
    border-radius: var(--default-border-radius);
    padding: 8px;
    display: inline-block;
    white-space: nowrap;
    letter-spacing: 1px;
  }
`
