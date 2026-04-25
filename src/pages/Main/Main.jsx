import styled from "styled-components";
import FilterBar from "../../components/filter/FilterBar";
import SortButton from "../../components/sort/SortButton";
import { useState } from "react";
import FilterModal from "../../components/filter/FilterModal";

export default function Main(){
  const [modal, setModal] = useState(null);

  return (
    <div>
      <FilterBar openModal={setModal} />
      {modal && <FilterModal type={modal} onClose={() => setModal(null)} /> }
      <SortButton />
      <div>제품 목록</div>
    </div>
  );
}