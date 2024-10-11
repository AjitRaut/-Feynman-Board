import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TopicCard from "./TopicCard";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";

const Dashboard = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  useEffect(() => {
    if (!username) {
      toast.error("You must be logged in to view the dashboard.");
      navigate("/login");
      return;
    }

    // Fetch topics if the user is logged in
    axios
      .get(`https://feynman-board.onrender.com/topics?username=${username}`)
      .then((response) => {
        setTopics(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [username, navigate]);

  if (!username) {
    return null;
  }

  return (
    <div className="min-h-screen mt-14 bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Welcome, {username}</h1>
        <Link to="/addtopic">
          <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Add Topic
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          // Enhanced shimmer UI while loading
          Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg animate-pulse"
            >
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-2"></div>
              <div className="w-full bg-gray-200 rounded-full h-4 mt-2"></div>
            </div>
          ))
        ) : topics.length > 0 ? (
          topics.map((topic) => <TopicCard key={topic._id} topic={topic} />)
        ) : (
          <p>No topics available.</p>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Dashboard;
