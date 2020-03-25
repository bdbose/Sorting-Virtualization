
var arr=[];
function getarray(a){
  while(a.length<parseInt(document.getElementById('display').clientHeight/5)){
    var r=Math.floor(Math.random()*parseInt(document.getElementById('display').clientWidth))+1;
    if(a.indexOf(r)==-1) a.push(r);
  }
  for(var i=0;i<a.length;i++){
    def(a[i]);
  }
  document.getElementById('no').innerHTML="Select A Sorting Method";
}
function def(x){
  var p=document.createElement('div');
  p.id=x;
  p.className='arr';
  p.innerText=x;
  p.style.width=x+'px';
  document.getElementById('display').appendChild(p);
  document.getElementById('array').disabled = true;
}
async function Bubblesort(a){
  var c=0;
  disable()
  for(var i=0;i<a.length;i++){
    for(var j=0;j<a.length-i-1;j++){
      check(document.getElementById(a[j]),0);
      if(parseInt(document.getElementById(a[j]).innerText)>parseInt(document.getElementById(a[j+1]).innerText)){
        c++;
        await sleep(0.1);
        var t=parseInt(document.getElementById(a[j]).innerText);
        var t_s=document.getElementById(a[j]).clientWidth;

        document.getElementById(a[j]).innerText=parseInt(document.getElementById(a[j+1]).innerText);
        document.getElementById(a[j]).style.width=document.getElementById(a[j+1]).clientWidth+'px';

        document.getElementById(a[j+1]).innerText=t;
        document.getElementById(a[j+1]).style.width=t_s+'px';
        document.getElementById('no').innerText="NO OF COMPARISONS:"+c;
      }
      check(document.getElementById(a[j]),1);
    }
  }
  var a_s=a.sort();
  for(var i=0;i<a.length;i++){
    sleep(100);
    if(a[i]==a_s[i]) {
      check(document.getElementById(a[i]),3);
    }
  }
  a.length=0;
}
async function check(p,c){
  if (c==0){
    p.style.background='red';
  }
  else if(c==3){
    p.style.background='#1dd1a1';
  }
  else {
    p.style.background='#c8d6e5';
  }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function selectionsort(a){
  var c=0;
  disable()
  for(var i=0;i<a.length;i++){
    for(var j=i+1;j<a.length;j++){
      check(document.getElementById(a[j]),0);
      if(parseInt(document.getElementById(a[i]).innerText)>parseInt(document.getElementById(a[j]).innerText)){
        c++;
        await sleep(0.1);
        var t=parseInt(document.getElementById(a[j]).innerText);
        var t_s=document.getElementById(a[j]).clientWidth;
        check(document.getElementById(a[j]),0);
        document.getElementById(a[j]).innerText=parseInt(document.getElementById(a[i]).innerText);
        document.getElementById(a[j]).style.width=document.getElementById(a[i]).clientWidth+'px';

        document.getElementById(a[i]).innerText=t;
        document.getElementById(a[i]).style.width=t_s+'px';
        document.getElementById('no').innerText="NO OF COMPARISONS:"+c;
      }
      check(document.getElementById(a[j]),1);
    }
  }
  var a_s=a.sort();
  for(var i=0;i<a.length;i++){
    sleep(100);
    if(a[i]==a_s[i]) {
      check(document.getElementById(a[i]),3);
    }
  }
  a.length=0;
}
async function insertionsort(a)
{
  var c=0;
  disable();
for(var i=1;i<a.length;i++)
    {
        var temp=parseInt(document.getElementById(a[i]).innerText);
        var t_s1=document.getElementById(a[i]).clientWidth;
        var j=i-1;
        while(j>=0 &&temp<parseInt(document.getElementById(a[j]).innerText))
        {
            c++;
            document.getElementById(a[j+1]).innerText=parseInt(document.getElementById(a[j]).innerText);
            check(document.getElementById(a[j+1]),0);
            await sleep(0.1);
            check(document.getElementById(a[j+1]),1);
            document.getElementById(a[j+1]).style.width=document.getElementById(a[j]).clientWidth+'px';
            j--;
            document.getElementById('no').innerText="NO OF COMPARISONS:"+c;
        }
        document.getElementById(a[j+1]).innerText=temp;
        document.getElementById(a[j+1]).style.width=t_s1+'px';
    }
    var a_s=a.sort();
    for(var i=0;i<a.length;i++){
      sleep(100);
      if(a[i]==a_s[i]) {
        check(document.getElementById(a[i]),3);
      }
    }
    a.length=0;
}
function disable(){
  document.getElementById('Bubblesort').disabled = true;
  document.getElementById('selectionsort').disabled = true;
  document.getElementById('insertionsort').disabled = true;
}
function reset(a){
  a.length=0;
  document.getElementById('display').innerHTML = "";
  document.getElementById('array').disabled = false;
  document.getElementById('Bubblesort').disabled = false;
  document.getElementById('selectionsort').disabled = false;
  document.getElementById('insertionsort').disabled = false;
  console.log(a);
  document.getElementById('no').innerHTML='';
  }
