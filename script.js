let index = 0;

function changeColors() {
    let colors = ["red", "blue", "orange", "yellow", "green", "purple", "white", "chocolate"]

		// document.getElementsByTagName("body")[0].style.background = colors[index++];
    // Compliments of Tarek Visch
    document.body.style.background = colors[index++];

    if (index > colors.length - 1)
      index = 0;
}