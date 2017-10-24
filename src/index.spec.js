/* eslint-env jest */

import splitHost from './'

describe('splitHost()', () => {
  it('splits host into hostname and port', () => {
    expect(splitHost('localhost:80')).toEqual({
      host: 'localhost',
      hostname: 'localhost',
      port: 80
    })
  })

  it('identifies lone hostname', () => {
    expect(splitHost('localhost')).toEqual({
      host: 'localhost',
      hostname: 'localhost'
    })
  })

  it('identifies lone port', () => {
    expect(splitHost('80')).toEqual({
      port: 80
    })
  })

  it('returns undefined if parameter is undefined', () => {
    expect(splitHost()).toBe(undefined)
  })
})
