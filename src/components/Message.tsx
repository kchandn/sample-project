interface Props {
  text: string;
}
function Message(props: Props) {
  const name = "Chandan";
  return <h1>Hello {name ? props.text : "world"}</h1>;
}

export default Message;
