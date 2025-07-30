import { useEffect, useState } from "react";

function UserList() {
    const [users, setUsers] = useState([]);
    const [filterLetter, setFilterLetter] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error("Erro ao buscar usuários:", error));
    }, []);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().startsWith(filterLetter.toLowerCase())
    );

    return (
        <div>
            <h2>Lista de Usuários</h2>

            <label>
                Filtrar por letra:
                <input type="text" maxLength={1} value={filterLetter} onChange={(e) => setFilterLetter(e.target.value)} placeholder="Letra"style={{ marginLeft: "10px" }}/>
            </label>

            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> – {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
