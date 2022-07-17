const enBase64 = (oldVal) => btoa(encodeURI(oldVal))

const deBase64 = (oldVal) => decodeURI(atob(oldVal))

export { deBase64, enBase64 }
