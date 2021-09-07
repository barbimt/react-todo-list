import React from 'react';
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";
//import './TodosLoading.css';

function TodosLoading() {
    const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
    return (
    <div className="sweet-loading">
        <DotLoader css={override} size={100} color={"#61DAFA"} loading={true} speedMultiplier={1.5} />
      </div>)
}
export {TodosLoading};