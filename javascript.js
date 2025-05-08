//checkout click true and false
var i=0;
function showHide(){
    if(i==0){
        document.getElementById('hide-show').style.display="none";
        i=1;
    }else{
        document.getElementById('hide-show').style.display="flex";
        i=0;
    }
}