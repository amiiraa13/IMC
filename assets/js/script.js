
function clc() {
    const resultContainer = document.querySelector("#result")
    const poids = document.querySelector("#poids").value
    const taille = document.querySelector("#taille").value
        if (isNaN(poids) || isNaN(taille) || poids <= 0 || taille <= 0) {
            resultContainer.innerHTML = " Entrez des données valides. ";
            
        }else{
            const result = parseFloat(poids) / (parseFloat(taille)* parseFloat(taille))
           
            if (result <= 18.5  ) {
                document.querySelector("#etat").innerHTML=  " maigreur ";
            
        }else if (result >=18.6 && result <= 24.9) {
            document.querySelector("#etat").innerHTML=  " Normal ";
            
        }else if (result >= 25 && result <= 29.9) {
            document.querySelector("#etat").innerHTML=  " Surpoids ";
            
        }else if (result >= 30 && result <= 40) {
            document.querySelector("#etat").innerHTML=  " Obésité ";
            
        }else if (result >= 40) {
            document.querySelector("#etat").innerHTML= " Obésité morbide ";
            
        }
    
    resultContainer.innerHTML = "Votre IMC est de " + result.toFixed(2)
        }
        
        
}