import { Container, Typography } from "@mui/material";
import MeetupList from "./components/meetups/MeetupList";

function App() {
  return (
    <Container>
      <Typography
        component="h1"
        variant="h4"
        fontWeight="bold"
        marginBottom={3}
      >
        Recents
      </Typography>
      <MeetupList />
    </Container>
  );
}

export default App;
