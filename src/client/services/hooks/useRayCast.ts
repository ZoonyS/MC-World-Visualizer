import { useState, useCallback } from 'react'
import { Camera, useThree } from '@react-three/fiber'
import { Object3D, Raycaster, Vector2 } from 'three'

export default function useRayCast(targets: Object3D<Event>[]) {
    const [raycaster] = useState(() => new Raycaster());
    const [mouse] = useState(() => new Vector2())

    const camera: Camera = useThree(state => state.camera)

    const intersect = useCallback(() => {   
 
       raycaster.setFromCamera(mouse, camera)
       raycaster.intersectObjects(targets)
 
     }, [raycaster])
 
    return intersect
 }