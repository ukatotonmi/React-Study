function solution(food) {
    let answer = '';
    for(let i=1;i<food.length;i++){
        answer+=String(i).repeat(Math.floor(food[i]/2));
    }
    answer+='0';
    for(let i=food.length-1;i>=1;i--){
        answer+=String(i).repeat(Math.floor(food[i]/2));
    }
    return answer;
}
