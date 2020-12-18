import styled from 'styled-components/macro'
/**
 * Visualization bar of way surface
 */
export default function WayTypesBar({ surfaceValues }) {
  const surfaceValuesSum = surfaceValues.reduce((a, c) => a + c)
  const surfaceForcedPercentage = surfaceValues.map((value) =>
    Math.round((value / surfaceValuesSum) * 100)
  )

  const wayTypes = [
    {
      title: 'Naturweg',
      percentage: surfaceForcedPercentage[0] + '%',
      color: '#71955d',
    },
    {
      title: 'Leicht befestigt',
      percentage: surfaceForcedPercentage[1] + '%',
      color: '#b4cfb6',
    },
    {
      title: 'Asphalt',
      percentage: surfaceForcedPercentage[2] + '%',
      color: '#737373',
    },
  ]

  return (
    <Wrapper>
      <div class="waytypes">
        {wayTypes.map(({ percentage, color }, index) => (
          <div
            key={index}
            style={{ width: percentage, backgroundColor: color }}
          ></div>
        ))}
      </div>
      <ul class="waytypes_legend">
        {wayTypes.map(({ title, color, percentage }, index) => (
          <li key={index}>
            <svg
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path fill={color} d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path>
            </svg>
            <br />
            {title} <br />
            {percentage}
          </li>
        ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow-x: scroll;
  margin-top: 7px;

  div.waytypes {
    display: flex;
    height: 10px;
    width: 100%;
  }

  ul.waytypes_legend {
    display: flex;
    justify-content: space-around;
    font-size: 0.9em;
    grid-gap: 0;
    text-align: center;
  }
`
