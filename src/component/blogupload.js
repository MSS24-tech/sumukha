import React, { useState } from "react";

const BlogForm = () => {
  const [formData, setFormData] = useState({
    author: "",
    date: "",
    heading: "",
    content: "",
    image: null, // new field
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result }); // store base64
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd format
    const data = {
      author: formData.author,
      date: today, // automatically use today's date
      heading: formData.heading,
      content: formData.content,
      image: formData.image,
    };

    try {
      const res = await fetch("blog.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (result.error) alert("Error: " + result.error);
      else alert(result.message || "Blog saved successfully");

      setFormData({
        author: "",
        heading: "",
        content: "",
        image: null,
      });
    } catch (err) {
      console.error(err);
      alert("Error saving blog");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Submit a Blog</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Author:</label>
          <input
            type="text"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            style={styles.input}
            required
          />
        </div>

        {/* <div style={styles.formGroup}>
          <label style={styles.label}>Date:</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            style={styles.input}
            required
          />
        </div> */}

        <div style={styles.formGroup}>
          <label style={styles.label}>Heading:</label>
          <input
            type="text"
            value={formData.heading}
            onChange={(e) =>
              setFormData({ ...formData, heading: e.target.value })
            }
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Content:</label>
          <textarea
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            style={{ ...styles.input, height: "120px" }}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={styles.input}
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              style={{
                marginTop: "10px",
                maxWidth: "100%",
                borderRadius: "4px",
              }}
            />
          )}
        </div>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default BlogForm;
