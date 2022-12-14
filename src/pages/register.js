// import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import cogoToast from "cogo-toast";
import Breadcrumb from "@components/ui/breadcrumb";
import { Col, Container, Row } from "react-bootstrap";
import { HeaderOne as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { HomePagesNavData as navContent } from "@data/navbar";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactLoading from 'react-loading';


const registerValidationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required").min(2).max(20),
  lastName: yup.string().required("Last name is required").min(2).max(20),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a proper email")
    .lowercase(),
  password: yup.string().required("Password is required").min(6).max(20),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password", "HI im saad"), null], "Passwords must match")
    .required("Confirm password is required"),
});

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });
  const logo = "/assets/images/no-placeholder/logo.png";

  const signUp = async (validatedValues) => {
    const { email, password, firstName, lastName } = validatedValues;
    setIsLoading(true);
    //POST form values
    try {
      const res = await axios.post("/api/auth/signup", {
        email: email,
        password: password,
        firstName: firstName,
        lastName, lastName
      });
      if (res?.data?.successMsg) {
        cogoToast.success(res?.data?.successMsg);
      }
    } catch (err) {
      console.log("ERROR OCOURED WHILE REGISTERING USER!", err);
      cogoToast.error(err.response.data.errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  function onsubmit(values) {
    console.log(values);
  }

  return (
    <div className="">
      <Head>
        <title>Pricesure Admin Register</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header
        logo={logo}
        navbar={true}
        navData={navContent}
        navbarAlignment="left"
      /> */}
      <ContentWrapper>
        <Breadcrumb />

        <div className="container-indent">
          <Container>
            <h1 className="tt-title-subpages noborder">CREATE AN ACCOUNT</h1>
            <div className="tt-login-form">
              <Row className="justify-content-center">
                <Col md={8} lg={6}>
                  <div className="tt-item">
                    <h2 className="tt-title">PERSONAL INFORMATION</h2>
                    <div className="form-default">
                      <form id="contactform">
                        <div className="form-group">
                          <label htmlFor="loginInputName">FIRST NAME *</label>
                          <div className="tt-required">* Required Fields</div>
                          <input
                            type="text"
                            id="loginInputName"
                            className="form-control"
                            placeholder="Enter First Name"
                            {...register("firstName")}
                          />
                          <p className="mt-1 ml-4 text-danger text-sm">
                            {errors.firstName?.message}
                          </p>
                        </div>

                        <div className="form-group">
                          <label htmlFor="loginLastName">LAST NAME *</label>
                          <input
                            type="text"
                            id="loginLastName"
                            className="form-control"
                            placeholder="Enter Last Name"
                            {...register("lastName")}
                          />
                          <p className="mt-1 ml-4 text-danger text-sm">
                            {errors.lastName?.message}
                          </p>
                        </div>

                        <div className="form-group">
                          <label htmlFor="loginInputEmail">E-MAIL *</label>
                          <input
                            type="email"
                            id="loginInputEmail"
                            className="form-control"
                            placeholder="Enter E-mail"
                            {...register("email")}
                          />
                          <p className="mt-1 ml-4 text-danger text-sm">
                            {errors.email?.message}
                          </p>
                        </div>

                        <div className="form-group">
                          <label htmlFor="loginInputPassword">PASSWORD *</label>
                          <input
                            type="password"
                            className="form-control"
                            id="loginInputPassword"
                            placeholder="Enter Password"
                            {...register("password")}
                          />
                          <p className="mt-1 ml-4 text-danger text-sm">
                            {errors.password?.message}
                          </p>
                        </div>

                        <div className="form-group">
                          <label htmlFor="loginInputPassword">
                            CONFIRM PASSWORD *
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="loginInputPassword"
                            placeholder="Enter Password"
                            {...register("confirmPassword")}
                          />
                          <p className="mt-1 ml-4 text-danger text-sm">
                            {errors.confirmPassword?.message}
                          </p>
                        </div>
                        <Row>
                          <Col xs="auto">
                            <div className="form-group">
                              <button
                                onClick={handleSubmit(signUp)}
                                style={styles.loginBtn}
                              >
                                CREATE
                                {
                                  isLoading &&
                                  <div style={{ paddingLeft: "5px" }}>
                                    <ReactLoading type={"spin"} color={"#0d6efd"} height={20} width={20} />
                                  </div>
                                }
                              </button>
                            </div>
                          </Col>
                          <Col xs="auto" className="align-self-center">
                            <div className="form-group">
                              <ul className="additional-links">
                                <li>
                                  or <Link href="/category">Return to Store</Link>
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </form>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </ContentWrapper>
      <Footer logo={logo} />
    </div>
  );
}

const styles = {
  loginBtn: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    background: "none",
    color: "#0d6efd",
    border: "2px solid #0d6efd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
};