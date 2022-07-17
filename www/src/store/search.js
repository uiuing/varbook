import { defineStore } from 'pinia'

const useSearch = defineStore('search', {
  state: () => ({
    /** @type {string} */
    content: '',
    /** @type {$ObjMap} */
    namedVariables: {}
  }),
  actions: {
    setContent(content) {
      this.content = content
    },
    setNamedVariables(namedVariables) {
      this.namedVariables = namedVariables
    }
  }
})

export default useSearch
