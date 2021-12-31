

window.onload= function(){

    let leftPart = ` `;
    let rightPart = ` `;
    let selectedOperator = ` `;

    let number = document.querySelectorAll(".num");
    for(let i = 0; i< numbers.length; i++) {
        numbers[i].add.EventListener("click", function()){
            if(this.value == `.`){
            return;
        }
        document.getElementById("result").innerHTML += this.value;
        if(selectedOperator == ` `){
            leftPart+= this.value;
        } else if(selectedOperator !=  ` `){
            rightPart += this.value;
        }
    }, false);

    let operators = document.querySelectorAll(".operator")
    for(let i = 0; i< operators.length; i++){
        operators[i].addEventListener("click", function(){
            return;
        })
        document.getElementById("result").innerHTML += this.value;
        selectedOperator = this.value;
    },false);
    }
    if (document.getElementById("result").innerHTML === "") {
        output = document.getElementById("result").innerHTML = '0.';
      } else if (document.getElementById("result").innerHTML === output) {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + '.';
      }
    }, false);


    document.getElementById("equation").addEventListener("click", function() {

      var calculationResult = 0;

                //parseInt yerine parseFloat kullandım
      // 5 bölü 2 nin sonucu tam sayı olmadığı için viegüllü olduğunu görebilmemiz için
      
      if (selectedOperator == '+') {
        calculationResult = parseFloat(leftPart) + parseFloat(rightPart);
      } else if (selectedOperator == '-') {
        calculationResult = parseFloat(leftPart) - parseFloat(rightPart);
      } else if (selectedOperator == '*') {
        calculationResult = parseFloat(leftPart) * parseFloat(rightPart);
      } else if (selectedOperator == '/') {
        calculationResult = parseFloat(leftPart) / parseFloat(rightPart);
      }


      document.getElementById("result").innerHTML = calculationResult;

      leftPart = '';
      rightPart = '';
      selectedOperator = '';
    }, false);


    document.getElementById("delete").addEventListener("click", function() {
      document.getElementById("result").innerHTML = '';

      leftPart = '';
      rightPart = '';
      selectedOperator = '';
    }, false);
  }






