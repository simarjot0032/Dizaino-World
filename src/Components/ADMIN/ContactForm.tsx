import React, { useEffect, useState } from "react";
import AdminSidebar from "@Components/ADMIN/AdminSidebar";
import { DataSnapshot, get, ref } from "firebase/database";
import { auth, database } from "src/Config/Firebase-config";
import "@Styles/Admin/ContactForm.css";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { IoLogOut } from "react-icons/io5";
interface Contact {
  id: string;
  fname: string;
  lname: string;
  email: string;
  phnumber: string;
}

export default function ContactForm() {
  const [Contact, setContact] = useState<Contact[]>([]);
  useEffect(() => {
    const collectionRef = ref(database, "contactForm");
    get(collectionRef).then((snapshot: DataSnapshot) => {
      if (snapshot.exists()) {
        const entries = Object.entries(snapshot.val()).map(([id, data]) => ({
          ...(data as Contact),
        }));
        setContact(entries);
      }
    });
  }, []);
  console.log(Contact);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
      } else {
        navigate("/Admin-login");
      }
    });
  }, []);
  const HandleLogOut = () => {
    signOut(auth);

    toast.success("User Logged Out");
  };
  return (
    <div className="admin-main-container">
      <AdminSidebar activeclass="AdminContact" />
      <div className="contact-content-container" style={{ gridColumn: 2 }}>
        <div className="btn-container">
          <button
            className="logout-btn"
            onClick={HandleLogOut}
            style={{ marginBottom: "10px", margin: "10px " }}
          >
            <IoLogOut color="white" size={30} />
            Log Out
          </button>
        </div>
        <table>
          <thead>
            <tr className="Columnsname">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {Contact.map((contact, index) => (
              <tr key={index}>
                <td>{contact.fname}</td>
                <td>{contact.lname}</td>
                <td>{contact.email}</td>
                <td>{contact.phnumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
