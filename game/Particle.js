class Particle
{
    constructor(_x,_y,_targetX,_targetY,_diametre,_oscillationMinimum,_oscillationWidth,_finished,_style)
    {
        this.x = _x
        this.y = _y
        this.targetX = _targetX
        this.targetY = _targetY
        this.diametre = _diametre
        this.vectorN = this.x - this.targetX
        this.snoflakeRadius = this.x - this.targetX
        this.finished = _finished
        this.oscillationMinimum = _oscillationMinimum
        this.oscillationWidth = _oscillationWidth
        this.style = _style
    }

    move()
    {
        let oscillation = random(-(this.oscillationMinimum+random(this.oscillationWidth)),(this.oscillationMinimum+random(this.oscillationWidth)))
        oscillation = oscillation * this.vectorN / this.snoflakeRadius

        this.vectorN = sqrt((this.x - this.targetX) * (this.x - this.targetX) + (this.y - this.targetY) * (this.y - this.targetY))
        this.x -= 1
        this.y += oscillation
    }

    show()
    {
        switch(this.style)
        {
            case 1:
                fill(255)
                noStroke()
                break;

            case 2:
                fill(random(123,255))
                noStroke()
                break;
        
            case 3:
                fill(random(0,255))
                stroke(255)
                strokeWeight(1)
                break;

            case 4:
                fill(random(0,255),random(0,255),random(0,255))
                noStroke()
                break;
        }
        circle(this.x,this.y,this.diametre)
    }

    rotate(amount)
    {
        let newx;
        let newy;
        newx = (this.x - this.targetX) * cos(amount) - (this.y - this.targetY) * sin(amount) + this.targetX;
        newy = (this.x - this.targetX) * sin(amount) + (this.y - this.targetY) * cos(amount) + this.targetY;
        this.x = newx;
        this.y = newy;
    }
}