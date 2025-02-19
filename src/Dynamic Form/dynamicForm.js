import React, { useState } from "react";

const DynamicForm = () => {
  const [formFields, setFormFields] = useState([{ username: "", phone: "" }]);

  // Handle input change
  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFields = [...formFields];
    updatedFields[index][name] = value;
    setFormFields(updatedFields);
  };

  // Add new form field
  const handleAdd = () => {
    setFormFields([...formFields, { username: "", phone: "" }]);
  };

  // Remove a form field
  const handleRemove = (index) => {
    if (formFields.length > 1) {
      setFormFields(formFields.filter((_, i) => i !== index));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formFields);
    alert("Form submitted! Check console for details.");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h3>Dynamic Form</h3>
      <form onSubmit={handleSubmit}>
        {formFields.map((field, index) => (
          <div
            key={index}
            style={{ marginBottom: "10px", display: "flex", gap: "10px" }}
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={field.username}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={field.phone}
              onChange={(e) => handleChange(index, e)}
              required
            />
            {formFields.length > 1 && (
              <button type="button" onClick={() => handleRemove(index)}>
                ❌
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={handleAdd}>
          ➕ Add
        </button>
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
