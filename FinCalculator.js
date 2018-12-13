//This Java script will accept input from MyHome.html and return values post calculation

// Object to store the constant values related to Income Tax upper Limit
var taxLimit = {

    arrLimit:[0,18200,37000,87000,180000],
    arrRate:[0,0.19,0.325,0.37,0.45],
    arrCarry:[0,0,3572,19822,54232]
 }


//Objet to store the constant values related to Expense Model 
var incomeBand = {
    
    bandExp: [21000,35000,75000,150000,200000,1000000],
    bandAmt: [[26123.57,28574.29,31755.00,34466.43,38533.57,40254.29],
              [28782.86,31181.43,34205.71,36812.86,40723.57,42392.14],
              [33840.71,36395.71,39680.71,42496.43,46720.00,48492.86],
              [38116.43,40775.71,44217.14,47189.29,51569.29,53446.43],
              [42392.14,45155.71,48753.57,51882.14,56418.57,58400.00],
              [46667.86,49535.71,53290.00,56575.00,61267.86,63353.57],
              [50943.57,53915.71,57826.43,61267.86,66117.14,68307.14],
              [55219.29,58295.71,62362.86,65960.71,70966.43,73260.71],
              [59495.00,62675.71,66899.29,70653.57,75815.71,78214.29],
              [63770.71,67055.71,71435.71,75346.43,80665.00,83167.86],
              [16790.00,19449.29,22838.57,25758.57,30138.57,31963.57]]
    
}


//object to set a person's properties

var person = {
    
    name: "Test", 
    grossIncome: 100000,
    rentalIncome: 20000,
    numChildren: 2,
    
//fincheck fuction is invoked to check if valid numeric values are enteres in the text box.    
    fincheck: function () {
        
        this.name=document.getElementById("finpName");
        this.grossIncome=document.getElementById("fingIncome");
        this.rentalIncome=document.getElementById("finrIncome");
        this.numChildren=document.getElementById("finChild");
        
        var n1 = this.grossIncome.value;
        var n2 = this.rentalIncome.value;
        var n3 = this.numChildren.value;
        
      
       if(isNaN(n1) || isNaN(n2) || isNaN(n3)){
         
          alert("One or more of the input fields is/are not numeric, please enter a valid value");
          return false;
       }
       
       else {
          return true; 
       }
    }
}


function main(){    
   
   var p1 = person;
   
   p1.fincheck();


//If inputs entered pass the validations, then proceed.   
    if (p1.fincheck()===true){
    
       var grossIncome = p1.grossIncome.value;
       
       var y = taxLimit;

//Calculate Income Tax Amount and post it to DOM after calculation       
       for (i=0;i<y.arrLimit.length;i++)
       {
           
          if (grossIncome<=y.arrLimit[i]) {
              
              var incomeTax = (grossIncome-y.arrLimit[i-1])*(y.arrRate[i-1])+(y.arrCarry[i-1])
              
              var node1 = document.createTextNode("Income Tax: " + incomeTax);
              postDom(node1);
              
              break;  
           }
       }

//Calculate Rental Income       
       var rentalIncome = p1.rentalIncome.value * 0.8;
       var node2 = document.createTextNode("Rental Income: " + rentalIncome);
       postDom(node2);

//Calculate Total Income       
       var totalIncome = (grossIncome - incomeTax) + rentalIncome;
       var node3 = document.createTextNode("Total Income: " + totalIncome);
       postDom(node3);
       
//Calculate Expense Amount       
        var numChild = p1.numChildren.value;
        
        var income1 = incomeBand;
              
        for (j=0;j<income1.bandExp.length;j++){
                  
            if (totalIncome<=income1.bandExp[j]){
                
                var expAmt = income1.bandAmt[numChild][j];
                var node4 = document.createTextNode("Expense: " + expAmt);
                postDom(node4);
                break;
            }
        }

//Calculate Surplus Amount        
        var surpAmt = totalIncome - expAmt;
        var node5 = document.createTextNode("Surplus Amt: " + surpAmt);
        postDom(node5);       
   }  
}

//define a function to post the output to DOM

function postDom (node){
    this.node=node;
    var element1 = document.createElement("p");
    element1.appendChild(node);
    var paraElement = document.getElementById("para");
    paraElement.appendChild(element1);
}    











