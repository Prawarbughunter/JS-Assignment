let color = ["blue", "Green", "yellow", "red","skyblue"];

  function changeColor() {
    setTimeout(function loop() {
      document.bgColor = color.shift();
      if (color.length) {
        setTimeout(loop, 5000);
      }
    }, 5000);
  }
  changeColor();

