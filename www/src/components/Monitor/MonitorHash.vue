<script setup>
import { ElMessage } from 'element-plus'

import useSearch from '@/store/search'
import { getTranslate } from '@/utils/api/rest/translate'
import { enBase64 } from '@/utils/character/base64'
import { checkContent } from '@/utils/character/standard'
import { hash, pathname, title } from '@/utils/window/location'

const search = useSearch()

const sendWarn = (message) => {
  ElMessage({
    showClose: true,
    message,
    duration: 4000,
    type: 'warning'
  })
}

const updateHash = (hashValue) => {
  if (!hashValue) return
  const { isValid, msg } = checkContent(hashValue)
  if (!isValid) {
    sendWarn(msg)
    return
  }
  if (hash.amend()) return

  search.setContent(hashValue)
  title.set(hashValue)
  const searchBody = enBase64(hashValue)
  search.setIsLoading(true)
  getTranslate(searchBody)
    .then((data) => {
      if (data.code === 200) {
        search.setNamedVariables(data.data.namedVariables)
      } else {
        sendWarn(data.msg)
        search.setIsLoading(false)
      }
    })
    .catch(() => {
      sendWarn('服务器扛不住啦～，请稍后再试')
      search.setIsLoading(false)
    })
}

if (pathname.get() !== '/') pathname.set('/')
else updateHash(hash.get())

window.onhashchange = () => {
  updateHash(hash.get())
}
</script>
