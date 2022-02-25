const search = function() {

    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > input')

    input.addEventListener('click', (event) =>{      //поле ввода (поиск товара)
        console.log(input.value)
    })

}

search()
