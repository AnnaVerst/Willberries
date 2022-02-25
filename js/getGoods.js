const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link');
    const more = document.querySelectorAll('.more');

    const renderGoods = (goods) =>{
        const goodsContainer = document.querySelector('.long-goods-list')

        goodsContainer.innerHTML = ""

        goods.forEach( good => {
            const goodBlock = document.createElement('div')

            goodBlock.classList.add('col-lg-3')
            goodBlock.classList.add('col-sm-6')

            goodBlock.innerHTML = `
                <div class="goods-card">
                    <span class="label ${good.label ? null : 'd-none'}">${good.label}</span>
                    <img src="db/${good.img}" alt="${good.name}" class="goods-image">
                    <h3 class="goods-title">${good.name}</h3>
                    <p class="goods-description">${good.description}</p>
                    <button class="button goods-card-btn add-to-cart" data-id="${good.id}">
                        <span class="button-price">$${good.price}</span>
                    </button>
            </div>
            `
            goodsContainer.append(goodBlock)
            
        })
    }


    const getData = (value, category) => {
    fetch('https://willberries-e9881-default-rtdb.firebaseio.com/db.json')        //fetch обратился к файлу json
    .then((res) => res.json())   //ответ получен  //получаем структуру json
    .then((data) =>{

        //? - if, : - else
        const array = category ? data.filter((item) => item[category] === value) : data   //перебирает массив и сравнивает гендер, и в массив попадает только те гендеры которые мы обозначили
             
        localStorage.setItem('goods', JSON.stringify(array))
        if(window.location.pathname !== '/goods.html'){
            window.location.href = '/goods.html'
        } else{
            renderGoods(array)
        }

    })
}

    links.forEach((link) => {
        link.addEventListener('click', (event)=>{
            event.preventDefault();                 //убирает путь перехода (#)
            const linkValue = link.textContent
            const category = link.dataset.field

            getData(linkValue, category)
        });
    })

    more.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 

            const linkValue = link.textContent;
            const category = link.dataset.field;

            getData(linkValue, category);
        })
    })



    if(localStorage.getItem('goods') && window.location.pathname === '/goods.html'){
        renderGoods(JSON.parse(localStorage.getItem('goods')))
    }



}
getGoods()