// 1. Function without arguments, with return type (Arrow function)
const calculateGST = () => {
    const originalPrice = 2200; 
    const gstRate = 10; 
    const gstAmount = (originalPrice * gstRate) / 100;
    const finalPrice1 = originalPrice + gstAmount;
    return finalPrice1; 
  };
  
  // 2. Function with arguments, with return type (Arrow function)
  const calculateGSTWithArguments = (originalPrice, gstRate) => {
    const gstAmount = (originalPrice * gstRate) / 100;
    const finalPrice2 = originalPrice + gstAmount; 
    return finalPrice2; 
  };
  
  // 3. Function without arguments, without return type (Arrow function)
  const logGST = () => {
    const originalPrice = 1800; 
    const gstRate = 20; 
    const gstAmount = (originalPrice * gstRate) / 100;
    const finalPrice3 = originalPrice + gstAmount;
    console.log("Final price after GST (without return type): ₹" + finalPrice3);
  };
  
  // 4. Function with arguments, without return type (Arrow function)
  const logGSTWithArguments = (originalPrice, gstRate) => {
    const gstAmount = (originalPrice * gstRate) / 100;  
    const finalPrice4 = originalPrice + gstAmount; 
    console.log("Final price after GST (with arguments and no return type): ₹" + finalPrice4); 
  };
  
  // Calling the functions and logging the results
  
  const finalPrice1 = calculateGST(); 
  console.log("Final price after GST (without arguments): ₹" + finalPrice1); 
  
  const finalPrice2 = calculateGSTWithArguments(1500, 10); 
  console.log("Final price after GST (with arguments): ₹" + finalPrice2); 
  
  logGST(); 
  
  logGSTWithArguments(3000, 15);
   
  
