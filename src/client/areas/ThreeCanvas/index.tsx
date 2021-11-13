import React, {Suspense} from 'react';
import { io } from 'socket.io-client';

// THREE
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky} from '@react-three/drei';
// COMPONENTS
import World from './components/world/World';

const socket = io("http://localhost:3000");

function emitEvent(event: string): void {
	socket.emit(event)
}


function ThreeCanvas() {
	return (
		<main className="container">
			<div className="TopBar">
				<button className="Button UI" onClick={() => emitEvent("lookAtNearestPlayer")}> Look at nearest player! </button>
				<button className="Button UI" onClick={() => emitEvent("getBlockData")}> Get Block Data! </button>
			</div>
			<div className="Canvas">
			<Canvas className="canvas">
				<OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined}/>
				<Sky distance={450000} sunPosition={[5, 1, 8]} inclination={0} azimuth={0.25}/>
				<ambientLight intensity={0.5}/>
				<Suspense fallback={null}>
					<World/>
				</Suspense>
			</Canvas>
			</div>
		</main>
	);
};

export default ThreeCanvas;