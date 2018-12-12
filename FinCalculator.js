function finOutput() {
  
  var n1 = document.getElementByName("finGrossIncome");
  
If(isNaN(n1)){
     alert("The value of Gross Income has to be numeric, please enter a valid value");
     return false;
  }else{
     alert("It's fine");
     return true;
  }  
}
  
