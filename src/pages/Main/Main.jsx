import styled from "styled-components";
import FilterBar from "../../components/filter/FilterBar";
import SortButton from "../../components/sort/SortButton";
import { useState } from "react";
import FilterModal from "../../components/filter/FilterModal";
import ProductList from "../../components/product/ProductList";


export default function Main(){
  const [modal, setModal] = useState(null);

  return (
    <div>
      <FilterBar openModal={setModal} />
      {modal && <FilterModal type={modal} onClose={() => setModal(null)} /> }
      <SortButton />
      <ProductList />
    </div>
  );
}