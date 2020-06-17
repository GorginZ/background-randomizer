const button = document.querySelector('button');
const body = document.querySelector('body');

function randCol(min, max) { 
    const col1 = Math.floor(Math.random() * (max - min + 1) + min)
    const col2 = Math.floor(Math.random() * (max - min + 1) + min)
    const col3 = Math.floor(Math.random() * (max - min + 1) + min)
    const rgbString = '\'rgb('
    const myCol =  rgbString + col1 + ',' + col2 + ',' +  col3 + ')\';'
    return myCol
  }
    button.addEventListener("click", (e) => {
        document.body.style.background = randCol(0,255);
        console.log(randCol(0,255))

    })

const rgbString = 'rgb('
const myCol =  rgbString + col1 + ',' + col2 + ',' +  col3 + ')';