export const getTranslationByKey = key => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`TRANSLATED: ${key}`)
        }, 1000);
    })
}