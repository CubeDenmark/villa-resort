export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 text-center max-w-md w-full">
        <h1 className="text-2xl font-semibold text-green-600 mb-2">
          Message Sent!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for contacting us. We’ll get back to you soon.
        </p>

        <a
          href="/villa-resort"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition"
        >
          Go Back Home
        </a>
      </div>
    </main>
  );
}
