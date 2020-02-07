class Particle
{
    constructor(_x,_y,_targetX,_targetY,_diametre,_oscillationMinimum,_oscillationWidth,_finished)
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
        fill(255)
        noStroke()
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