import { Card, Dropdown } from "react-bootstrap";
import classes from "./MessageContainer.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function MessageContainer({ message }) {
  const copyMessageHandler = () => {
    const textField = document.createElement("textarea");
    textField.innerText = message.message;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  let styleCard = {};
  let styleContainer = {};
  if (message.username !== "hossein") {
    styleContainer = {
      marginLeft: "13rem",
    };
    styleCard = {
      backgroundColor: "lightgrey",
    };
  }

  return (
    <div style={styleContainer} className={classes.container}>
      <Card style={styleCard} className={classes.card}>
        <div style={{ maxWidth: "95%" }}>
          <Card.Text className={classes.text}>{message.message}</Card.Text>
        </div>
        <Dropdown className={classes.tooltip}>
          <Dropdown.Toggle as={BsThreeDotsVertical} />
          <Dropdown.Menu>
            <Dropdown.Item href="#" onClick={copyMessageHandler}>
              Copy
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Card>
      <div className={classes.date}>
        <p>{message.created_at}</p>
      </div>
    </div>
  );
}
