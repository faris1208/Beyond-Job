"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "../company/styles.module.scss";

const Company = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    websiteUrl: "",
    description: "",
  });

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const savedCompanies = localStorage.getItem("companies");
    if (savedCompanies) {
      setCompanies(JSON.parse(savedCompanies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("companies", JSON.stringify(companies));
  }, [companies]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCompanies = [...companies, { ...formData, status: "Pending" }];
    setCompanies(newCompanies);
    setFormData({ companyName: "", websiteUrl: "", description: "" });
  };

  const updateStatus = (index, newStatus) => {
    const updatedCompanies = companies.map((company, i) =>
      i === index ? { ...company, status: newStatus } : company
    );
    setCompanies(updatedCompanies);
  };

  const handleDelete = (index) => {
    const filteredCompanies = companies.filter((_, i) => i !== index);
    setCompanies(filteredCompanies);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.setup_wrapper}>
        <h2>Setup Organisation</h2>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_wrapper}>
          <div className={styles.company_form}>
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              placeholder="Enter company name"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.company_form}>
            <label>Website URL</label>
            <input
              type="url"
              name="websiteUrl"
              placeholder="Enter website URL"
              value={formData.websiteUrl}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.company_form}>
            <label>Company Description</label>
            <textarea
              name="description"
              placeholder="Enter company description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <div className={styles.submit_button}>
          <button type="submit">
            Save
          </button>
        </div>
      </form>

      <div className={styles.list_wrapper}>
        <div>
          <h3>Saved Companies</h3>
        </div>
        <ul>
          {companies.map((company, index) => (
            <li key={index} className={styles.company_item}>
              <p>
                <strong>Name:</strong> {company.companyName}
              </p>
              <p>
                <strong>Website:</strong> {company.websiteUrl}
              </p>
              <p>
                <strong>Description:</strong> {company.description}
              </p>
              <p>
                <strong>Status:</strong>
                 <span
                  className={
                    company.status === "Approved"
                      ? styles.status_approved
                      : styles.status_pending
                  }
                >
                  {company.status}
                </span>
              </p>
              <div className={styles.button_box}>
                <button
                  onClick={() => updateStatus(index, "Approved")}
                  className={styles.approve_button}
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(index, "Pending")}
                  className={styles.pending_button}
                >
                  Set Pending
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className={styles.delete_button}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Company;
