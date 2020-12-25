function saveData(key){
    if(localStorage){
        localStorage.setItem(key,value);
    }
    else {
        alert("Your browser does not support localStorage API ");
    }
}

function saveData(key){
    if(localStorage){
        if(key in localStorage)
        {
            return localStorage.getItem(key);
        }
    }
    else {
        alert("Your browser does not support localStorage API ");
    }
}