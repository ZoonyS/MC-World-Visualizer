import {useState, useEffect} from 'react'
import { io } from 'socket.io-client';

export default function useBlockData() {
    const [blockData, setBlockData] = useState([])

    useEffect(() => {
        const socket = io("http://localhost:3000");
        socket.on("connect", () => {
            setInterval(() => {socket.emit('getBlockData')},10000)
            socket.on('setBlockData', (BlockData) => {
                setBlockData(BlockData)
                console.log(BlockData)
            })
        })
        return () => {
            socket.off('setBlockData')
        };
    }, [blockData]);
    return blockData
}