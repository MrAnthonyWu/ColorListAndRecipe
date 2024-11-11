import { FaStar } from "react-icons/fa";
import { useState } from 'react'
import Star from "./Star";

export default function StarRating( {totalStars = 5, rating, ...props}) {
    const [selectedStars, setSelectedStars] = useState(rating);
    return (
        <div {...props}>
            {[...Array(totalStars)].map((x,i) =>(<Star key={i} selected={i<selectedStars} onSelect={() => setSelectedStars(i + 1)} />))}
            <p>{selectedStars} of {totalStars} stars</p>
        </div>
    );
}

//[...Array(totalStars)].map((x,i) =>(<Star key={i} selected={i<selectedStars} />))

/*
export default function StarRating( {totalStars}) {
    const [selectedStars] = useState(3);

    const rows = [];
    for(let i = 0; i< totalStars; i++) {
        rows.push(<Star key={i} selected={i<selectedStars}/>)
    }
    rows.push(<p>{selectedStars} of {totalStars} stars</p>)
    return rows;
}
*/
