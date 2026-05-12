export default function Home() {
  const faqs = [
    {
      q: "Which AI providers are supported?",
      a: "Currently supports OpenAI. Anthropic and Cohere support is on the roadmap."
    },
    {
      q: "How are alerts delivered?",
      a: "You receive alerts via email and SMS when your spending crosses the thresholds you define."
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel anytime from your dashboard with no questions asked and no hidden fees."
    }
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          AI Cost Management
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Get alerts before prompt costs explode
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your OpenAI account and set spending budgets. We monitor your token usage in real-time and send email or SMS alerts the moment you approach your limits — before the bill surprises you.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start monitoring for $14/mo
        </a>
        <p className="mt-3 text-sm text-[#8b949e]">No credit card required to explore. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="border border-[#30363d] bg-[#161b22] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Real-time token usage monitoring</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Custom budget thresholds</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Email &amp; SMS alerts</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Multiple OpenAI API keys</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span>Usage history &amp; reports</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#30363d] bg-[#161b22] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{faq.q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
