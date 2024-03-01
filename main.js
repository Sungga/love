let getElementHeart = document.getElementById('heart');

//view 1 to view 2
getElementHeart.addEventListener('click', function(){
    //phong to khung chua trai tim
    this.style.width = '150%';
    this.style.height = '150%';

    //phong to trai tim
    let getHeart__icon = document.querySelector('.heart__icon');
    getHeart__icon.setAttribute('style', 'font-size: 10000px; color: #fe466b; top: calc(0px - 5000px); left: calc(0px - 4000px);');


    //an content
    let heart__content = document.querySelector('.heart__content');
    let promise = new Promise(function(resolve){
        resolve();
    })

    function sleep(time) {
        return new Promise(function(resolve) {
            setTimeout(resolve, time)
        });
    }

    promise
        .then(function(){
            heart__content.style.color = 'rgba(0, 0, 0, 0)';
            return sleep(1000);
        })
        .then(function(){
            heart__content.style.display = 'none';
            getElementHeart.style.background = '#fe466b';
            return sleep(1500);
        })
        .then(function(){
            getHeart__icon.style.display = 'none';
        })
});

//view 2 to end-view 2 (qua trinh moc cay)
