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
          <li>
            Em không get dùng params ACCESS_TOKEN để vượt lỗi : Not authorized.
          </li>
          <li>
            Em đã thử truyền params access_token theo params khi gọi API nhưng
            vẫn bị : Not authorized.
          </li>
          <li>Có thể em truyền không khớp với API</li>
          <li>
            Vì thời gian khá ngắn: Em code bằng typesciprt chưa được nhanh. Nên
            hông đủ time để nghiên cứu chổ API
          </li>
          <li>
            Nhưng em có code đầy đủ các luồng call api và xử lý của redux-saga.
            Mấy anh review cho em với nha! Em cảm ơn ạ!
          </li>
        </ul>

        <Alert color="info">
          Vì thời gian cũng gấp rút, em ráng làm chỉnh chu nhất có thể! Mong các
          anh chăm chước ạ! Em cảm ơn!
        </Alert>
      </SectionTemplate>
    </>
  );
};

export default UserPageComponent;
