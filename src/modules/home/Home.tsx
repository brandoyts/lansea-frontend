import React from "react";
import AppLayout from "../../components/AppLayout";
import Hero from "./components/Hero";
import SearchInput from "./components/SearchInput";
import Container from "../../components/Container";
import JobCard from "../../components/JobCard";
import ListingContainer from "../../components/ListingContainer";

const Home = () => {
  return (
    <AppLayout>
      <Hero />
      <Container>
        <SearchInput />
        <ListingContainer>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </ListingContainer>
      </Container>
    </AppLayout>
  );
};

export default Home;
