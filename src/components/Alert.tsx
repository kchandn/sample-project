import React, { ReactNode } from "react";

interface Props {
  //   alertMessage: string;
  children: ReactNode;
}

const Alert = (props: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {props.children}
    </div>
  );
};

export default Alert;
