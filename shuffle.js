// New javascript by Thomas peter

function pl() {
	document.getElementById('first-p').style.display = 'none';
	result.innerHTML +="<div id='second-p' style='margin-left: 25%;  margin-top: 8%; display: block; background-image: url(img/sky9.jpg); background-repeat: no-repeat;'>"  +'	<br>'+'<br>' + '<b style="font-size: 20px; margin-left: 10%;">select option below !!.'+'</b><br>'+
'<button style="font-size: 18px; margin-left: 10%;" class="btn bg-info" onclick="strt()">START GAME</button><br><br>'+
'<button style="font-size: 18px; margin-left: 10%;" class="btn bg-info" onclick="about()">ABOUT</button><br><br>'+
'<button style="font-size: 18px; margin-left: 10%;" class="btn bg-info" onclick="exit()">EXIT</button>'+
"</div>"
}

function strt() {
	document.getElementById('second-p').style.display = 'none';
	document.getElementById('col').style.display = 'block';
	document.getElementById('Back').style.display = 'block';
}

function exit() {
	document.getElementById('first-p').style.display = 'block';
	document.getElementById('second-p').style.display = 'none';

}

function back() {
	document.getElementById('second-p').style.display = 'block';
	document.getElementById('col').style.display = 'none';
}

function about() {
	document.getElementById('about').style.display = 'block';
}
function close() {
	document.getElementById('about').style.display = 'none';	
}