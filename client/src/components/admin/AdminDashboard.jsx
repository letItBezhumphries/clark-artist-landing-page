import React, { Fragment } from 'react';

const AdminDashboard = (props) => {
  console.log('in ADMINDASHBOARD', props);
  return (
    <Fragment>
      <h2>Welcome Administrator!</h2>
      <h4>What would you like to do today?</h4>

      <div className="admin__options-select">
        <select>
          <option>Portfolios</option>
          <option>Images</option>
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
    </Fragment>
  );
}

export default AdminDashboard;
