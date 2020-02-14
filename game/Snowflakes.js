let mySnowflake
let particleSize = 2.5
let particleSizeSlider
let diametreOfSnowflake = 500
let diametreOfSnowflakeSlider
let minumumOscillation = 3
let minumumOscillationSlider
let maximumOscillation = 10
let maximumOscillationSlider

function setup()
{
    createCanvas(1000,1000)
    translate(500,500)
    mySnowflake = new Snowflake(0,0,diametreOfSnowflake,particleSize,minumumOscillation,maximumOscillation)
    background(0)
    particleSizeSlider = createSlider(1, 10, 2.5, 0.25);
    diametreOfSnowflakeSlider = createSlider(1, 800, 500, 1);
    minumumOscillationSlider = createSlider(0, 10, 3, 1);
    maximumOscillationSlider = createSlider(0, 10, 10, 1);
}

function draw()
{
    translate(500,500)
    if(!mySnowflake.finished)
    {
        particleSizeSlider.position(-100, -100);
        diametreOfSnowflakeSlider.position(-100, -100);
        minumumOscillationSlider.position(-100, -100);
        maximumOscillationSlider.position(-100, -100);
        for(let i=0;i<2500/particleSize;i++)
        {
            mySnowflake.advance()
        }
    }
    else
    {
        fill(0)
        noStroke()
        rect(-500,-500,280,140)
        fill(255)
        strokeWeight(0)
        text("Particle size = " + particleSize,-480,-483)
        text("Snowflake size = " + diametreOfSnowflake,-480,-443)
        text("Minimum oscillation = " + minumumOscillation,-480,-403)
        text("Minimum oscillation = " + (minumumOscillation + maximumOscillation),-480,-363)
        text('Press G to generate snowflake', 300, -450)
        text('Press R to reset to default presets', 300, -430)

        particleSizeSlider.position(20, 20);
        particleSize = particleSizeSlider.value()
        diametreOfSnowflakeSlider.position(20, 60);
        diametreOfSnowflake = diametreOfSnowflakeSlider.value()
        minumumOscillationSlider.position(20, 100);
        minumumOscillation = minumumOscillationSlider.value()
        maximumOscillationSlider.position(20, 140);
        maximumOscillation = maximumOscillationSlider.value()
    }
}

function keyPressed()
{
    if ((key == 'G') || (key == 'g'))
    {
        mySnowflake = new Snowflake(0,0,diametreOfSnowflake,particleSize,minumumOscillation,maximumOscillation)
        background(0)
    }

    if ((key == 'R') || (key == 'r'))
    {
        particleSizeSlider.value(2.5)
        diametreOfSnowflakeSlider.value(500)
        minumumOscillationSlider.value(3)
        maximumOscillationSlider.value(10)
    }
}