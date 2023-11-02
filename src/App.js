import React from "react";
import { Box, FormControl, Select } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box w={"480px"}>
        <FormControl>
          <Select placeholder="선택하세요" multiple h={"150px"}>
            <option value="value1">Lorem.</option>
            <option value="value2">Velit?</option>
            <option value="value3">Eum.</option>
            <option value="value4">Ullam.</option>
            <option value="value5">Facere.</option>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
