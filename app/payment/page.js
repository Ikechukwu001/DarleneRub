'use client';
import { useState } from 'react';
import { Copy, Check, Bitcoin, Wallet, Shield, Clock } from 'lucide-react';

export default function PaymentPage() {
  const [copiedBTC, setCopiedBTC] = useState(false);
  const [copiedETH, setCopiedETH] = useState(false);

  const btcAddress = '3Ei2CLgA9tXQ9okHKTxwUnt8VcpRUBHHRo';
  const ethAddress = '0x0e67715B362A130ee7dffa7029F5CDc2Cc50ad0e';

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      if (type === 'BTC') {
        setCopiedBTC(true);
        setTimeout(() => setCopiedBTC(false), 2000);
      } else {
        setCopiedETH(true);
        setTimeout(() => setCopiedETH(false), 2000);
      }
    });
  };

  return (
    <section className="w-full bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        {/* Heading with underline */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 inline-block">
            Payment Information
          </h1>
          <div className="w-24 h-1 bg-accent rounded-full mt-2"></div>
        </div>

        {/* Description paragraph */}
        <p className="text-lg text-muted-foreground max-w-3xl mb-16 leading-relaxed">
          We accept cryptocurrency payments for your convenience and privacy. Simply send your 
          payment to one of the addresses below and contact us with your transaction details to 
          confirm your booking.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Bitcoin Payment Card */}
          <div className="bg-background rounded-lg shadow-lg overflow-hidden border border-muted-foreground/20">
            <div className="bg-linear-to-r from-orange-500/90 to-orange-600/90 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Bitcoin className="w-8 h-8" />
                <h2 className="text-2xl font-serif font-bold">Bitcoin (BTC)</h2>
              </div>
              <p className="text-white/90">Secure cryptocurrency payment</p>
            </div>

            <div className="p-6">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Send your Bitcoin payment to the address below. Click to copy the address:
              </p>

              {/* Address display - clickable */}
              <div
                onClick={() => copyToClipboard(btcAddress, 'BTC')}
                className="bg-muted/50 rounded-lg p-4 mb-4 cursor-pointer hover:bg-muted transition-colors border border-muted-foreground/20"
              >
                <p className="text-foreground font-mono text-sm break-all leading-relaxed">
                  {btcAddress}
                </p>
              </div>

              {/* Copy button */}
              <button
                onClick={() => copyToClipboard(btcAddress, 'BTC')}
                className="w-full py-3 px-6 bg-accent text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {copiedBTC ? (
                  <>
                    <Check className="w-5 h-5" />
                    Address Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy BTC Address
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Ethereum Payment Card */}
          <div className="bg-background rounded-lg shadow-lg overflow-hidden border border-muted-foreground/20">
            <div className="bg-linear-to-r from-blue-500/90 to-purple-600/90 p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Wallet className="w-8 h-8" />
                <h2 className="text-2xl font-serif font-bold">Ethereum (ETH)</h2>
              </div>
              <p className="text-white/90">Fast and reliable payment method</p>
            </div>

            <div className="p-6">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Send your Ethereum payment to the address below. Click to copy the address:
              </p>

              {/* Address display - clickable */}
              <div
                onClick={() => copyToClipboard(ethAddress, 'ETH')}
                className="bg-muted/50 rounded-lg p-4 mb-4 cursor-pointer hover:bg-muted transition-colors border border-muted-foreground/20"
              >
                <p className="text-foreground font-mono text-sm break-all leading-relaxed">
                  {ethAddress}
                </p>
              </div>

              {/* Copy button */}
              <button
                onClick={() => copyToClipboard(ethAddress, 'ETH')}
                className="w-full py-3 px-6 bg-accent text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {copiedETH ? (
                  <>
                    <Check className="w-5 h-5" />
                    Address Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy ETH Address
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Payment Instructions */}
        <div className="bg-muted/50 rounded-lg p-8 md:p-10 shadow-lg mb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-3 inline-block">
              How to Complete Your Payment
            </h2>
            <div className="w-24 h-1 bg-accent rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-accent">1</span>
              </div>
              <h3 className="text-foreground font-bold mb-2">Copy Address</h3>
              <p className="text-muted-foreground leading-relaxed">
                Click the copy button or tap the address to copy your preferred cryptocurrency wallet address.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-accent">2</span>
              </div>
              <h3 className="text-foreground font-bold mb-2">Send Payment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Open your crypto wallet and send the exact amount for your selected service to the copied address.
              </p>
            </div>

            <div className="flex flex-col items-start">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-accent">3</span>
              </div>
              <h3 className="text-foreground font-bold mb-2">Confirm Booking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Contact us with your transaction ID and booking details to confirm your appointment.
              </p>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-background rounded-lg shadow-lg p-8 border border-muted-foreground/20 mb-16">
          <h3 className="text-xl font-serif font-bold text-foreground mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-accent" />
            Important Payment Information
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-foreground font-bold mb-1">Transaction Confirmation Time</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Bitcoin transactions typically take 10-30 minutes to confirm. Ethereum transactions are usually confirmed within 2-5 minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-foreground font-bold mb-1">Security & Privacy</h4>
                <p className="text-muted-foreground leading-relaxed">
                  All transactions are secure and anonymous. We never share your payment information with third parties.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="text-foreground font-bold mb-1">Booking Confirmation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  After your payment is confirmed, we'll reach out within 24 hours to finalize your appointment details.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-linear-to-r from-accent/90 to-accent rounded-lg p-8 md:p-12 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
            Need Help with Your Payment?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            Our team is here to assist you. Contact us if you have any questions or need 
            support completing your transaction.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="px-10 py-4 bg-white text-accent font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
          >
            Contact Support
          </button>
        </div>

        {/* Pricing Reference */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground leading-relaxed">
            Not sure about pricing? <a href="/pricing" className="text-accent hover:underline font-bold">View our pricing page</a> to see all available packages.
          </p>
        </div>
      </div>
    </section>
  );
}