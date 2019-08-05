//multimedia programming
//Assignment_repeat
//2837202-2837202-pjbhattachan@gmail.com
var weather;
var city;
var api='https://api.openweathermap.org/data/2.5/forecast/daily?q=';
var apiKey ='&APPID=ad6e239ec0ac58d0a9836e942aac97eb';
var units ='&cnt=16&units=metric';
var input;
var drop=[]; //declares an array named drop
function setup() {
          createCanvas(700, 500); // canvas is made up of 700px width and 500px height
          var button = select('#submit'); // submit button 
          button.mousePressed(weatherAsk);// weatherAsk function is called when mouse button is pressed
          input = select('#city'); // input to select city
}

function weatherAsk(){
          var url = api+input.value()+apiKey+units; // url is made up of api , apiKey , and units  and input value is done to select city
          loadJSON(url, gotData); // loads JSON file from a url
          
  
}

function gotData(data) { // get JSON data from api
           weather = data;
 
  
 for (var j = 0; j < 100; j++) {
    drop[j] = new Drop();
  
}
}
function draw(){
          background(0); // background color is black
 
          if(weather){ // wait until json is loaded
             
             var temp = weather.list[0].temp.max;
             var humidity = weather.list[0].humidity;
             ellipse(50, 270, humidity, humidity);
             text("Humidity", 10, 330);
             fill(255, 0, 0); // red color for ellipse indicating temperature
             ellipse(150, 270, temp, temp);
             text("Temp" , 120, 330);
             
             
             // displaying the weather information on screen
             textSize(20); // size of text letters
             stroke(255);
             text("City :" +weather.city.name, 0, 120); // displaying the name of city
             text("Forecast:" +weather.list[0].weather[0].description, 0, 150); // displaying  weather forcast information
             text("Temperature:" +weather.list[0].temp.max, 0, 180); // displaying temperature information
             text("Humidity:" +weather.list[0].humidity , 0, 210);
            
          if(weather.list[0].weather[0].main =="Clouds"){ // checking for clouds in JSON data from api
                              noStroke();
                              fill(255); // white color for clouds
                              //cloud1
          ellipse(50, 50, 60, 50); // ellipses are used to design clouds
          ellipse(80, 40, 60, 50);
          ellipse(130, 50, 60, 50);
          ellipse(70, 70, 60, 50);
          ellipse(110, 65, 60, 50);
          // cloud2
          ellipse(250, 50, 60, 50);
          ellipse(280, 40, 60, 50);
          ellipse(330, 50, 60, 50);
          ellipse(270, 70, 60, 50);
          ellipse(310, 65, 60, 50);
          // cloud3
          
           ellipse(450, 50, 60, 50);
          ellipse(480, 40, 60, 50);
          ellipse(530, 50, 60, 50);
          ellipse(470, 70, 60, 50);
          ellipse(510, 65, 60, 50);
                    
          }
          for(var i=0;i<weather.list.length;i++){
          if (weather.list[i].weather[0].main=="Rain"){ // checking rain or not in JSON data from api
        for (var j = drop.length - 1; j >= 0; j--) {
         drop[j].show();
         drop[j].fall();         
        }//end for loop j
          }
}

//sun
 //translate(200, 120);
            fill(232, 213, 130);
          ellipse(650, 50, 40, 40); // ellipse is used to design sun
          stroke(232, 213, 130);
          line(650, 10, 650, 50); //lines are  used to design sun
          line(650, 60,650,100);
          line(600, 50, 635, 50);
          line(665, 50, 695, 50);
          line(665, 35, 675, 25);
          line(625, 75, 635, 65);
          line(625, 25, 635, 35);
          line(660,60, 675, 75);

// tall skyscrapers2
for(var x= 500; x < 570; x +=20){
            for(var y=400; y<500; y+=20){
                      fill(134, 23, 100);
                      rect(x,y, 20, 20); // rect is used to design tall buidings
            }
}
// buildings1
for(var x= 20; x < 70; x +=20){
            for(var y=450; y<500; y+=20){
                      fill(134, 23, 100);
                      rect(x,y, 20, 20);
            }
}

// building3
for(var x= 600; x < 630; x +=20){
            for(var y=350; y<500; y+=20){
                      
                      fill(134, 23, 100);
                      rect(x,y, 20, 20);
            }
}
// mountains 
          fill(51, 66, 49); // color for mountains
          triangle(100, 500, 500, 500, 300, 200); // triangle is used to create mountain
          fill(52, 82, 48);
          triangle(300, 500, 500, 500, 400, 300);
          
          // tree 
          noStroke();
           fill(21, 115, 49);
          ellipse(160, 400, 30,25); //ellipse is used to create tree
          ellipse(190, 410, 35, 35);
          ellipse(140, 420, 40, 30);
          ellipse(170,420, 45, 40 );
          fill(120, 71, 7);
          rect(160, 438, 15,70); // rect is also used to create tree
          strokeWeight(3);
          stroke(120, 71, 7);
          line(140, 435, 160, 450); // lines are used to make branches of trees
          line(185,435, 175, 450);
          
          
          // stones and gravels
          fill(194, 128, 58);
          ellipse(150, 490, 25, 20);// different shapes of ellipses are used to make stones and gravels
          fill(52, 82, 48);
          ellipse(170, 485, 20, 30);
           fill(194, 128, 58);
          
          ellipse(190, 490, 25, 20);
          fill(92, 56, 17);
          ellipse(210, 490, 20, 20);
          ellipse(230,485,15,30);
          
          fill(43, 25, 5);
           ellipse(250, 490, 25, 20);
          fill(0);
          ellipse(270, 485, 20, 30);
           fill(194, 128, 58);
          
          ellipse(290, 490, 25, 20);
          fill(92, 56, 17);
          ellipse(310, 490, 20, 20);
          ellipse(330,485,15,30);
          
          fill(79, 43, 4);
           ellipse(350, 490, 25, 20);
          fill(0);
          ellipse(370, 485, 20, 30);
           fill(194, 128, 58);
          
          ellipse(390, 490, 25, 20);
          fill(79, 43, 4);
          ellipse(410, 490, 20, 20);
          fill(99, 70, 39);
          ellipse(430,485,15,30);
          
          


// design of flowers
translate(350, 450); // displacing flower by 250px width and 450px height
          for(var i=0; i<10; i++){
                    fill(255, 0, 0); //red color for flower
                   ellipse(0,10, 10, 20); // ellipses are used to make flower
                    rotate(PI/5); //rotating ellipses to make shape of flower
                    
                    
          }
          stroke(255);
          strokeWeight(2);
          stroke(120, 71, 7);
          line(0, 20, 0, 170);// flower stem
          
          //another flower
          translate(100, 18); // displacing another flower by 100px width and 18px height
          
           for(var i=0; i<10; i++){
                   fill(222, 219, 31);
                   ellipse(0,10, 4, 10);
                    rotate(PI/5); //rotating ellipses to make shape of flower
                    
                    
          }
          stroke(255);
          strokeWeight(2);
          stroke(120, 71, 7);
          line(0, 15, 0, 170);// flower stem
          


}
}
function Drop() { // this function is implemented to create rainfall
  this.x = random(0, width);
  this.y = random(-1000, 0);
  this.show = function() {
    stroke(255,15);
    line(this.x, this.y, this.x, this.y+10); // line is implemented to make rain water droplets symbol falling downwards
     if(this.y>height){
      this.y=0;
    }
  }; 
  this.fall = function() {
    this.y = this.y + 1;
  };
}