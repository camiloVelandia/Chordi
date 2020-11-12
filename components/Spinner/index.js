import React from "react";
import {Spin} from './styles'

const Spinner = () => {
  return (
    <Spin>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Spin>
  );
};

export default Spinner;
