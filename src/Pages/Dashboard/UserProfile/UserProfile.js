import React from "react";
import { Col, Row } from "react-bootstrap";
import useAuth from "../../../Context/useAuth";
import { useForm } from "react-hook-form";

const UserProfile = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  console.log(user);
  return (
    <Row>
      <Col sm={12} md={7}>
        <form
          style={{ backgroundColor: "#fff" }}
          className="mt-5 border p-5 w-100"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 style={{ fontFamily: '"Roboto", sans-serif' }} className="mb-5">
            Update Profile:
          </h3>
          <input
            className="form-control mb-4"
            placeholder=" Name"
            {...register("name", { required: true, maxLength: 20 })}
          />
          <input
            className="form-control mb-4"
            placeholder=" Photo Url"
            {...register("photoURL", { required: true, maxLength: 20 })}
          />

          <input
            className="form-control mb-4"
            placeholder="
             Country"
            {...register("country")}
          />
          <input
            className="form-control mb-4"
            type="email"
            placeholder="
          
            Email"
            {...register("email")}
          />

          <input
            className="form-control mb-4"
            placeholder="
             City"
            {...register("city")}
          />
          <input
            className="form-control mb-4"
            placeholder="
            
            Age"
            type="number"
            {...register("age")}
          />
          <input className="btn btn-primary  mx-auto" type="submit" />
        </form>
      </Col>
      <Col sm={12} md={4}>
        <div
          className="text-center border"
          style={{
            width: "300px",
            padding: "30px",
            marginTop: "150px",
            borderRadius: "10px",
            marginRight: "5px",
            backgroundColor: "#fff",
          }}
        >
          {" "}
          <img
            style={{ borderRadius: "50%", marginTop: "-50px" }}
            src={user?.photoURL}
            alt=""
          />
          <h4>{user.displayName}</h4>
          <p>
            Don't be scared of the truth because we need to restart the human
            foundation in truth And I love you like Kanye loves Kanye I love
            Rick Owens’ bed design but the back is...
          </p>
          <button className="btn btn-primary">Follow Me</button>
        </div>
      </Col>
    </Row>
  );
};

export default UserProfile;
