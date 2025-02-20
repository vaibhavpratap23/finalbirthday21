let highestZ = 1;

class Paper {
  holdingPaper = false;
  mouseTouchX = 0;
  mouseTouchY = 0;
  mouseX = 0;
  mouseY = 0;
  prevMouseX = 0;
  prevMouseY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 30 - 15;
  currentPaperX = 0;
  currentPaperY = 0;
  rotating = false;

  init(paper) {
    this.paper = paper;

    // Mouse event listeners
    document.addEventListener('mousemove', (e) => {
      this.handleMove(e.clientX, e.clientY);
    });

    paper.addEventListener('mousedown', (e) => {
      if (e.button === 0) {
        this.handleStart(e.clientX, e.clientY);
      }
      if (e.button === 2) {
        this.rotating = true;
      }
    });

    window.addEventListener('mouseup', () => {
      this.handleEnd();
    });

    // Touch event listeners
    document.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      this.handleMove(touch.clientX, touch.clientY);
      e.preventDefault(); // Prevent default touch behavior
    }, { passive: false });

    paper.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      this.handleStart(touch.clientX, touch.clientY);
      e.preventDefault(); // Prevent default touch behavior
    }, { passive: false });

    window.addEventListener('touchend', () => {
      this.handleEnd();
    });

    // Prevent context menu on right-click
    paper.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
  }

  handleMove(clientX, clientY) {
    if (!this.rotating) {
      this.mouseX = clientX;
      this.mouseY = clientY;

      this.velX = this.mouseX - this.prevMouseX;
      this.velY = this.mouseY - this.prevMouseY;
    }

    const dirX = clientX - this.mouseTouchX;
    const dirY = clientY - this.mouseTouchY;
    const dirLength = Math.sqrt(dirX * dirX + dirY * dirY);
    const dirNormalizedX = dirX / dirLength;
    const dirNormalizedY = dirY / dirLength;

    const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
    let degrees = (180 * angle) / Math.PI;
    degrees = (360 + Math.round(degrees)) % 360;
    if (this.rotating) {
      this.rotation = degrees;
    }

    if (this.holdingPaper) {
      if (!this.rotating) {
        this.currentPaperX += this.velX;
        this.currentPaperY += this.velY;
      }
      this.prevMouseX = this.mouseX;
      this.prevMouseY = this.mouseY;

      this.paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
    }
  }

  handleStart(clientX, clientY) {
    if (this.holdingPaper) return;
    this.holdingPaper = true;

    this.paper.style.zIndex = highestZ;
    highestZ += 1;

    this.mouseTouchX = clientX;
    this.mouseTouchY = clientY;
    this.prevMouseX = clientX;
    this.prevMouseY = clientY;
  }

  handleEnd() {
    this.holdingPaper = false;
    this.rotating = false;
  }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach((paper) => {
  const p = new Paper();
  p.init(paper);
});