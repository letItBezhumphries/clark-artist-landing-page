import React, { Fragment } from 'react';

const AdminDashboard = (props) => {
  console.log('in ADMINDASHBOARD', props);
  return (
    <Fragment>
      <section className="admin-dashboard">
        <div className="admin-dashboard__heading-box">
          <h2 className="admin-dashboard__primary u-center-text">
            Welcome Administrator!
          </h2>
          <h4 className="admin-dashboard__primary-sub">
            What would you like to do today?
          </h4>
        </div>

        <div className="admin-dashboard__content">
          <div className="adminboard__view-options-select">
            <select>
              <option>Portfolios</option>
              <option>Artwork</option>
              <option>Coupons</option>
            </select>
          </div>

          <div className="admin-actions-group">
            <button className="admin-actions-group__btn btn">
              Add Artwork to shop
            </button>

            <button className="admin-actions-group__btn btn">
              Edit Artwork in shop
            </button>
            <button className="admin-actions-group__btn btn">
              Remove Artwork from shop
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default AdminDashboard;
