import React from "react";
import AppLayout from "../../components/AppLayout";
import Container from "../../components/Container";
import JobCard from "../../components/JobCard";
import ListingContainer from "../../components/ListingContainer";
import ButtonGroup from "./components/ButtonGroup";
import Button from "./components/Button";

const Listings = () => {
  return (
    <AppLayout>
      <Container>
        <h1 className="text-5xl my-5 text-gray-600">My Current Listings</h1>
        <ButtonGroup>
          <Button type="add" text="Add" />
          <Button type="clear" text="Clear All" />
        </ButtonGroup>

        <ListingContainer>
          <JobCard />
          <JobCard />
          <JobCard />
        </ListingContainer>
      </Container>
    </AppLayout>
  );
};

export default Listings;
