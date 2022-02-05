import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen";

const MyNotes = () => {
  return (
    <MainScreen title="Welcome Back Masahiro Kaga...">
      <Link to="createnote">
        <Button style={{marginLeft:10,marginBottom:6}} size="lg">
          Create New Note
        </Button>
      </Link>
    </MainScreen>
  );
};

export default MyNotes;
