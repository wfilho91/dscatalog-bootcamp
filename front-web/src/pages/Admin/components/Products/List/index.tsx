import React from "react";
import { useHistory } from "react-router";
import "./styles.scss";

const List = () => {

const history =useHistory();
const handleCreate=()=>{
    history.push("/admin/products/create");
 }
    
  return (
    <div className="admin-products-list">
      <button 
      type="button" 
      className="btn btn-primary btn-lg" 
      onClick={handleCreate}>
        ADICIONAR
      </button>
    </div>
  );
};

export default List;
