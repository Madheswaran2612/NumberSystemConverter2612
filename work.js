var button=document.getElementById('button');
var error=document.getElementById('error');
var ans=document.getElementById('answer');
var deci;
button.onclick=function(){
    var from=document.getElementById('from').value;
    var to=document.getElementById('to').value;
    var input=document.getElementById('textbox').value.trim();
    if(from==to){
        error.textContent="⚠️Select different number system";
        setTimeout(()=>error.textContent="",3000);
    }
    else if(input==""){
        error.textContent="⚠️Enter the value";
        setTimeout(()=>error.textContent="",3000);
    }
    else{
         if(from=="decimal"){
            if(/^[0-9]+$/.test(input)){
                deci=Number(input);
               switch(to){
                case "binary":
                    ans.textContent=deci.toString(2);
                    break;
                case "octal":
                    ans.textContent=deci.toString(8);
                    break;
                case "hexadecimal":
                    ans.textContent=deci.toString(16).toUpperCase();
                    break;
                default:
                    break;
               }
            }
        else{
            error.textContent="⚠️Enter the valid input";
            setTimeout(()=>error.textContent="",3000);
        }
         }
         else if(from=="binary"){
            if(/^[0-1]+$/.test(input)){
                deci=parseInt(input,2);
                switch(to){
                    case "decimal":
                        ans.textContent=deci;
                        break;
                    case "octal":
                        ans.textContent=deci.toString(8);
                        break;
                    case "hexadecimal":
                        ans.textContent=deci.toString(16).toUpperCase();
                        break;
                    default:
                        break;
                 }
            }
            else{
                error.textContent="⚠️Enter the valid input";
                setTimeout(()=>error.textContent="",3000);  
            }
         }
         else if(from=="octal"){
            if(/^[0-7]+$/.test(input)){
                deci=parseInt(input,8);
                switch(to){
                    case "decimal":
                        ans.textContent=deci;
                        break;
                    case "binary":
                        ans.textContent=deci.toString(2);
                        break;
                    case "hexadecimal":
                        ans.textContent=deci.toString(16).toUpperCase();
                        break;
                    default:
                        break;
                 }
            }
            else{
                error.textContent="⚠️Enter the valid input";
                setTimeout(()=>error.textContent="",3000);  
            }
         }
         else{
            if(/^[0-9A-F]+$/.test(input.toUpperCase())){
                deci=parseInt(input,16);
                switch(to){
                    case "decimal":
                        ans.textContent=deci;
                        break;
                    case "binary":
                        ans.textContent=deci.toString(2);
                        break;
                    case "octal":
                        ans.textContent=deci.toString(8);
                        break;
                    default:
                        break;
                 }
            }
            else{
                error.textContent="⚠️Enter the valid input";
                setTimeout(()=>error.textContent="",3000);  
            }
         }
        
    }
}

