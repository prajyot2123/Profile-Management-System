import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container, Box, TextField, Button, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const AddProfile = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const profileId = searchParams.get("id");

  useEffect(() => {
    if (profileId) {
      fetchProfile();
    }
  }, [profileId]);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/profiles/${profileId}`);
      const { name, photo, description, location } = res.data;
      setName(name);
      setPhoto(photo);
      setDescription(description);
      setLatitude(location.latitude);
      setLongitude(location.longitude);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProfile = {
      name,
      photo,
      description,
      location: {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      },
    };

    try {
      if (profileId) {
        // Update profile
        await axios.put(`http://localhost:5000/api/profiles/${profileId}`, newProfile);
      } else {
        // Add profile
        await axios.post("http://localhost:5000/api/profiles", newProfile);
      }
      navigate("/");
    } catch (error) {
      console.error("Error submitting profile:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4} p={3} boxShadow={3} borderRadius={2}>
        <Typography variant="h4" align="center" gutterBottom>
          {profileId ? "Edit Profile" : "Add New Profile"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Photo URL"
            variant="outlined"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Latitude"
            variant="outlined"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            margin="normal"
          />
          <TextField
            fullWidth
            label="Longitude"
            variant="outlined"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            margin="normal"
          />
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              startIcon={<AddIcon />}
            >
              {profileId ? "Update Profile" : "Add Profile"}
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default AddProfile;
