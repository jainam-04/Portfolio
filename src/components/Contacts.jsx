import React from "react";
import Swal from "sweetalert2";

function Contacts() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "0b32809e-6f18-456d-9982-fec40beba2d0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div>
      <div className="bg-cyan-950 text-white">
        <h1 className="text-center py-5 text-5xl font-bold">Contact</h1>
        <div>
          <form
            className="flex justify-center items-center flex-col text-lg gap-10 py-10 font-bold contact-form"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-cyan-950 text-white border-2 border-white rounded-xl py-3 px-4 w-[60vw]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              className="bg-cyan-950 text-white border-2 border-white rounded-xl py-3 px-4 w-[60vw]"
              required
            />
            <textarea
              cols={10}
              rows={10}
              name="message"
              placeholder="Message"
              className="bg-cyan-950 text-white border-2 border-white rounded-xl py-3 px-4 w-[60vw] resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black py-3 px-5 rounded-xl text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
