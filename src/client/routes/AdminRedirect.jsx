import React, { useEffect } from "react";

const AdminRedirect = () => {
  useEffect(() => {
    window.location.href = "https://combined.pythonanywhere.com/admin/";
  }, []);

  return <p style={{ textAlign: "center", marginTop: "20px" }}>
    Redirecting to Admin Panel...
  </p>;
};

export default AdminRedirect;
