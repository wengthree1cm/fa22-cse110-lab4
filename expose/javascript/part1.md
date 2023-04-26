**Part1A **
1. 20
2. 20
3. 20
4. It will error since variable declared by `let` cannot pierce through if statement.
5. 0 because we cannot use reassignment to change a const variable
6. It will print error since `const` create block scope variable

**Part2 A**
1. It will print the final index of `i` since it is declared by `var` (which is 3)
2. It will print the last item's `discountedPrice` since it is created by `var` which can pierce through for loop (which is 150)
3. It will print the last item's `finalPrice` since it is created by `var` which can pierce through for loop (which is 150)
4. It will return an array that stores all item's price after discount since `discounted` is an array created by `var`.  (which is `[50,100,150]`)
5. It will error since the variable `i` is created by `let` which has a blcok scope
6. It will print error since `discountedPrice` is created by `let` since it has block scope 
7. It will print the last item's `finalPrice` since it is created by`let` and the print statement is in the same block of its decleration (which is 150)
8. It will return an array that stores all item's price after discount because the function can return variable declared by `let` as long as it is in the same or inner block  (which is `[50,100,150]`)
9. It will error since the variable `i` is created by `let` which has a blcok scope 
10. It will print the length of `prices` since the print statement is in the same block of decleration (which is 3)
11. It will return an array that stores all item's price after discount since it is changed by `push` not by reassignment or redeclare.  (which is `[50,100,150]`)
