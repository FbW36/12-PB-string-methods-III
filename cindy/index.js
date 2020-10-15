
    //Declare a variable with the value of "Hello World". Covert the value to upper case and print the converted value to the console.
    let str1 = "Hello World"
    console.log("str1 => ", str1.toUpperCase())

    //Declare another variable with the value of "Hello Earthling". Convert the value to lower case and print the converted value to the console.
    let str2 = "Hello Earthling"
    console.log("str2 => ", str2.toLowerCase())

    //3 .Create a new string from a given string with the first character of the given string added at the front and back, i.e., expected output: Bananas => BBananasB.

    let str3 = "Meow"
    console.log("str3 => ", str3.charAt(0)+ str3 + str3.charAt(0))
    

    //Create a new string from a given string taking the last 3 characters of the string and add them to both the front and back of the new string. The string length must be 3 or more, i.e., expected output: Scritch => tchScritchtch.
    let str4 = "Nyakoropon"
    console.log("str4 => ", str4.slice(7, 10)+ str4 + str4.slice(7, 10))



    //Create a new string from a given string by changing the position of first and last characters. The string length must be greater than or equal to 2, i.e., expected output: BoogieWoogie => eoogieWoogiB.
    let str5 = "Nyanya"
    let firstChar = str5.charAt(0)
    let lastChar = str5.charAt(5)
    console.log(str5)
    console.log("First char =>", firstChar)
    console.log("Last char => ", lastChar)
    console.log("str5 =>", lastChar + str5.substr(1)+firstChar)



    //Declare a variable and assign the value "the quick brown fox" (all in lower case). Capitalize the first letter of that string. Print the result to the console.

    let str6 = "the quick brown fox"
    let charCapitalized = str6.charAt(0).toUpperCase() + str6.slice(1)
    console.log("str6 First char capitalized => ", charCapitalized)