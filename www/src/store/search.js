import { defineStore } from 'pinia'

const useSearch = defineStore('search', {
  state: () => ({
    /** @type {string} */
    content: '',
    /** @type {$ObjMap} */
    namedVariables: {},
    /** @type {boolean} */
    isLoading: true
  }),
  actions: {
    setContent(content) {
      this.content = content
    },
    setNamedVariables(namedVariables) {
      this.namedVariables = namedVariables
    },
    setIsLoading(isLoading) {
      this.isLoading = isLoading
    }
  }
})

export default useSearch
