import { Shield, Lock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f7fff7]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/">
            <img 
              src="/lovable-uploads/77bca66d-206a-4cf5-b0d5-7512af5704e9.png" 
              alt="MyGroupGo Logo" 
              className="h-10"
            />
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-8 h-8 text-[#4ecdc4]" />
            <h1 className="text-3xl font-bold text-[#1A535C]">Privacy Policy</h1>
          </div>

          <div className="space-y-6 text-[#1A535C]">
            <p>
              MyGroupGo is committed to providing quality services to you and this policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.
            </p>

            <p>
              We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in which we collect, use, disclose, store, secure and dispose of your Personal Information.
            </p>

            <p>
              A copy of the Australian Privacy Principles may be obtained from the website of The Office of the Australian Information Commissioner at{" "}
              <a href="https://www.oaic.gov.au/" className="text-[#4ecdc4] hover:underline" target="_blank" rel="noopener noreferrer">
                https://www.oaic.gov.au/
              </a>
              .
            </p>

            <div className="flex items-center gap-4 mt-8 mb-4">
              <Lock className="w-6 h-6 text-[#4ecdc4]" />
              <h2 className="text-2xl font-semibold">What is Personal Information and why do we collect it?</h2>
            </div>

            <p>
              Personal Information is information or an opinion that identifies an individual. Examples of Personal Information we collect includes email addresses.
            </p>

            <p>
              We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing. We may also use your Personal Information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure. You may unsubscribe from our mailing/marketing lists at any time by contacting us in writing.
            </p>

            <div className="flex items-center gap-4 mt-8 mb-4">
              <FileText className="w-6 h-6 text-[#4ecdc4]" />
              <h2 className="text-2xl font-semibold">Disclosure of Personal Information</h2>
            </div>

            <p>
              Your Personal Information may be disclosed in a number of circumstances including the following:
            </p>
            <ul className="list-disc list-inside ml-4">
              <li>Third parties where you consent to the use or disclosure; and</li>
              <li>Where required or authorised by law.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How do we protect your personal information?</h2>
            <p>
              Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorized access, modification or disclosure.
            </p>
            <p>
              When your Personal Information is no longer needed for the purpose for which it was obtained, we will take reasonable steps to destroy or permanently de-identify your Personal Information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How we use your personal information</h2>
            <h3 className="text-xl font-semibold mt-6 mb-2">What are the main reasons we collect, hold and use your information?</h3>
            <p>
              Collecting your personal information allows us to provide you with the products and services you've asked for.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Can we use your information for marketing our products and services?</h3>
            <p>
              We may use or disclose your personal information to let you know about other products or services we make available and that may be of interest to you.
            </p>
            <p>
              We will always let you know that you can opt-out from receiving marketing offers.
            </p>
            <p>
              We won't sell your personal information to any organisation.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">You Can Opt-Out</h2>
            <p>
              You can let us know at any time if you no longer wish to receive direct marketing offers from us. We will process your request as soon as practicable.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Access to your Personal Information</h2>
            <p>
              You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us in writing.
            </p>
            <p>
              MyGroupGo will not charge any fee for your access request, but may charge an administrative fee for providing a copy of your Personal Information.
            </p>
            <p>
              In order to protect your Personal Information we may require identification from you before releasing the requested information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Maintaining the Quality of your Personal Information</h2>
            <p>
              It is an important to us that your Personal Information is up to date. We will take reasonable steps to make sure that your Personal Information is accurate, complete and up-to-date. If you find that the information we have is not up to date or is inaccurate, please advise us as soon as practicable so we can update our records and ensure we can continue to provide quality services to you.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Policy Updates</h2>
            <p>
              This Policy may change from time to time and is available on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;