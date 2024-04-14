import { useRef } from "react";

export default function Contact() {
  const refhook = useRef<HTMLInputElement>(null);
  const refemail = useRef<HTMLInputElement>(null);
  const person = { name: "", email: "" };
  const handle = async (e: any) => {
    e.preventDefault();
    if (refhook.current) {
      person.name = refhook.current?.value;
    }
    if (refemail.current) {
      person.email = refemail.current?.value;
    }
    const { name, email } = person;
    console.log(person);
    // const fetchapi = await fetch(
    //   "https://dizainoworld-f1a6d-default-rtdb.firebaseio.com/Contact.json",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name, email }),
    //   }
    // );
  };
  return (
    <>
      <div>
        <h2>Simple Form</h2>
        <form method="POST">
          <label>
            Name:
            <input type="text" name="name" ref={refhook} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" ref={refemail} />
          </label>
          <br />
          <button type="submit" style={{ color: "black" }} onClick={handle}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
