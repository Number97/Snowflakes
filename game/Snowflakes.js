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
let buton3X = -470
let buton4X = -410
let buton5X = -350
let buton6X = -290

let buton1Y = -480
let buton2Y = -430
let buton3Y = 430
let buton4Y = 430
let buton5Y = 430
let buton6Y = 430

let butonSize = 40

let style = 1

function setup()
{
    createCanvas(1000,1000)
    translate(500,500)
    mySnowflake = new Snowflake(0,0,diametreOfSnowflake,particleSize,minumumOscillation,maximumOscillation,style)
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

        switch(style)
        {
            case 1:
                fill(255,0,0)
                rect(buton3X + 10,buton3Y + 10,butonSize - 20,butonSize - 20)
                fill(0,255,0)
                rect(buton4X,buton4Y,butonSize,butonSize)
                rect(buton5X,buton5Y,butonSize,butonSize)
                rect(buton6X,buton6Y,butonSize,butonSize)
                break;
        
            case 2:
                fill(255,0,0)
                rect(buton4X + 10,buton4Y + 10,butonSize - 20,butonSize - 20)
                fill(0,255,0)
                rect(buton3X,buton3Y,butonSize,butonSize)
                rect(buton5X,buton5Y,butonSize,butonSize)
                rect(buton6X,buton6Y,butonSize,butonSize)
                break;

            case 3:
                fill(255,0,0)
                rect(buton5X + 10,buton5Y + 10,butonSize - 20,butonSize - 20)
                fill(0,255,0)
                rect(buton3X,buton3Y,butonSize,butonSize)
                rect(buton4X,buton4Y,butonSize,butonSize)
                rect(buton6X,buton6Y,butonSize,butonSize)
                break;

            case 4:
                fill(255,0,0)
                rect(buton6X + 10,buton6Y + 10,butonSize - 20,butonSize - 20)
                fill(0,255,0)
                rect(buton3X,buton3Y,butonSize,butonSize)
                rect(buton4X,buton4Y,butonSize,butonSize)
                rect(buton5X,buton5Y,butonSize,butonSize)
                break;
        }

        fill(0)
        rect(-500,-500,280,340)
        fill(255)
        strokeWeight(0)
        text("Particle size = " + particleSize,-480,-483)
        text("Snowflake size = " + diametreOfSnowflake,-480,-443)
        text("Minimum oscillation = " + minumumOscillation,-480,-403)
        text("Maximum oscillation = " + (minumumOscillation + maximumOscillation),-480,-363)
        text("Generating speed = " + speed,-480,-323)
        text('Press to generate snowflake', 300, -456)
        text('Press to reset to default presets', 300, -406)
        text('Press to select style', -470, 358)

        switch(style)
        {
            case 1:
                text('Current style: ', -470, 405)
                fill(255)
                textSize(22)
                text('Basic', -390, 405)
                textSize(12)
                break;

            case 2:
                text('Current style: ', -470, 405)
                fill(random(123,255))
                textSize(22)
                text('Greyish', -390, 405)
                textSize(12)
                break;
        
            case 3:
                text('Current style: ', -470, 405)
                fill(random(0,255))
                strokeWeight(1)
                stroke(255)
                textSize(22)
                text('Black to white with borders', -390, 405)
                textSize(12)
                break;

            case 4:
                text('Current style: ', -470, 405)
                fill(random(0,255),random(0,255),random(0,255))
                textSize(22)
                text('Epileptic', -390, 405)
                textSize(12)
                break;
        }


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
            mySnowflake = new Snowflake(0,0,diametreOfSnowflake,particleSize,minumumOscillation,maximumOscillation,style)
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

        if((mouseX >=  buton3X + 500) && (mouseX <= buton3X + butonSize + 500) && (mouseY >= buton3Y + 500) && (mouseY <= buton3Y + butonSize + 500))
        {
            fill(0)
            strokeWeight(0)
            rect(buton3X,buton3Y,butonSize,butonSize)
            rect(-485,345,400,70)
            style = 1
        }

        if((mouseX >=  buton4X + 500) && (mouseX <= buton4X + butonSize + 500) && (mouseY >= buton4Y + 500) && (mouseY <= buton4Y + butonSize + 500))
        {
            fill(0)
            strokeWeight(0)
            rect(buton4X,buton4Y,butonSize,butonSize)
            rect(-485,345,400,70)
            textSize(12)
            style = 2
        }

        if((mouseX >=  buton5X + 500) && (mouseX <= buton5X + butonSize + 500) && (mouseY >= buton5Y + 500) && (mouseY <= buton5Y + butonSize + 500))
        {
            fill(0)
            strokeWeight(0)
            rect(buton5X,buton5Y,butonSize,butonSize)
            rect(-485,345,400,70)
            style = 3
        }

        if((mouseX >=  buton6X + 500) && (mouseX <= buton6X + butonSize + 500) && (mouseY >= buton6Y + 500) && (mouseY <= buton6Y + butonSize + 500))
        {
            fill(0)
            strokeWeight(0)
            rect(buton6X,buton6Y,butonSize,butonSize)
            rect(-485,345,400,70)
            style = 4
        }
    } 
}