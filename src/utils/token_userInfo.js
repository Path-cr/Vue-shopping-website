const getToken = () => {
    return sessionStorage.getItem('Token')
}
const setToken = (token) => {
    sessionStorage.setItem('Token', token)
}
const clearToken = () => {
    sessionStorage.removeItem('Token')
}

export {getToken, setToken, clearToken}