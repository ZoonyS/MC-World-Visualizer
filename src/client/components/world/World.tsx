import React, { ReactElement } from 'react'
import useBlockData from '../../services/hooks/useBlockData'
import Block from '../blocks/Block'

function World(): ReactElement {

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