import {
  Box,
  Container,
  Stack,
  Text,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Badge,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Simple({ detail, setOpen, setDetail }) {
  const [vehicles, setVehicles] = useState([]);
  const [starShips, setStarShips] = useState([]);
  const [films, setFilms] = useState([]);
  const [loadingFilms, setLoadingFilms] = useState(true);
  const [loadingSS, setLoadingSS] = useState(true);
  const [loadingV, setLoadingV] = useState(true);

  useEffect(() => {
    const fetchVehicleData = async () => {
      try {
        const responses = await Promise.all(
          detail.vehicles.map((url) => axios.get(url))
        );

        const vehicleData = responses.map((response) => response.data);
        setVehicles(vehicleData);
      } catch (error) {
        console.error("Error fetching vehicle data:", error);
      } finally {
        setLoadingV(false);
      }
    };

    const fetchStarShipsData = async () => {
      try {
        const responses = await Promise.all(
          detail.starships.map((url) => axios.get(url))
        );

        const starShipsData = responses.map((response) => response.data);
        setStarShips(starShipsData);
      } catch (error) {
        console.error("Error fetching starships data:", error);
      } finally {
        setLoadingSS(false);
      }
    };

    const fetchMoviesData = async () => {
      try {
        const responses = await Promise.all(
          detail.films.map((url) => axios.get(url))
        );

        const filmData = responses.map((response) => response.data);
        setFilms(filmData);
      } catch (error) {
        console.error("Error fetching starships data:", error);
      } finally {
        setLoadingFilms(false);
      }
    };

    fetchVehicleData();
    fetchStarShipsData();
    fetchMoviesData();
  }, [detail]);

  const handleClose = () => {
    setOpen(false);
    setDetail({});
    setStarShips([]);
    setVehicles([]);
  };

  const grey = useColorModeValue("gray.400", "gray.400");
  const dividerGrey = useColorModeValue("gray.200", "gray.600");
  const yellow = useColorModeValue("yellow.500", "yellow.300");
  const btn_grey = useColorModeValue("gray.900", "gray.50");
  const btn_white = useColorModeValue("white", "gray.900");

  return (
    <Container maxW={"12xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 1 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 1, md: 5 }}
      >
        <Stack spacing={{ base: 6, md: 10 }} color="whitesmoke">
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {detail.name}
            </Heading>
            <Text
              color={grey}
              fontWeight={300}
              fontSize={"2xl"}
              textTransform={"uppercase"}
            >
              {detail.gender}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={<StackDivider borderColor={dividerGrey} />}
          >
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={yellow}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Height:
                  </Text>{" "}
                  {detail.height}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Mass:
                  </Text>{" "}
                  {detail.mass}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Hair Color:
                  </Text>{" "}
                  {detail.hair_color}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Skin Color:
                  </Text>{" "}
                  {detail.skin_color}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Eye Color:
                  </Text>{" "}
                  {detail.eye_color}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Birth Year:
                  </Text>{" "}
                  {detail.birth_year}
                </ListItem>
              </List>
            </Box>
          </Stack>

          {loadingFilms ? (
            <Stack spacing={4}>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={yellow}
                fontWeight={"500"}
                textTransform={"uppercase"}
              >
                Loading Films...
              </Text>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          ) : films.length ? (
            <Stack direction="column" spacing={1}>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={yellow}
                fontWeight={"500"}
                textTransform={"uppercase"}
              >
                Films
              </Text>

              <Stack direction="row" spacing={2}>
                {films.map((v, i) => (
                  <Badge key={i} variant="subtle" colorScheme="yellow">
                    {v.title}
                  </Badge>
                ))}
              </Stack>
            </Stack>
          ) : null}

          {loadingV ? (
            <Stack spacing={4}>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={yellow}
                fontWeight={"500"}
                textTransform={"uppercase"}
              >
                Loading Starships...
              </Text>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          ) : vehicles.length ? (
            <Stack direction="column" spacing={1}>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={yellow}
                fontWeight={"500"}
                textTransform={"uppercase"}
              >
                vehicles
              </Text>

              <Stack direction="row" spacing={2}>
                {vehicles.map((s, i) => (
                  <Badge key={i} variant="subtle" colorScheme="yellow">
                    {s.name}
                  </Badge>
                ))}
              </Stack>
            </Stack>
          ) : null}

          {loadingSS ? (
            <Stack spacing={4}>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={yellow}
                fontWeight={"500"}
                textTransform={"uppercase"}
              >
                Loading Starships...
              </Text>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          ) : starShips.length ? (
            <Stack direction="column" spacing={1}>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={yellow}
                fontWeight={"500"}
                textTransform={"uppercase"}
              >
                Starships
              </Text>

              <Stack direction="row" spacing={2}>
                {starShips.map((s, i) => (
                  <Badge key={i} variant="subtle" colorScheme="yellow">
                    {s.name}
                  </Badge>
                ))}
              </Stack>
            </Stack>
          ) : null}

          <Button
            onClick={handleClose}
            w={"full"}
            mt={2}
            size={"lg"}
            bg={btn_grey}
            color={btn_white}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Back
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
