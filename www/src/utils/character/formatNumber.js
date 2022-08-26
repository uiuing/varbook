export default function formatNumber(total) {
  const num = Number(total)
  if (num > 99999999) {
    return `${(num / 100000000).toFixed(1)} 亿`
  }
  if (num >= 10000 && num < 99999999) {
    return `${(num / 10000).toFixed(1)} 万`
  }
  return String(num)
}
