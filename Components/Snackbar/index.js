function msgeFunc(event) {
    document.getElementById("outputMsg").style.display = "block"
    if (event.target == document.getElementById("baselineBtn")){
        document.getElementById("outputMsg").innerHTML = "Can't send photo.Retry in 5 seconds. <button onclick='hide()' id='optionBtn'>RETRY</button><button onclick='hide()' id='escapeBtn'>X</button>"
        setTimeout(() => {
            document.getElementById("outputMsg").style.display = "none"
        },5000)

    }else if(event.target == document.getElementById("leadingBtn")){
        document.getElementById("outputMsg").innerHTML = "Your photo has been archived. <button onclick='hide()' id='optionBtn'>UNDO</button><button onclick='hide()' id='escapeBtn'>X</button>"
        setTimeout(() => {
            document.getElementById("outputMsg").style.display = "none"
        },5000)

    }else if(event.target == document.getElementById("stackedBtn")){
        document.getElementById("outputMsg").innerHTML = "This item  already has the label'travel'.you can add a new label. <button onclick='hide()' id='optionBtn'>ADD A NEW LABEL</button><button onclick='hide()' id='escapeBtn'>X</button>"
        setTimeout(() => {
            document.getElementById("outputMsg").style.display = "none"
        },5000)    
    }
}

function hide() {
    if(event.target == document.getElementById("optionBtn")){
        document.getElementById("outputMsg").style.display = "none"
        
    }else if(event.target == document.getElementById("escapeBtn")){
        document.getElementById("outputMsg").style.display = "none"
    }
}
document.getElementById("baselineBtn").addEventListener('click',msgeFunc);
document.getElementById("leadingBtn").addEventListener('click',msgeFunc);
document.getElementById("stackedBtn").addEventListener('click',msgeFunc);
document.getElementById("optionBtn").addEventListener('click',hide);
document.getElementById("escapeBtn").addEventListener('click',hide);
