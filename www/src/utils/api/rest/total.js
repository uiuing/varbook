// noinspection JSValidateTypes

import { total } from '@/utils/api'

const { get } = total

const getTotal = async () => {
  const res = await get(null)
  return res
}

// eslint-disable-next-line import/prefer-default-export
export { getTotal }
