import React from "react";

const Login = (props) => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-mdb-backdrop="static"
      data-mdb-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example1"
                  className="form-control"
                />
                <label className="form-label" for="form1Example1">
                  Email address
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example2"
                  className="form-control"
                />
                <label className="form-label" for="form1Example2">
                  Password
                </label>
              </div>

              <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      checked
                    />
                    <label className="form-check-label" for="form1Example3">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div className="col">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Sign in
              </button>
            </form>
          </div>
          <div className="modal-footer">
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
