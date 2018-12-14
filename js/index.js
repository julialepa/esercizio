document.addEventListener('DOMContentLoaded', function () {
});

const mio_array = [
    {
        id: 1,
        name: 'Jessica'
    },
    {
        id: 2,
        name: 'Marco'
    },
    {
        id: 3,
        name: 'Julia'
    }
]

for (let i = 0; i < mio_array.length; i++) {

    let id_string = mio_array[i].id.toString();


    let my_span = document.createElement('span')
    let span_id = document.createTextNode(id_string);
    my_span.appendChild(span_id);
    document.getElementById('object').appendChild(my_span);


    let my_p = document.createElement('p');
    let p_name = document.createTextNode(mio_array[i].name);
    my_p.appendChild(p_name);
    document.getElementById('object').appendChild(my_p);
}


