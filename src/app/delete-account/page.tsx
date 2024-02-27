/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";

const DeleteAccountInstructions = () => {
  return (
    <div className="bg-gray-900 text-white p-8 h-screen">
      <Head>
        <title>Delete My Account - Hello World</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Delete My Account</h1>
      <p className="mb-4">
        To delete your account, please follow these steps in the Hello World
        Mobile App:
      </p>

      <ol className="list-decimal ml-6">
        <li>Navigate to your Profile section.</li>
        <li>Click on the "Delete My Account" option.</li>
        <li>Confirm the deletion when prompted.</li>
      </ol>

      <p className="mt-4">
        If you have any questions or need assistance, please contact us at{" "}
        <a href="mailto:gethelloworlddotcom@gmail.com" className="underline">
          gethelloworlddotcom@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default DeleteAccountInstructions;
