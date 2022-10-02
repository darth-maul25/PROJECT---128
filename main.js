song_1="";
song_2="";
leftWristX = 0;
leftWristY = 0;
rightWirstX = 0;
rightWirstY = 0;
function preload(){
    song_1 = loadSound("music-1.mp3");
    song_2 = loadSound("music-2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,600,500);
}
function modelLoaded(){
    console.log("Pose Net model is loaded");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWristx = " + leftWristX + " LeftWristy =" + leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristx = " + rightWristX + " RightWristy =" + rightWristY);
        scoreLeftwrist = results[0].pose.keypoints[9].score;

    }
}