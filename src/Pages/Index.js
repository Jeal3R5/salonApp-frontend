import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

function Index(props) {
  //STATE TO HOLD FORMDATA
  const [newForm, setNewForm] = useState({
    name: "",
    experience: "",
    specialty: "",
    level: "",
    schedule: "",
  });

  //HANDLECHANGE FUNCTION FOR THE FORM
  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  //HANDLESUBMIT FUNCTION FOR THE FORM
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createStylist(newForm);
    setNewForm({
      name: "",
      experience: "",
      specialty: "",
      level: "",
      schedule: "",
    });
  };

  //loaded function
  const loaded = () => {
    return props.stylists.map((stylist) => (
      <div key={stylist._id} className="stylist">
        <Link to={`/stylists/${stylist._id}`}>
          <h1>
            {stylist.name}, {stylist.level}
          </h1>
        </Link>
        {/* <h3>{stylist.level}</h3> */}
      </div>
    ));
  };
  const loading = () => {
    return <h1>Loading...</h1>;
  };
  return (
    <section className="indexForm">
      {props.stylists ? loaded() : loading()}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.experience}
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.specialty}
          name="specialty"
          placeholder="Specialty"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.level}
          name="level"
          placeholder="Level"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.schedule}
          name="schedule"
          placeholder="Schedule"
          onChange={handleChange}
        />
        <input type="submit" value="Create Stylist" />
      </form>
    </section>
  );
}

export default Index;
