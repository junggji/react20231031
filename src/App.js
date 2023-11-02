import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // 값을 구조분해할당한 상태
  return (
    <>
      <Button onClick={onOpen}>모달 열기</Button>

      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        {/* 뒤 어둡게 */}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>모달의 제목</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            consequatur eveniet ipsa ipsam iusto laudantium magni placeat
            possimus quasi repudiandae rerum sint, tempora! Atque aut commodi
            ipsam, quis sequi veniam.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
