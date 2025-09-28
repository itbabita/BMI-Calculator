
function CalculatBMI(){
    let weight = document.getElementById('weight').value 
    let height = document.getElementById('height').value 

    let bmi = weight/(height/100)**2
    let resultm = "Your BMI is " + bmi.toFixed(2)

    if(bmi<18.5){
        resultm = resultm + "( Under weight) "
    }
    else if(bmi >= 18.5 && bmi < 25){
        resultm = resultm + "( Normal weight ) "     
    }
    else if(bmi >= 25 && bmi < 30){
        resultm = resultm + "( Over weight) "     
    }
    else if(bmi >= 30 ){
        resultm = resultm + "( Obese) "     
    }
    else{
        resultm = "Enter valid height & weight"
    }
    document.getElementById('result').innerHTML = resultm
    

}