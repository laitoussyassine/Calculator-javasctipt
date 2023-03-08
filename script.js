let display = document.getElementById('total');

let buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map( btn => {
    btn.addEventListener('click', (e) => {
        switch(e.target.innerText){
            // pour supprimer tout les emelent le div du total
            case 'C':
                display.innerText = '';
                break;
            case '=':
                // si on le click directement = on va retourner un errer
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                // pour supprimer juste un seule element le div du total
                if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});