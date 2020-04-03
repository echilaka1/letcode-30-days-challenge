const reverse = xs => [...xs].reverse()
const times = (length, f) => Array.from({
  length
}, f)
const flat = xs => xs.reduce((a, b) => a.concat(b), [])

const sum = ns => ns.reduce((a, b) => a + b)
const findPositiveIndex = ns => ns.findIndex(n => n > 0)
const trimNegative = ns => ns.slice(findPositiveIndex(ns), ns.length - findPositiveIndex(reverse(ns)))

const getSegments = ns => flat(trimNegative(ns).map((n, i, tns) => {
  if (tns.length === 1) {
    return [tns]
  }
  const isLast = i === tns.length - 1
  if (n <= 0 || isLast) {
    return null
  }
  return times(tns.length - i - 1, (_, j) => {
    const lastIndex = tns.length - j
    const current = tns[lastIndex - 1]
    const last = tns[lastIndex]
    if (current <= 0 || last > 0) {
      return null
    }
    return tns.slice(i, lastIndex)
  })
})).filter(x => x !== null)

const maxSubArray = ns => Math.max(...getSegments(ns).map(sum))