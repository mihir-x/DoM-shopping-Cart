function test1(parameter){
    setText('paragraph1', toNumber('input-field'));
}
function test2(parameter){
    setText('paragraph2', 'Paragraph in 2')
}
function test3(parameter){
    setText('paragraph3', 'Paragraph in 3')
}

function setText(id, text){
    document.getElementById(id).innerText = text;
}

function toNumber(id){
    const number = parseInt(document.getElementById('input-field').value);
    return number;
}