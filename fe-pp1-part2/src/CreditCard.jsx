import React from "react";
import visaLogo from "./assets/images/visa.png";
import masterCardLogo from "./assets/images/master.png";

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) {
  // Mask the credit card number, showing only the last 4 digits
  const maskedNumber = "•••• •••• •••• " + number.slice(-4);

  // Format month to always have 2 digits
  const formattedMonth = expirationMonth.toString().padStart(2, "0");

  // Select card logo based on type
  const cardLogo = type === "Visa" ? visaLogo : masterCardLogo;

  return (
    <div style={{
      backgroundColor: bgColor,
      color: color,
      width: "350px",
      height: "200px",
      borderRadius: "15px",
      padding: "20px",
      margin: "20px auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      fontFamily: "Arial, sans-serif",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
    }}>
      {/* Top row: card type logo */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <img src={cardLogo} alt={type} style={{ height: "30px" }} />
      </div>

      {/* Card number */}
      <div style={{ fontSize: "1.5em", letterSpacing: "2px", margin: "20px 0" }}>
        {maskedNumber}
      </div>

      {/* Bottom row: expiration and bank */}
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9em" }}>
        <div>
          <div>Expires {formattedMonth}/{expirationYear.toString().slice(-2)}</div>
          <div>{bank}</div>
        </div>
      </div>

      {/* Owner */}
      <div style={{ marginTop: "20px", fontWeight: "bold" }}>
        {owner}
      </div>
    </div>
  );
}

export default CreditCard;
