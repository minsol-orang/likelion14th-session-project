import styled from "styled-components";
import Button from "../common/button/Button";
import downUrl from "../../assets/icons/down_icon.svg";

const Icon = styled.img`
  width: 10px;
  height: 5px;
`;

const Filter = styled.div`
  width: fit-content;
  height : 33px;
  display : flex;
  gap : 13px;
  margin-left: 153px;
  margin-top : 22px;
`;

export default function FilterBar({ openModal }) {
      return(
        <>
          <Filter>
            <Button onClick={() => openModal("성별")}> 성별 <Icon src={downUrl} /></Button>
            <Button onClick={() => openModal("색상")}>  색상 <Icon src={downUrl} /></Button>
            <Button onClick={() => openModal("사이즈")}>사이즈<Icon src={downUrl} /></Button>
            <Button onClick={() => openModal("가격대")}>가격대<Icon src={downUrl} /></Button>
            <Button onClick={() => openModal("종류")}>종류<Icon src={downUrl} /></Button>
          </Filter>
        </>
    );
}
