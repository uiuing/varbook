// noinspection JSValidateTypes

import { translate } from '@/utils/api'

const { get } = translate

const getTranslate = async (searchText) => {
  const params = {
    s: searchText
  }
  const res = await get(null, { params })
  return res
}

// eslint-disable-next-line import/prefer-default-export
export { getTranslate }
