const Contact = () => {
  return (
    <section id="contact" className="min-h-[40vh] flex flex-col items-center justify-center px-4 py-10">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-indigo-700 mb-4">Contact</h2>
            <p className="text-indigo-900 mb-8">Feel free to reach out for collaborations, questions, or just to say hello!</p>
            <form className="space-y-6">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <textarea placeholder="Your Message" className="w-full px-4 py-2 rounded border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" rows={4} />
            <button type="submit" className="w-full px-6 py-2 rounded bg-indigo-700 text-white font-semibold hover:bg-indigo-800 transition">Send</button>
            </form>
        </div>
    </section>
  );
};

export default Contact;
