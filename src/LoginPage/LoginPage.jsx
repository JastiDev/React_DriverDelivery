import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../_actions";

import { Header } from "./Header";
import { Other } from "./Other";
import { Footer } from "./Footer";

function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { username, password } = inputs;
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();

  // reset login status
  useEffect(() => {
    dispatch(userActions.logout());
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  return (
    <div>
      <Header />
      <section
        className="header15 cid-rYgTdtI02e mbr-fullscreen mbr-parallax-background"
        id="header15-4"
      >
        <div
          className="mbr-overlay"
          style={{ opacity: 0.4, backgroundColor: "rgb(7, 59, 76)" }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="mbr-white col-lg-8 col-md-7 content-container">
              <h1 className="mbr-section-title mbr-bold pb-3 mbr-fonts-style display-1">
                日本配送
              </h1>
              <p className="mbr-text pb-3 mbr-fonts-style display-5">
                いますぐ荷物を届けてほしい人が、近くにいるドライバー、ライダー、メッセンジャーを探して配達を依頼するスマートフォンのアプリです。
                依頼すると、近くにいるプロのドライバーに一斉通知が届くので、急な配送にもスピーディーに対応できます。また、24時間/365日のカスタマーサポート体制があるので安心です。
              </p>
            </div>
            <div className="col-lg-4 col-md-5">
              <div
                className="form-container"
                style={{
                  margin: "50px 0 0 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>Login</h2>
                <form name="form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      value={username}
                      onChange={handleChange}
                      className={
                        "form-control" +
                        (submitted && !username ? " is-invalid" : "")
                      }
                    />
                    {submitted && !username && (
                      <div className="invalid-feedback">
                        Username is required
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                      className={
                        "form-control" +
                        (submitted && !password ? " is-invalid" : "")
                      }
                    />
                    {submitted && !password && (
                      <div className="invalid-feedback">
                        Password is required
                      </div>
                    )}
                  </div>
                  <div className="form-group align-center">
                    <button className="btn btn-primary">
                      {loggingIn && (
                        <span className="spinner-border spinner-border-sm mr-1"></span>
                      )}
                      Login
                    </button>
                    <Link
                      to="/register"
                      className="btn btn-link"
                      style={{ color: "white", fontWeight: "bolder" }}
                    >
                      Register
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Other />
      <Footer />
    </div>
  );
}

export { LoginPage };
