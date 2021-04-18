import React from "react";

export const RelatedAnnonace = () => {
  return (
    <div>
      <div className="classNameic-tabs border rounded px-4 pt-1">
        <ul
          className="nav tabs-primary nav-justified"
          id="advancedTab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active show"
              id="description-tab"
              data-toggle="tab"
              href="#description"
              role="tab"
              aria-controls="description"
              aria-selected="true"
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="info-tab"
              data-toggle="tab"
              href="#info"
              role="tab"
              aria-controls="info"
              aria-selected="false"
            >
              Information
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="reviews-tab"
              data-toggle="tab"
              href="#reviews"
              role="tab"
              aria-controls="reviews"
              aria-selected="false"
            >
              Reviews (1)
            </a>
          </li>
        </ul>
        <div className="tab-content" id="advancedTabContent">
          <div
            className="tab-pane fade show active"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <h5>Product Description</h5>
            <p className="small text-muted text-uppercase mb-2">Shirts</p>
            <ul className="rating">
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="fas fa-star fa-sm text-primary"></i>
              </li>
              <li>
                <i className="far fa-star fa-sm text-primary"></i>
              </li>
            </ul>
            <h6>12.99 $</h6>
            <p className="pt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              sapiente illo. Sit error voluptas repellat rerum quidem, soluta
              enim perferendis voluptates laboriosam. Distinctio, officia quis
              dolore quos sapiente tempore alias.
            </p>
          </div>
          <div
            className="tab-pane fade"
            id="info"
            role="tabpanel"
            aria-labelledby="info-tab"
          >
            <h5>Additional Information</h5>
            <table className="table table-striped table-bordered mt-3">
              <thead>
                <tr>
                  <th scope="row" className="w-150 dark-grey-text h6">
                    Weight
                  </th>
                  <td>
                    <em>0.3 kg</em>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="w-150 dark-grey-text h6">
                    Dimensions
                  </th>
                  <td>
                    <em>50 × 60 cm</em>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="tab-pane fade"
            id="reviews"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            <h5>
              <span>1</span> review for <span>Fantasy T-shirt</span>
            </h5>
            <div className="media mt-3 mb-4">
              <img
                className="d-flex mr-3 z-depth-1"
                src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"
                width="62"
                alt="Generic placeholder image"
              />
              <div className="media-body">
                <div className="d-sm-flex justify-content-between">
                  <p className="mt-1 mb-2">
                    <strong>Marthasteward </strong>
                    <span>– </span>
                    <span>January 28, 2020</span>
                  </p>
                  <ul className="rating mb-sm-0">
                    <li>
                      <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-primary"></i>
                    </li>
                    <li>
                      <i className="far fa-star fa-sm text-primary"></i>
                    </li>
                  </ul>
                </div>
                <p className="mb-0">Nice one, love it!</p>
              </div>
            </div>
            <hr />
            <h5 className="mt-4">Add a review</h5>
            <p>Your email address will not be published.</p>
            <div className="my-3">
              <ul className="rating mb-0">
                <li>
                  <a href="#!">
                    <i className="fas fa-star fa-sm text-primary"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fas fa-star fa-sm text-primary"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fas fa-star fa-sm text-primary"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fas fa-star fa-sm text-primary"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="far fa-star fa-sm text-primary"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="md-form md-outline">
                <textarea
                  id="form76"
                  className="md-textarea form-control pr-6"
                  rows="4"
                ></textarea>
                <label for="form76">Your review</label>
              </div>

              <div className="md-form md-outline">
                <input type="text" id="form75" className="form-control pr-6" />
                <label for="form75">Name</label>
              </div>

              <div className="md-form md-outline">
                <input type="email" id="form77" className="form-control pr-6" />
                <label for="form77">Email</label>
              </div>
              <div className="text-right pb-2">
                <button type="button" className="btn btn-primary">
                  Add a review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedAnnonace;
