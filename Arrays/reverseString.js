



function reverse(str){
    if (!str || str.length < 2 || typeof str !== 'string'){
        return 'that\'s not good';
    }

    const backwards = [];
    const lastItem = str.length - 1;
    for (let i = lastItem; i >= 0 ; i--) {
        backwards.push(str[i]);
    }
    console.log(backwards);
    return backwards.join('');
    // let s1 ='';
    // for (let i = 0; i < s.length; i++) {
    //     s1[i] = s[i];      
    // }

    // for (let j = 0; j < s.length; j++) {
    //     s[j] = s1[s.length -1 - j];
    // }
    // return s;
}

reverse('hello');

