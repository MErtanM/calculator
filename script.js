window.onload= function(){

    let selectedOperator = " ";
    let leftPart = 0;
    let rightPart = 0;
    let numbers = document.querySelectorAll(".num");
    for(let i = 0; i< numbers.length; i++){
        numbers[i].addEventListener("click", function() {

            document.getElementById("resultInner").innerHTML += this.value;
            

            if(selectedOperator == " ") {

                leftPart = this.value;
            //    alert(leftPart);
    

            }
            
           else if(selectedOperator != " ") {

                rightPart = this.value;
               // alert(rightPart);
    

            }




        }, false);






    }

    let operators = document.querySelectorAll(".operator");
    for(let i = 0; i< operators.length; i++){
    operators[i].addEventListener("click", function() {

        document.getElementById("resultInner").innerHTML += this.value;

        selectedOperator = this.value;
    }, false);


    }

    document.getElementById("equation").addEventListener("click", function() {

            if(selectedOperator == " +"){
                document.getElementById("resultInner").innerHTML = leftPart + rightPart;

            }
           else  if(selectedOperator == " - "){
            document.getElementById("resultInner").innerHTML = leftPart - rightPart;


            }
            else if(selectedOperator == " *"){
                document.getElementById("resultInner").innerHTML = leftPart * rightPart;


            }
           else if(selectedOperator == " /"){
            document.getElementById("resultInner").innerHTML = leftPart / rightPart;


            }
                  
            

        
    }, false);

    document.getElementById("delete").addEventListener("click", function() {
    }, false);


    };