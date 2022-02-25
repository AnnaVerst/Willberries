const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');


    const getData = function() {
    fetch('https://willberries-e9881-default-rtdb.firebaseio.com/db.json')        //fetch обратился к файлу json
    .then((res) => res.json())   //ответ получен  //получаем структуру json
    .then((data) =>{
        console.log(data);
    })
}

    links.forEach(function (link) {
        link.addEventListener('click', (event)=>{
            event.preventDefault();                 //убирает путь перехода (#)
            getData()
        });
    })

}
getGoods()