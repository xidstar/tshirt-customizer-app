export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas");
  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");

  link.href = dataURL;
  link.download = "canvas.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });

export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};


export const lightenColor = (color, amount) => {
  // Parse the color string into RGB components
  const red = parseInt(color.slice(1, 3), 16);
  const green = parseInt(color.slice(3, 5), 16);
  const blue = parseInt(color.slice(5, 7), 16);

  // Calculate the lighter color components
  const lighterRed = Math.floor(red + (255 - red) * amount);
  const lighterGreen = Math.floor(green + (255 - green) * amount);
  const lighterBlue = Math.floor(blue + (255 - blue) * amount);

  // Convert the lighter color components back to hexadecimal
  const lighterHex =
    '#' +
    lighterRed.toString(16).padStart(2, '0') +
    lighterGreen.toString(16).padStart(2, '0') +
    lighterBlue.toString(16).padStart(2, '0');

  return lighterHex;
};
