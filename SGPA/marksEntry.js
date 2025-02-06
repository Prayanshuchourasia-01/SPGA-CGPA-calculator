let Total_ThMarks = [];
let Total_ThCr = [];
let Total_PrMarks = [];
let Total_PrCr = [];



let ThSubMarks = document.querySelectorAll(".ThSubMarks");
console.log(ThSubMarks);

let ThSubCr = document.querySelectorAll(".ThSubCr");
console.log(ThSubCr);

let PrSubMarks = document.querySelectorAll(".PrSubMarks");
console.log(PrSubMarks);

let PrSubCr = document.querySelectorAll(".PrSubCr");
console.log(PrSubCr);





function takeValue() {
    // theory subject marks taken here in the array : Total_ThMarks.
    ThSubMarks.forEach((val) => {
        Total_ThMarks.push(val.value);
        console.log(val.value);
    })
    console.log(Total_ThMarks);

    // Theory Subject Credit Score Taken here in the array : Total_ThCr
    ThSubCr.forEach((val)=>{
        Total_ThCr.push(val.value);
        console.log(val.value);
    })
    console.log(Total_ThCr);

    // Practical Subject Marks Taken Here in the array : 
    PrSubMarks.forEach((val)=>{
        Total_PrMarks.push(val.value);
        console.log(val.value);
    })
    console.log(Total_PrMarks);

    // Practical Subject Credit taken here in the array : 
    PrSubCr.forEach((val)=>{
        Total_PrCr.push(val.value);
        console.log(val.value);
    })
    console.log(Total_PrCr);


}