import React, { useState } from "react";
import { useUserStore } from "../../../store/useStore.js";

const EditPerfil = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newId, setNewId] = useState("");

  const { user, updateUser } = useUserStore();

  const handleSave = () => {
    if (newName.trim() !== "") updateUser({ name: newName });
    if (newEmail.trim() !== "") updateUser({ email: newEmail });
    if (newId.trim() !== "") updateUser({ id: newId });
    setNewName("");
    setNewEmail("");
    setNewId("");
  };

  return (
    <form className="grid md:grid-cols-3 w-full md:h-full bg-white">
      <div className="w-full col-span-1 flex justify-center border-r-2 border-emerald-200 md:bg-emerald-400">
        <div className="md:w-72 flex md:flex-col items-center">
          <div>
            <div>
              <div className="w-28 h-28 md:w-38 md:h-38 rounded-full overflow-hidden m-5 mt-10 border border-white ">
                <img
                  className="w-full h-full object-cover"
                  src={user.avatar}
                  alt=""
                />
              </div>
              <div className="flex justify-center">
                <label
                  className="w-20 h-10 md:w-24 md:h-12 hover:text-gray-300 bg-emerald-500 hover:bg-emerald-600 rounded flex items-center justify-center text-white text-sm cursor-pointer"
                  htmlFor="avatarinput"
                >
                  Choose photo
                </label>

                <input
                  className="hidden"
                  type="file"
                  name=""
                  id="avatarinput"
                  accept="image/*"
                  onChange={(e) =>
                    updateUser({
                      avatar: URL.createObjectURL(e.target.files[0]),
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="w-full">
            <p className="break-all uppercase ">
              <strong>Name</strong>
              <br /> {user.name}
            </p>
            <p className="break-all uppercase ">
              <strong>Email:</strong>
              <br /> {user.email}
            </p>
            <p className="break-all uppercase ">
              <strong>ID:</strong>
              <br /> {user.id ? user.id : "Not information"}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full gap-4 md:col-span-2 p-5 flex flex-col justify-between">
        <div className="grid grid-cols-1 gap-5">
          <h1 className="text-3xl font-bold">Accont Settings</h1>
          <div>
            <label>Your Name</label>
            <input
              className="border w-full h-8 rounded"
              maxLength="25"
              type="text"
              name="name"
              value={newName}
              id=""
              placeholder="Enter your name"
              required
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div>
            <label>Email address</label>
            <input
              className="border w-full h-8 rounded"
              maxLength="40"
              type="text"
              name="email_address"
              value={newEmail}
              id=""
              placeholder="example@email.com"
              required
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </div>
          <div>
            <label>ID</label>
            <input
              className="border w-full h-8 rounded"
              maxLength="15"
              type="text"
              inputMode="numeric"
              name="id"
              value={newId}
              id=""
              placeholder="Enter your ID"
              required
              onChange={(e) => setNewId(e.target.value.replace(/\D/g, ""))}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-gray-700">Save changes to update your profile.</p>
          <button
            type="submit"
            className="w-25 h-10 text-white bg-emerald-500 hover:bg-emerald-600 cursor-pointer rounded"
            onClick={handleSave}
          >
            Save Profile
          </button>
        </div>
      </div>
    </form>
  );
};
export default EditPerfil;
