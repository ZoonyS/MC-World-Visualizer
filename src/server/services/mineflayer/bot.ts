import { isSurfaceBlock } from "../utility/isSurfaceBlock"
import { Bot } from "./bot.types"

const mineflayer = require('mineflayer')

export const bot: Bot = mineflayer.createBot({
    username: "ZoonyBot",
    host: 'localhost',
    port: 1396,
})

export function lookAtNearestPlayer(): void {
    const playerFilter = (entity: { type: string }) => entity.type === 'player'
    const playerEntity = bot.nearestEntity(playerFilter)
    
    if (playerEntity) {
        const pos = playerEntity.position
        bot.lookAt(pos)
    } else {
        return
    }
}

export function getBlockData(bot: Bot, length: number, height: number, width: number): Array<{}> {
    let BlockData: Array<{position: number[], block: any}> = []
    let data: any = []

    const botPosition = bot.entity.position

    for (let x:number = -length; x < length; x++) {
        data[x + length] = []
        for (let y:number = -height; y < height; y++) {
            data[x + length][y + height] = []
            for (let z:number = -width; z < width; z++) {
                data[x + length][y + height][z + width] = bot.blockAt(botPosition.offset(x, y, z))
            }
        }
    }
    for (let x:number = -length; x < length; x++) {
        for (let y:number = -height; y < height; y++) {
            for (let z:number = -width; z < width; z++) {
                let currentBlock = data[x + length][y + height][z + width]
                let index = {x: x+length, y: y+height, z: z+width}
                if ((currentBlock && currentBlock.name !== "air") && (currentBlock && currentBlock.name !== "cave_air")) {
                    if (isSurfaceBlock(data, index)) {
                        BlockData.push({position: [x, y, z], block: currentBlock})
                    }
                }
            }
        }
    }
    return BlockData
}

bot.on('kicked', console.log)
bot.on('error', console.log)
