//alert("connected");



var iAdd = document.querySelector("#iAdd");
var iSub = document.querySelector("#iSub");
var fAdd = document.querySelector("#fAdd");
var fSub = document.querySelector("#fSub");
var cAdd = document.querySelector("#cAdd");
var cSub = document.querySelector("#cSub");
var score = document.querySelector("#score");
var reset=document.querySelector("#reset");
var correct=0;
var total=0;
var wrong=0;


iAdd.addEventListener("click", function(){

	var a=Math.floor((Math.random() * 9) + 1);
	var b=Math.floor((Math.random() * 9) + 1);
	// alert(a);
	// alert(b);
	ans=a+b;
	var inp=prompt(a+"+"+b+"=");
	if(inp!=null){
	if(inp==a+b){
		correct++;
		total++;
	alert("Correct answer.\nTotal:"+total+"\nCorrect:"+correct+"\nWrong:"+wrong);	
	}
	else{
		wrong++;
		total++;
	alert("Wrong answer.\nThe correct answer is "+ans+"\nTotal:"+total+"\nCorrect:"+correct+"\nWrong:"+wrong);	
	}
}
	

});

iSub.addEventListener("click", function(){

	var b=Math.floor((Math.random() * 9) + 1);
	var a=Math.floor((Math.random() * 9) + 1);
	// alert(a);
	// alert(b);
	var ans=a-b;
	var inp=prompt(a+"-"+b+"=");
	if(inp!=null){
	if(inp==a-b){
		correct++;
		total++;
		alert("Correct answer.\nTotal:"+total+"\nCorrect:"+correct+"\nWrong:"+wrong);
		
	}
	else{
		wrong++;
		total++;
		alert("Wrong answer.\nThe correct answer is "+ans+"\nTotal:"+total+"\nCorrect:"+correct+"\nWrong:"+wrong);	
	}
	}
});

fAdd.addEventListener("click", function(){

	var x1=Math.floor((Math.random() * 9) + 1);
	var x2=Math.floor((Math.random() * 9) + 1);
	var y1=Math.floor((Math.random() * 9) + 1);
	var y2=Math.floor((Math.random() * 9) + 1);

	var a;
		a=x1 *10+x2;

		a=a/10;
		//a=a.toFixed(1);
	// var a=(x1*10+x2)/10;
	 //alert(a);

	 var b;
	 	b=y1*10+y2;
	 	b=b/10;
	 	//b=b.toFixed(1);

	// alert(b);
	// var a=x1.x2;
	// var b=y1.y2
	var c=a+b;
	var ans=c.toFixed(1);
	var inp=prompt(a.toFixed(1)+"+"+b.toFixed(1)+"=");
	if(inp!=null){
	 if(inp==a+b){
		correct++;
		total++;
	alert("Correct answer.\nTotal:"+total+"\nCorrect:"+correct+"\nWrong:"+wrong);	
	}
	else{
		wrong++;
		total++;
		alert("Wrong answer.\nThe correct answer is "+ans+"\nTotal:"+total+"\nCorrect:"+correct+"\nWrong:"+wrong);	
	}
	
	}
});

fSub.addEventListener("click", function(){

	var x1=Math.floor((Math.random() *9) + 1);
	var x2=Math.floor((Math.random() *9) + 1);
	var y1=Math.floor((Math.random() *9) + 1);
	var y2=Math.floor((Math.random() *9) + 1);

	var a;
		a=x1 *10+x2;
		a=a/10;
	// var a=(x1*10+x2)/10;
	 //alert(a);

	 var b;
	 	b=y1*10+y2;
	 	b=b/10;

	// alert(b);
	// var a=x1.x2;
	// var b=y1.y2
	var c=a-b;
	var ans=c.toFixed(1);
	var inp=prompt(a+"-"+b+"=");
	if(inp!=null){
	 if(inp==a-b){
		correct++;
		total++;
	alert("Correct answer.\nTotal:"+total+"\nCorrect:"+correct+"\nWrong:"+wrong);	
	}
	else{
		wrong++;
		total++;
		alert("Wrong answer.\nThe correct answer is "+ans+"\nTotal:"+total+"\nCorrect:"+correct+"\nWrong:"+wrong);	
	}
	}

});


cAdd.addEventListener("click", function(){

	var x1=Math.floor((Math.random() * 9) + 1);
	var x2=Math.floor((Math.random() * 9) + 1);
	var y1=Math.floor((Math.random() * 9) + 1);
	var y2=Math.floor((Math.random() * 9) + 1);

	var a= x1+"+"+x2+"i";
	// var a=(x1*10+x2)/10;
	// alert(a);

	 var b = y1+"+"+y2+"i";
	 //alert(b);
	 var r1=x1+y1;
	 var r2=x2+y2;
	//  var b;
	//  	b=y1*10+y2;
	//  	b=b/10;
	//  	b=b.toFixed(1);

	// // alert(b);
	// // var a=x1.x2;
	// // var b=y1.y2
	 var inp=prompt("("+a+")+("+b+")=");
	 if(inp!=null){
	 var res1= r1.toString();
	 var res2= r2.toString();
	 var res = res1+"+"+res2+"i";

	 
	  //alert(res) ;
	  var n=inp.localeCompare(res);
	  if(n==0){
		correct++;
		total++;
	alert("Correct answer.\nTotal:"+total+"\nCorrect:"+correct+"\nWrong:"+wrong);	
	}
	else{
		wrong++;
		total++;
		alert("Wrong answer.\nThe correct answer is "+res+"\nTotal:"+total+"\nCorrect:"+correct+"\nWrong:"+wrong);	
	}
	}

});

cSub.addEventListener("click", function(){

	var x1=Math.floor((Math.random() * 9) + 1);
	var x2=Math.floor((Math.random() * 9) + 1);
	var y1=Math.floor((Math.random() * 9) + 1);
	var y2=Math.floor((Math.random() * 9) + 1);

	var a= x1+"+"+x2+"i";
	// var a=(x1*10+x2)/10;
	// alert(a);

	 var b = y1+"+"+y2+"i";
	 //alert(b);
	 var r1=x1-y1;
	 var r2=x2-y2;
	//  var b;
	//  	b=y1*10+y2;
	//  	b=b/10;
	//  	b=b.toFixed(1);

	// // alert(b);
	// // var a=x1.x2;
	// // var b=y1.y2
	 var inp=prompt("("+a+")-("+b+")=");
	 if(inp!=null){
	 var res1= r1.toString();
	 var res2= r2.toString();
	 //var res = res1+"+"+res2+"i";
	 var res = res1+"+("+res2+"i)";
	  //alert(res) ;
	  var n=inp.localeCompare(res);
	  if(n==0){
		correct++;
		total++;
	alert("Correct answer.\nTotal:"+total+"\nCorrect:"+correct+"\nWrong:"+wrong);	
	}
	else{
		wrong++;
		total++;
		alert("Wrong answer.\nThe correct answer is "+res+"\nTotal:"+total+"\nCorrect:"+correct+"\nWrong:"+wrong);	
	}
}
	

});


score.addEventListener("click",function(){
	alert("Total:"+total+"\nCorrect:"+correct+"\nWrong:"+wrong);

});

reset.addEventListener("click",function(){

	correct=0;
	wrong=0;
	total=0;
	alert("scores reset!")

});