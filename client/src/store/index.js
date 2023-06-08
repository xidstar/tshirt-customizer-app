import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: '#efbd48',
  text: '',
  font: 'Cherry Bomb One',
  fontColor: 'black',
  fontStyle: 'normal',
  size: 50,
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
})

export default state;