import { Button } from "@chakra-ui/react";
import { ArrowRightIcon, EmailIcon } from "@chakra-ui/icons";

function App() {
  return (
    <>
      <Button colorScheme="blue">Lorem.</Button>
      <Button colorScheme="red">Lorem.</Button>
      <Button colorScheme="yellow">Molestiae?</Button>
      <Button colorScheme="orange">Atque.</Button>
      <Button colorScheme="teal" size={"sm"}>
        Laboriosam.
      </Button>
      <Button colorScheme="blackAlpha" size={"lg"}>
        Temporibus!
      </Button>
      <Button colorScheme="telegram" variant={"outline"}>
        Earum.
      </Button>
      <Button colorScheme="orange" variant={"ghost"}>
        Cum.
      </Button>
      <Button variant={"link"}>Sequi.</Button>
      <Button leftIcon={<EmailIcon />}>Culpa?</Button>
      <Button rightIcon={<ArrowRightIcon />}>Suscipit.</Button>
      <Button isLoading>Enim!</Button>
      <Button isLoading loadingText={"전송중"}>
        Quod!
      </Button>
      <Button>Omnis?</Button>
      <Button>Dolor.</Button>
      <Button>Nostrum.</Button>
      <Button>Ab.</Button>
      <Button>Provident.</Button>
      <Button>Quis!</Button>
      <Button>Hic!</Button>
      <Button>Suscipit!</Button>
      <Button>Similique?</Button>
      <Button>Error!</Button>
      <Button>Exercitationem?</Button>
      <Button>Harum?</Button>
      <Button>Beatae!</Button>
      <Button>Sint.</Button>
      <Button>Aperiam?</Button>
      <Button>Incidunt?</Button>
      <Button>Commodi?</Button>
      <Button>Consequatur.</Button>
    </>
  );
}

export default App;
