const num=document.getElementById("add");
const even=document.getElementById("even");
const odd=document.getElementById("odd");
const sort=document.getElementById("sort");
const maximum=document.getElementById("max");
const min=document.getElementById("min");
const rev=document.getElementById("rev");
const messages=document.getElementById("message");
var message;
num.onclick=()=>{
    let arr=document.getElementById("numbers").value;
    let input=arr.split(",").map((n)=>parseInt(n))
    result = input.reduce((num,acc) =>(acc+num),0);
    message="your result is:"+result
    messages.style.display="inherit";
    messages.innerHTML=message;
}
sort.onclick=()=>{
    let text=document.getElementById("numbers").value;
    let input=text.split(",");
    for(let i=0;i<input.length;i++)
    {
        for(let j=i+1;j<input.length;j++)
        {
            if(input[j]<input[i]){
                temp=input[j];
            input[j]=input[i];
            input[i]=temp;
            }
        }
    }
    message="your result is:"+input
    messages.style.display="inherit";
    messages.innerHTML=message;
}

odd.onclick=()=>{
    let arr=document.getElementById("numbers").value;
    let input=arr.split(",");
    const odd=input.filter((x)=>x%2!=0)
    message="your result:"+odd
    messages.style.display="inherit";
    messages.innerHTML=message;
}

even.onclick=()=>{
    let arr=document.getElementById("numbers").value;
    let input=arr.split(",");
    const eve=input.filter((x)=>x%2==0)
    message="your result:"+eve
    messages.style.display="inherit";
    messages.innerHTML=message;
}
rev.onclick=()=>{
    let arr=document.getElementById("numbers").value;
    let input=arr.split(",");
    let result = input.reverse();
    message="your result:"+result
    messages.style.display="inherit";
    messages.innerHTML=message;
}

min.onclick=()=>{
    let arr=document.getElementById("numbers").value;
    let input=arr.split(",");
    let result="";
    let res=input.reduce((num,acc)=>(num<acc?num:acc),result[0])
    message="your result:"+res
    messages.style.display="inherit";
    messages.innerHTML=message;
}

maximum.onclick=()=>{
    let arr=document.getElementById("numbers").value;
    let input=arr.split(",");
    let result="";
    let res=input.reduce((num,acc)=>(num>acc?num:acc),result[0])
    message="your result:"+res
    messages.style.display="inherit";
    messages.innerHTML=message;
}



