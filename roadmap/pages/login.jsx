import { useState } from 'react';
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const router = useRouter()
  const {user, login} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: handle login logic
    e.preventDefault();
    try{
        await login(email, password)
        router.push('/')

    }
    catch(err){
        throw(err)
    }
  };

  return (
    <Box sx={{ marginTop: 8 }}>
      <Container maxWidth="xs">
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <Box sx={{ mt: 3 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 2 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
