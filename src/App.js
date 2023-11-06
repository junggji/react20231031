import React from "react";
import { Box, List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr3 = ["라떼", "에스프레스", "카푸치노"];
  const arr4 = [
    { id: 0, name: "라떼" },
    { id: 2, name: "에스프레소" },
    { id: 3, name: "카푸치노" },
  ];

  // map method
  // key값은 유일한 값으로(react가 쓰는 값)
  // -> index로 주는 것은 권장X(버그유발)
  // id -> primary key값으로 주는것이 좋다!
  const listItems = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));
  const listPlayers = arr2.map((player, index) => (
    <ListItem key={index}>{player}</ListItem>
  ));

  return (
    <div>
      <Box>
        <List>{listItems}</List>
      </Box>

      <Box>
        <List>{listPlayers}</List>
      </Box>

      <Box>
        <List>
          {arr3.map((e, i) => (
            <ListItem key={i}>{e}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default App;
