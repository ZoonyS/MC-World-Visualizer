import React, { ReactElement, useRef, useState, useCallback } from 'react';
import {  Vector3 } from 'three'
import { useTexture } from '@react-three/drei'

import { getTextureFromName } from '../../../../services/utility/getTextureFromName'

interface Props {
    position: Vector3
    blockType: string
}

export default function Block({position, blockType}: Props): ReactElement {
    const mesh = useRef()   
    const [hover, setHover] = useState({isHovered: false})

    const texture: string = getTextureFromName(blockType)    
    const textureMap = useTexture(texture)
    
    let stop: boolean = false

    const onPointerOver = useCallback((e) => {
        e.stopPropagation()
        setHover({...hover, isHovered: true})
    }, []);

    const onPointerOut = useCallback((e) => {
        e.stopPropagation()
        setHover({...hover, isHovered: false})
    }, []);

    return (
        <mesh ref={mesh} position={position} 
        scale={hover.isHovered ? [1.25,1.25,1.25] : [1,1,1]}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
        >
            <boxGeometry args={[1, 1, 1]}/>
            <meshStandardMaterial map={textureMap}/>
        </mesh>
    );
}