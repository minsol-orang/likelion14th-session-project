import { useState } from "react";
import styled from "styled-components";
import sortUrl from "../../assets/icons/sort_arrow.svg";

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end; 
  width: 100%;
  margin-top: 30px;
  margin-bottom: 20px;
`;

const SortBox = styled.div`
  position: relative;
  width: fit-content;
  margin-right : 166px;
`;

const SortButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 7px;

  color: #616161;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 400;

  height: 14px;
  border: none;
  background: transparent;
  padding: 0;
  white-space: nowrap;
  flex-shrink: 0;
`;

const DropBox = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
  width: 110px;
  background-color: white;
  border-radius: 10px;
  padding: 14px;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.15);
`;

const SortItem = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;

  border: none;
  background: transparent;
  padding: 0;
  margin-bottom: 13px;

  color: #9b9b9b;
  font-size: 13px;
  text-align: left;
`;

const SelectedSortItem = styled(SortItem)`
  color: #616161;
  font-weight: 600;
`;

const SortIcon = styled.img`
  width: 10px;
  height: 11px;
`;

export default function SortButtonComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <SortContainer>
      <SortBox>
      <SortButton onClick={() => setIsOpen(!isOpen)}>
        정렬순
        <SortIcon src={sortUrl} />
      </SortButton>

      {isOpen && (
        <DropBox>
          {selected === "기본 정렬순" ? (
  <SelectedSortItem onClick={() => setSelected("기본 정렬순")}>
    기본 정렬순 ✓
  </SelectedSortItem>
) : (
  <SortItem onClick={() => setSelected("기본 정렬순")}>
    기본 정렬순
  </SortItem>
)}

{selected === "평점 높은순" ? (
  <SelectedSortItem onClick={() => setSelected("평점 높은순")}>
    평점 높은순 ✓
  </SelectedSortItem>
) : (
  <SortItem onClick={() => setSelected("평점 높은순")}>
    평점 높은순
  </SortItem>
)}

{selected === "리뷰 많은순" ? (
  <SelectedSortItem onClick={() => setSelected("리뷰 많은순")}>
    리뷰 많은순 ✓
  </SelectedSortItem>
) : (
  <SortItem onClick={() => setSelected("리뷰 많은순")}>
    리뷰 많은순
  </SortItem>
)}
        </DropBox>
      )}
    </SortBox>
    </SortContainer>
    
  );
}