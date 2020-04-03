import React from "react";

import CollectionItem from "../../components/collection-item/collection-item";

import "./collection.styles.scss";

const CollectionPage = ({ match }) => (
  <div className="category">
    {console.log(match.params.collectionId)}
    <h2>CATEGORY PAGE</h2>
  </div>
);

export default CollectionPage;
