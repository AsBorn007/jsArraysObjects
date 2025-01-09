// array is a collection of diffrent datatypes or elements
let arraysData = [25,"PRavven" ,true,]
let showArrays =  document.getElementById("showData");
let showDataIndex =  document.getElementById("showDataIndex");
showArrays.innerHTML = arraysData;


let findValueUsingIndex = arraysData[0];  //this give result that is String Praveen
showArrays.innerHTML = findValueUsingIndex;

let showDataIndexVal = arraysData[1];  //this give result that is String Praveen
showDataIndex.innerHTML = showDataIndexVal;