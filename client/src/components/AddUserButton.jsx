import { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

export default function AddUserButton() {
  const [showForm, setShowForm] = useState(false);
  const [users, setUsers] = useState([]);

  const showUserForm = () => {
    setShowForm(!showForm);
  };

  const hideUserForm = (newUser) => {
    setShowForm(false);
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <>
      <button className="btn-add btn" onClick={showUserForm}>
        Add new user
      </button>
      {showForm && <UserForm onSave={hideUserForm}></UserForm>}
      <UserTable users={users}></UserTable>
    </>
  );
}
