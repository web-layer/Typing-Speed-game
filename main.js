
let easyWords = [
  "measure",
 "lighter",
  "match",
  "big",
  "innate", 
  "count",
  "abnormal",
  "marvelous",
  "sneaky",
  "grade",
 "sound",
 "abide",
"help",
"resolve",
"ask",
"saw",
"abide",
"help",
"resolve",
"ask",
"saw",
"car",
"crocodile",
"frog",
"hippo",
"walk",
"May",
"A litter",
"much",
 
]




let hardWords  = [
"reproachfully",
"inexpensive",
"statuesque",
"xenophobic",
 "laughable",
"stepmother",
"Collection",
"appointment" ,
"disfigurement",
"compassionate",
"geometrical",
"synonymous",
"it is a quarter to ten",
"it is a quarter to eigth",
]




const level = {
  Easy: 4,
  Hard: 4,
};  







let startGame = document.querySelector('.start')

let container = document.querySelector('.container');

let timer = document.getElementById('timer');

let levelandseconds = document.getElementById('level_one');

let workgenerater = document.querySelector('.workgenerater');

let seconds = document.getElementById('seconds');

let log = document.getElementById('log');

let input = document.getElementById('input');

let createWorksrandom = document.querySelector('.randomWork');

let choeesLevel = document.getElementById('choees');

let elementChoees = document.querySelector('.choeesLevel');

let easyInp = document.getElementById('Easy');

let normalInp = document.getElementById('Normal');

let hardInp = document.getElementById('Hard');

let finich = document.querySelector('.finchGame');


 startGame.onclick = function () {  
      container.classList.add('show');
      startGame.remove();
      input.focus();

};


let defultlevlename = "Easy";
let defultlevleseconds = level[defultlevlename];
let work = easyWords;


//click level Easy

easyInp.onclick = function (argument) {

      defultlevlename = easyInp.value;

      let defultlevleseconds = level[defultlevlename]

      work = easyWords;

      timer.innerHTML = defultlevleseconds;

      levelandseconds.innerHTML = defultlevlename;

      elementChoees.classList.add("defult");

      seconds.innerHTML = defultlevleseconds;

              createWorks();


};

       


//click level Hrad
hardInp.onclick = function (argument) {

      defultlevlename = hardInp.value;

      let defultlevleseconds = level[defultlevlename];

      work = hardWords;

      timer.innerHTML = defultlevleseconds;

      seconds.innerHTML = defultlevleseconds;

      levelandseconds.innerHTML = defultlevlename;

      elementChoees.classList.add("defult");

                 createWorks();

};






function createWorks(e) {

      let randomworks = work[Math.floor(Math.random() * work.length)];
        
       let index = work.indexOf(randomworks)

        work.splice(index, 1)
      //add randomworks 
      createWorksrandom.innerHTML = randomworks;

        workgenerater.innerHTML = ""
     //create works 
      for(let i = 0; i < work.length; i++){
                  
            let createElement = document.createElement('div');

            let createtext = document.createTextNode(work[i]);

            createElement.appendChild(createtext);

            workgenerater.appendChild(createElement);
      };

     startPlay();
};

     function startPlay(argument) {
      seconds.innerHTML = defultlevleseconds
          let start = setInterval(function (argument) {
               seconds.innerHTML--;
               if (seconds.innerHTML == 0) {
                  clearInterval(start);

                     if (createWorksrandom.innerHTML.toUpperCase() === input.value.toUpperCase()) {
                              input.value = ""
                              log.innerHTML++

      if (work.length > 0) {
        createWorks();

}else{
                                    
      let textfinich = document.querySelector('.text')
      let createspan = document.createElement('span')
      let createtext = document.createTextNode('good')
      createspan.appendChild(createtext)
      createspan.className = "good"
            finich.appendChild(createspan)
            let text = 'The level will be moved to difficult'
      textfinich.innerHTML = text   

if (hardWords.length > 0) {

let starthard = setTimeout(function () {
            easyInp.nextElementSibling.remove();
            easyInp.parentNode.removeChild(easyInp);
            textfinich.innerHTML = " ";
            createspan.innerHTML = " ";
            hardInp.click();

}, 4000)

      }else{

         textfinich.innerHTML = " ";
         createspan.innerHTML = " ";

      let load = confirm('reload page') 
            if (load == true) {

            window.location.reload(true);

            }else{
                 console.log('no load')
            }

      }

}

        }else{
              let createElementSpan = document.createElement('span');
             let createtextspan = document.createTextNode('game Over');
            createElementSpan.className = "over";
            createElementSpan.appendChild(createtextspan);
             finich.appendChild(createElementSpan);
      }
            }

          }, 1000)
     };




