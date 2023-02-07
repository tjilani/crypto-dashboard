import React from "react";
import styled, { css } from "styled-components";

const Bar = styled.div`
  display: grid;
  grid-template-columns: auto 14rem 14rem;
`;

const Logo = styled.div`
  font-size: 2.5rem;
`;

const ControllButtonElem = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0 0 2rem #b5ffb5;
    `}
`;

const ControllButton = ({ name, active }) => {
  return <ControllButtonElem active={active}>{name}</ControllButtonElem>;
};

const AppBar = () => {
  return (
    <Bar>
      <Logo>CardanoDash</Logo>
      <ControllButton active name={"dashboard"} />
      <ControllButton name={"settings"} />
    </Bar>
  );
};

export default AppBar;
