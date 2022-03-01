setTimeout( function(){
var hello = document.getElementById('hello');
hello.style.display = 'none';
var al = document.getElementById('all');
al.style.display = 'block';
var body = document.getElementById('body');
body.style.background = '#121212'; 
var v = document.getElementById('v');
var w = document.getElementById('w');
var z = document.getElementById('z');
var d = document.getElementById('d');
var k = document.getElementById('k');
var l = document.getElementById('l');
var p = document.getElementById('p');
var r = document.getElementById('r');
var x = document.getElementById('x');
var x2 = document.getElementById('x2');
var o = document.getElementById('o');
var ch = document.getElementById('ch');
v.addEventListener('click', function(){
	var all = document.getElementById('all');
	all.style.display = 'none';
	var info = document.getElementById('info');
	info.style.display = 'block';
	var h5 = document.getElementById('h5');
	h5.innerHTML = 'Вінницька обл.';
});
w.addEventListener('click', function(){
	var all = document.getElementById('all');
	all.style.display = 'none';
	var info = document.getElementById('info');
	info.style.display = 'block';
	var h5 = document.getElementById('h5');
	h5.innerHTML = 'Волинська обл.';
});
z.addEventListener('click', function(){
	var all = document.getElementById('all');
	all.style.display = 'none';
	var info = document.getElementById('info');
	info.style.display = 'block';
	var h5 = document.getElementById('h5');
	h5.innerHTML = 'Закарпатська обл.';
});
d.addEventListener('click', function(){
	var all = document.getElementById('all');
	all.style.display = 'none';
	var info = document.getElementById('info');
	info.style.display = 'block';
	var h5 = document.getElementById('h5');
	h5.innerHTML = 'Донецька обл.';
});
k.addEventListener('click', function(){
	var all = document.getElementById('all');
	all.style.display = 'none';
	var info = document.getElementById('info');
	info.style.display = 'block';
	var h5 = document.getElementById('h5');
	h5.innerHTML = 'Київська обл.';
});
l.addEventListener('click', function(){
	var all = document.getElementById('all');
	all.style.display = 'none';
	var info = document.getElementById('info');
	info.style.display = 'block';
	var h5 = document.getElementById('h5');
	h5.innerHTML = 'Львівська обл.';
});
p.addEventListener('click', function(){
	var all = document.getElementById('all');
	all.style.display = 'none';
	var info = document.getElementById('info');
	info.style.display = 'block';
	var h5 = document.getElementById('h5');
	h5.innerHTML = 'Полтавська обл.';
});
r.addEventListener('click', function(){
	var all = document.getElementById('all');
	all.style.display = 'none';
	var info = document.getElementById('info');
	info.style.display = 'block';
	var h5 = document.getElementById('h5');
	h5.innerHTML = 'Рівненська обл.';
});
x.addEventListener('click', function(){
	var all = document.getElementById('all');
	all.style.display = 'none';
	var info = document.getElementById('info');
	info.style.display = 'block';
	var h5 = document.getElementById('h5');
	h5.innerHTML = 'Херсонська обл.';
});
x2.addEventListener('click', function(){
	var all = document.getElementById('all');
	all.style.display = 'none';
	var info = document.getElementById('info');
	info.style.display = 'block';
	var h5 = document.getElementById('h5');
	h5.innerHTML = 'Харківська обл.';
});
o.addEventListener('click', function(){
	var all = document.getElementById('all');
	all.style.display = 'none';
	var info = document.getElementById('info');
	info.style.display = 'block';
	var h5 = document.getElementById('h5');
	h5.innerHTML = 'Одеська обл.';
});
ch.addEventListener('click', function(){
	var all = document.getElementById('all');
	all.style.display = 'none';
	var info = document.getElementById('info');
	info.style.display = 'block';
	var h5 = document.getElementById('h5');
	h5.innerHTML = 'Чернгівська обл.';
});
var x;
x = 0;
var button = document.getElementById('butt');
button.addEventListener('click', function(){
	button.style.background = '#e94a62';
	x+=1;
	button.innerHTML = 'Не отримувати сповіщення';
	if (x == 2) {
		button.innerHTML = 'Отримувати Сповіщення';
		button.style.background = '#1b828f';
		x = 0;
	}
	console.log(x);
});
var exit = document.getElementById('exit');
exit.addEventListener('click', function(){
	var chose = document.getElementById('chose');
	chose.style.display = 'none';
	var hh1 = document.getElementsByTagName('h1');
	hh1.style.top = '5px';
});

},4000);