class Obstacle2 extends Component {
    constructor(gameScreen) {
      super(
        gameScreen,
        Math.floor(Math.random() * 300 + 70),
        0,
        80,
        100,
        "./images/food.png"
      );
    }
    
      updatePosition() {
        // Update the obstacle's position based on the properties left and top
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }
    
      move() {
        // Move the obstacle down by 3px
        this.top += 2;
        // Update the obstacle's position on the screen
        this.updatePosition();
      }
    }
    