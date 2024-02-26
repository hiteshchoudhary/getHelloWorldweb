/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Head>
        <title>Privacy Policy - Hello World</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p>
        Hello World ("we," "us," or "our") is committed to protecting the
        privacy of our users. This Privacy Policy outlines the types of personal
        information we collect, how we use it, and the choices you have
        regarding your information when you use our mobile application ("the
        App").
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Information We Collect:</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Google Account Information:</strong> When you log in to the
          App using Google Single Sign-On (SSO), we may collect certain
          information from your Google account, such as your name, email
          address, and profile picture.
        </li>
        <li>
          <strong>Device Information:</strong> We may collect information about
          your mobile device, including its unique device identifier (UDID), IP
          address, operating system for issue tracking.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">
        How We Use Your Information:
      </h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>To Provide the Service:</strong> We use your personal
          information to authenticate your identity, enable you to log in to the
          App, and facilitate video calls with other users.
        </li>
        <li>
          <strong>To Improve the App:</strong> We may use aggregated or
          anonymized data to analyze usage patterns, identify areas for
          improvement, and enhance the user experience.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-6 mb-4">Data Security:</h2>
      <p>
        We take reasonable measures to protect the security of your personal
        information against unauthorized access, disclosure, alteration, or
        destruction. However, please be aware that no method of transmission
        over the internet or electronic storage is 100% secure, and we cannot
        guarantee the absolute security of your data.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Third-Party Services:</h2>
      <p>
        The App may include third-party services, such as Google SSO, for
        authentication purposes. These third-party services may collect and
        process your personal information according to their own privacy
        policies. We encourage you to review the privacy policies of these
        third-party services before using them.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Children's Privacy:</h2>
      <p>
        The App is not intended for use by children under the age of 13. We do
        not knowingly collect personal information from children under the age
        of 13. If you are a parent or guardian and believe that your child has
        provided us with personal information without your consent, please
        contact us immediately so that we can take appropriate action.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">
        Changes to This Privacy Policy:
      </h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or legal requirements. We will notify you of any
        material changes by posting the updated Privacy Policy on our website or
        through other means. Your continued use of the App after the effective
        date of the updated Privacy Policy constitutes your acceptance of the
        changes.
      </p>

      <h2 className="text-2xl font-bold mt-6 mb-4">Contact Us:</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our
        data practices, please contact us at{" "}
        <a href="mailto:gethelloworlddotcom@gmail.com">
          gethelloworlddotcom@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
