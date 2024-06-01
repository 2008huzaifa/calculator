function btn(e) {
    document.getElementById('inp').value += e
}

function clr(){
    var getvalue = document.getElementById('inp')
    getvalue.value = ''
}


function ans() {
    var getvalue = document.getElementById('inp')

    getvalue.value = eval(getvalue.value)
}

function last() {

    var getvalue = document.getElementById('inp')

    getvalue.value = getvalue.value.slice(0, -1)
}




