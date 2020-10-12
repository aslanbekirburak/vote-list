import React, { useState, useEffect } from "react";
import { handleSetOrder, deleteElement } from "../common/functions";
import { voteTypes } from "../common/constants";
import styled from "styled-components";
import Pagination from "@material-ui/lab/Pagination";

import Card from "../components/card";
import Submit from "../components/submit";
import Underline from "../components/underline";
import Dropdown from "../components/dropdown";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PaginationWrapper = styled.div`
  margin: 3rem;
`;

const List = () => {
  const [oldData, setOldData] = useState([]);
  const [page, setPage] = useState(1);
  const [activePage, setActivePage] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [order, setOrder] = useState(null);

  useEffect(() => {
    let storedNames = [];
    const fetchData = async () => {
      storedNames = await JSON.parse(localStorage.getItem("names"));
      await setOldData(storedNames);
    };
    fetchData();
    setActivePage(oldData.slice(0, 5));
  }, []);

  useEffect(() => {
    let sortedList = handleSetOrder(oldData, order);
    setActivePage(sortedList.slice(0, 5));
    setPage(1);
  }, [order]);

  useEffect(() => {
    setPageCount(oldData?.length > 5 ? Math.floor(oldData?.length / 5) + 1 : 1);
    setActivePage(oldData?.slice(0, 5));
    setPage(1);
  }, [oldData]);

  const setVote = (idx, voteType) => {
    let newArr = [...oldData];
    if (voteType) {
      newArr[idx].vote += 1;
    } else {
      newArr[idx].vote -= 1;
    }
    localStorage.setItem("names", JSON.stringify(newArr));
    setOldData(newArr);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    setActivePage(oldData.slice((value - 1) * 5, value * 5));
  };

  const deleteElement = (elementToDelete) => {
    let newArr = [...oldData];
    newArr = newArr?.filter((el, idx) => idx !== elementToDelete);
    localStorage.setItem("names", JSON.stringify(newArr));
    setOldData(newArr);
  };

  return (
    <Wrapper>
      <Submit />
      <Underline height={3} color="pointBg" />
      <Dropdown
        order={order}
        setOrder={(orderCallback) => setOrder(orderCallback)}
      />
      {activePage?.map((el, index) => (
        <Card
          vote={el?.vote}
          title={el?.name}
          link={el?.url}
          downVote={() => setVote(index, voteTypes["down"])}
          upVote={() => setVote(index, voteTypes["up"])}
          deleteElement={() => deleteElement(index)}
        />
      ))}
      <PaginationWrapper>
        <Pagination count={pageCount} page={page} onChange={handlePageChange} />
      </PaginationWrapper>
    </Wrapper>
  );
};

export default List;
