import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/profiles/${id}`);
        setProfile(res.data);
      } catch (error) {
        console.error("Error fetching profile", error);
      }
    };
    fetchProfile();
  }, [id]);

  if (!profile) return <div>Loading...</div>;

  const defaultPosition = [profile.location.latitude, profile.location.longitude];

  return (
    <Container>
      <Box mt={4}>
        <Card sx={{ boxShadow: 3 }}>
          <CardMedia
            component="img"
            height="300"
            image={profile.photo}
            alt={profile.name}
            sx={{ objectFit: 'cover', borderRadius: '8px' }}
          />
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {profile.name}
            </Typography>
            <Typography variant="body1" paragraph>
              {profile.description}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Location: {profile.location.latitude}, {profile.location.longitude}
            </Typography>

            {/* Map Component */}
            <Box sx={{ height: 300, marginBottom: 2, borderRadius: '8px' }}>
              <MapContainer center={[profile.location.latitude, profile.location.longitude]} zoom={13} style={{ width: '100%', height: '100%', borderRadius: '8px' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[profile.location.latitude, profile.location.longitude]} icon={L.icon({ iconUrl: '/marker-icon.png', iconSize: [25, 41] })}>
                  <Popup>
                    {profile.name} is located here!
                  </Popup>
                </Marker>
              </MapContainer>
            </Box>

            <Button variant="contained" color="primary" onClick={() => navigate(`/`)}>
              Back to Profiles
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ProfileDetails;
