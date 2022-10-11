function largestSum(array){

    let max =array[0];

    for(let  i =0 ; i< array.length ; i++){

        let sum =0;
        for(let j =i ; j<array.length ; j++){

            sum+=array[j];

            if(sum > max){
                max = sum;
            }
        }
    }

    return max;
}

console.log(largestSum([-2, ,1, -3, 4, -1, 2, 1, -5, 4]));