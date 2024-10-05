import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    padding: 16px;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s;
    max-width: 300px;
    margin: 16px;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
    }
`;

const ProductImage = styled.img`
    width: 100%;
    border-radius: 8px;
    margin-bottom: 12px;
`;

const ProductName = styled.h3`
    font-size: 22px;
    color: #333;
    margin: 12px 0;
    font-weight: bold;
`;

const ProductDescription = styled.p`
    font-size: 16px;
    color: #666;
    margin-bottom: 16px;
`;

const BuyButton = styled.button`
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    &:hover {
        background-color: #0056b3;
        transform: scale(1.05);
    }
`;

const ProductCard = ({ name, description, image }) => {
    return (
        <CardContainer>
            <ProductImage src={image} alt={name} />
            <ProductName>{name}</ProductName>
            <ProductDescription>{description}</ProductDescription>
            <BuyButton>Comprar</BuyButton>
        </CardContainer>
    );
};

export default ProductCard;
