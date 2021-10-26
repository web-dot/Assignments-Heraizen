

        let addElem = document.querySelector(".add");
        let divideElem = document.querySelector(".divide");
        let subtractElem = document.querySelector(".subtract");
        let multiplyElem = document.querySelector(".multiply");
        let sqrootElem = document.querySelector(".sqroot");
        let resetElem = document.querySelector(".reset");
        let decimalElem = document.querySelector(".decimal");
        let modElem = document.querySelector(".mod");
        let logElem = document.querySelector(".log");

        let displayElem = document.querySelector(".numbers");

        let numArr = [];
        let firstSet = "";
        let secSet = "";

        setOne = "";


        let result = 0;


        let numEl1 = document.querySelector('.tablerow1');
        let numEl2 = document.querySelector('.tablerow2');

        let opELem = document.querySelector('.operations');

        let equalsElem = document.querySelector('.equals');


        let opType = [];
        let typeOfOp = function(event){
            let elementClicked = event.target;
            if(elementClicked === addElem){
                opType[0] = "add";
                console.log(opType);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //firstSet = numArr.join("");
                setOne = firstSet;
                //numArr = [];
                firstSet = "";
            }
            
            else if(elementClicked === divideElem){
                opType[0] = "divide";
                console.log(opType);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //firstSet = numArr.join("");
                setOne = firstSet;
                //numArr = [];
                firstSet = "";
            }

            else if(elementClicked === subtractElem){
                opType[0] = "subtract";
                console.log(opType);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //firstSet = numArr.join("");
                setOne = firstSet;
                //numArr = [];
                firstSet = "";
            }

            else if(elementClicked === multiplyElem){
                opType[0] = "multiply";
                console.log(opType);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //firstSet = numArr.join("");
                setOne = firstSet;
                //numArr = [];
                firstSet = "";
            }


            else if(elementClicked === sqrootElem){
                opType[0] = "root";
                console.log(opType);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = 'root';
                displayElem.appendChild(digLi);
                //firstSet = numArr.join("");
                setOne = firstSet;
                //numArr = [];
                firstSet = "";
            }

            else if(elementClicked === modElem){
                opType[0] = "mod";
                console.log(opType);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //firstSet = numArr.join("");
                setOne = firstSet;
                //numArr = [];
                firstSet = "";
            }


            else if(elementClicked === logElem){
                opType[0] = "log";
                console.log(opType);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //firstSet = numArr.join("");
                setOne = firstSet;
                //numArr = [];
                firstSet = "";
            }



            else if(elementClicked === resetElem){
                removeAllChildNodes(displayElem)
            }
        }

        function removeAllChildNodes(parent) {
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }



        
        let equalsOp = function(event){
            console.log(numArr[0]);
            secSet = firstSet;
            console.log("secset = " + secSet);
            if(opType[0] == 'add'){
                //result =  (firstSet + secSet);
                result =  (parseInt(setOne)  + parseInt(secSet));
                removeAllChildNodes(displayElem);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = result;
                displayElem.appendChild(digLi);
                //numArr = [];
                firstSet = "";
            }
            else if(opType[0] == 'divide'){
                //result =  (firstSet / secSet);
                result =  (parseInt(setOne)  / parseInt(secSet));
                removeAllChildNodes(displayElem);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = result;
                displayElem.appendChild(digLi);
                //numArr = [];
                firstSet = "";
            }
            else if(opType[0] == 'subtract'){
                //result =  (firstSet - secSet);
                result =  (parseInt(setOne)  - parseInt(secSet));
                removeAllChildNodes(displayElem);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = result;
                displayElem.appendChild(digLi);
                //numArr = [];
                firstSet = "";
            }
             
            else if(opType[0] == 'multiply'){
                //result =  (firstSet * secSet);
                result =  (parseInt(setOne)  * parseInt(secSet));
                removeAllChildNodes(displayElem);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = result;
                displayElem.appendChild(digLi);
                //numArr = [];
                firstSet = "";
            }

            else if(opType[0] == 'root'){
                result =  (Math.sqrt(parseInt(setOne)));
                console.log(result);
                removeAllChildNodes(displayElem);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = result;
                displayElem.appendChild(digLi);
                //numArr = [];
                firstSet = "";
            }

            else if(opType[0] == 'mod'){
                result =  (parseInt(setOne)  % parseInt(secSet));
                console.log(result);
                removeAllChildNodes(displayElem);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = result;
                displayElem.appendChild(digLi);
                //numArr = [];
                firstSet = "";
            }

            else if(opType[0] == 'log'){
                result =  (Math.log(parseInt(setOne)));
                console.log(result);
                removeAllChildNodes(displayElem);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = result;
                displayElem.appendChild(digLi);
                //numArr = [];
                firstSet = "";
            }
            
            
        }


        let disPushNum = function(event){
            let elementClicked = event.target;
            if(elementClicked.className === 'digit0'){
                console.log(elementClicked.textContent);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //numArr.push(parseInt(elementClicked.textContent));
                //numArr.push[elementClicked.textContent];
                firstSet = firstSet + elementClicked.textContent;
                console.log(firstSet);
                
            }
            if(elementClicked.className === 'digit1'){
                console.log(elementClicked.textContent);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //numArr.push(parseInt(elementClicked.textContent));
                //numArr.push[elementClicked.textContent];
                firstSet = firstSet + elementClicked.textContent;
                console.log(firstSet);
                
            }
            if(elementClicked.className === 'digit2'){
                console.log(elementClicked.textContent);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //numArr.push(parseInt(elementClicked.textContent));
                //numArr.push[elementClicked.textContent];
                firstSet = firstSet + elementClicked.textContent;
                console.log(firstSet);
                
            }
            if(elementClicked.className === 'digit3'){
                console.log(elementClicked.textContent);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //numArr.push(parseInt(elementClicked.textContent));
                //numArr.push[elementClicked.textContent];
                firstSet = firstSet + elementClicked.textContent;
                console.log(firstSet);
                
            }
            if(elementClicked.className === 'digit4'){
                console.log(elementClicked.textContent);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //numArr.push(parseInt(elementClicked.textContent));
                //numArr.push[elementClicked.textContent];
                firstSet = firstSet + elementClicked.textContent;
                console.log(firstSet);
                
            }
            if(elementClicked.className === 'digit5'){
                console.log(elementClicked.textContent);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //numArr.push(parseInt(elementClicked.textContent));
                //numArr.push[elementClicked.textContent];
                firstSet = firstSet + elementClicked.textContent;
                console.log(firstSet);
                
            }
            if(elementClicked.className === 'digit6'){
                console.log(elementClicked.textContent);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //numArr.push(parseInt(elementClicked.textContent));
                //numArr.push[elementClicked.textContent];
                firstSet = firstSet + elementClicked.textContent;
                console.log(firstSet);
                
            }
            if(elementClicked.className === 'digit7'){
                console.log(elementClicked.textContent);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //numArr.push(parseInt(elementClicked.textContent));
                //numArr.push[elementClicked.textContent];
                firstSet = firstSet + elementClicked.textContent;
                console.log(firstSet);
                
            }
            if(elementClicked.className === 'digit8'){
                console.log(elementClicked.textContent);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //numArr.push(parseInt(elementClicked.textContent));
                //numArr.push[elementClicked.textContent];
                firstSet = firstSet + elementClicked.textContent;
                console.log(firstSet);
                
            }
            if(elementClicked.className === 'digit9'){
                console.log(elementClicked.textContent);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //numArr.push(parseInt(elementClicked.textContent));
                //numArr.push[elementClicked.textContent];
                firstSet = firstSet + elementClicked.textContent;
                console.log(firstSet);
                
            }

            if(elementClicked.className === 'decimal'){
                console.log(elementClicked.textContent);
                let digLi = document.createElement('li');
                digLi.className = 'number';
                digLi.textContent = elementClicked.textContent;
                displayElem.appendChild(digLi);
                //numArr.push(parseInt(elementClicked.textContent));
                //numArr.push[elementClicked.textContent];
                firstSet = firstSet + elementClicked.textContent;
                console.log(firstSet);

            }
        }








        numEl1.addEventListener('click', disPushNum);
        numEl2.addEventListener('click', disPushNum);

        opELem.addEventListener('click', typeOfOp);

        equalsElem.addEventListener('click', equalsOp);


        
        let eventListener = function(){
            let numberRow = document.querySelector(".digit");
            numberRow.addEventListener('click', function(event){
                let elementClicked = event.target;
                if(elementClicked.className === 'digit'){
                    let digLi = document.createElement('li');
                    digLi.className = 'number';
                    digLi.textContent = elementClicked.innerHtml;
                    displayElem.appendChild(digLi);  
                }
            })
        }
        
