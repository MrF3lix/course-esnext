import Header from './header'
import { getTranslationByKey } from './helpers/translationHelper'

class App {
    constructor() {
        console.log('init app!')
        new Header()

        this.getContent()   
    }

    async getContent() {
        const translation = await getTranslationByKey('test')
        console.log(translation)
    }
}

new App()