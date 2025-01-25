import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, IconButton, TextField, Tooltip } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/profiles");
      setProfiles(res.data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  const deleteProfile = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/profiles/${id}`);
      fetchProfiles();
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Box mt={4}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">Profile Management System</Typography>
          <Tooltip title="Add New Profile">
            <IconButton
              color="primary"
              onClick={() => navigate("/add-profile")}
              size="large"
            >
              <AddIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </Box>

        <TextField
          fullWidth
          label="Search Profiles"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        <Grid container spacing={3}>
          {filteredProfiles.map((profile) => (
            <Grid item xs={12} sm={6} md={4} key={profile._id}>
              <Card>
                <CardMedia component="img" height="140" image={profile.photo} alt={profile.name} />
                <CardContent>
                  <Typography variant="h6">{profile.name}</Typography>
                  <Typography variant="body2">{profile.description}</Typography>
                  <Box display="flex" justifyContent="space-between" mt={2}>
                    <IconButton onClick={() => navigate(`/profile/${profile._id}`)} color="primary">
                      <Typography>Summary</Typography>
                    </IconButton>
                    <Box>
                      <IconButton onClick={() => navigate(`/add-profile?id=${profile._id}`)} color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => deleteProfile(profile._id)} color="secondary">
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProfileList;
