import { Grid,Box } from '@material-ui/core';
import EnrolledCard from '@/Components/enrolledCard';

export default function CardGrid() {
  

  return (
    <Box marginLeft={100}>
  <Grid container spacing={3}>
    <Grid item xs={6} sm={6} md={6}>
      <EnrolledCard></EnrolledCard>
    </Grid>
    <Grid item xs={6} sm={6} md={6}>
      <EnrolledCard></EnrolledCard>
    </Grid>
    <Grid item xs={6} sm={6} md={6}>
      <EnrolledCard></EnrolledCard>
    </Grid>
  </Grid>
</Box>
  );
}