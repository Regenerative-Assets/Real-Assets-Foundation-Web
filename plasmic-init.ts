import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { AwesomeButton } from "./components/AwesomeButton";
import { TeamMemberCard } from "./components/TeamMemberCard";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "jKoNqQf9yT8Pn9RBFtbwnS",
      token: "Zzk0dJVRGUEQX2QbI0VZn2z8lEIDORh76XfHJWBITlBXmRj7JYEjnbZaAEfxiyq1nnVHS91ExM4MDbwNEKfThw",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
// Register AwesomeButton component
PLASMIC.registerComponent(AwesomeButton, {
  name: "AwesomeButton",
  props: {
    text: {
      type: "string",
      defaultValue: "Click me!",
      description: "Button text"
    },
    variant: {
      type: "choice",
      options: ["primary", "secondary", "success"],
      defaultValue: "primary",
      description: "Button style variant"
    },
    onClick: {
      type: "eventHandler",
      description: "Triggered when button is clicked",
      argTypes: []  // ← ADD THIS LINE
    }
  },
  importPath: "./components/AwesomeButton",
});

// Register TeamMemberCard component
PLASMIC.registerComponent(TeamMemberCard, {
  name: "TeamMemberCard",
  props: {
    name: {
      type: "string",
      defaultValue: "Team Member",
      description: "Team member's name"
    },
    title: {
      type: "string",
      defaultValue: "Position",
      description: "Team member's job title or role"
    },
    shortBio: {
      type: "string",
      defaultValue: "Short bio goes here",
      description: "Brief bio shown on the card (2-3 sentences)"
    },
    fullBio: {
      type: "richText",
  
    },
    imageUrl: {
      type: "imageUrl",
      defaultValue: "",
      description: "URL to team member's photo"
    },
    linkedIn: {
      type: "string",
      defaultValue: "",
      description: "LinkedIn profile URL"
    },
    twitter: {
      type: "string",
      defaultValue: "",
      description: "Twitter/X profile URL"
    },
    email: {
      type: "string",
      defaultValue: "",
      description: "Email address"
    },
    displayStyle: {
      type: "choice",
      options: ["modal", "card", "floating"],
      defaultValue: "modal",
      description: "How the expanded bio is displayed: modal (full overlay), card (expanded card), or floating (floating card)"
    }
  },
  importPath: "./components/TeamMemberCard",

});

