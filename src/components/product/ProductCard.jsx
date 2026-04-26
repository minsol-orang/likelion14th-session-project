import styled from "styled-components";

const Card = styled.div`
  width: 181px;
  gap : 5px;
`;

const ProductImage = styled.img`
  width: 181px;
  height: 237px;
  object-fit: contain;
`;

const ProductName = styled.div`
width : 191px;
height : 13px;
  margin-top: 12px;
  color: #333;
  font-family: Pretendard;
  font-style: normal;
  font-size: 11px;
  font-weight: 400;
  white-space: nowrap;
`;

const ProductPrice = styled.div`
  width : 191px;
  height : 13px;
  margin-top: 5px;
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 700;
`;

const ProductReview = styled.div`
  width : 191px;
  height : 13px;
  margin-top: 3px;
  color: #A7A7A7;
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 400;
`;

export default function ProductCard({ image, name, price, review }) {
  return (
    <Card>
      <ProductImage src={image} />
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
      <ProductReview>{review}</ProductReview>
    </Card>
  );
}