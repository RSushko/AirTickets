import React, { Fragment } from "react";
import { RADIO_OPTIONS, SELECT_OPTIONS } from "@/lib/constants";

const BuyTicket = () => {
  const [disabled, setDisabled] = React.useState(true);

  return (
    <>
      <div className="flex justify-around md:pl-16 max-w-3xl mb-4">
        {RADIO_OPTIONS.map((el, i) => (
          <label
            key={i}
            className="cursor-pointer"
            onClick={() => setDisabled(false)}
          >
            <input type="radio" name="travel" />
            <span className="ml-2">{el}</span>
          </label>
        ))}
      </div>
      <div className="grid max-md:text-center grid-cols-1 md:grid-cols-3 gap-4 md:gap-16 mx-10 pb-32">
        {SELECT_OPTIONS.map((el, i) => {
          return (
            <Fragment key={i}>
              <div className={`${i == 3 ? "md:col-start-3" : ""}`}>
                <span>{el}</span>
                <div className="flex gap-4">
                  {/* {i == 0 || i == 1 ? (
                    <Combobox disabled={disabled} key={i} />
                  ) : (
                    <Calendar
                      disabled={disabled}
                      mode="single"
                      className="rounded-md border"
                    />
                  )} */}
                </div>
              </div>
              {i == 2 && (
                <button
                  disabled={disabled}
                  className={`md:col-start-2 py-2 text-white rounded-lg ${
                    disabled
                      ? "bg-gray-500"
                      : "bg-orange-500 hover:bg-orange-600"
                  }`}
                >
                  Book now!
                </button>
              )}
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export default BuyTicket;
