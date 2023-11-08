import React, { useEffect, useState } from "react";
import { Box, Select, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";

function App(props) {
  const [customerIdList, setCustomerIdList] = useState([]);
  const [customerId, setCustomerId] = useState(0);
  const [customer, setCustomer] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 고객번호들 가져오기
    axios
      .get("api/main1/sub6")
      .then((response) => setCustomerIdList(response.data));
  }, []);

  useEffect(() => {
    // 메소드가 실행되면 loading중이라는 코드
    setIsLoading(true);
    axios
      .get("/api/main1/sub4?id=" + customerId)
      .then((response) => response.data)
      .then((data) => setCustomer(data))
      .catch((error) => setCustomer(null))
      .finally(() => setIsLoading(false));
    // 메소드 다 실행되면(데이터 표시되면) loading이 끝났다는 코드
  }, [customerId]);

  return (
    <div>
      <Select
        placeholder="고객 번호를 선택하세요"
        onChange={(e) => setCustomerId(e.target.value)}
      >
        {customerIdList.map((id) => (
          <option value={id}>{id}</option>
        ))}
      </Select>
      <Box>
        {/* 조회중이면 spinner(로딩 표시) */}
        {isLoading && <Spinner />}

        {isLoading || (
          <>
            {customer === null ? (
              <Text>조회한 고객이 없습니다. 다른 번호를 선택해주세요.</Text>
            ) : (
              <Text>고객 이름 : {customer.cname}</Text>
            )}
          </>
        )}
      </Box>
    </div>
  );
}

export default App;
