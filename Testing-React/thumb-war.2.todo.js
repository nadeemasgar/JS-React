// improved assertions for mocks
import thumbWar from '../thumb-war'
import * as utils from '../utils'

/* test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = (p1, p2) => p2
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds')
  expect(winner).toBe('Kent C. Dodds')
  utils.getWinner = originalGetWinner
}) */

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = (...args) => {
    utils.getWinner.mock.calls.push(args)
    return args[1]
  }
  utils.getWinner.mock = {calls: []}
  const winner = thumbWar('Ken Wheeler', 'Kent C. Dodds') 
  expect(winner).toBe('Kent C. Dodds')
  // console.log(utils.getWinner.mock.calls);
  expect(utils.getWinner.mock.calls).toEqual([
    ['Ken Wheeler', 'Kent C. Dodds'],
    ['Ken Wheeler', 'Kent C. Dodds']
  ])
  utils.getWinner = originalGetWinner
})


