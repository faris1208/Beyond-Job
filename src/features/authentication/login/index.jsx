"use client";
import { useState } from "react";
import styles from "../login/styles.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
      });
      const [loading,setloading] = useState(false)
    
      const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };

      const handleLogin = (e) => {
        e.preventDefault();
        setloading(true)
    
        const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    
        if (
          storedUser.email === credentials.email &&
          storedUser.password === credentials.password
        ) {
        //   alert("Login Successful!");
          router.push("/company"); 
        } else {
          alert("Invalid credentials");
        }
      };
    
  

  return (
    <section className={styles.wrapper}>
      <div className={styles.signup_container}>
        <div className={styles.get_started}>
          <h2>Welcome Back</h2>
          <span>Please enter your account information.</span>
        </div>
        <div className={styles.container}>
          <form className={styles.form} onSubmit={handleLogin}>
            <div className={styles.form_container}>
              <label htmlFor="">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={credentials.email}
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
                value={credentials.password}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.form_button}>
              <button type="submit" className={styles.button}>
                {loading? "Loading" : "Login"}
                
              </button>
              <div className={styles.googleButton}>
                  <p>Don't have an account? </p>
                  <Link href={"/sign-up"}>
                    <span>Create your account</span>
                  </Link>
                </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
