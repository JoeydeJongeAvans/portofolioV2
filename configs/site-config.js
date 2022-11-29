import React from "react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Joey de Jonge. All Rights Reserved.`,
  author: {
    name: "Joey de Jonge",
    accounts: [
      {
        url: "https://github.com/JoeydeJongeAvans",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://www.linkedin.com/in/joey-de-jonge/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      {
        url: "mailto:joey@vedr.nl",
        label: "Mail Joey",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
