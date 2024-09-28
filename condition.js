const myPromise = new Promise(function(resolve, reject) {
    const sucsess = 'irma';

    if(sucsess === 'Irma') {
        resolve();
    } else{
        reject();
    }
});

myPromise
.then (function() {
    console.log('nama saya benar');
})
.catch(function() {
    console.log('nama saya salah');
})
.finally(function() {
    console.log('sistem promise itu telah selesai membaca variable nama')
})