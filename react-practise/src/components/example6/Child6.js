import React from 'react'

function Child6({product}) {
    if(product === "Mango") {
        throw new Error(`${product} is not liked`);
    }
  return (
    <div>{product}</div>
  )
}

export default Child6