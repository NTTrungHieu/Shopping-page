import React from "react";
import styled from "styled-components";
import { categories } from "../product";
import { mobile } from "../responsive";
import { CategoryItem } from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map((item, index) => (
        <CategoryItem key={index} item={item} />
      ))}
    </Container>
  );
};
