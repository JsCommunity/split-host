/* eslint-env jest */

import splitHost from './'

describe('splitHost()', () => {
  it('splits host into hostname and port', () => {
    expect(splitHost('localhost:80')).toEqual({
      hostname: 'localhost',
      port: 80
    })
  })

  it('identifies lone hostname', () => {
    expect(splitHost('localhost')).toEqual({
      hostname: 'localhost'
    })
  })

  it('identifies lone port', () => {
    expect(splitHost('80')).toEqual({
      port: 80
    })
  })
})
