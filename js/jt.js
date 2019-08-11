var a=10;
b=20;
let c=a+b;
document.write("the sum of " + a +" and " + b +" is " + c)
function Gretting()
{
    alert("Good morning");

}
function userName()
{
    var name;
    name=prompt("enter your name?");
    document.getElementById('name').innerHTML ="welcome, " +name;    
}

function oddEven()
{
    var num;
    num = parseInt(prompt("Enter the number:"));
    if(num%2==0)
    {
        alert(num + " is Even.");
    }
    else{
        alert(num + " is Odd.");
    }
}
function christmas()
{
    var month="december";
    var day="25";
    if (month=="december" && day==25)
    {
        alert("Hurray! Merry Christmas");
    }
    else if(month=="december" && (day>=20 / day<=30))
    {
        alert("Merry Christmas");
    }
    else{
        alert("Normal Day");
    }
}
function mulTable()
{
    var num;
    num=parseInt(prompt("Enter the number:"));
    for(i=1;i<=10;i++)
    {
        mul=num*i;
        document.getElementById('mulTable').innerHTML+=num + "x" + i + "=" +mul +"<br/>";
    }
}