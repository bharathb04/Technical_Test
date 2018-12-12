function finOutput() {
  var n1 = document.getElementByName("finGrossIncome");
  var n2 = document.getElementByName("finRentalIncome");
  var n3 = document.getElementByName("finChildren");
  
  alert("Hi " + n1 + n2 + n3)
  
If(isNaN(n1) && isNAN(n2) && isNAN(n3)){
     alert("One or more of the input fields is/are not numeric, please enter a valid value");
     return false;
  }else{
     alert("It's fine");
     return true;
  }  
}
  



