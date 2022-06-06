noseX=0;
noseY=0;
function preload(){
    clownnose=loadImage('https://i.postimg.cc/FsMgx6nw/clownnose.png')
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();

   video=createCapture(VIDEO);
   video.size(300,300);
   video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
   
}
function modelLoaded(){
    console.log("pose net is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX);
        console.log("noseY="+noseY);
    }
}
function take_snapshot(){
save('myfilterimg.png');
}
function draw(){
    image(video,0,0,300,300);
    image(clownnose,noseX-15,noseY-15,30,30);
}