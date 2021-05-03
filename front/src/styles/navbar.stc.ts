import styled from "styled-components";
import { Colors } from "./colors";

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: ${Colors.black};
`;

export const Wrapper = styled.div`
  width: 85%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.div`
  a {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${Colors.white};
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  div {
    margin-right: 10px;
  }
`;

interface UserProps {
  bg?: string;
}
export const UserButton = styled.div<UserProps>`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: ${(props) =>
    props.bg ? `url(${props.bg})` : Colors.blueWhite};
`;

interface DropProps {
  show: boolean;
}
export const DropDown = styled.div<DropProps>`
  width: 170px;
  height: 170px;
  padding: 30px 0;
  box-sizing: border-box;

  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.blueWhite};

  position: absolute;
  top: 12vh;
  right: 5%;

  border-radius: 10px;

  a {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${Colors.black};
  }
  button {
    font-size: 1.2rem;
    font-weight: 800;
    color: ${Colors.black};
    border: none;
    background: none;
    cursor: pointer;
  }
`;
