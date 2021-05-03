import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../store";
import {
  Brand,
  Items,
  Nav,
  Wrapper,
  UserButton,
  DropDown,
} from "../styles/navbar.stc";

interface Props extends RXProps {}

const Navbar = ({ auth }: Props) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <Nav>
      <Wrapper>
        <Brand>
          <Link to="/">Social</Link>
        </Brand>
        <Items>
          {auth.isAuth === false ? (
            <>
              <div>
                <UserButton onClick={() => setShowDrop(!showDrop)} />
                <DropDown show={showDrop}>
                  <Link to="/">Profile</Link>
                  <Link to="/">Friends</Link>
                  <button>Logout</button>
                </DropDown>
              </div>
            </>
          ) : (
            ""
          )}
        </Items>
      </Wrapper>
    </Nav>
  );
};

const mapState = (state: AppState) => ({
  auth: state.auth,
});
const connector = connect(mapState);

type RXProps = ConnectedProps<typeof connector>;

export default connector(Navbar);
