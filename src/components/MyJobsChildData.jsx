import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DeleteMyJobs from "./DeleteMyJobs";

const MyJobsChildData = ({ data, triggerRefresh }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [id, setId] = useState("");
  const handleDelClose = () => {
    setDeleteModal(false);
    setId(null);
  };
  const handleDelOpen = (id) => {
    setDeleteModal(true);
    setId(id);
  };
  return (
    <Grid item xs={12} sm={6} md={4} key={data._id}>
      <Card
        sx={{
          border: "1px solid #e0e0e0",
          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", mb: 1 }}
          >
            {data.title}
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Skills:
          </Typography>

          <Box>
            {data.skillsets?.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                color="secondary"
                variant="outlined"
                sx={{ m: 1 }}
              />
            ))}
          </Box>
          <Typography
            variant="subtitle2"
            marginY={1}
            sx={{ fontWeight: "bold" }}
          >
            Job Details
          </Typography>
          <Typography variant="body2" marginY={1}>
            Job Type: {data.jobType}
          </Typography>
          <Typography variant="body2" marginY={1}>
            Duration:{" "}
            {data.duration !== 0 ? `${data.duration} month` : "Flexible"}
          </Typography>

          <Typography color="text.secondary" marginY={1}>
            Salary: {data.salary}
          </Typography>
          <Typography variant="body2" marginY={1}>
            Date Of Posting: {new Date(data.dateOfPosting).toLocaleDateString()}
          </Typography>
          <Typography color="text.secondary" marginY={1}>
            Applicants: {data.maxApplicants}
          </Typography>
          <Typography color="text.secondary" marginY={1}>
            Positions: {data.maxPositions - data.acceptedCandidates}
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="body2" marginY={1}>
              Rating:
            </Typography>
            <Rating value={data.rating} readOnly />
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
          <Button size="small" onClick={() => handleDelOpen(data._id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
      {deleteModal && (
        <DeleteMyJobs
          id={id}
          handleDelClose={handleDelClose}
          deleteModal={deleteModal}
          title={data.title}
          triggerRefresh={triggerRefresh}
        />
      )}
    </Grid>
  );
};

export default MyJobsChildData;