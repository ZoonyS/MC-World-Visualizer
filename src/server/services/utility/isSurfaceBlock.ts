/**
 * Returns a boolean stating if block is a Surface Block
 * @param data 
 * @param index 
 */

import { getNeighbourFromBlocks } from "./getNeighboursFromBlock";

export function isSurfaceBlock(data: any, index: any) {
    let neighbours = getNeighbourFromBlocks(data, index)
    return neighbours.some( block => (block && block.name == 'air' )||(block && block.name == 'cave_air'))
}