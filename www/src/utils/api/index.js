/**
 *
 * 为了您的隐私安全，如果您是第三方调用可能会记录下您的调用信息
 * 开放API不代表您可以滥用，请您保持尊重，请勿基于此API进行二次开发
 * 在校学生，开源不易🙏
 *
 *
 * For your privacy and security, if you are a third party caller, your call letter may be recorded.
 * Open API does not mean you can abuse it, please keep it respectful and do not use it for secondary development.
 * Open source is not easy for students in school 🙏
 *
 */

import axios from 'axios'

const total = axios.create({
  baseURL: `${ROOT_URL}/total`
})
const translate = axios.create({
  baseURL: `${ROOT_URL}/translate`
})

const apiList = [total, translate]

// eslint-disable-next-line no-restricted-syntax
for (const api of apiList) {
  const { interceptors } = api
  interceptors.response.use((response) => {
    if (response.status === 200) {
      const { data } = response
      return Promise.resolve(data)
    }
    return Promise.reject(response)
  })
}

export { total, translate }
