class Obstacle extends Component {
  constructor(gameScreen) {
    super(
      gameScreen,
      Math.floor(Math.random() * 700 + 70),
      0,
      80,
      100,
      "./images/badfood.png"
    );
  }
  
    updatePosition() {
      // Update the obstacle's position based on the properties left and top
      this.element.style.left = `${this.left}px`;
      this.element.style.top = `${this.top}px`;
    }
  
    move() {
      // Move the obstacle down by 3px
      this.top += 3;
      // Update the obstacle's position on the screen
      this.updatePosition();
    }
  }
  