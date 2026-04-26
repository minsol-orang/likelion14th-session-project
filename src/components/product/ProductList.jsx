import styled from "styled-components";
import ProductCard from "./ProductCard";

import grayHoodie from "../../assets/images/gray_hoodie.png";
import lightblueHoodie from "../../assets/images/lightblue_hoodie.png";
import blackJacket from "../../assets/images/black_jacket.png";
import navyeHoodie from "../../assets/images/navy_hoodie.png";
import nikeShoes from "../../assets/images/nike_shoes.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 181px);
  column-gap: 57px;
  row-gap: 35px;
  margin-top: 20px; 
  margin-left : 150px;
  margin-right : 149px;
`;

export default function ProductList() {
  return (
    <Container>
      <ProductListContainer>
      <ProductCard
        image={grayHoodie}
        name="아이앱 스튜디오 25 후드 라이트 그레이"
        price="145,000원"
        review="리뷰 1,561"
      />

      <ProductCard
        image={lightblueHoodie}
        name="아이앱 스튜디오 25 후드 라이트 블루"
        price="145,000원"
        review="리뷰 1,732"
      />

      <ProductCard
        image={blackJacket}
        name="아디다스 블랙 저지 2016"
        price="255,000원"
        review="리뷰 781"
      />

      <ProductCard
        image={navyeHoodie}
        name="슈프림 후드집업 30 딥블루"
        price="458,000원"
        review="리뷰 2,567"
      />

      <ProductCard
        image={nikeShoes}
        name="나이키 에어 그레이 하운드 25"
        price="235,000원"
        review="리뷰 231"
      />

      <ProductCard
        image={grayHoodie}
        name="아이앱 스튜디오 25 후드 라이트 그레이"
        price="145,000원"
        review="리뷰 1,561"
      />

      <ProductCard
        image={lightblueHoodie}
        name="아이앱 스튜디오 25 후드 라이트 블루"
        price="145,000원"
        review="리뷰 1,732"
      />

      <ProductCard
        image={blackJacket}
        name="아디다스 블랙 저지 2016"
        price="255,000원"
        review="리뷰 781"
      />

      <ProductCard
        image={navyeHoodie}
        name="슈프림 후드집업 30 딥블루"
        price="458,000원"
        review="리뷰 2,567"
      />

      <ProductCard
        image={nikeShoes}
        name="나이키 에어 그레이 하운드 25"
        price="235,000원"
        review="리뷰 231"
      />
    </ProductListContainer>
    </Container>
    
  );
}