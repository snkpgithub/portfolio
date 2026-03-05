import { Section } from "./Section";

const publications = [
  {
    title:
      "An Automatic Peak Finding and Fitting Aspects of Laser Induced Plasma Spectra acquired in High Vacuum: Tradeoff Simulations and Statistics",
    publisher: "IEEE",
    abstract:
      "Laser Induced Plasma Spectroscopy (LIPS) is a promising spectrochemical analytical method for rapid analysis of multi-element samples, and has become a potential field of both fundamental and exploratory research including the space science in recent times. Although the LIPS technique is highly versatile, its element detection capability at times is intriguing due to spectral peak overlapping that can hamper the elemental detection accuracy. This paper presents details on executed trade-off simulations and optimization of algorithm parameters that may aid for effective mitigation of spectral overlapping issues of LIPS spectra and precise peak finding. Four pelletized samples were used to acquire spectra in high vacuum (≤ 5×10⁻⁶ mbar) environment to mimic space-like conditions.",
    url: "https://ieeexplore.ieee.org/abstract/document/9865112",
  },
];

export function Publications() {
  return (
    <Section id="publications" label="publications">
      <div className="space-y-6">
        {publications.map((pub) => (
          <div
            key={pub.url}
            className="border border-border rounded-xl bg-surface/80 p-6 hover:border-accent/30 transition-colors"
          >
            <h3 className="text-lg font-semibold text-white mb-2 break-words">
              {pub.title}
            </h3>
            <p className="font-mono text-sm text-muted mb-3">{pub.publisher}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              {pub.abstract}
            </p>
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-accent hover:underline"
            >
              View on IEEE Xplore →
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
