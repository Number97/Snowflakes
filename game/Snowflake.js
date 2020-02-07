class Snowflake
{
    constructor(_x,_y,_diametre,_flakediametre,_oscillationMinimum,_oscillationWidth)
    {
        this.x = _x
        this.y = _y
        this.diametre = _diametre
        this.flakediametre = _flakediametre
        this.snowflakes = []
        this.finished = false
        this.oscillationMinimum = _oscillationMinimum
        this.oscillationWidth = _oscillationWidth
        this.current = 0
        this.snowflakes.push(new Particle(this.diametre/2,0,this.x,this.y,this.flakediametre,this.oscillationMinimum,this.oscillationWidth))
    }

    advance()
    {
        print(this.snowflakes.length)
        this.checkContact()
        if(this.snowflakes[this.current].finished)
        {
            this.createMirrors()
            this.snowflakes.push(new Particle(this.diametre/2,0,this.x,this.y,this.flakediametre,this.oscillationMinimum,this.oscillationWidth))
            this.current++
        }
        else
        {
            this.snowflakes[this.current].move()
        }
    }

    show()
    {
        for(let i=0;i<this.current+1;i++)
        {
            this.snowflakes[i].show()
        }
    }

    checkContact()
    {
        if((this.snowflakes[this.current].x < this.x))
        {
            this.snowflakes[this.current].finished = true
        }
        else
        {
            for(let i=0;i<this.current;i++)
            {
                if((sqrt((this.snowflakes[i].x - this.snowflakes[this.current].x) * (this.snowflakes[i].x - this.snowflakes[this.current].x) + (this.snowflakes[i].y - this.snowflakes[this.current].y) * (this.snowflakes[i].y - this.snowflakes[this.current].y)) < this.flakediametre*2))
                {
                    this.snowflakes[this.current].finished = true
                }
            }
        }
        
    }

    createMirrors()
    {
        this.snowflakes.push(new Particle(this.snowflakes[this.current].x,-this.snowflakes[this.current].y,this.x,this.y,this.flakediametre,this.oscillationMinimum,this.oscillationWidth))
        this.current++

        for(let i=0;i<5;i++)
        {
            this.snowflakes.push(new Particle(this.snowflakes[this.current].x,this.snowflakes[this.current].y,this.x,this.y,this.flakediametre,this.oscillationMinimum,this.oscillationWidth))
            this.snowflakes[this.current + 2 * (i+1)-1].rotate(PI * (i+1) / 3)


            this.snowflakes.push(new Particle(this.snowflakes[this.current].x,-this.snowflakes[this.current].y,this.x,this.y,this.flakediametre,this.oscillationMinimum,this.oscillationWidth))
            this.snowflakes[this.current + 2 * (i+1)].rotate(PI * (i+1) / 3)
        }
        this.current += 10
    }
}