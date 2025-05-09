import { createContext, useContext, useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";

const NotificationContext = createContext();

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = ({ children, userId }) => {
  const [notifications, setNotifications] = useState([]);
  const socketRef = useRef(null); // Use useRef to persist socket instance

  useEffect(() => {
    if (!userId) {
console.log("hellooo")
return;
    } 

    socketRef.current = io("http://localhost:3001", {
      withCredentials: true, 
    });

    socketRef.current.emit("register", userId);

    socketRef.current.on("newNotification", (message) => {
      setNotifications((prev) => [...prev, message]);
    });

    return () => {
      socketRef.current.disconnect(); // Cleanup on unmount
    };
  }, [userId]); // Re-run when userId changes

  return (
    <NotificationContext.Provider value={{ notifications }}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
