const table_el = $('table');


displayTimeTable();


function displayTimeTable(){
    let currentTime = '2:34 PM';
    // moment().format('LT');

    for(i = 9; i < 18; i++){
        let tr = $('<tr>');
        let tdTime = $('<td class="td-time">');
        let am_pm;

        if(i < 13){
            am_pm = 'AM';
        }else{
            am_pm = 'PM';
        }

        tdTime.text(`${i} ${am_pm}`);

        let tdTextarea = $('<td class="td-text">');
        let textarea = $('<textarea>');
        tdTextarea.append(textarea);

        // background-color: var(--color-light-green);

        if(am_pm === 'AM'){
            if(currentTime.substr(currentTime.length - 2) === 'AM'){
                if(i < currentTime.substr(0,currentTime.indexOf(':'))){
                    tdTextarea.css('backgroundColor', 'lightgrey');
                }else if(i > currentTime.substr(0,currentTime.indexOf(':'))){
                    tdTextarea.css('backgroundColor', 'var(--color-light-green)');
                }else{
                    tdTextarea.css('backgroundColor', 'red');
                }
            }else{
                tdTextarea.css('backgroundColor', 'lightgrey');
            }
        }else{
            if(currentTime.substr(currentTime.length - 2) === 'PM'){
                if(i - 12 < currentTime.substr(0,currentTime.indexOf(':'))){
                    tdTextarea.css('backgroundColor', 'lightgrey');
                }else if(i - 12 > currentTime.substr(0,currentTime.indexOf(':'))){
                    tdTextarea.css('backgroundColor', 'var(--color-light-green)');
                }else{
                    tdTextarea.css('backgroundColor', 'red');
                }
            }
        }

        let tdSave = $('<td class="td-save">');
        let button = $('<button>');
        let span = $('<span class="glyphicon glyphicon-floppy-save">');
        button.append(span);
        tdSave.append(button);

        tr.append(tdTime);
        tr.append(tdTextarea);
        tr.append(tdSave);

        table_el.append(tr);
    }
}