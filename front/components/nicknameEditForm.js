import React, { useMemo } from "react";
import { Form, Input } from "antd";
// userMemo : style을 캐싱한다
// 동적으로 계산되는 값을 메모이제이션하는 것, 그 값을 캐싱한다고 볼 수 있다.
// 즉, 계산된 결과가 변경되지 않는 한, 동일한 값을 재사용한다.
// 이는 특히 React에서 컴포넌트 렌더링 성능을 최적화하는 데 유용하다.
// 특히 동적으로 계산된 스타일과 같이 계산이 비용이 많이 드는 작업을 수행할 때, 메모이제이션을 통해 중복 계산을 방지하고 성능을 향상시킬 수 있다.
const NicknameEditForm = () => {
  const style = useMemo(
    () => ({
      marginBottom: "20px",
      border: "1px solid #d9d9d9",
      padding: "20px",
    }),
    []
  );

  return (
    <Form style={style}>
      <Input.Search addonBefore="닉네임" enterButton="수정" />
    </Form>
  );
};

export default NicknameEditForm;
