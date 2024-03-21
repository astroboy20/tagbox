import styled from "styled-components"


export const EditStyle = styled.div`
display:flex ;
flex-direction:column ;
gap:30px;

.header {
    margin-top: 80px;
    background: url("/images/event-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-decoration: underline;
  }

  .birthday-header {
    margin-top: 80px;
    background: url("/images/birthday-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-decoration: underline;
  }

  .graduation-header {
    margin-top: 80px;
    background: url("/images/graduation-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-decoration: underline;
  }
  .conference-header {
    margin-top: 80px;
    background: url("/images/conference-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-decoration: underline;
  }
  .shower-header {
    margin-top: 80px;
    background: url("/images/baby-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-decoration: underline;
  }
  .hangout-header {
    margin-top: 80px;
    background: url("/images/hangout-bg.svg");
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
    color: #fff;
    text-decoration: underline;
  }

  .body {
    padding: 0% 3%;
  }

  .body .options p {
    gap: 25px;
  }

  form {
    padding: 2% 4%;
    display: flex;
    flex-direction: column;
    gap: 75px;
  }

  .input {
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
  }

  .radio-input {
    display: flex;
    gap: 10px;
  }

  .event-display .radio-input label {
    font-size: 18px;
    font-weight: 400;
  }

  .event-box-gift {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    padding-top: 10px;
    width: 100%;
  }

  .event-display {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .event-display div {
    font-size: 20px;
    font-weight: 500;
  }
  .event-display label {
    font-size: 18px;
    font-weight: 500;
  }

  .event-display span {
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  }
  .wishlist {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  .wishlist span {
    font-size: 20px;
    font-weight: 500;
  }
  .wishlist label {
    font-size: 18px;
  }

  .wishlist .input {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
  .wishlist .upload-aso {
    display: flex;
    width: 25%;
    border-radius: 4px;
    padding: 16px 20px;
    gap: 10px;
    background: none;
    font-family: Space Grotesk;
    font-size: 16px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.15);
    justify-content:center ;
  }
  .wishlist .upload-aso .success-image {
    display: flex;
   gap:10px;
   align-items:center ;

  }
  .wishlist input {
    border-radius: 6px;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.15);
    outline: none;
    border: 1px solid rgba(47, 46, 65, 0.2);
    padding: 16px 20px;
    width: 100%;
  }

  .dark-button {
    border: none;
    padding: 16px 12px;
    border-radius: 4px;
    background-color: #020d1e;
    color: #c1e8ff;
    cursor: pointer;
  }

  .bank {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .bank select {
    /* width:20% ; */
    border: 1px solid black;
    padding: 16px 20px;
    border-radius: 4px;
  }
  .bank .in-border {
    display: flex;
    justify-content: space-between;
  }
  .bank .input-border {
    box-shadow: none;
    /* border:none ; */
    border-bottom: 2px solid black;
    outline: none;
    border-left: none;
    border-right: none;
    border-top: none;
    border-radius: 0px;
    padding: 0 ;
    margin-top:5% ;
  }
  .bank .input-border label {
    font-size: 20px;
  }

`