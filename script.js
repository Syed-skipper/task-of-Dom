function task(tagname,attriname,attrivalue,content)
      {
       var arr = document.createElement(tagname);
       arr.setAttribute(attriname,attrivalue);
       arr.innerHTML=content;
       return arr;
       }

function task1(tagname,attriname,attrivalue,attriname1,attrivalue1)
       {
        var brr = document.createElement(tagname);
        brr.setAttribute(attriname,attrivalue);
        brr.setAttribute(attriname1,attrivalue1);
        return brr;
       }

function task2(linebre)
       {
        var crr = document.createElement(linebre);
        return crr;
       }

var fname = task("label","for","name","FirstName");
var crr1 = task2("br");
var inputfname = task1("input","type","text","id","name");
var crr2 = task2("br");
var lname = task("label","for","name1","Last Name");
var crr3 = task2("br");
var inputlname = task1("input","type","text","id","name1");
var crr4 = task2("br");
var email = task("label","for","email","E-mail");
var crr5 = task2("br");
var inputemail = task1("input","type","email","id","email");
var crr6 = task2("br");
var pass = task("label","for","pass","Password");
var crr7 = task2("br");
var inputpass = task1("input","type","password","id","pass");
var crr8 = task2("br");
var crr9 = task2("br");
var submit = task1("input","type","submit","id","Submit");



document.body.append(fname,crr1,inputfname,crr2,lname,crr3,inputlname,crr4,email,crr5,inputemail,crr6,pass,crr7,inputpass,crr8,crr9,submit);


















