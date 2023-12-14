let salePrice =200;


if(salePrice>100){
    let discount=salePrice * 0.10 ;
    let pay =salePrice-discount

    console.log(`original price: ${salePrice} discount: ${discount} new price: ${pay}`)
}else{    
    let discount=salePrice * 0.05 ;
    let pay =salePrice-discount
    console.log(`original price: ${salePrice} discount: ${discount} new price: ${pay}`)

}
