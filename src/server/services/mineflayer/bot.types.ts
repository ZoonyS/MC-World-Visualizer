export interface Bot {
    blockAt(arg0: any): any
    on(arg0: string, log: (...data: any[]) => void)
    entity: any
    nearestEntity(playerFilter: (entity: { type: string }) => boolean)
    lookAt(pos: any)
}