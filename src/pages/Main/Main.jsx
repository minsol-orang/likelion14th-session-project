import styled from "styled-components";
import FilterBar from "../../components/filter/FilterBar";
import SortButton from "../../components/sort/SortButton";



export default function Main(){
  return (
    <div>
      <FilterBar />
      <SortButton />
      <div>제품 목록</div>
    </div>
  );
}