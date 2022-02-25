const search = function() {

    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')

    searchBtn.addEventListener('click', () =>{      //поле ввода (поиск товара)
        console.log(input.value)
    })

}

search()
