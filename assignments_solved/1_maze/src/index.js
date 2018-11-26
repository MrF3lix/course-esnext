import './assets/app.scss'
import Game from './maze/game';

export default class App {
    constructor() {
        this.game = new Game('maze')
    }
}

new App()