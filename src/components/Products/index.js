import React from 'react'
import {
    ProductContainer,
    ProductWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements';


const Products = ({ heading, data }) => {
    return (
        <ProductContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return(
                       <ProductCard key={index}>
                           <ProductImg src={product.img}alt={product.alt} />
                           <ProductInfo>
                               <ProductTitle>{product.name}</ProductTitle>
                               <ProductDesc>{product.desc}</ProductDesc>
                               <ProductPrice>{product.price}</ProductPrice>
                               <ProductButton>{product.botton}</ProductButton>
                           </ProductInfo>
                       </ProductCard>
                    )
                })}
            </ProductWrapper>
        </ProductContainer>
    )
}

export default Products
