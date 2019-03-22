$(function(){
    var hours = $(".hours-js");
    var min = $(".minutes-js");
    var sec = $(".seconds-js");
    
    
    
    var startTimer = function() {
    timer = setInterval(function () {
        
        if(sec.html() == 1 && hours.html()==0 && min.html()==0){
            clearInterval(timer);
        };
        if(min.html() == 0 && hours.html()!=0){
            var numH = hours.html()*1;
            hours.html(numH-1);
            min.html(59);
        };

        if(sec.html() == 0){
            var numbM = min.html()*1;
            min.html(numbM-1)
            sec.html(59);
        }
        var numbS = sec.html()*1;
        sec.html(numbS - 1);
},1000);

};
startTimer();
});