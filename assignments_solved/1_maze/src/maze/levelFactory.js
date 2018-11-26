import * as levels from './levels'


export default class LevelFactory {
    static getLevelFromId(id) {
        const allLevels = Object.keys(levels)
        const level = levels[allLevels[id]]

        if(level == null) throw `Can't find level with id ${id}`
        
        return level()
    }
}