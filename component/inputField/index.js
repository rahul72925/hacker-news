import React, { forwardRef, useImperativeHandle } from "react";
import { StyledInputFiled } from "./styled";
export const InputField = forwardRef((props, ref) => {
  const inputRef = React.useRef();
  useImperativeHandle(ref, () => ({
    clear: () => {
      inputRef.current.value = "";
    },
  }));
  return <StyledInputFiled ref={inputRef} {...props} />;
});
