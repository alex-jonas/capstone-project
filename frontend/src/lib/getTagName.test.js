import getTagName from './getTagName'

describe('getTagName', () => {
  it('gets tag name from input id', () => {
    const result = getTagName(4)
    expect(result).toBe('Einkehren')
  })

  it('returns null when id is empty', () => {
    const result = getTagName()
    expect(result).toBeNull()
  })

  it('returns null when id is not a number', () => {
    const result = getTagName('a')
    expect(result).toBeNull()
  })
})
