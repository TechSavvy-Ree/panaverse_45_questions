/*45. Cars: Write a function that stores information about a car in a Object.The function should 
always receive a manufacturer and a model name. It should then accept an arbitrary number of 
keyword arguments. Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature.Print the Object that’s returned to make sure all the 
information was stored correctly.*/

function storeCarInfo(manufacturer: string, modelName: string, ...args: [string, any][]): Record<string, any> {
    const carInfo: Record<string, any> = {
        manufacturer,
        modelName
    };

    args.forEach(([key, value]) => {
        carInfo[key] = value;
    });

    return carInfo;
}

// Call the function with required and additional information
const carInfo = storeCarInfo("Toyota", "Camry", ["color", "red"], ["year", 2022]);
console.log(carInfo);


