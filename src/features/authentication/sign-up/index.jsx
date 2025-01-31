"use client";
import { useState } from "react";
import styles from "../sign-up/styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", formData);
    localStorage.setItem("user", JSON.stringify(formData));
    router.push("/login");
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.signup_container}>
        <div className={styles.get_started}>
          <h2>Create your Account</h2>
          <span>Please fill in the form to create an account.</span>
        </div>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_container}>
              <label htmlFor="">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.form_container}>
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.form_container}>
              <label htmlFor="">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.form_button}>
              <button type="submit" className={styles.button}>
                Sign Up
              </button>
              <div className={styles.googleButton}>
                {/* <Link href={"/"}>
                  <p>Continue with Google</p>
                </Link> */}
                <div className={styles.googleButton}>
                  <p>Already have an account?</p>
                  <Link href={"/login"}>
                    <span>Log in</span>
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
