"use client";

import { useState, type FormEvent } from "react";

import { contactAdministration } from "../../actions/contact-us";

export const ContactForm = () => {
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await contactAdministration({ email });
  };

  const [email, setEmail] = useState("");

  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
