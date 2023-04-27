function aa(){
     let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

let a = setInterval(aa,1000)


// this is optional
function bb(a){
    clearInterval(a);
}

setTimeout(()=>bb(a),6000)
