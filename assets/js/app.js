let text = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(element)=>{
        console.log(element.target);
        if (element.target.innerHTML == '='){
            text = eval(text);
        }
        else if(element.target.innerHTML == 'AC'){
            text ="";

        }else if (element.target.innerHTML == 'DEL'){   
            text = text.substring(0,text.length-1);
        }
        else if(element.target.innerHTML == '√'){
            text = eval(text)**(1/2);
        }
        else{
            text = text + element.target.innerHTML;
        }
        document.querySelector('input').value = text;
    })
})