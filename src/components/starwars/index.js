import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import CardTemp from "./cardTemp";
import CardDetails from "./cardDetails";
import { motion } from "framer-motion";

export default function StarWars() {
  const [data, setData] = useState([]);
  const [detail, setDetail] = useState({});
  const [open, setOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/`).then(function (response) {
      setData(response.data.results);
    });
  }, []);

  useEffect(() => {
    setShowAnimation(true); // Trigger animation when data changes
  }, [data]);

  return (
    <Box
      minHeight="calc(100vh - 64px)"
      bg={`linear-gradient(180deg, #1A202C, #3C366B)`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {open ? (
        <Grid templateColumns="repeat(1, 1fr)" gap={6} sx={{ p: 5 }} zIndex={1}>
          <GridItem width="100%">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={showAnimation ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
            >
              <CardDetails
                detail={detail}
                setOpen={setOpen}
                setDetail={setDetail}
              />
            </motion.div>
          </GridItem>
        </Grid>
      ) : (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)", // 1 column on mobile
            md: "repeat(3, 1fr)", // 3 columns on desktop
            lg: "repeat(5, 1fr)", // 5 columns on tablet
          }}
          gap={6}
          sx={{ p: 5 }}
          zIndex={1}
        >
          {data?.map((s, i) => (
            <GridItem key={i}>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={showAnimation ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <CardTemp data={s} setOpen={setOpen} setDetail={setDetail} />
              </motion.div>
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
}
