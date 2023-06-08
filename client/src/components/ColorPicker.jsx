import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio';
import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute translate-y-[65%] sm:translate-y-0 left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          "#000",
          "#ccc",
          "#efbd4e",
          "#726de8",
          "#353934",
          "#2ccce4",
          "#c19277",
          "#ff96ad",
          "#512314",
          "#5f123d",
          "#353934"
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker