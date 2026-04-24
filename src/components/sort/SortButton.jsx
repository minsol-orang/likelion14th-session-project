import styled from "styled-components";
import sortUrl from "../../assets/icons/sort_arrow.svg";

const Button = styled.button`
  display: flex;
  align-items : center;
  gap: 7px;
  color: #616161;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  height : 14px;
  margin-left : 1228px;
  margin-top : 67px;
  border: none;
  background: transparent;
`;

const SortIcon = styled.img`
  width: 10px;
  height : 11px;
`;

export default function SortButton() {
  return (
    <Button>
      정렬순
      <SortIcon src={sortUrl} />
    </Button>
  );
}