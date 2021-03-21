const table_el = $('table');


displayTimeTable();

function displayTimeTable(){
    for(i = 9; i < 18; i++){
        let tr = $('<tr>');
        let tdTime = $('<td class="td-time">');

        if(i < 13){
            tdTime.text(`${i} AM`)
        }else{
            tdTime.text(`${i-12} PM`)
        }

        let tdTextarea = $('<td class="td-text">');
        let textarea = $('<textarea>');
        tdTextarea.append(textarea);

        let tdSave = $('<td class="td-save">');
        let button = $('<button>');
        let span = $('<span class="glyphicon glyphicon-floppy-save">');
        tdSave.append(button);
        tdSave.append(span);

        tr.append(tdTime);
        tr.append(tdTextarea);
        tr.append(tdSave);

        table_el.append(tr);
    }
}