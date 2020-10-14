if(sessionStorage.getItem("ID") === "1"){
    var titles=["Oral Language Lesson 1","Oral Language Lesson 2","Oral Language Lesson 3","Oral Language Lesson 4","Oral Language Lesson 5"];
    for(var temp = 0; temp <=4; temp++){
        PopulateP(temp,titles[temp]);
    }
    
}else if(sessionStorage.getItem("ID") === "2"){
    var titles=["Lesson 1 Song","Lesson 2 Rhyme","Lesson 3 Poems","Lesson 4 Stories","Lesson 5 Writing"];
    for(var temp = 0; temp <=4; temp++){
        Populate(temp,titles[temp]);
    }

}else if(sessionStorage.getItem("ID") === "3"){
    var titles=["Phonics Lesson 1","Phonics Lesson 2","Phonics Lesson 3", "Phonics Lesson 4", "Phonics Lesson 5" , "Phonics Lesson 6", "Phonics Lesson 7", "Phonics Lesson 8","Word-Recognition Lesson 1", "Word Recognition Lesson 2","Word-Recognition Lesson 3","Word-Recognition Lesson 4"];
    for(var temp = 0; temp <=11; temp++){
        Populate(temp,titles[temp]);
    }
    
}else if(sessionStorage.getItem("ID") === "4"){
    
}else if(sessionStorage.getItem("ID") === "5"){
    
}else if(sessionStorage.getItem("ID") === "6"){
    
}else if(sessionStorage.getItem("ID") === "7"){
  
    for(var temp= 1;temp<=5;temp++){
        Populate(temp,"Not Sure pa sa Data");
    }
}else if(sessionStorage.getItem("ID") === "8"){
    var titles=["Book 1: Rani's First Day At School","Book 2: Reba Wants Ice Cream","Book 3: Goby's noisy friend","The Clever Rabbit ","The Right Way School", "The Magic Mirror", "The Storybook Princess"];
    for(var temp= 1;temp<=7;temp++){
        Populate(temp,titles[temp]);  
    }
}else if(sessionStorage.getItem("ID") === "9"){
    var titles=["Parts of the Books","Print awareness","Mark it!","What We Like About Stories","What do you do with a Book"];
    for(var temp= 1;temp<=5;temp++){
        Populate(temp,titles[temp]);
       
    }
}

function Populate(temp,Head_title){
     //lesson content
let container = document.createElement('div');
container.className = "container-eng";
container.setAttribute("onclick","showIDLesson("+temp+")");

//div > row
let container_row = document.createElement('div');
container_row.className = "row";

//div > column_img
let container_column_img = document.createElement('div');
container_column_img.className = "column-img";

//content of column_img
let imgsrc = document.createElement("img");
imgsrc.className = "image";
imgsrc.setAttribute("src","");
container_column_img.appendChild(imgsrc);

//div  > column_desc
let container_column_desc = document.createElement('div');
container_column_desc.className = "column-desc";

//content of column_desc
let title = document.createElement("h1");
var titletext = document.createTextNode(Head_title);
title.appendChild(titletext);


let hrline= document.createElement("hr");

let textcontent = document.createElement("h3");
var content = document.createTextNode("Subcontent");
textcontent.appendChild(content);
//

//appendingChild to container_column_desc
container_column_desc.appendChild(title);
container_column_desc.appendChild(hrline);
container_column_desc.appendChild(textcontent);

//appendingChild to container and container_row
container.appendChild(container_row);
container_row.appendChild(container_column_img);
container_row.appendChild(container_column_desc);
document.body.appendChild(container);
}

function showIDLesson(id){
    alert(id);
    window.location.href = "/English Page/vid-eng.html";

}