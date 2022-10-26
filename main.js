// The value for Kelvin will remain constant, hence not assigning is var or let
const kelvin = 0

// converting Kelvin to Celsius by subtracting 273 from the 'kelvin' variable
const celsius = kelvin - 272;

// Fahrenheit conversion here. Multiplying the 'celcius' variable by 9 divided by five plus 32
// When you don't have this program you can just subtract 30 from your Fahrenheit and half that result. It's rough, but so is Celcius
// (Fahrenheit is named for physicist Daniel Gabriel Fahrenheit)
const fahrenheit = celsius * (9/5) + 32;

// Real talk: I have no idea what a Newton is but I included this conversion for extra credit
const newton = celsius * (33/100)

//I'm terrified of all numbers, so using the Math.floor() to round down Fahrenheit here was super scary
// I *could* have put all this on one line but I carriage returned for readability. 
console.log(`The temperature is ${Math.floor(fahrenheit)} degrees Fahrenheit \n 
\(While for the vast majority of the world it's ${celsius} degrees Celsius\) \n
\(...and for weirdos it's ${Math.floor(newton)} Newtons\)` );
