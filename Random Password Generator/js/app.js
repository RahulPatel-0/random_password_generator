const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet="abcdefghijklmnopqrstuvwxyz";
const symbolSet="~!@#$%^&*()_+/"
const numberSet="1234567890"

const passwordbox=document.getElementById("pass-box")
const upperInput=document.getElementById("upper-case")
const lowerInput=document.getElementById("lower-case")
const numberInput=document.getElementById("numbers")
const symbolInput=document.getElementById("symbols")
const totalChar=document.getElementById("total-char")









const getRandomData=(dataset)=>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}

const generatePassword=(password='')=>{
    if(upperInput.checked){
        password+=getRandomData(upperSet);
    }
    if(lowerInput.checked){
        password+=getRandomData(lowerSet);
    }
    if(numberInput.checked){
        password+=getRandomData(numberSet);
    }
    if(symbolInput.checked){
        password+=getRandomData(symbolSet);
    }
    
    if(password.length<totalChar.value){
        return generatePassword(password)
    }
    passwordbox.innerText = truncateString(password,totalChar.value);

}

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword();
    }
)
function truncateString(str,num){
    if(str.length>num){
        let substr=str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
}

//initial call

generatePassword();