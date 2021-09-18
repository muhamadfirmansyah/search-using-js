import { useState } from "react";
import "./styles.css";

export default function App() {
  const initialState = [
    {
      id: 1,
      name: "Mangga"
    },
    {
      id: 2,
      name: "Mangga Dua"
    },
    {
      id: 3,
      name: "Apel"
    },
    {
      id: 4,
      name: "Markisa"
    }
  ];

  const [data, setData] = useState(initialState);

  const [search, setSearch] = useState("");

  const [isForm, setIsForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setData(initialState);

    let newArray = initialState.filter((item) => {
      if (item.name.toUpperCase().indexOf(search.toUpperCase()) > -1) {
        return item;
      }
      return false;
    });

    setData(newArray);
  };

  const [name, setName] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    setData([...data, { id: data.length + 1, name: name }]);

    setIsForm(false);
  };

  return (
    <div className="App">
      {isForm ? (
        <form onSubmit={handleSave}>
          <div>
            <label>Name</label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      ) : (
        <>
          <button onClick={() => setIsForm(!isForm)}>tambah</button>
          <form onSubmit={handleSubmit}>
            <input
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
