import test from 'ava'
import echarts from './index'
import option from './demo/area'
import { readFileSync, unlinkSync } from 'fs'

test('save file', async (t) => {
  const path = __dirname + '/area.png'
  const original = readFileSync(__dirname + '/demo/area.png')

  echarts({
    path,
    width: 1000,
    height: 500,
    option
  })

  const file = readFileSync(path)

  t.is(file.length, original.length)

  unlinkSync(path)
})
