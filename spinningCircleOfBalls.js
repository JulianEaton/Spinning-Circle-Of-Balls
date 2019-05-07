window.onload = function()
{
    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;

    var centreX = width / 2,
        centreY = height / 2,
        radius = 200,
        speed = 0.01,
        numBalls = 20,
        angle = Math.PI * 2 / numBalls,
        x,y;
    
    rotatingCircleOfBalls();
    
    function rotatingCircleOfBalls()
    {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, width, height);
        
        for (var i = 0; i < numBalls; i++)
        {
            x =  centreX + Math.cos(angle * ( i + speed ) ) * radius ;
            y =  centreY + Math.sin(angle * ( i + speed ) ) * radius ;

            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2, false);
            ctx.fillStyle = 'green'
            ctx.fill();
         }
        requestAnimationFrame(rotatingCircleOfBalls)
            speed += 0.03;
    }
}



