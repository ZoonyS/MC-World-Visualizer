/**
 * Returns neighbouring blocks using their index
 * @param data 
 * @param index 
 */
export function getNeighbourFromBlocks(data: any, index: any): Array<any> {
    let {x, y, z} = index
    let neighbours = []

    if (x-1 >= 0) {
        neighbours.push(data[x-1][y][z])
    } if (y-1 >= 0) {
        neighbours.push(data[x][y-1][z])
    } if (z-1 >= 0) {
        neighbours.push(data[x][y][z-1])           
    } if (x+1 < data.length) {
        neighbours.push(data[x+1][y][z])   
    } if (y+1 < data[0].length) {
        neighbours.push(data[x][y+1][z])   
    } if (z+1 < data[0][0].length) {
        neighbours.push(data[x][y][z+1])   
    }
    
    return neighbours
}