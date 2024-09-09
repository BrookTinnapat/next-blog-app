"use client";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../utils/firebase"; // Assuming firebase is initialized here
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import ReactQuill from "react-quill";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import { PlusCircleIcon, PhotoIcon } from "@heroicons/react/24/outline";

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [preview, setPreview] = useState(null);

  // File Preview URL generation
  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // Clean up URL when component unmounts or file changes
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  // File Upload to Firebase
  useEffect(() => {
    const storage = getStorage(app); // Access Firebase storage
    const upload = () => {
      if (!file) return;

      const fileName = `${new Date().getTime()}_${file.name}`;
      const storageRef = ref(storage, fileName); // Create a reference for the file

      const uploadTask = uploadBytesResumable(storageRef, file); // Start file upload

      // Monitor upload progress and handle completion or errors
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          console.error("File upload error:", error);
        },
        () => {
          // When upload is complete, get download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setMedia(downloadURL); // Store the download URL in state
          });
        }
      );
    };

    file && upload(); // Call upload function when file is set
  }, [file]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  // Slugify function for creating URL-friendly slugs
  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  // Submit the post data including title, description, image URL, etc.
  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media, // Firebase image URL
        slug: slugify(title),
        catSlug: catSlug || "style", // Default category if not selected
      }),
    });

    if (res.status === 200) {
      const data = await res.json();
      router.push(`/posts/${data.slug}`);
    }
  };

  return (
    <div className="flex flex-col p-4 bg-white w-screen h-screen shadow-md rounded-lg max-w-4xl mt-10 relative">
      {/* Title Input */}
      <input
        type="text"
        placeholder="Enter title here..."
        className="w-full p-3 text-xl font-bold border-b-2 border-gray-300 focus:outline-none"
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="flex flex-col">
        <div className="flex flex-row">
          <select
            className="mt-[50px] pt-[10px] pb-[10px] w-[700px]"
            onChange={(e) => setCatSlug(e.target.value)}
          >
            <option value="style">style</option>
            <option value="fashion">fashion</option>
            <option value="food">food</option>
            <option value="culture">culture</option>
            <option value="travel">travel</option>
            <option value="coding">coding</option>
          </select>

          {/* Media Upload Button */}
          <span className="flex flex-col md:flex-row mt-14 ml-8">
            <span className="">
              <button
                onClick={() => setOpen(!open)}
                className="w-[36px] h-[36px] rounded-md bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300 transition duration-200"
              >
                <PlusCircleIcon className="w-8 h-8 text-black" />
              </button>

              {/* Media Options */}
              {open && (
                <div className="flex gap-[10px] absolute z-50 bg-white p-2 rounded-md shadow-lg mt-2">
                  <input
                    type="file"
                    id="image"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="hidden"
                  />
                  <button className="w-[36px] h-[36px] rounded-md bg-gray-200 flex justify-center items-center cursor-pointer hover:bg-gray-300 transition duration-200">
                    <label htmlFor="image">
                      <PhotoIcon className="w-8 h-8 text-black" />
                    </label>
                  </button>
                </div>
              )}
            </span>
          </span>
        </div>

        {/* Image Preview */}
        {preview && (
          <div className="mt-4">
            <img
              src={preview}
              alt="Preview"
              className="w-[100px] object-cover rounded-md h-[100px]"
            />
          </div>
        )}

        {/* Rich Text Editor */}
        <div className="flex-1 mt-4">
          <ReactQuill
            className="w-full rounded-lg p-2 text-black h-[400px]"
            theme="snow"
            value={value}
            onChange={setValue}
            placeholder="Write your content here..."
          />
        </div>
      </div>

      {/* Publish Button */}
      <div className="absolute bottom-0 right-0">
        <button
          className="absolute top-4 right-4 bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-200"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default WritePage;
