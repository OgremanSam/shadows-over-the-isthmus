import React from "react";
import { Card, CardContent } from "@material-ui/core";
import { getCharacters } from "./controllers/dataController";
import Character from "./Character";

const Profile = (props) => {
  const characters = getCharacters().then(res => {
    res.filter(char => char.owner === props.user)
      .map(char => <Character props={char} />);
  })

  return (
    <>
      <h1>Welcome, Kindred</h1>
      <Card>
          <CardContent>
              <p>Characters:</p>
              {characters.length > 0 ? characters : <p>None yet</p>}
              <br/>
              <a href="/character/create">Add a character</a>
          </CardContent>
      </Card>
    </>
  )
};
export default Profile;