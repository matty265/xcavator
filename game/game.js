var p;
var enemies;
var level;
var needsRedraw = true

function draw() {
    if(needsRedraw){

        background(0)
        frameRate(30)
        noStroke()
        drawLevel(level)

        enemies.forEach( (enemy) => enemy.show() )

        p.show()

        needsRedraw = false
    }
}

function setup() {
    createCanvas(dimensions.width*cellsize, dimensions.height*cellsize)
    p = inherit(player,entity)
    enemies = []
    level = level1

    spawnEnemies(level,1)
        .forEach( (enemy) => enemies.push(enemy) )
}

function keyPressed(){
    // LEFT: (72,h) (65,a)
    // DOWN: (74,j) (83,s)
    // UP: (75,k) (87,w)
    // RIGHT: (76,l) (68,d)

    if(keyCode == 72 || keyCode == LEFT_ARROW || keyCode == 65){
        p.move(-1,0)
    } else if (keyCode == 74 || keyCode == DOWN_ARROW || keyCode == 83){
        p.move(0,1)
    } else if (keyCode == 75 || keyCode == UP_ARROW || keyCode == 87){
        p.move(0,-1)
    } else if (keyCode == 76 || keyCode == RIGHT_ARROW || keyCode == 68){
        p.move(1,0)
    }

    needsRedraw = true

}