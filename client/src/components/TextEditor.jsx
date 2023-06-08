import React from 'react'
import { useSnapshot } from 'valtio';
import state from '../store';

const TextEditor = ({ text, size, color, style }) => {

  const snap = useSnapshot(state);
 

  return (
    <div className="texteditor-container translate-y-[65%] sm:translate-y-0">
      <textarea 
        placeholder="Type your sentence here..."
        rows={2}
        value={text} 
        className="texteditor-textarea"
        onChange={(e) => {
          // state.isLogoTexture = false;
          state.isFullTexture= false;
          state.text = e.target.value
        }}
      />
      <div className="flex">
        <label htmlFor="size">Text Size:</label>
        <select id="size" value={size} onChange={(e) => state.size = e.target.value}>
          <option value={50}>Small</option>
          <option value={70}>Medium</option>
          <option value={100}>Large</option>
        </select>
      </div>
      <div className="flex">
        <label htmlFor="color">Text Color:</label>
        <select id="color" value={color} onChange={(e) => state.fontColor = e.target.value}>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
      </div>
      <div className="flex">
        <label htmlFor="color">Style:</label>
        <select id="style" value={style} onChange={(e) => state.fontStyle = e.target.value}>
          <option value="normal">Normal</option>
          <option value="italic">Italic</option>
        </select>
      </div>
      
    </div>
  )
}

export default TextEditor