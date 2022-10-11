function KadaneAlgorithm(array){

    let max =array[0];
    let sum =0;

    for(let i =0;i< array.length;i++){
        sum+=array[i];
        if(sum > max){
            max = sum
        }
        if( sum <0){
            sum=0
        }
    }

    return max;
}


console.log(KadaneAlgorithm([-2, ,1, -3, 4, -1, 2, 1, -5, 4]))