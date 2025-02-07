// variables where is the data going to store for a while and then put them for the calculation for the result. 
// These Variable Store the array of the marks which is taken from the input tag & the values are stored in the form of array.

let All_ThMarks = [];     // These array will be filled after the function takeValue() start 
let All_ThCr = [];        // These array will be filled after the function takeValue() start  
let All_PrMarks = [];     // These array will be filled after the function takeValue() start 
let All_PrCr = [];        // These array will be filled after the function takeValue() start 


// Variables for storing the array of grade score which are derived from the All_Th / Pr Marks 
let AllGradeScoreTh = [] ;
let AllGradeScorePr = [] ;

let calculation;
// let SumOfGSTh; 
// let SumOfGSPr ; 
// let SumOfCrTh ;
// let SumOfCrPr ;



// making all the nodes of the html doc for calculation.
let ThSubMarks = document.querySelectorAll(".ThSubMarks");
console.log(ThSubMarks);

let ThSubCr = document.querySelectorAll(".ThSubCr");
console.log(ThSubCr);

let PrSubMarks = document.querySelectorAll(".PrSubMarks");
console.log(PrSubMarks);

let PrSubCr = document.querySelectorAll(".PrSubCr");
console.log(PrSubCr);



function takeValue() {
// theory subject marks taken here in the array : All_ThMarks.
    ThSubMarks.forEach((val) => {
        All_ThMarks.push(val.value);
        console.log(val.value);
    })
    console.log(All_ThMarks);

// Theory Subject Credit Score Taken here in the array : All_ThCr
    ThSubCr.forEach((val)=>{
        All_ThCr.push(parseInt(val.value));
        console.log(val.value);
    })
    console.log(All_ThCr);

// Practical Subject Marks Taken Here in the array : All_PrMarks
    PrSubMarks.forEach((val)=>{
        All_PrMarks.push(val.value);
        console.log(val.value);
    })
    console.log(All_PrMarks);

// Practical Subject Credit taken here in the array :  All_PrCr
    PrSubCr.forEach((val)=>{
        All_PrCr.push(parseInt(val.value));
        console.log(val.value);
    })
    console.log(All_PrCr);




// Variable for storing the sum of the Credit score input by the user for calculation the final result. 
    let SumOfCrTh = All_ThCr.reduce((prev , curr )=>{   
        return prev + curr ;                // For sum of theory credit 
    })
    console.log(`Sum of Theory Credit ${SumOfCrTh}`);
    
    let SumOfCrPr = All_PrCr.reduce((prev , curr )=>{
        return prev + curr ;               // For the sum of practical credit 
    })
    console.log(`Sum of Practical Credit ${SumOfCrPr}`);



// Calculation of Grade Score 
// Steps for the calculation : 
// 1. Find the grade point scale given by the instituation. 
// 2. find the grade score by using the formula : grade score = grade point x credit score of that subject. 
// 3. Calculate the sum of all the grade score and sum of all the credit score. 
// 4. finally , calculate the SGPA using the formula : SGPA = Sum of Grade score / sum of credit score. 


// For Grade Point 


All_ThMarks.forEach((val)=>{
    // console.log(parseInt(val));
    if ((val>=61 && val<=70)|| val==="A+" ){
        AllGradeScoreTh.push(parseInt(10));
    }
    else if ((val>=51 && val<=60)|| val==="A" ){
        AllGradeScoreTh.push(parseInt(9));
    }
    else if ((val>=41 && val<=50)|| val==="B+" ){
        AllGradeScoreTh.push(parseInt(8));
    }
    else if ((val>=31 && val<=40)|| val==="B" ){
        AllGradeScoreTh.push(parseInt(7));
    }
    else if ((val>=28 && val<=33)|| val==="C+" ){
        AllGradeScoreTh.push(parseInt(6));
    }
    else if ((val>=23 && val<=27)|| val==="C" ){
        AllGradeScoreTh.push(parseInt(5));
    }
    else{
        console.log(`Invalid input ${val}`);
    }

})
All_PrMarks.forEach((val)=>{
    // console.log(parseInt(val));
    if ((val>=61 && val<=70)|| val==="A+" ){
        AllGradeScorePr.push(parseInt(10));
    }
    else if ((val>=51 && val<=60)|| val==="A" ){
        AllGradeScorePr.push(parseInt(9));
    }
    else if ((val>=41 && val<=50)|| val==="B+" ){
        AllGradeScorePr.push(parseInt(8));
    }
    else if ((val>=31 && val<=40)|| val==="B" ){
        AllGradeScorePr.push(parseInt(7));
    }
    else if ((val>=28 && val<=33)|| val==="C+" ){
        AllGradeScorePr.push(parseInt(6));
    }
    else if ((val>=23 && val<=27)|| val==="C" ){
        AllGradeScorePr.push(parseInt(5));
    }
    else{
        console.log(`Invalid input ${val}`);
    }

})

// Loop For calculating Theory Grade score by using the formula : Grade score = grade point x credit score .
let SumOfGSTh = 0 ;
let SumOfGSPr = 0 ;
for (let i = 0 ; i<AllGradeScoreTh.length ; i++ ){
    SumOfGSTh += AllGradeScoreTh[i]*All_ThCr[i] ; 
}
for (let i = 0 ; i<AllGradeScorePr.length ; i++ ){            
    SumOfGSPr += AllGradeScorePr[i]*All_PrCr[i] ; 
}

// console.log(`Sum of All Grade Score TH  : ${SumOfGSTh}`);
// console.log(`Sum of All Grade Score PR  : ${SumOfGSPr}`);

calculation = (SumOfGSTh+SumOfGSPr)/(SumOfCrTh+SumOfCrPr);
console.log(calculation);

alert(`Your SGPA is ${calculation}`) ;

}
setTimeout(()=>{
    location.reload();
},45000)
// let finalOutput ;
// console.log(`SGPA :${calculation}`);
// // export {calculation} ; 


