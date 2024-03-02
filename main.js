let getElementHeart = document.getElementById('heart');


function showText(index) {
    let textSpan = document.querySelectorAll('.heart__content');
    textSpan.forEach(function(text, i) {
        if(text.style.display = 'block') {
            text.style.opacity = '0';
        }

        if(index == i) {
            text.style.opacity = '0';
            text.style.display = 'block';
            text.style.opacity = '1';
        }
    });
}

showText(0);

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
            showText(1);
            return sleep(4000);
        })
        .then(function(){
            getElementHeart.style.background = '#fe466b';
            showText(2);
            return sleep(4000);
        })
        .then(function(){
            showText(3);
            return sleep(4000);
        })
        .then(function(){
            showText(4);
            return sleep(4000);
        })
        .then(function(){
            showText(5);
            return sleep(4000);
        })
        .then(function(){
            showText(6);
            return sleep(4000);
        })
        .then(function(){
            showText(7);
            return sleep(4000);
        })
});

//view 2 to end-view 2 (qua trinh moc cay)
