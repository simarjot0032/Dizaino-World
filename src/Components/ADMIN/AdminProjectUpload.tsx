import AdminSidebar from "@Components/ADMIN/AdminSidebar";
import "@Styles/Admin/AdminProjectUpload.css";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { auth } from "src/Config/Firebase-config";
import { IoIosCloudUpload } from "react-icons/io";
import { storage } from "src/Config/Firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import toast from "react-hot-toast";
export default function AdminProjectUpload() {
  const imageref = useRef<HTMLInputElement>(null);
  const [images, setimages] = useState<string[]>([]);
  const folder = ref(storage, "Projects/");
  const navigate = useNavigate();
  const fetchProjectImages = async () => {
    const imageUrls: string[] = [];
    const response = await listAll(folder);
    await Promise.all(
      response.items.map(async (item) => {
        const url = await getDownloadURL(item);
        imageUrls.push(url);
      })
    );
    return imageUrls;
  };
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageUrls = await fetchProjectImages();
        setimages(imageUrls);
      } catch {}
    };
    fetchImages();
  }, []);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? "" : navigate("/Admin-login");
    });
  }, []);
  const HandleLogout = () => {
    signOut(auth);
  };
  const HandleImageUpload = () => {
    let imagebyuser: File | undefined;
    if (imageref.current && imageref.current.files) {
      imagebyuser = imageref.current.files[0];
    } else {
      return;
    }
    const imageRefLoc = ref(storage, `Projects/${imagebyuser + v4()}`);
    try {
      uploadBytes(imageRefLoc, imagebyuser);
      toast.success("image uploaded");
    } catch {
      toast.error("Try again");
    }
  };

  return (
    <div className="admin-main-container">
      <AdminSidebar />
      <div className="project-upload-content-container">
        <div className="project-upload-header">
          <h2 className="project-upload-heading">Upload Projects</h2>
          <div className="button-container">
            <button className="logout-btn" onClick={HandleLogout}>
              {" "}
              <IoLogOut color="white" size={30} />
              Log Out
            </button>
          </div>
        </div>
        <div className="project-upload-content">
          <div className="upload-form-container">
            <form action="" className="upload-project">
              <input
                type="file"
                name=""
                id="upload"
                ref={imageref}
                multiple={false}
                itemType="image/*"
              />
              <button
                type="submit"
                className="submitbtn"
                onClick={HandleImageUpload}
              >
                <IoIosCloudUpload /> Upload
              </button>
            </form>
          </div>
          <div className="project-images">
            {images.map((image, index) => {
              return (
                <img src={image} alt="" className="fetched-img" key={index} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
