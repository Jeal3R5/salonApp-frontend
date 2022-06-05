import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Show(props) {
  const { id } = useParams();
  const stylists = props.stylists;
  const stylist = stylists.find((stylist) => stylist._id === id);
  const navigate = useNavigate();

  const [editForm, setEditForm] = useState(stylist);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateStylist(editForm, id);
    navigate("/");
  };

  const removeStylist = () => {
    props.deleteStylist(stylist._id);
    // props.history.push("/");
    navigate("/");
  };

  return (
    <div className="stylist">
      <h1>{stylist.name}</h1>
      <h2>{stylist.level}</h2>
      <h3>Experience: {stylist.experience}</h3>
      <h3>Specialty: {stylist.specialty}</h3>
      <h3>Schedule: {stylist.schedule}</h3>
      <button id="delete" onClick={removeStylist}>
        DELETE
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.level}
          name="level"
          placeholder="level"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.experience}
          name="experience"
          placeholder="experience"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.specialty}
          name="specialty"
          placeholder="specialty"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.schedule}
          name="schedule"
          placeholder="schedule"
          onClick={handleChange}
        />
        <input type="submit" value="Update Stylist" />
      </form>
    </div>
  );
}

export default Show;
