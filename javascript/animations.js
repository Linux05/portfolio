let menuVisible = false;
function showHiddenMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

/* Function to hide the menu when click on*/

function select(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}



function AbilityEffect(){
    var skills = document.getElementById("skills");
    var distance_skill = window.innerHeight - skills.getBoundingClientRect().top;
    if(distance_skill >= 300){
        let habilidades = document.getElementsByClassName("progress");
        habilidades[0].classList.add("WordPress");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("CPanel");
        habilidades[3].classList.add("Photoshop");
        habilidades[4].classList.add("Illustrator");
        habilidades[5].classList.add("Creativity");
        habilidades[6].classList.add("Team-work");
        habilidades[7].classList.add("Leadership");
        habilidades[8].classList.add("Commitment");
        habilidades[9].classList.add("Well-organized");
    }
}

/*Scrolling on the window detection*/
window.onscroll = function(){
    AbilityEffect();
} 