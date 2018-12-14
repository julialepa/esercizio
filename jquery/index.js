$( document ).ready(function() {
});

const mio_array = [
    {
        id : 1,
        name : 'Jessica' 
    },
    {
        id : 2,
        name : 'Marco' 
    },
    {
        id : 3,
        name : 'Julia' 
    }
]  

for (let i = 0; i < mio_array.length; i++) {
    $('#object').append('<span>' + mio_array[i].id + '</span>')
    $('#object').append('<p>' + mio_array[i].name + '</p>')
}   


