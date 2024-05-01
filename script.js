let btn = document.getElementById("btn")


// //BMI = weight (kg) ÷ (height (m))2

btn.addEventListener('click',function(){
    
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let result = document.getElementById("result")
    let sug = document.getElementById("suggestion")

    let w = Number(weight)
    let h = Number(height)
    let hsqrt = h*h
    let BMI = w/hsqrt
    let output = BMI.toFixed(2)
    //result.innerText = `Your BMI is ${output}`

    if(output<18.5){
        result.innerText = `Your BMI is ${output} you are UNDERWEIGHT.`
    }

    else if(output>=18.5 && output<=24.9){
        result.innerText = `Your BMI is ${output} Congratulations! you have NORMAL WEIGHT.`
    }
    else if(output>=25 && output<=29.9){
        result.innerText = `Your BMI is ${output} you are OVERWEIGHT.`
        sug.innerText = `Don't Worry! We will help you to loss your weight. You just have to be patient and click on the link`

    }
    else if(output>=30 && output<=34.9){
        result.innerText = `Your BMI is ${output} you are OBESE.`
        sug.innerText = `You have to loss your weight. Just go here and have some knowledge about Weight Loss`

    }
    else{
        result.innerText = `Your BMI is ${output} you are EXTREMELY-OBESE.`
        sug.innerText = `You have to loss your weight. Just go here and have some knowledge about Weight Loss`
    }
})

//Age
let AgeSlider = document.querySelector(".Age")
let value = document.querySelector(".value")
value.innerText = AgeSlider.value
AgeSlider.oninput = function(){
    value.textContent = this.value
}


