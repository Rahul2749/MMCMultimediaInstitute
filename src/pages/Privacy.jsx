import React from 'react';
import LegalPage from '../components/LegalPage';
import { SITE_CONTACT } from '../data/site';

const Privacy = () => (
  <LegalPage title="Privacy Policy">
    <p>
      MMC Multimedia Institute (&quot;MMC&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy. This policy
      explains how we collect, use and protect personal information when you visit our website or
      submit an enquiry.
    </p>
    <h2 className="font-title-md text-title-md text-on-surface pt-4">Information we collect</h2>
    <p>
      When you fill out an enquiry or application form, we may collect your name, email address,
      phone number, city, course interest and any message you provide. We also collect standard
      technical data such as browser type and pages visited through analytics tools.
    </p>
    <h2 className="font-title-md text-title-md text-on-surface pt-4">How we use your information</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>To respond to enquiries and provide admissions counselling</li>
      <li>To share course details, batch schedules and enrollment information</li>
      <li>To improve our website and student services</li>
      <li>To send updates you have opted in to receive</li>
    </ul>
    <h2 className="font-title-md text-title-md text-on-surface pt-4">Data sharing</h2>
    <p>
      We do not sell your personal data. We may share information with trusted service providers who
      assist with communications, CRM or payment processing, subject to confidentiality obligations.
    </p>
    <h2 className="font-title-md text-title-md text-on-surface pt-4">Your rights</h2>
    <p>
      You may request access, correction or deletion of your personal data by contacting us at{' '}
      <a href={`mailto:${SITE_CONTACT.email}`} className="text-secondary hover:underline">
        {SITE_CONTACT.email}
      </a>
      .
    </p>
    <p className="text-sm pt-4">Last updated: June 2026</p>
  </LegalPage>
);

export default Privacy;
