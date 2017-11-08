var guests1 = 0;
var guests2 = 0;
var guests3 = 0;
var guests4 = 0;

//ROOM 1

function enter1(event) {
if(window.event.keyCode == 13)  {
  addGuest1();
}
}
function addGuest1() {
  if (guests1 < 3) {
    guests1++;
    var d = new Date();
    var newItem1 = document.createElement('li');
    var newText1 = document.createTextNode(checkIn1.value);
    newItem1.appendChild(newText1);
    var position1 = document.getElementById('guestList1');
    position1.appendChild(newItem1);
    document.getElementById(newItem1 + d).innerHTML = Date();
    x
  }
  else {
    window.alert("Sorry room is full");
    document.getElementById('checkIn1').style.visibility = "hidden";
  }
}

function enter5(event) {
  if(window.event.keyCode == 13)  {
  removeGuest1();
}
}
function removeGuest1() {
  var list1 = document.getElementById("guestList1");
  var kick1 = document.getElementById('checkOut1').value;
  list1.removeChild(list1.childNodes[kick1]);
  guests1--;
  document.getElementById('checkIn1').style.visibility = "visible";
}

//ROOM 2

function enter2(event) {
if(window.event.keyCode == 13)  {
  addGuest2();
}
}
function addGuest2() {
  if (guests2 < 3) {
    guests2++;
    var newItem2 = document.createElement('li');
    var newText2 = document.createTextNode(checkIn2.value);
    newItem2.appendChild(newText2);
    var position2 = document.getElementById('guestList2');
    position2.appendChild(newItem2);

  }
  else {
    window.alert("Sorry room is full");
    document.getElementById('checkIn2').style.visibility = "hidden";
}
}
function enter6(event) {
  if(window.event.keyCode == 13)  {
  removeGuest2();
}
}
function removeGuest2() {
  var list2 = document.getElementById("guestList2");
  var kick2 = document.getElementById('checkOut2').value;
  list2.removeChild(list2.childNodes[kick2]);
  guests2--;
  document.getElementById('checkIn2').style.visibility = "visible";
}

//ROOM 3

function enter3(event) {
if(window.event.keyCode == 13)  {
  addGuest3();
}
}
function addGuest3() {
    if (guests3 < 3) {
    guests3++;
  var newItem3 = document.createElement('li');
  var newText3 = document.createTextNode(checkIn3.value);
  newItem3.appendChild(newText3);
  var position3 = document.getElementById('guestList3');
  position3.appendChild(newItem3);
    }
      else {
    window.alert("Sorry room is full");
    document.getElementById('checkIn3').style.visibility = "hidden";
      }
}
function enter7(event) {
  if(window.event.keyCode == 13)  {
  removeGuest3();
}
}
function removeGuest3() {
  var list3 = document.getElementById("guestList3");
  var kick3 = document.getElementById('checkOut3').value;
  list3.removeChild(list3.childNodes[kick3]);
    guests3--;
  document.getElementById('checkIn3').style.visibility = "visible";
}

//ROOM 4

function enter4(event) {
if(window.event.keyCode == 13)  {
  addGuest4();
}
}
function addGuest4() {
    if (guests4 < 3) {
    guests4++;
  var newItem4 = document.createElement('li');
  var newText4 = document.createTextNode(checkIn4.value);
  newItem4.appendChild(newText4);
  var position4 = document.getElementById('guestList4');
  position4.appendChild(newItem4);
    }
    else {
    window.alert("Sorry room is full");
    document.getElementById('checkIn4').style.visibility = "hidden";
    }
}
function enter8(event) {
  if(window.event.keyCode == 13)  {
  removeGuest4();
}
}
function removeGuest4() {
  var list4 = document.getElementById("guestList4");
  var kick4 = document.getElementById('checkOut4').value;
  list4.removeChild(list4.childNodes[kick4]);
    guests4--;
  document.getElementById('checkIn4').style.visibility = "visible";
}


/*
function limitGuests1()  {
    if (guests < 3) {
      guests++;
    }
    else {
      document.getElementById('checkIn1').style.visibility = "hidden";
      document.getElementById('add1').style.visibility = "hidden";
      //window.alert("3 guests max per room");
    }
}
*/
