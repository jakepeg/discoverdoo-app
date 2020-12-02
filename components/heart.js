import React from "react";
import styled from "styled-components";

const HeartUI = styled.div`
  width: 100px;
  height: 100px;
  background: url("https://res.cloudinary.com/jakepeg/image/upload/v1606481760/heart_e116jq.png") no-repeat;
  cursor: pointer;
  ${({ isClick }) => isClick && `background-position: -2799px 2px;transition: background 1s steps(28);`}
`;

export default function Heart({ isClick, onClick }) {
    return <HeartUI isClick={isClick} onClick={onClick} />;
}