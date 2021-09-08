function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(450, 250);
    video = createCapture(VIDEO);
    video.hide();
}   

function draw()
{
    image(video, 120, 120, 400, 280);

    fill(255, 0, 0)
    stroke(255, 0, 0)
    circle(50, 50, 80)

    fill(73, 234, 110)
    stroke(73, 234, 110)
    rect(90, 40, 460, 20)

    fill(118, 16, 167)
    stroke(118, 16, 167)
    square(550, 15, 80)

    fill(73, 234, 110)
    stroke(73, 234, 110)
    rect(90, 450, 460, 20)

    fill(118, 16, 167)
    stroke(118, 16, 167)
    square(10, 420, 80)

    fill(73, 234, 110)
    stroke(73, 234, 110)
    rect(40, 90, 20, 330)

    fill(255, 0, 0)
    stroke(255, 0, 0)
    circle(590, 460, 80)

    fill(73, 234, 110)
    stroke(73, 234, 110)
    rect(580, 90, 20, 330)
}

function take_snapshot()
{
    save('myImage.png');
}