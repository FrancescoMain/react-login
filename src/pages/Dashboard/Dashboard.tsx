import { useState } from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    navigate("/item/" + name);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };
  return (
    <>
      <h1>Seleziona oggetto</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleChange}
          name={name}
          type="text"
          placeholder="Inserisci nome ogetto"
        />
        <button type="submit">Invia</button>
      </form>
    </>
  );
};

export default Dashboard;
