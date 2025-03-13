import { useState } from "react";
import UserForm from "./UserForm";

export default function AddUserButton() {
  const [showForm, setShowForm] = useState(false);

  const showUserForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <button className="btn-add btn" onClick={showUserForm}>
        Add new user
      </button>
      {showForm && <UserForm></UserForm>}
    </>
  );
}
