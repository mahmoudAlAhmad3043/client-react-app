// const email =/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
// const password = /[\*\(\)\&\^\%\$\#\!\=\+\-\\\;\:\/\,\[\]\|\`\~]/
// let str = " mahmoud@dsd.com ";

// // if (!str.match(password) && email.test(str)) {
// //     console.log("yes");
// //   }else{
// //     console.log("no");
// //   }

// console.log(email.test(str.trim()));

let arr = [1,1,1,2,3,3,4,4,5,5,5];
let c=1;
for(let i=1;i<arr.length;i++){
    if(arr[i] === arr[i-1]){
        c++;
    }else{
        console.log(`${arr[i-1]} >> ${c}`);
        c=1;
    }
    if(i===arr.length-1){
        console.log(`${arr[i]} >> ${c}`);
    }
}
