export const bangla = localStorage.getItem('lan') === 'bn'

export const handleLanguage = (str) => {
    localStorage.setItem('lan', str)
    window.location.reload()
}