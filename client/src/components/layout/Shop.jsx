import React, { Fragment } from 'react';
import Icon from '../UI/Icon';

const Shop = (props) => {
  return (
    <Fragment>
      <section className="shop">
        <h1 className="shop__heading">
          <span>Inventory</span>
        </h1>

        <div className="shop__search-box">
          <h2 className="shop__search-heading">
            Search the Inventory:
          </h2>
          <form action="#" className="shop__search">
            <input type="text" className="shop__search search__input" placeholder="Search inventory"/>
              <button className="shop__search search__button">
                <Icon iconType="icon-search"
                    class="shop__search search__icon" />
              </button>
          </form>

          
        </div>

        <div className="shop__featured-collections">
          <h2>Featured Collections</h2>
        </div>

        <div className="shop__featured-exhibitions">
          <h2>Featured Exhibitions</h2>
        </div>

        <div className="shop__prints">
          <h3>Prints & Editions</h3>
        </div>
      </section>
    </Fragment>
  );
}

export default Shop;
