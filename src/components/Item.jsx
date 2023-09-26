import React from "react";
import PropTypes from "prop-types";

export default function Item({item}) {
    // console.log(item)
    if (item.state !== 'active') {
        return;
    }
    let nameTitle = item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title; 
    let remainder;
    let pricetag;

    if (item.quantity < 10) {
        remainder = "level-low";
    } else if (item.quantity < 20) {
        remainder = "level-medium";
    } else {
        remainder = "level-high";
    }

    
    if (item.currency_code=== 'USD') {
        pricetag = `$${item.price}`
      } else if (item.currency_code === 'EUR') {
        pricetag = `€${item.price}`
      } else {
        pricetag = `${item.price} ${item.currency_code}`
      }

    
    return (
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{nameTitle}</p>
                <p className="item-price">{pricetag}</p>
                <p className={`item-quantity ${remainder}`}>{`${item.quantity} left`}</p>
            </div>
        </div>
    );

}

Item.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string,
        MainImage: PropTypes.object,
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number,
        listing_id: PropTypes.number,
    })
}
