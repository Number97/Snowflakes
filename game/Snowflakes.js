let mySnowflake
let particleSize = 2

function setup()
{
    createCanvas(1000,1000)
    translate(500,500)
    mySnowflake = new Snowflake(0,0,800,particleSize,0,8)
    background(0)
}

function draw()
{
    stroke(255)
    strokeWeight(1)
    text('Press R to restart', 800, 100)
    translate(500,500)
    for(let i=0;i<2500/particleSize;i++)
    {
        mySnowflake.advance()
    }
}

function keyPressed()
{
    if ((key == 'R') || (key == 'r'))
    {
        mySnowflake = new Snowflake(0,0,800,particleSize,0,8)
    }
    background(0)
}