import React from "react";

const Complaints = () => {
  return (
    <section className="bg-gray-100 py-8 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Complaints Procedure
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Our easy and transparent complaints handling process ensures your
          concerns are addressed promptly and efficiently. Please follow the
          steps below to raise your concern:
        </p>
        <ol className="list-decimal list-inside text-gray-700 space-y-4">
          <li>
            <span className="font-semibold">Step 1: Contact Us</span> <br />
            Reach out to our support team via email or phone to detail your
            complaint.
          </li>
          <li>
            <span className="font-semibold">Step 2: Review</span> <br />
            Our team will review your complaint and gather the necessary
            information to resolve the issue.
          </li>
          <li>
            <span className="font-semibold">Step 3: Resolution</span> <br />
            Once reviewed, we will provide you with a resolution or a clear
            action plan.
          </li>
        </ol>
        <p className="text-gray-700 mt-6">
          If you have further questions or need assistance, feel free to
          contact us at{" "}
          <a
            href="mailto:support@example.com"
            className="text-blue-500 hover:underline"
          >
            support@example.com
          </a>
          .
        </p>

        <div className="mt-8 border-t pt-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Admin Contact Details
          </h3>
          <p className="text-gray-700">
            <span className="font-semibold">Admin:</span> T. Jeremy
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:bjacademy123@gmail.com"
              className="text-blue-500 hover:underline"
            >
              bjacademy123@gmail.com
            </a>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Phone:</span> +94 213 214 1413
          </p>
        </div>
      </div>
    </section>
  );
};

export default Complaints;
