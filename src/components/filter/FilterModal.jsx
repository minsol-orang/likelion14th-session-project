import styled from "styled-components";
import Button from "../common/button/Button";
import closeUrl from "../../assets/icons/close_icon.svg";


const ModalBox = styled.div`
min-width: 294px;
  width: fit-content;
    background-color: white;
  padding: 30px 33px 48px 35px;
  border-radius: 25px;
  border-color : red;
`;

const Title = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-family: Pretendard;
`;

const CloseIcon = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
`;

const Background = styled.div`
top: 0;
right: 0;
bottom: 0;
left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OptionBox = styled.div`
  display: ${(props) => {
    if (props.$type === '사이즈' || props.$type === '색상') {
      return 'grid';
    }
    return 'flex';
  }};

  flex-wrap: wrap;

  grid-template-columns: ${(props) => {
    if (props.$type === '사이즈') return 'repeat(4, auto)';
    if (props.$type === '색상') return 'repeat(3, auto)';
    return 'none';
  }};

  gap: 12px;
  margin-top: 20px;
  justify-items: start;
`;

export default function FilterModal({ type, onClose }) {
  return (
    <>
      <Background>
        <ModalBox>
            <ModalHeader>
                <Title>{type}</Title>
                <CloseIcon src={closeUrl} onClick={onClose}/>
            </ModalHeader>
            <OptionBox $type={type}>
              {type === "성별" && (
      <>
      <Button>남성</Button>
      <Button>여성</Button>
      <Button>남녀공용</Button>
    </>
  )}

  {type === "색상" && (
    <>
      <Button>red</Button>
      <Button>pink</Button>
      <Button>blue</Button>
      <Button>black</Button>
      <Button>gray</Button>
      <Button>denim</Button>
      <Button>rainbow</Button>
      <Button>multi</Button>
      <Button>holographic</Button>
    </>
  )}

  {type === "사이즈" && (
    <>
      <Button>9</Button>
      <Button>10</Button>
      <div></div>
      <div></div>
      <Button>S</Button>
      <Button>M</Button>
      <Button>L</Button>
      <Button>XL</Button>
    </>
  )}

  {type === "가격대" && (
    <>
      <Button>0~30</Button>
      <Button>31~60</Button>
      <Button>61~90</Button>
    </>
  )}

  {type === "종류" && (
    <>
      <Button>의류</Button>
      <Button>신발</Button>
    </>
  )}
            </OptionBox>
        </ModalBox>
      </Background>
    </>
  );
}