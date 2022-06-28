x_nose=0;
y_nose=0;

x_rightWrist=0;
x_leftWrist=0;

difference=0;


function setup(){
    canvas=createCanvas(350,350);
    canvas.center();

    video=createCapture(VIDEO);
    video.size(300,300);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}


function modelLoaded(){
    console.log("PoseNet is on and running");
}

function gotPoses(results,error){
    if (error){
        console.error(error);
    }
else if(results.length>0){
console.log(results);

x_nose=results[0].pose.nose.x;
y_nose=results[0].pose.nose.y;

x_leftWrist=results[0].pose.leftWrist.x;

x_rightWrist=results[0].pose.rightWrist.x;


difference=floor(x_leftWrist-x_rightWrist);
}

}


function draw(){
    background(18, 225, 139);
    document.getElementById("W&H").innerHTML="The Width And Height of the square is-- " + difference + "px";
    fill("coral");
    stroke("brown");
    square(x_nose,y_nose,difference);
}