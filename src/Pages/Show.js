import { useParams } from "react-router-dom";

function Show(props) {
  const { id } = useParams();
  const stylists = props.stylists;
  const stylist = stylists.find((s) => s._id === id);

  return (
    <div className="stylist">
      <h1>{stylist.name}</h1>
      <h2>{stylist.level}</h2>
      <h3>{stylist.experience}</h3>
      <h3>{stylist.specialty}</h3>
      <h3>{stylist.schedule}</h3>
    </div>
  );
}

export default Show;
