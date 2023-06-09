import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import state from '../store';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import {lightenColor} from '../config/helpers'

const CanvasModel = () => {
  const snap = useSnapshot(state);
  const color = state.color; 
  const lighterColor = lightenColor(color, 0.2); // Lighter background color

  
  return (
    <Canvas
      shadows
      camera={{position: [0,0,0], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
      className='w-full max-w-full h-full transition-all ease-in'
      style={{backgroundColor: lighterColor}}
    >
      <ambientLight intensity={0.5} />
      <Environment path="/hdri/" files="potsdamer_platz_1k.hdr" />
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel