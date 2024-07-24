const addnum = (...args) => {
    let sum = 0;
    args.forEach((i)=>(sum+=i));
    return sum;
}

console.log(addnum(1,2,6,4,9));
