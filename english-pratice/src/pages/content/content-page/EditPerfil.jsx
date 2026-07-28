import React, { useState } from "react";
import { useUserStore } from "../../../store/useStore.js"

const EditPerfil = () => { 

  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newId, setNewId] = useState("")

  const { user, updateUser } = useUserStore();

  const handleSave = () => {
    if (newName.trim() !== "") updateUser({ name: newName });
    if (newEmail.trim() !== "") updateUser({ email: newEmail });
    if (newId.trim() !== "") updateUser({ id: newId });
   ;
  };
  
  return (
    <form className="grid md:grid-cols-3 w-screen h-screen">
      <div className="w-full col-span-1 flex justify-center bg-amber-50 border-r">
        <div>
          <div className="w-40 h-40 rounded-full overflow-hidden m-5 mt-10">
            <img className="w-full h-full object-cover" src={user.avatar} alt="" />
          </div>

          <div className="flex justify-center">
            <label className="w-24 h-14 bg-emerald-500 rounded flex items-center justify-center text-white text-sm cursor-pointer" htmlFor="avatarinput">Choose photo</label>

          
            <input className="hidden" type="file" name="" id="avatarinput" accept="image/*" onChange={(e) => updateUser( {avatar: URL.createObjectURL(e.target.files[0])})}/>
          </div>

          <div className="max-w-50">
            <p className="break-all"><strong>Name:</strong> {user.name}</p>
            <p className="break-all"><strong>Email:</strong> {user.email}</p>
            <p className="break-all"><strong>CPF:</strong> {user.id ? user.id : "Not information"}</p>
          </div>
        </div>
      </div>

      <div className="w-full gap-4 md:col-span-2 bg-blue-100 p-5 flex flex-col justify-between">
        <div className="grid grid-cols-1 gap-5">
          <h1 className="text-3xl font-bold">Accont Settings</h1>
          <div>
            <h2>Your Name</h2>
            <input className="border w-full h-8 rounded" maxLength="25" type="text" name="name" id="" placeholder={user.name} onChange={(e) => setNewName(e.target.value)}/>
          </div>
          <div>
            <h2>Email address</h2>
            <input className="border w-full h-8 rounded" maxLength="25" type="text" name="email_address" id="" placeholder={user.email} onChange={(e) => setNewEmail(e.target.value)}/>
          </div>
          <div>
            <h2>ID</h2>
            <input className="border w-full h-8 rounded" maxLength="15" type="text"  inputMode="numeric" name="id" id="" placeholder={user.id} onChange={(e) => setNewId(e.target.value.replace(/\D/g, ""))}/>
          </div>
        </div>


      <div>
        <p>Save changes to update your profile.</p>
        <button className="w-25 h-10 bg-emerald-500 rounded" type="button" onClick={handleSave}>Save Profile</button>
      </div>
      </div>
    </form>
  );
}
export default EditPerfil;
