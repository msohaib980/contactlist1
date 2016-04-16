'use strict'

$(document).ready(init)

function init(){
  var $button = $('.addnew').click(addNewContact);
  renderRow()
  //testing

}

function addNewContact(){
// local storage
var contactStorage = {
  get: function() {
    try {
      var contacts = JSON.parse(localStorage.contacts);
    } catch(err) {
      var contacts = [];
    }
    return contacts;
  },
  write: function(contacts) {
    localStorage.contacts = JSON.stringify(contacts);
  }
};
 var newContact = {}
  //  getting values from  input fields
  newContact.name = $('#name').val();
  newContact.lastname = $('#lastname').val();
  newContact.number = $('#number').val();
  newContact.address = $('#address').val();
  newContact.email = $('#email').val();
// creating DOM elements

var contacts = contactStorage.get();
contacts.push(newContact); // modify
contactStorage.write(contacts);

  // var $button = ("<button>").addClass('btn')
  var $button = $('<button>').addClass('btn edit').text('Edit');
  var $btnDelete = $('<button>').addClass('btn Delete').text('Delete');
  var $tr = $('<tr>');
  var $tdName = $('<td>').addClass('name');
  var $tdNumber = $('<td>').addClass('number');
  var $tdlastname = $('<td>').addClass("lastname");
  var $tdaddress = $('<td>').addClass("address");
  var $tdemail = $('<td>').addClass("email");
  // appaending DOM elements to tbody

  $tdName.append(newContact.name);
  $tdNumber.append(newContact.number);
  $tdlastname.append(newContact.lastname);
  $tdaddress.append(newContact.address);
  $tdemail.append(newContact.email);
  $tr.append($tdName).append($tdlastname).append($tdNumber).append($tdaddress).append($tdemail).append($button).append($btnDelete);
  //testing

$('.contactlist').append($tr);

}

function clearinput(){
  addNewContact()
// clearing the input fields
  $('.contactlist').find('#number').val('');
  $('.contactlist').find('#lastname').val('');
  $('.contactlist').find('#name').val('');
  $('.contactlist').find('#address').val('');
  $('.contactlist').find('#email').val('');
}
function renderRow(){
  var pasrsedata = JSON.parse(localStorage.contacts);
  for(var i=0;i<pasrsedata.length;i++){
    pasrsedata[i].lastname='namechanges'
    // console.log(pasrsedata[i].name='cehk');
   $('.contactlist').append(createRow(pasrsedata[i]))
   //testing
  }
}

function createRow(data){
  var tableRow =$('<tr>');
  var name = $('<td>').text(data.name).appendTo(tableRow);
  var lastNmae = $('<td>').text(data.lastname).appendTo(tableRow);
  var number = $('<td>').text(data.number).appendTo(tableRow);
  var address = $('<td>').text(data.address).appendTo(tableRow);
  var email = $('<td>').text(data.email).appendTo(tableRow);
 var $button = $('<button>').addClass('btn edit').text('Edit').appendTo(tableRow)
 var $btnDelete = $('<button>').addClass('btn Delete').text('Delete').appendTo(tableRow);
  return tableRow;

}
