var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 3, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 3, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 0, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 2, 2, 1, 2, 4, 0, 0, 0, 7, 2, 1, 2, 2, 2, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 0, 5, 0, 6, 0, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
]

// -----------Container for Score-----------
var score = 0;

// -----------This sets pacman's starting position-----------
var pacman = {
    x: 10,
    y: 13,
};

// -----------Spawns World-----------
function displayWorld() {
    var output = '';

    // -----------This loops through the rows-----------
    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'>\n";
        
        // -----------This loops through the columns-----------
        for (var j = 0; j < world[i].length; j++) {

            // -----------this spawns empty spaces-----------
            if (world[i][j] == 0)
                output += "<div class='empty'></div>";

            // -----------this spawns the coins-----------
            if (world[i][j] == 1)
                output += "<div class='coin'></div>";
                
            // -----------this spawns brick spaces-----------
            if (world[i][j] == 2)
                output += "<div class='brick'></div>";

            // -----------this spawns the cherry-----------
            if (world[i][j] == 3)
                output += "<div class='cherry'></div>";
            
            // -----------This spawns pink ghost-----------
            if (world[i][j] == 4)
            output += "<div class='pinky'></div>";

            // -----------This spawns red ghost-----------
                if (world[i][j] == 5)
                output += "<div class='blinky'></div>";
            
            // -----------This spawns blue ghost-----------
            if (world[i][j] == 6)
            output += "<div class='inky'></div>";

            // -----------This spawns orange ghost-----------
            if (world[i][j] == 7)
            output += "<div class='clive'></div>";

        }
        
        output += "\n</div>\n";
    }
    document.getElementById("world").innerHTML = output;
}

// -----------this updates pacman's position on map-----------
function displayPacman() {
    document.getElementById('pacman').style.left = pacman.x * 40 + "px"
    document.getElementById('pacman').style.top = pacman.y * 40 + "px"
}

// -----------Score Function-----------
function displayScore() {
    document.getElementById('score').innerHTML = score;
}

displayWorld();
displayPacman();
displayScore();

// -----------Transforms Pacmans Direction-----------
function updateDirection(direction) {
    var pacman = document.getElementById("pacman");
    pacman.className = direction;
}

// -----------Controls for Pacman-----------
document.onkeydown = function (e) {
    if (e.key == 'ArrowDown' && world[pacman.y + 1][pacman.x] != 2) {
        pacman.y++;
        updateDirection('down')
    }

    if (e.key == 'ArrowLeft' && world[pacman.y][pacman.x - 1] != 2) {
        pacman.x--;
        updateDirection('left');
    }

    if (e.key == 'ArrowRight' && world[pacman.y][pacman.x + 1] != 2) {
        pacman.x++;
        updateDirection('right');

    }

    if (e.key == 'ArrowUp' && world[pacman.y - 1][pacman.x] != 2) {
        pacman.y--;
        updateDirection('up');
    }

    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score += 50;
        displayWorld();
        displayScore();
    }

    if (world[pacman.y][pacman.x] == 3) {
        world[pacman.y][pacman.x] = 0;
        score += 150;
        displayWorld();
        displayScore();
    }

    console.log(e)
    displayPacman();
}


