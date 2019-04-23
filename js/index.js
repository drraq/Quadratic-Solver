function hasNull(e){for(var t in e)if(null===e[t])return!0;return!1}function round_to(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}function blurOut(e,t){13===e.keyCode&&t.blur()}const a=document.getElementById("a"),b=document.getElementById("b"),c=document.getElementById("c"),x1=document.getElementById("x1"),x2=document.getElementById("x2"),coefficients=[a,b,c];nums={};for(var i=0;i<coefficients.length;i++)coefficients[i].addEventListener("change",e=>{var t=parseFloat(e.target.value),n=e.target.id;isNaN(t)?nums[n]=null:nums[n]=t,document.getElementById("spit-error-msg").innerHTML="&nbsp;",checkAndUpdate()});function checkAndUpdate(){if(!(nums.hasOwnProperty("a")&&nums.hasOwnProperty("b")&&nums.hasOwnProperty("c")))return-2;if(hasNull(nums))return-1;var e=nums.a,t=nums.b,n=nums.c;document.getElementById("solving-for").classList.remove("not-visible");var o=e>=0?"":"- ";o+="<b>"+Math.abs(e)+"</b>x<sup>2</sup>",o+=t>=0?" + ":" - ",o+="<b>"+Math.abs(t)+"</b>x",o+=n>=0?" + ":" - ",o+="<b>"+Math.abs(n)+"</b> = 0",document.getElementById("your-equation").innerHTML=o,document.getElementById("your-equation").classList.remove("not-visible"),0===e&&(document.getElementById("spit-error-msg").innerHTML="Equation is <b>linear</b> if <b>a</b> is 0."),calculateRootsAndDisplay(e,t,n)}function clearValues(){a.value="",b.value="",c.value="",x1.value="",x2.value="",nums={},document.getElementById("solving-for").classList.add("not-visible"),document.getElementById("your-equation").classList.add("not-visible"),document.getElementById("spit-error-msg").innerHTML="&nbsp;"}function calculateRootsAndDisplay(e,t,n){if(0===e)x1.value=round_to(-1*n/t,8),x2.value="Only one solution";else{var o=Math.pow(t,2)-4*e*n;o>=0?(x1.value=round_to((-1*t+Math.sqrt(o))/(2*e),8),x2.value=round_to((-1*t-Math.sqrt(o))/(2*e),8)):(x1.value=round_to(-1*t/(2*e),5)+" + "+round_to(Math.sqrt(-o)/(2*e),5)+"i",x2.value=round_to(-1*t/(2*e),5)+" - "+round_to(Math.sqrt(-o)/(2*e),5)+"i")}}function copiedToClipBoard(e,t){document.getElementById(e).select(),document.execCommand("copy"),t.innerHTML="COPIED",t.style.color="#008CBA",setTimeout(function(){var e=document.getElementsByClassName("copy");Object.values(e).forEach(e=>{e.innerHTML="COPY",e.style.color="#545c6d"})},1500)}
