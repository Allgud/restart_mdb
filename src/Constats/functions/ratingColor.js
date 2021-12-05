const ratingColor=num=>{
    const ratingClasses = ['film__rating']
    if(num < 3){
        ratingClasses.push('bad')
    }
    if(num >=3 && num < 5){
        ratingClasses.push('middle')
    }
    if(num >=5 && num < 7){
        ratingClasses.push('norm')
    }
    if(num >= 7){
        ratingClasses.push('good')
    }
    return ratingClasses.join(' ')
}

export default ratingColor