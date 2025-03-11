let count = 0
export default function showGallow(el){
    document.querySelector('.gallow').children[count].style.display = 'block'
    el.style.color = "red";
    count += 1
    
    if(count == 7){
        setTimeout(()=>{
            if(confirm('Начать новую игру?')){
                location.reload()
            }    
        },100)
       
    }
}