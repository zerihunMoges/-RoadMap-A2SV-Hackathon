import { Grid,Box } from '@material-ui/core';
import EnrolledCard from '@/components/enrolledCard';
import {user} from '@/mock'
export default function CardGrid() {

  

  return (
    <Box style={{margin:"5%"}}>
  <Grid container spacing={5}>
    <Grid item xs={12}  md={4}>
      <EnrolledCard></EnrolledCard>
    </Grid>
    <Grid item xs={12}  md={4}>
      <EnrolledCard></EnrolledCard>
    </Grid>
    <Grid item xs={12}  md={4}>
      <EnrolledCard></EnrolledCard>
    </Grid>
  </Grid>
</Box>
  );
}