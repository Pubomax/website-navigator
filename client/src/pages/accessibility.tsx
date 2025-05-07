import React from 'react';

/**
 * Accessibility Statement Page
 * Provides information about the website's accessibility features and compliance level
 */
function AccessibilityStatement() {
  return (
    <main id="main-content" className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Accessibility Statement</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
        <p className="mb-4">
          Minecore Group is committed to ensuring digital accessibility for people with disabilities. 
          We are continually improving the user experience for everyone, and applying the relevant 
          accessibility standards to ensure we provide equal access to all users.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Conformance Status</h2>
        <p className="mb-4">
          The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and 
          developers to improve accessibility for people with disabilities. It defines three levels of 
          conformance: Level A, Level AA, and Level AAA. Our website is largely conformant with 
          WCAG 2.1 level AA standards. We actively work to maintain and improve this level of 
          accessibility through ongoing testing and remediation.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Accessibility Features</h2>
        <p className="mb-4">Our website includes the following accessibility features:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Semantic HTML structure with appropriate landmarks and headings</li>
          <li className="mb-2">Keyboard accessibility for all interactive elements</li>
          <li className="mb-2">Skip navigation links to bypass repetitive content</li>
          <li className="mb-2">ARIA attributes where appropriate to enhance screen reader compatibility</li>
          <li className="mb-2">Sufficient color contrast for text content</li>
          <li className="mb-2">Text resizing without loss of functionality</li>
          <li className="mb-2">Alternative text for all informative images</li>
          <li className="mb-2">Form labels and error messages that are programmatically associated with inputs</li>
          <li className="mb-2">Focus indicators for all interactive elements</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Feedback and Contact Information</h2>
        <p className="mb-4">
          We welcome your feedback on the accessibility of our website. If you encounter accessibility 
          barriers or have suggestions for improvement, please contact us:
        </p>
        <ul className="mb-4">
          <li><strong>Email:</strong> <a href="mailto:accessibility@minecoregroup.com" className="text-primary hover:underline">accessibility@minecoregroup.com</a></li>
          <li><strong>Phone:</strong> <a href="tel:+15141234567" className="text-primary hover:underline">+1 (514) 123-4567</a></li>
        </ul>
        <p>
          We aim to respond to accessibility feedback within 2 business days, and to propose a solution 
          within 10 business days when possible.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Compatibility with Browsers and Assistive Technology</h2>
        <p className="mb-4">
          Our website is designed to be compatible with the following assistive technologies:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Screen readers (including NVDA, JAWS, VoiceOver, and TalkBack)</li>
          <li className="mb-2">Screen magnification software</li>
          <li className="mb-2">Speech recognition software</li>
          <li className="mb-2">Keyboard-only navigation</li>
        </ul>
        <p className="mb-4">
          Our website is compatible with recent versions of major browsers, including Chrome, Firefox, 
          Safari, and Edge.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
        <p className="mb-4">
          The accessibility of our website relies on the following technologies:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">HTML5</li>
          <li className="mb-2">WAI-ARIA</li>
          <li className="mb-2">CSS</li>
          <li className="mb-2">JavaScript</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Assessment Approach</h2>
        <p className="mb-4">
          Minecore Group assesses the accessibility of our website through a combination of:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Self-evaluation using automated testing tools</li>
          <li className="mb-2">External accessibility audits by specialists</li>
          <li className="mb-2">User testing with individuals who use assistive technologies</li>
          <li className="mb-2">Ongoing monitoring and testing during content updates</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Continuous Improvement</h2>
        <p className="mb-4">
          Minecore Group is committed to an ongoing process of improving the accessibility of our 
          website. We regularly review content and functionality for accessibility issues, prioritize 
          fixes based on impact, and incorporate accessibility considerations into our development and 
          design processes.
        </p>
        <p>
          This statement was last updated on May 5, 2025.
        </p>
      </section>
    </main>
  );
}

export default AccessibilityStatement;