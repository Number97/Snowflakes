let mySnowflake
let particleSize = 2.25
let particleSizeSlider
let diametreOfSnowflake = 650
let diametreOfSnowflakeSlider
let minumumOscillation = 3
let minumumOscillationSlider
let maximumOscillation = 6
let maximumOscillationSlider
let speed = 3
let speedSlider
let buton1X = 250
let buton2X = 250
let buton1Y = -480
let buton2Y = -430
let butonSize = 40

function setup()
{
    createCanvas(1000,1000)
    translate(500,500)
    mySnowflake = new Snowflake(0,0,diametreOfSnowflake,particleSize,minumumOscillation,maximumOscillation)
    background(0)
    particleSizeSlider = createSlider(1, 10, 2.25, 0.25);
    diametreOfSnowflakeSlider = createSlider(1, 800, 650, 1);
    minumumOscillationSlider = createSlider(0, 10, 3, 1);
    maximumOscillationSlider = createSlider(0, 10, 6, 1);
    speedSlider = createSlider(1, 10, 3, 1)
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
        speedSlider.position(-100, -100);
        for(let i=0;i<500*speed/particleSize;i++)
        {
            mySnowflake.advance()
        }
    }
    else
    {
        noStroke()
        fill(77,166,255)
        rect(buton1X,buton1Y,butonSize,butonSize)
        fill(255,119,51)
        rect(buton2X,buton2Y,butonSize,butonSize)
        fill(0)
        rect(-500,-500,280,340)
        fill(255)
        strokeWeight(0)
        text("Particle size = " + particleSize,-480,-483)
        text("Snowflake size = " + diametreOfSnowflake,-480,-443)
        text("Minimum oscillation = " + minumumOscillation,-480,-403)
        text("Minimum oscillation = " + (minumumOscillation + maximumOscillation),-480,-363)
        text("Generating speed = " + speed,-480,-323)
        text('Press to generate snowflake', 300, -456)
        text('Press to reset to default presets', 300, -406)


        particleSizeSlider.position(20, 20);
        particleSize = particleSizeSlider.value()
        diametreOfSnowflakeSlider.position(20, 60);
        diametreOfSnowflake = diametreOfSnowflakeSlider.value()
        minumumOscillationSlider.position(20, 100);
        minumumOscillation = minumumOscillationSlider.value()
        maximumOscillationSlider.position(20, 140);
        maximumOscillation = maximumOscillationSlider.value()
        speedSlider.position(20, 180);
        speed = speedSlider.value()
    }
}

function mousePressed()
{
    if(mySnowflake.finished)
    {
        if((mouseX >=  buton1X + 500) && (mouseX <= buton1X + butonSize + 500) && (mouseY >= buton1Y + 500) && (mouseY <= buton1Y + butonSize + 500))
        {
            mySnowflake = new Snowflake(0,0,diametreOfSnowflake,particleSize,minumumOscillation,maximumOscillation)
            background(0)
        }

        if((mouseX >=  buton2X + 500) && (mouseX <= buton2X + butonSize + 500) && (mouseY >= buton2Y + 500) && (mouseY <= buton2Y + butonSize + 500))
        {
            particleSizeSlider.value(2.25)
            diametreOfSnowflakeSlider.value(650)
            minumumOscillationSlider.value(3)
            maximumOscillationSlider.value(6)
            speedSlider.value(3)
        }
    } 
}