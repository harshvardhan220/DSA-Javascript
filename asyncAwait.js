let promise = new Promise((res,rej) => {
    setTimeout(() => {
         res("One Resolved");
    }, 1000);
})
let promise2 = new Promise((res,rej) => {
    setTimeout(() => {
       res("Two Resolved");
    }, 8000);
})

let a = async () => {
    let resp = await promise;
    console.log(resp)
    let resp2 = await promise2;
    console.log(resp2)
    console.log("Last Console.log")

}

console.log(a())