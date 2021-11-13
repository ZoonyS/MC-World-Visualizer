export interface Bot {
    blockAt(arg0: any): any
    on(arg0: string, log: (...data: any[]) => void): any
    entity: any
    nearestEntity(playerFilter: (entity: { type: string }) => boolean): any
    lookAt(pos: any): any
}