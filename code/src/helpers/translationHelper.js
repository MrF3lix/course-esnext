export const getTranslationByKey = key => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Translated: ${key}`)
        }, 1000)
    })
}