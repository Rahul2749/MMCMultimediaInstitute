import React from 'react';
import LegalPage from '../components/LegalPage';
import { SITE_CONTACT } from '../data/site';

const Terms = () => (
  <LegalPage title="Terms of Service">
    <p>
      By accessing the MMC Multimedia Institute website and submitting enquiries or applications, you
      agree to these Terms of Service. Please read them carefully.
    </p>
    <h2 className="font-title-md text-title-md text-on-surface pt-4">Use of website</h2>
    <p>
      Content on this site is provided for informational purposes about our courses and services. You
      may not copy, scrape or redistribute materials without written permission from MMC.
    </p>
    <h2 className="font-title-md text-title-md text-on-surface pt-4">Enquiries &amp; admissions</h2>
    <p>
      Submitting an enquiry does not guarantee admission. Course availability, fees and schedules are
      subject to change. Final enrollment is confirmed only upon completion of the official admission
      process and payment of applicable fees.
    </p>
    <h2 className="font-title-md text-title-md text-on-surface pt-4">Intellectual property</h2>
    <p>
      Student work displayed on this site remains the property of the respective creators. MMC may
      showcase graduate projects for promotional purposes with appropriate credit, as outlined in
      enrollment agreements.
    </p>
    <h2 className="font-title-md text-title-md text-on-surface pt-4">Limitation of liability</h2>
    <p>
      MMC strives for accuracy in course descriptions and placement statistics but does not guarantee
      specific employment outcomes. Career success depends on individual effort, market conditions
      and portfolio quality.
    </p>
    <h2 className="font-title-md text-title-md text-on-surface pt-4">Contact</h2>
    <p>
      Questions about these terms:{' '}
      <a href={`mailto:${SITE_CONTACT.email}`} className="text-secondary hover:underline">
        {SITE_CONTACT.email}
      </a>
    </p>
    <p className="text-sm pt-4">Last updated: June 2026</p>
  </LegalPage>
);

export default Terms;
