// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width=80, height=60){
    this.width = width;
    this.height = height;
  
}

Size.prototype.resize = function(newWidth, newHeight){
    this.width = newWidth;
    this.height = newHeight;
}

export class Position{
  constructor(x=0, y=0)
  {
    this.x = x;
    this.y = y;
  }
  move(newX, newY)
  {
    this.x = newX;
    this.y = newY
  }
}



// Define the ProgramWindow class
export class ProgramWindow{
  constructor() {
    // Fixed screen size
    this.screenSize = new Size(800, 600);
    // Default size for the window
    this.size = new Size();
    // Default position for the window
    this.position = new Position();
  }
  
  resize(newSize){
     // Calculate the maximum allowed width and height based on current position
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    // Clip the new width and height based on the constraints
    const newWidth = Math.max(1, Math.min(newSize.width, maxWidth));
    const newHeight = Math.max(1, Math.min(newSize.height, maxHeight));

    // Apply the new width and height
    this.size.width = newWidth;
    this.size.height = newHeight;
  }

  move(newPosition){
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = Math.max(0, Math.min(newPosition.x, maxX));
    const newY = Math.max(0, Math.min(newPosition.y, maxY));

    this.position.x = newX;
    this.position.y = newY;
  }
}

export function changeWindow(programWindow){
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100,150));

  return programWindow
}