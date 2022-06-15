window.onscroll = function(){
  //alert('scrolled');
    //scrollFunction();

}

const documentBody = document.documentElement;
const helloTitle = document.getElementById("hello-title");
const resumeTitle = document.getElementById("resume-title");
const projectsTitle = document.getElementById("projects-title");

const toAnimateBrogressBar = document.getElementById("to-animate-progressbar");
const generalSkills = document.getElementById("general-skills");


let checkProgress = 0;
function scrollFunction(){
  console.log('resumeTitle: ',resumeTitle)

    if(document.body.scrollTop > 20  || document.documentElement.scrollTop > 20){
        document.querySelector('.menu').classList.add('active'); 
        document.getElementById('nav-list').style.color= "gray";
        helloTitle.classList.add('active'); 

    }
    else{
        document.querySelector('.menu').classList.remove('active'); 
        document.getElementById('nav-list').style.color= "white";

    }
    if(documentBody.scrollTop > helloTitle.offsetTop && documentBody.scrollTop < resumeTitle.offsetTop  ){
        resumeTitle.classList.add('active'); 
       console.log(documentBody.scrollTop);
    }
    if(documentBody.scrollTop > toAnimateBrogressBar.offsetTop ){
      animateAllProgressBars(checkProgress);
      checkProgress = 1
    }
    if(documentBody.scrollTop > generalSkills.offsetTop ){
      projectsTitle.classList.add('active'); 
      
    }

}

/*----------- animated progress bar --------------*/

function animateAllProgressBars(){

  if(checkProgress===0){
    document.querySelectorAll('.progress').forEach(function(x){
      const elem = x.children[0];
      let precentage = (x.children[0].classList[0]).split('-')[1];
      animateProgressBar(precentage ,elem);
    
  });
  }
  
}

function animateProgressBar(precentage, elem){
  let width = 1;
  let id = setInterval(frame, 10);
  function frame() {
    if (width >= precentage) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}
  