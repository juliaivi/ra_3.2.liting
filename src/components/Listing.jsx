import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

export default function Listing({items}) {
    if (items.length === 0) {
        return null;
    }

    return (
        <div className="item-list">
            {items.map((item) => <Item item={item} key={item.listing_id} />)}
        </div>
    );
}

Listing.defaultProps = {
    items: []
}

Listing.propTypes = {
    items: PropTypes.array
}