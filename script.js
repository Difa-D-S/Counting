
var count = 0;
document.querySelector('.count').textContent = count;

var maxCount = 9999;

var displayCount = function(count){
    document.querySelector('.count').textContent = count;
}

document.querySelector('.increment').addEventListener("click", function(){
    if(count < maxCount){
        if(count < maxCount - 1){
        count++;
        displayCount(count);                        // console.log(count, typeof count);
        document.querySelector('.start').textContent = "Increasing⬆️...";
        }
        else{
            document.querySelector('.count').textContent = maxCount;
            document.querySelector('.start').textContent = "You reach the maxCount";
        }
    }
    
});

document.querySelector('.decrement').addEventListener("click", function(){
    if(count <= maxCount){
        if(count > 1){
        count--;
        displayCount(count);
        document.querySelector('.start').textContent = "Decreasing⬇️...";
        }
        else{
            document.querySelector('.count').textContent = "0";
            document.querySelector('.start').textContent = "Your Count Down Stopped";
        }
    }

});

document.querySelector('.reset').addEventListener("click", function(){
    count = 0;
    document.querySelector('.count').textContent = count;
    document.querySelector('.start').textContent = "Start Counting...";
});