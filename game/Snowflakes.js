let mySnowflake
let particleSize = 10
let particleSizeSlider

function setup()
{
    createCanvas(1000,1000)
    translate(500,500)
    mySnowflake = new Snowflake(0,0,800,particleSize,0,8)
    background(0)
    particleSizeSlider = createSlider(0, 10, 100);
}

function draw()
{
    stroke(255)
    strokeWeight(1)
    text('Press R to restart', 800, 100)
    translate(500,500)
    if(!mySnowflake.finished)
    {
        particleSizeSlider.position(-100, -100);
        for(let i=0;i<2500/particleSize;i++)
        {
            mySnowflake.advance()
        }
    }
    else
    {
        particleSizeSlider.position(20, 20);
        fill(0)
        noStroke()
        rect(-500,-500,280,50)
        stroke(255)
        strokeWeight(1)
        text("Particle size = " + particleSize,-460,-483)
        particleSize = particleSizeSlider.value()
    }
}

function keyPressed()
{
    if ((key == 'R') || (key == 'r'))
    {
        mySnowflake = new Snowflake(0,0,800,particleSize,0,8)
        background(0)
    }
}