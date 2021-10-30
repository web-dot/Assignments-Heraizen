
        let resultUl = document.getElementById('result');
        let resultLi = document.createElement('li');
        let inputElem = document.getElementById('numInput');

        let consoleNum = function(e){
            let input = inputElem.value;
            resultLi.textContent = input;
            resultUl.appendChild(resultLi); 

        }

        let checkPrime = function(e){
              let input = inputElem.value;
              notPrime = "false";
              prime = "true";
              let i = 2;
              while(i <= input-1){
                  if(input%i==0){
                    resultLi.textContent = notPrime + ", it is divisible by : " + i;
                    resultUl.appendChild(resultLi);
                    break;
                  }
                  else{
                    resultLi.textContent = prime;
                    resultUl.appendChild(resultLi);
                  }
                  i++;
              }
        }

        let reverseNum = function(e){
            let input = inputElem.value;
            let numString = input.toString();
            let numArr = numString.split("");
            let reverseArr = numArr.reverse();
            let joinArr = reverseArr.join("");
            let reverseNum = parseInt(joinArr);
            resultLi.textContent = reverseNum;
            resultUl.appendChild(resultLi);
        }

        let checkPalindrome = function(e){
            let input = inputElem.value;
            let numString = input.toString();
            let numArr = numString.split("");
            let revArr = numArr.reverse();
            let joinArr = revArr.join("");
            let reverseNum = parseInt(joinArr);
            if(input == reverseNum){
                resultLi.textContent = "is a Palindrome";
                resultUl.appendChild(resultLi);
            }
            else{
                resultLi.textContent = "not a Palindrome";
                resultUl.appendChild(resultLi);
            }
        }

        let sumOfDigits = function(){
            let input = inputElem.value;
            let sum = 0;
            while(input > 0){
            let rem = Math.floor(input % 10);
                sum = sum + rem;
                input = input / 10;
            }
            resultLi.textContent = sum;
            resultUl.append(resultLi);
        }


        let maxDigits = function(){
            let input = inputElem.value;
            let arr = input.split("");
            console.log(arr);
            var max = 0;
            for(var i=0; i<arr.length; i++){
                if(arr[i]>max){
                    max=arr[i];
                }
            }
            resultLi.textContent = max;
            resultUl.appendChild(resultLi);
        }


        let inputBtn = document.getElementById('inptButton');
        inputBtn.addEventListener('click', consoleNum);

        // let primeBtn = document.getElementById('prime');
        // primeBtn.addEventListener('click', checkPrime);

        let reverseBtn = document.getElementById('reverse');
        reverseBtn.addEventListener('click', reverseNum);
        

        let palindromeBtn = document.getElementById('palindrome');
        palindromeBtn.addEventListener('click', checkPalindrome);

        let digitSumBtn = document.getElementById('digitsum');
        digitSumBtn.addEventListener('click', sumOfDigits);

        let maxDigitBtn = document.getElementById('maxdigit');
        maxDigitBtn.addEventListener('click', maxDigits);
        


