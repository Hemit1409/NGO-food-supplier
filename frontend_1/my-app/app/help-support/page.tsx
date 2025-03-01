"use client"

import React, { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

export default function HelpSupport() {
  const faqs: FAQ[] = [
    {
      question: "How do I use this platform?",
      answer: "You can use this platform to donate food, track donations, and connect with NGOs. Simply sign up, log in, and navigate through the sidebar to access different features. Our platform is designed to be user-friendly and intuitive."
    },
    {
      question: "How do I add a donation?",
      answer: "To add a donation, go to the 'Add Donation' page from the sidebar. Fill in the required details such as the type of food, quantity, and pick-up location. Once submitted, your donation will be listed for NGOs to view."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact support by emailing support@example.com or calling 123-456-7890. Our support team is available from 9 AM to 6 PM, Monday to Friday. We aim to respond to all queries within 24 hours."
    },
    {
      question: "How do I track my donations?",
      answer: "You can track your donations by going to the 'Tracking' page available in the sidebar. This page provides real-time updates on the status of your donations, including pick-up and delivery information."
    },
    {
      question: "Can I edit my donation after submission?",
      answer: "Yes, you can edit your donation details by visiting the 'My Donations' page. Select the donation you wish to edit and update the necessary details. Make sure to save your changes once you're done."
    },
    {
      question: "How do I delete my account?",
      answer: "To delete your account, please contact support@example.com with your request. Our support team will guide you through the process and ensure that your data is securely removed from our system."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take data security very seriously. We implement various measures to protect your information, including encryption, secure servers, and regular security audits. Your privacy is our top priority."
    }
  ]

  const [userQuestion, setUserQuestion] = useState("")
  const [userEmail, setUserEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:abc@gmail.com?subject=Help%20Request&body=Email:%20${encodeURIComponent(
      userEmail
    )}%0D%0AQuestion:%20${encodeURIComponent(userQuestion)}`
    window.location.href = mailtoLink
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center text-green-700">Help & Support</h1>
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center text-green-600">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-green-50 p-4 rounded-lg shadow-md">
                <summary className="font-medium text-lg cursor-pointer text-green-800">{faq.question}</summary>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-6 text-center text-green-600">Submit Your Question</h2>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md max-w-lg mx-auto border border-green-200">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
              />
            </div>
            <div>
              <label htmlFor="question" className="block text-sm font-medium text-gray-700">
                Your Question
              </label>
              <textarea
                id="question"
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm p-2"
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}