import React from "react";

const Contact = () => {
  const currentYear = new Date().getFullYear();
  const authorName = "Sooraj Rajkumar";

  return (
    <div
      name="contact"
      className="contact-container w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white relative"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Drop me a line and let's embark on a journey of innovation and creativity
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/8f2160f9-d7ba-4d3f-b8f3-3e81e8bce27f"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
            style={{ maxWidth: "500px" }}
          >
            <input
  type="text"
  name="name"
  placeholder="Enter your name"
  class="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
  required
/>

<input
  type="email"
  name="email"
  placeholder="Enter your email"
  class="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
  required
/>

<textarea
  name="message"
  placeholder="Enter your message"
  rows="10"
  class="p-2 mb-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
  required
></textarea>

            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-400  absolute bottom-0 left-0 w-full">
        &copy; {currentYear} {authorName}
      </div>
    </div>
  );
};

export default Contact;
