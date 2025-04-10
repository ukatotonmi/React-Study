import React, {useState} from "react";

function Card({name,age,hobby}) {
    const favoriteFood = ['우치찜','엽떡','치킨','부대찌개'];
    const [food, setFood] = useState(0);

    const foodchange=()=>{
        setFood(nextFood => (nextFood + 1) % favoriteFood.length);
    }

    return (
        <div>
            <h1>이름 : {name}</h1>
            <h1>나이 : {age}</h1>
            <h1>취미 : {hobby}</h1>
            <h1>좋아하는 음식 : {favoriteFood[food]}</h1>
            <button onClick={foodchange}>음식 변경</button>
        </div>
    )
}

export default Card;
