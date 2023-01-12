import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  background: string;
  customStyles?: object;
}

const BackgroundPage: FC<Props> = ({ children, background, customStyles }) => {
  return (
    <div
      style={{
        backgroundPosition: "50% 50%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundColor: "transparent",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${background})`,
        height: "100%",
        ...customStyles,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundPage;
