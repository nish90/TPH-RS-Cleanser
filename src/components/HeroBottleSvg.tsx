import React from "react";

export default function HeroBottleSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="235 84 210 372"
      width="100%"
      height="100%"
      className={className}
      role="img"
      aria-label="The Pure Herb matte black squeeze bottle with cream label"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block" }}
    >
      {/* Bottle (centered at x=340, matte black squeeze bottle with flip-top cap) */}
      {/* Neck */}
      <rect x="318" y="136" width="44" height="30" fill="#1F1B19" />

      {/* Flip-top cap */}
      <rect x="306" y="98" width="68" height="38" rx="6" fill="#141414" />
      {/* Small nozzle on top */}
      <rect x="332" y="88" width="16" height="12" rx="3" fill="#141414" />
      {/* Thin seam line at y=116 */}
      <line x1="306" y1="116" x2="374" y2="116" stroke="#2B2B2B" strokeWidth="1" />
      {/* Gold band at the bottom of the cap */}
      <rect x="306" y="132" width="68" height="4" fill="#A8842C" />

      {/* Bottle Body */}
      <rect x="250" y="160" width="180" height="292" rx="32" fill="#1F1B19" />
      {/* Vertical highlight strip on the left */}
      <rect x="260" y="184" width="8" height="240" rx="4" fill="#2E2825" />

      {/* Label (cream paper on the bottle) */}
      <rect
        x="262"
        y="185"
        width="156"
        height="247"
        rx="4"
        fill="#F8F3E6"
        stroke="#D8CDB0"
        strokeWidth="0.6"
      />

      {/* Label Typography and Details */}
      <g style={{ fontFamily: "Georgia, serif" }}>
        {/* Brand Name */}
        <text
          x="340"
          y="208"
          textAnchor="middle"
          fontSize="11.5"
          fontWeight="600"
          letterSpacing="2"
          fill="#9E7B28"
        >
          THE PURE HERB
        </text>

        {/* Ornament at y=222 */}
        <line x1="298" y1="222" x2="330" y2="222" stroke="#A8842C" strokeWidth="0.8" />
        <path
          d="M 333 222 C 336 216 344 216 347 222 C 344 228 336 228 333 222 Z"
          fill="#4E6B3A"
        />
        <line x1="350" y1="222" x2="382" y2="222" stroke="#A8842C" strokeWidth="0.8" />

        {/* Botanical Ingredients */}
        <text
          x="340"
          y="252"
          textAnchor="middle"
          fontSize="15"
          fontWeight="bold"
          letterSpacing="0.8"
          fill="#1F281B"
        >
          REETHA · AMLA
        </text>
        <text
          x="340"
          y="273"
          textAnchor="middle"
          fontSize="15"
          fontWeight="bold"
          letterSpacing="0.8"
          fill="#1F281B"
        >
          SHIKAKAI
        </text>
        <text
          x="340"
          y="292"
          textAnchor="middle"
          fontSize="12"
          fontStyle="italic"
          fontWeight="500"
          fill="#947424"
        >
          + 8 more herbs
        </text>

        {/* Product Name (comfortably fitted inside the label with generous margins) */}
        <text
          x="340"
          y="332"
          textAnchor="middle"
          fontSize="12.5"
          fontWeight="bold"
          letterSpacing="1"
          fill="#1F281B"
        >
          HAIR CLEANSER
        </text>

        {/* Divider Line */}
        <line x1="296" y1="366" x2="384" y2="366" stroke="#D8CDB0" strokeWidth="0.8" />

        {/* Bottom Purity Attributes */}
        <text
          x="340"
          y="394"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="#1F281B"
        >
          Zero preservatives
        </text>
        <text
          x="340"
          y="415"
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="#3E5C2C"
        >
          Keep refrigerated
        </text>
      </g>
    </svg>
  );
}
