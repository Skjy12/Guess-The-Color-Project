window.onload = function () {
    var numOfSquares = 6;
    var colors = [];
    var pickedColor;
    var squares = document.getElementsByClassName('square');
    var colorDisplay = document.getElementById('colorDisplay');
    var message = document.querySelector('#message');
    var h1 = document.querySelector('h1');
    var modeButtons = document.querySelectorAll('.mode');
    var resetButton = document.querySelector('#reset');

    init();

    function init() {
        setupModeButtons();
        setupSquares();
        reset();
    }

    function setupModeButtons() {
        for (var i = 0; i < modeButtons.length; i++) {
            modeButtons[i].addEventListener('click', function () {
                modeButtons[0].classList.remove('selected');
                modeButtons[1].classList.remove('selected');
                this.classList.add('selected');
                this.textContent === 'Easy' ? numOfSquares = 3 : numOfSquares = 6;
                reset();
            });
        }
    }

    function setupSquares() {
        for (var i = 0; i < squares.length; i++) {
            squares[i].addEventListener('click', function () {
                var clickedColor = this.style.backgroundColor;
                if (clickedColor === pickedColor) {
                    message.textContent = 'Correct!';
                    changeColors(clickedColor);
                    h1.style.backgroundColor = clickedColor;
                    resetButton.textContent = 'Play Again?';
                } else {
                    this.style.backgroundColor = '#232323';
                    message.textContent = 'Try Again';
                }
            });
        }
    }

    function reset() {
        colors = generateRandomColors(numOfSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        resetButton.textContent = 'New Colors';
        message.textContent = '';
        for (var i = 0; i < squares.length; i++) {
            if (colors[i]) {
                squares[i].style.display = 'block';
                squares[i].style.backgroundColor = colors[i];
            } else {
                squares[i].style.display = 'none';
            }
        }
        h1.style.backgroundColor = 'steelblue';
    }

    resetButton.addEventListener('click', function () {
        reset();
    });

    function changeColors(color) {
        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = color;
        }
    }

    function generateRandomColors(num) {
        var arr = [];
        for (var i = 0; i < num; i++) {
            arr.push(randomColor());
        }
        return arr;
    }

    function randomColor() {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);
        return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    }

    function pickColor() {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }
};
