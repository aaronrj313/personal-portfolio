import React from "react";
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import { siJavascript, siReact, siTypescript, siNodedotjs, siGithubactions,
	 siHtml5, siCss3, siBitbucket, siLaravel, siPhp, siVsco, siNpm, siRefinedgithub, siTailwindcss } from "simple-icons"; // Import icons directly

const slugs = ["siJavascript", "siNextdotjs"]; // Use the correct slug format

const icons = [
	siJavascript, siReact, siTypescript, siNodedotjs, siGithubactions, siBitbucket, siLaravel, siPhp, siNpm, siRefinedgithub, siHtml5, siCss3, siTailwindcss
  ].map((icon) =>
	renderSimpleIcon({
	  icon,
	  size: 100,
	  bgHex: "#ffffff", // Set a background color (optional)
      fallbackHex: "#007acc", // Set a fallback color (e.g., TypeScript blue)
	})
  );

  const IconCloud = () => {
	return (
	  <Cloud
	  options={{
		maxSpeed: 0.02,
        initial: [0.2, 0.1],
        animTiming: "Smooth",
        dragControl: false,
		noMouse: true,
	  }}>
		{icons}
		<a
		  href="https://emojipedia.org/globe-showing-americas/"
		  target="_blank"
		  rel="noopener noreferrer"
		>
		  <img
			height="42"
			width="42"
			alt="A globe"
			src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/globe-showing-americas_1f30e.png"
		  />
		</a>
	  </Cloud>
	);
  };
  
  export default IconCloud;
