mustacheX=0;
mustacheY=0;


function preload(){
mustache=loadImage("https://i.postimg.cc/kMv88kHS/My-project.png")
}

function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
       console.log(results);
       mustacheX=results[0].pose.nose.x-33;
       mustacheY=results[0].pose.nose.y-10;
    }
}

function modelLoaded(){
        console.log('Posenet is initialized');
}

function draw(){
    image(video,0,0,400,300);
    image(mustache,mustacheX,mustacheY,70,50);
}

function Takesnapshot(){
    save("mustache_filter.jpg")
}