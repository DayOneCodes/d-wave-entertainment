function FAQSection () {
  return (
    <>
      <div class="w-full bg-[#130b16] py-20 px-4 md:px-10 lg:px-40 border-t border-[#332839]">
<div class="max-w-[800px] mx-auto flex flex-col gap-10">
<div class="text-center flex flex-col gap-2">
<h2 class="text-white text-3xl font-bold">Frequently Asked Questions</h2>
<p class="text-[#b09cba]">Common questions about bookings and events.</p>
</div>
<div class="flex flex-col gap-4">
<details class="group bg-[#231b27] rounded-lg border border-[#4c3b54] open:border-primary/50 transition-colors">
<summary class="flex cursor-pointer items-center justify-between p-6 list-none text-white font-medium text-lg">
<span>How far in advance should I book an artist?</span>
<span class="transition group-open:rotate-180">
<span class="material-symbols-outlined">keyboard_arrow_down</span>
</span>
</summary>
<div class="px-6 pb-6 text-[#b09cba] leading-relaxed">
                        We recommend booking at least 3-6 months in advance for major artists, especially during peak seasons (summer and holidays). However, we can sometimes accommodate last-minute requests depending on availability.
                    </div>
</details>
<details class="group bg-[#231b27] rounded-lg border border-[#4c3b54] open:border-primary/50 transition-colors">
<summary class="flex cursor-pointer items-center justify-between p-6 list-none text-white font-medium text-lg">
<span>Do you handle event production logistics?</span>
<span class="transition group-open:rotate-180">
<span class="material-symbols-outlined">keyboard_arrow_down</span>
</span>
</summary>
<div class="px-6 pb-6 text-[#b09cba] leading-relaxed">
                        Yes! Our team offers full-service event production, including sound, lighting, stage design, and on-site management to ensure your event runs smoothly from start to finish.
                    </div>
</details>
<details class="group bg-[#231b27] rounded-lg border border-[#4c3b54] open:border-primary/50 transition-colors">
<summary class="flex cursor-pointer items-center justify-between p-6 list-none text-white font-medium text-lg">
<span>What is your cancellation policy?</span>
<span class="transition group-open:rotate-180">
<span class="material-symbols-outlined">keyboard_arrow_down</span>
</span>
</summary>
<div class="px-6 pb-6 text-[#b09cba] leading-relaxed">
                        Our standard policy requires a 50% non-refundable deposit upon booking. Cancellations made more than 30 days prior to the event may be eligible for a partial refund of the remaining balance. Please refer to your specific contract for details.
                    </div>
</details>
<details class="group bg-[#231b27] rounded-lg border border-[#4c3b54] open:border-primary/50 transition-colors">
<summary class="flex cursor-pointer items-center justify-between p-6 list-none text-white font-medium text-lg">
<span>Can I submit a demo for artist management?</span>
<span class="transition group-open:rotate-180">
<span class="material-symbols-outlined">keyboard_arrow_down</span>
</span>
</summary>
<div class="px-6 pb-6 text-[#b09cba] leading-relaxed">
                        Absolutely. Please use the contact form above, select "Artist Management" as the inquiry type, and include a link to your portfolio or SoundCloud in the message body.
                    </div>
</details>
</div>
</div>
</div>

    </>
  )
}

export default FAQSection;