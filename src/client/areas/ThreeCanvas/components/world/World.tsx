import React, { ReactElement } from 'react'
import useBlockData from '../../services/hooks/useBlockData'
import Block from '../blocks/Block'
import { Object3D } from 'three';


function World(): ReactElement<Object3D<Event>[]> {

    const blockData = useBlockData()

    return (
        <>
        {blockData.map((BlockData, index) => {
            return(
                <Block key={index} position={BlockData.position} blockType={BlockData.block.name}/>
            )
        })} 
        </>
    )
}

export default World;