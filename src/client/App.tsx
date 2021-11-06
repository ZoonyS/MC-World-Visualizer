import React, {Suspense, useRef, MutableRefObject} from 'react';
import { io } from 'socket.io-client';

// THREE
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sky} from '@react-three/drei';

// COMPONENTS
import World from './components/world/World';
import useBlockData from './services/hooks/useBlockData';

// SERVICES	
import useRayCast from './services/hooks/useRayCast'
import { Object3D } from 'three';

const socket = io("http://localhost:3000");


function emitEvent(event: string): void {
	socket.emit(event)
}


function App() {
	const ref = useRef<Object3D<Event>[] | null>(null) 

    const blockData = useBlockData()
    const getCast = useRayCast(ref.current)

    useFrame(() => {
        const Cast = getCast()
    })

	return (
		<main className="container">
			<div className="TopBar">
				<button className="Button" onClick={() => emitEvent("lookAtNearestPlayer")}> Look at nearest player! </button>
				<button className="Button" onClick={() => emitEvent("getBlockData")}> Get Block Data! </button>
			</div>
			<div className="Canvas">
			<Canvas className="canvas">
				<OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined}/>
				<Sky distance={450000} sunPosition={[5, 1, 8]} inclination={0} azimuth={0.25}/>
				<ambientLight intensity={0.5}/>
				<Suspense fallback={null}>
					<World ref={ref}/>
				</Suspense>
			</Canvas>
			</div>
		</main>
	);
};

export default App;