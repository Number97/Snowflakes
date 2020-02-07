let mySnowflake

function setup()
{
    createCanvas(1000,1000)
    translate(500,500)
    mySnowflake = new Snowflake(0,0,800,5,3,1)
}

function draw()
{
    stroke(255)
    strokeWeight(1)
    background(0)
    text('Press R to restart', 800, 100)
    translate(500,500)
    for(let i=0;i<100;i++)
    {
        mySnowflake.advance()
    }
    mySnowflake.show()
}

function keyPressed()
{
    if ((key == 'R') || (key == 'r'))
    {
        mySnowflake = new Snowflake(0,0,800,5,3,1)
    }
}