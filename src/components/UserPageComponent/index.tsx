import React, { FC } from "react";

import Alert from "../../Atomic/atoms/Alert";
import SectionTemplate from "../../Atomic/templates/SectionTemplate";

interface Props {
  children?: React.ReactNode;
}

const UserPageComponent: FC<Props> = ({ children }) => {
  return (
    <>
      <SectionTemplate>
        <ul>
          <li>Em không get API USER INFO được.</li>
          <li>Thông tin USER để check phân quyền chổ này ạ.</li>
        </ul>

        <Alert color="info">
          Vì thời gian cũng gấp rút nên em không thể làm chỉnh chu hơn! Mong mọi
          người thông cảm cho em!
        </Alert>
      </SectionTemplate>
    </>
  );
};

export default UserPageComponent;
