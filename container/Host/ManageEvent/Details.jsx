import React from 'react'
import { ManageStyle } from './Manage.style'
import { EventStyle } from '@/components/Input/Input.style'
import { Button } from '@/components/Button/Button'
import Image from "next/image"

const Details = ({eventDetails}) => {
  return (
    <ManageStyle>
          <div className="body">
        <div className="welcome">
          <span>
            Welcome to {eventDetails?.event_hashtag} {name}
          </span>
        </div>
        <div className="location">
          <span>Event location</span>
          <p>{eventDetails?.location}</p>
        </div>
        <div className="avalability">
          <span>Will you be available for this event?</span>
          {/* <div className="input">
            <div className="radio-input">
              <input
                type="radio"
                id="yes"
                value="Yes"
                name="availability"
                checked={availability === "Yes"}
                onChange={() => handleEventTypeChange("Yes")}
              />
              <label>Yes, definitely</label>
            </div>
            <div className="radio-input">
              <input
                type="radio"
                id="maybe"
                value="Maybe"
                name="availability"
                checked={availability === "Maybe"}
                onChange={() => handleEventTypeChange("Maybe")}
              />
              <label>Maybe</label>
            </div>
            <div className="radio-input">
              <input
                type="radio"
                id="no"
                value="No"
                name="eventavailability"
                checked={availability === "No"}
                onChange={() => handleEventTypeChange("No")}
              />
              <label>No</label>
            </div>
          </div> */}
        </div>

        {/* <EventStyle>
          <label>Copy unique entrance code for this event</label>
          <div>
            <input
              id="date"
              type="text"
              name="date"
              style={{ border: "none" }}
            />
            <p>Copy</p>
          </div>
        </EventStyle> */}

        {eventDetails?.wishlist?.items.length === 0 ? (
          ""
        ) : (
          <>
            {" "}
            <div className="wishlist">
              <span>Wishlist</span>
              <p>Make a commitment by granting the wishes of the event host</p>
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>Serial No.</th>
                      <th>Item</th>
                      <th>Link to purchase item</th>
                      <th>Confirm commitment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {eventDetails?.wishlist?.items.map((item, index) => (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.item_name}</td>
                        <td>{item.item_link}</td>
                        <td>
                          {item.confirmed ? (
                            <button className="unconfirm">Confirmed</button>
                          ) : (
                            <button
                              className="confirm"
                            //   onClick={() => handleButtonClick(item._id)}
                            //   disabled={disabledItem.includes(item._id)}
                            >
                              Confirm
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* <Modal show={showModal} onClose={() => setShowModal(false)}>
              <Actions>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input-input"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                />
                <input
                  type="hidden"
                  value={selectedItemId}
                  readOnly
                  className="input-input"
                />

                <button className="dark-button" onClick={handleConfirm}>
                  {loading ? <Spinner /> : "Confirm"}
                </button>
              </Actions>
            </Modal> */}
          </>
        )}
        {eventDetails?.bank_account?.bank_name === "" &&
        eventDetails?.bank_account?.account_number === "" &&
        eventDetails?.bank_account?.account_name === "" ? (
          ""
        ) : (
          <>
            <EventStyle>
              <label>Want to do a cash donation instead?</label>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <div
                  id="account"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <p>Bank Name: {eventDetails?.bank_account?.bank_name}</p>
                  <p>Acc Number: {eventDetails?.bank_account?.account_number}</p>
                  <p>Acc Name: {eventDetails?.bank_account?.account_name}</p>
                </div>

                {/* <p style={{ cursor: "pointer" }} onClick={handleCopyClick}>
                  {isCopied ? "Copied" : "Copy"}
                </p> */}
              </div>
            </EventStyle>
          </>
        )}

        {eventDetails?.dress_code?.items.length === 0 ? (
          ""
        ) : (
          <div className="location">
            <span>Merch (Aso-ebi)</span>
            {/* <p>{eventDetails?.dress_code}</p> */}

            {eventDetails?.dress_code?.items.map((item, index) => (
              <div key={item._id} className="dress">
                <Image
                  src={item.dress}
                  width={620}
                  height={400}
                  objectFit="contain"
                  className="image"
                  alt="invitation card"
                  onLoad={() => setImageLoaded(true)}
                />
                <p>#{item.dress_price}</p>
              </div>
            ))}
          </div>
        )}

        <EventStyle>
          <label>Write a wish to the couples</label>
          <div>
            <input
              id="date"
              type="text"
              name="date"
            //   value={wish}
            //   onChange={(e) => setWish(e.target.value)}
              style={{ border: "none" }}
            />
          </div>
        </EventStyle>

        <EventStyle>
          <label>Input Senders Name</label>
          <div>
            <input
              id="date"
              type="text"
              name="date"
              style={{ border: "none" }}
            //   value={senderName}
            //   onChange={(e) => setSenderName(e.target.value)}
            />
          </div>
        </EventStyle>
        {eventDetails?.invitation_card === "" ? (
          ""
        ) : (
          <div className="location">
            <span>Invitation Card</span>
            <div className="imageRef">
              <Image
                src={eventDetails?.invitation_card}
                width={400}
                height={560}
                objectFit="contain"
                className="image"
                alt="invitation card"
                // onLoad={() => setImageLoaded(true)}
              />
            </div>
            {/* <button onClick={downloadImage} className="button">
              Download Invitation Card
            </button> */}
          </div>
        )}

        <Button variant={"dark-button"} >
          RSVP
        </Button>
      </div>
    </ManageStyle>
  )
}

export  {Details}