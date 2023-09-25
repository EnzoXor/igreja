var tela = 'casa'



    const agenda = document.querySelector(".agenda")
    if (agenda.classList.contains('invisible'), tela =='agenda'){

        agenda.classList.remove('invisible')
    }
    else{
        agenda.classList.add('invisible')
    }



    const login = document.querySelector(".login")
    if (login.classList.contains('invisible'), tela =='login'){

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
function color(){
    const buttons = document.documentElement
    buttons.classList.toggle("dark")
}