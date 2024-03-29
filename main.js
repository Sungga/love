let getElementHeart = document.querySelector('.heart__icon');
let getElementSpanFirst = document.getElementById('click_span');

console.log(getElementSpanFirst);


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

function end() {
    let imgCat = document.querySelector('.cat__flower');
    let boxImgCat = document.querySelector('.box-cat__flower');

    imgCat.setAttribute('style', 'height: 500px; width: 500px; margin: auto;');
    boxImgCat.setAttribute('style', 'height: 100%; width: 100%; margin: auto; position: fixed; top: 0; left: 0; display: flex;');
}

function thucThiCauLenh() {
    //phong to khung chua trai tim
    let khungTraiTim = document.getElementById('heart');
    khungTraiTim.style.width = '150%';
    khungTraiTim.style.height = '150%';

    //phong to trai tim
    let getHeart__icon = document.querySelector('.heart__icon');
    getHeart__icon.setAttribute('style', 'font-size: 10000px; color: #fe466b; top: calc(0px - 5000px); left: calc(0px - 4000px);');

    // an trai tim va chuyen mau nen thanh mau giong trai tim
    // let background = document.getElementById('main');
    // background.setAttribute('style', 'background-color: #fe466b;');
    // getHeart__icon.display = "none";

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
            getElementHeart.style.background = '#fe466b';

            // dua covered len dau de be lai man hinh
            let covered = document.querySelector('.covered');
            covered.setAttribute('style', 'position: fixed; top: 0; left: 0; background-color: rgba(255, 255, 255, 0); z-index: 100; width: 100%; height: 100vh;')

            showText(1);
            return sleep(3000);
        })
        .then(function(){
            // an trai tim va chuyen mau nen thanh mau giong trai tim
            let background = document.getElementById('main');
            background.setAttribute('style', 'background-color: #fe466b;');
            // getHeart__icon.display = "none";
            showText(2);
            return sleep(4000);
        })
        .then(function(){
            showText(3);
            return sleep(3000);
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
            return sleep(2000);
        })
        .then(function(){
            let a = document.querySelector('.heart__icon');
            a.style.opacity = '0';
            let background = document.getElementById('main');
            background.setAttribute('style', 'background-color: rgba(255, 255, 255, 0);')

            end();
            return sleep(4000);
        })
}

showText(0);


getElementHeart.addEventListener('click', function(){
    thucThiCauLenh();
});

getElementSpanFirst.addEventListener('click', function(){
    thucThiCauLenh();
});

