const fr_lang = document.querySelector('.fr_lang');
const en_lang = document.querySelector('.en_lang');
const fr = document.querySelector('.fr');
const en = document.querySelector('.en');
console.log(fr_lang)
console.log(en_lang)
console.log(fr)
console.log(en)

document.addEventListener('DOMContentLoaded', function(){

    // By default
    fr_lang.classList.add("active-lang");
    fr.classList.add("active-flag");
    
    // Function switch
   // English button
   en.addEventListener('click', function(){
        
    en_lang.classList.add("active-lang");
    fr_lang.classList.remove("active-lang")
    fr.classList.remove("active-flag");
    en.classList.add("active-flag"); })
 
      // French button
      fr.addEventListener('click', function(){
        // Enable French
        fr_lang.classList.add("active-lang"); 
                
        // Disable English
        en_lang.classList.remove("active-lang") 

        // Active or remove the opacity on the flags.
        fr.classList.add("active-flag");
        en.classList.remove("active-flag");
              })
      
      
 });
