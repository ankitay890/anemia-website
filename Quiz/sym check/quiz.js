//Globlal variable
let COUNT=0;
let array;

//Main function
$(document).ready(function()
{
    console.log("fun called")
    getJSON();
    result();
    let mark=0; 
    sessionStorage.setItem("mark",mark);
    
  })

//Result function
 function result()
 {
    let marksession=sessionStorage.getItem("mark");
    let mark1=parseInt(marksession, 10);
    console.log(mark1)
    $("#result").text(mark1);
 }

//function to get data from json file
 function getJSON()
 {
         $.getJSON("ques-db.json",function(json)
         {
            array=json;    
            getFunction();
         });
}

//function to print question
function getFunction()
{
    if(COUNT<10)
    {
        const keys = Object.values(array);
        let qNO = COUNT;
        
            // console.log(count)
            // console.log(randIndex)
            let value = keys[qNO];
            $("#queno").text(COUNT+1);
            
            $("#que").text(keys[qNO].question);
            $("#level").text(keys[qNO].level);
            $("#value1").text(value["options"][0]);
            $("#value2").text(value["options"][1]);
            $("#value3").text(value["options"][2]);
            $("#value4").text(value["options"][3]);
            
            sessionStorage.setItem("que",keys[qNO].question);
            sessionStorage.setItem("ans",keys[qNO].answer);
        
    }
    else
    {
        $("#value1").attr("disabled", true);
        $("#value2").attr("disabled", true);
        $("#value3").attr("disabled", true);
        $("#value4").attr("disabled", true);
        

    }
    COUNT++;
}

// function getFunction(){
//     if (COUNT<=10){
//                     let value = keys[value];
//             $("#queno").text(COUNT);
//             $("#que").text(keys[value].question);
//             $("#value1").text(value["options"][0]);
//             $("#value2").text(value["options"][1]);
//             $("#value3").text(value["options"][2]);
//             $("#value4").text(value["options"][3]);
//             sessionStorage.setItem("que",keys[value].question);
//             sessionStorage.setItem("ans",keys[value].answer);
//                 }
//                 else
//     {
//         $("#value1").attr("disabled", true);
//         $("#value2").attr("disabled", true);
//         $("#value3").attr("disabled", true);
//         $("#value4").attr("disabled", true);

//     }
//     COUNT++;
// }

//function check answers 
function process(value)
{
   // document.getElementsByClassName("btn").style.o = "none";
    selectedValue=value.innerText;
    let ans = sessionStorage.getItem("ans");
    if(ans==selectedValue)
    {
        let mark=sessionStorage.getItem("mark");
        let mark1=parseInt(mark, 10);
        mark1++;
        sessionStorage.setItem("mark",mark1);   
    }
//     else
//     {
//         console.log("wrong answer");   
//     }
    getFunction();
    
}

//function to set timer
/*function startTimer() 
{
    var time_in_minutes = 5;
    var current_time = Date.parse(new Date());
    var deadline = new Date(current_time + time_in_minutes*60*1000);
    function time_remaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}*/

//function to run timer
/*function run_clock(id,endtime)
{
        var clock = document.getElementById('timer');
        function update_clock()
        {
            var t = time_remaining(endtime);
            document.getElementById("timer").innerHTML=t.minutes+':'+t.seconds;

            if(t.total<=0)
            {
                clearInterval(timeinterval);
                location.replace("index2.html");
                }
            }
            update_clock();
            var timeinterval = setInterval(update_clock,1000);
        }
        run_clock('timer',deadline);
}*/