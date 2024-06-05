import React from "react";

const styles = {
  cont: {
    width: "200px",
    border: "2  px solid black",
    textAlign: "center",
    padding: "5px",
    margin: "5px",
    display: "flex",
  }, 
  card: {
    width: "100%",
  },
};

const burgerKing = {
    name : "Burger King",
    image : "https://1000logos.net/wp-content/uploads/2016/10/Burger-King_Logo.png",
    cusines : ['Burger', 'American'], 
    orders : 1873
}

const RestrauntCard = () => {
  return (
    <div className="cont" style={styles.cont}>
      <div className="card">
        <img
          src= {burgerKing.image}
          style={styles.card}
        />
        <h2>{burgerKing.name}</h2>
        <h3>{burgerKing.cusines}</h3>
        <p>{burgerKing.orders} orders 780 ratings</p>
      </div>
    </div>
  );
};

export default RestrauntCard;
