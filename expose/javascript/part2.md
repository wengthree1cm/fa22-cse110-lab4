**12**  
A: `student.name`  
B: `let key='Grad Year'    
    student[key]`  
C: `student.greeting()`  
D: `let key='Favorite Teacher'  
    student[key].name`  
E: `student.courseLoad[0]`  

**13**  
A: `'32'` because we concatenated string `'3'` with number `2`  
B: `1` because we convert the stirng `'3'` to number and then do the minus  
C: `3` becasue `null` is considered as `0` in an arithmetic operation  
D: `'3null'` because `null` is considered as string `'null'` when doing string contatenation   
E: `4` becasue `true` is considered as number 1 when doing arithmetic add  
F: `0` because `false` and `null` are both considered as number `0` in add arithmetic operation  
G: `'3undefined'` because `undefined` is considered as string `'undefined'` in a stirng contatenation  
H: `NaN` because when performing arithmetic operation with `undefined` the result wil be special value `NaN`  

**14**  
A: true because when we use `>` to compare a string, the string is coverted to number   
B: true   when we compare two string use `<`, we compare the UTF-16 code unit value and here `2` is less than `1` so true   
C: true  when we compare string we convert the string to number before comparison   
D: false `===` means strict equal operator and it will return false of two different type  
E: false `==` will convert `true` to number 1 and 1 is not equal to 2 so false   
F: true because both of them are boolean value of `true` so they are qeual  

**15**
 `==` does the type conversion of the operands before comparison, whereas `===` compares the values as well as the data types of the operands.  
 So if we compare two different type with `==` will convert them to the same type before comparison and it is possible to get a result of true 
 but if we compare two different type with `===`, we will get a false since it also compare the type of the two things. 

**17**
The result will be `[2,4,6]`. First in each for loop, it loop through all the value of the `array`. And in each loop, we will execute function `doSomething` which is passes into the second parameter. In the function, it will return the value^2 and then we will push this new value into the new array. Finally we return the result array. 

**19**
it will print number 1,4,3,2 respectively
it first call `console.log(1)` then `console.log(2)` is set to print after a delay of 1000 milliseconds, `console.log(3)` has delay 0 but it will still be added to the queue so it will run after `console.log(4)` when the call stack is empty. So we print 1 and then 4 and then 3 and then 2.


