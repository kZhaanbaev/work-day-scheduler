const table_el = $('table');

displayTimeTable();

const buttonSave = $('button');

buttonSave.on('click', function(event){
    let time = $(this).closest('tr').children().first();

    let textarea = $(this).parent().prev().children();
    
    if(textarea.val()){
        localStorage.setItem(time.html(), textarea.val());
    }else{
        localStorage.setItem(time.html(), '');
    }
})


function displayTimeTable(){
    let currentTime = moment().format('LT');

    for(i = 9; i < 18; i++){
        let tr = $('<tr>');
        let tdTime = $('<td class="td-time">');
        let am_pm;
        let time;

        //setting AM or PM based on hour of the day
        if(i < 13){
            am_pm = 'AM';
            time = `${i} ${am_pm}`;
            tdTime.text(time);
        }else{
            am_pm = 'PM';
            time = `${i-12} ${am_pm}`
            tdTime.text(time);
        }

        let tdTextarea = $('<td class="td-text">');
        let textarea = $('<textarea>');

        //setting value of textarea from local storage, if exists
        if(localStorage.getItem(time)){
            textarea.text(localStorage.getItem(time));
        }

        tdTextarea.append(textarea);

        //based on current time setting a background color to text area
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

