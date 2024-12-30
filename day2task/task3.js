//REST
//Purpose: Gathers multiple arguments into a single array.
//EXAMPLE
display=(a,b,...c)=>{
    console.log(a);
    console.log(b);
    console.log(c);
    }
    display(1,2,"Vaisali","Arjun",2,7,2003);
    
    
//SPREAD
//Purpose: Expands an array into individual elements.
//EXAMPLE
    var arr=[1,2,3,4,5];
    var arr2=[6,7,8,9,10];
    var arr3=[...arr,...arr2];
    console.log(arr3);