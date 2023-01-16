let resolution = Math.min(window.innerWidth, window.innerHeight)
function setup(){
    const canvas = createCanvas(resolution, resolution)
    canvas.parent('sketch-holder')
    noLoop()
}
function draw(){
    background('#0f0f0f')
}
function windowResized(){
    resolution = Math.min(window.innerWidth, window.innerHeight)
    resizeCanvas(resolution,resolution)
}