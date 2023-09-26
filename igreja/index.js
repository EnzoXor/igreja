var tela = 'login'



    const agenda = document.querySelector(".agenda")
    if (agenda.classList.contains('invisible'), tela =='agenda'){

        agenda.classList.remove('invisible')
    }
    else{
        agenda.classList.add('invisible')
    }


    const bottom = document.querySelector('.bottomb')
    const login = document.querySelector(".login")
    if (login.classList.contains('invisible'), tela =='login'){
        bottom.classList.add('invisible')
        login.classList.remove('invisible')
    }else{
        login.classList.add('invisible')
    }

    const casa = document.querySelector(".casa")
    if (casa.classList.contains('invisible'), tela =='casa'){

        casa.classList.remove('invisible')
    }else{
        casa.classList.add('invisible')
    }


function change(){
    const buttons = document.querySelectorAll(".botomb button")
    buttons.classList.toggle("active")
    
}
function createvent(){
    const agenda = document.querySelector(".agenda")
    agenda.innerHTML += `<div class="evento">
    <div class="dataevento"><span>dom</span><span>24/09</span></div>
    <div class="nomevento red "><span>Culto</span> <span>19:30</span></div>
</div>`
}

function color(){
    const buttons = document.documentElement
    buttons.classList.toggle("dark")
}