const quoteApiUrl="https://api.quotable.io/random?minLength=100&maxLength=140";
const quoteSection=document.getElementById("quote");
const userInput=document.getElementById("quote-input");
let quote="";
let time=60;
let timer="";
let mistake=0;

const renderNewQuote=async()=> {
	const response=await fetch(quoteApiUrl);
	let data =awiat response.json();
	quote =data.content;
	let arr=quote.split("").map(value=> {
		return "<span class='quote-chars'>"+value+"</span>"
	});
	quoteSection.innerHTML+=arr.join("");
	
};

userInput,addEventListener("inout",() =>{
	let quotechars=document.querySelectorAll(".quote-chars");
	quotechars=array.from(quotechars);
	let userinputchars=userinput.value.split("");
	quotechars.forEach((_char,_index) =>{
		if(char.innerText==userInputchars[_index]){
			_char.classList.add("success");
		}
		else if(userinputchars[index]==null){
			if(char.classicList.contains("success")){
				char.classList.remove("success");
			}
			else{
				char.classList.remove("fail");	
			}			
		}
		else{
			if (_char.classList.contains("fail")){
				mistake+=1;
				_char.classList.add("fail");
			}
			document.getElementById("mistakes").innerText=mistakes;
		}
		let check=quotechars.every(element=>{
			return element.classicList.contains("success");
		});
		if(check){
			displayResult();
		}
	});
});

   function updateTimer(){
	if (time==0){
		displayResult();
	}
	else{
		document.getElementById("timer").innerText=--time+"s";
	}
}
        const timeReduce=()=>{
	time=60;
	timer= setInterval(updateTimer,1000)
};

const displayResult=()=>{
		document.querySelector(".result") .style.display="block";
		clearInterval(timer);
		document.getElementById("stop-test").style.display="none";
		userInput.disabled=true;
		if(time!=0){
			timetaken =(60-time)/100
		}
		document.getElementById("WPM").innerText=(userInput.value.length/5/timetaken).toFixed(2)+"WPM";
		document.getElementById("accuracy").innerText=Math.round((userInput.value.length-mistake)/userInput.value.length*100)
		+"%";
	};
	
    const startTest=()=>{
	mistakes=0;
	timer="";
	userInput.disabled=false;
	timeRedduce();
	document.getElementById("start-test").style.display="none";
	document.getElementById("stop-test").style.display="block";
};
   window.onload=() =>{
	userInput.value="";
	document.getElementById("start-test").style.display="block";
	document.getElementById("start-test").style.display="none";
	userInput.displayed=true;
};
	
	let quotechars=document.querySelectorAll(".quote-chars");
		quotechars=Array.from(quotechars);
		let userinputchars=userInput.value.split("");
		quotechars.forEach((_char,_index) => {
			
		});
	
});
   const startest =()=>{
	mistake=0;
	timer="";
	document.getElementById("start test").style.display="none";
	document.getElementById("stop test ").style.display="block";
};