import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://Sagar-portfolio.com",
      lastModified: new Date(),
    },
    {
      url: "https://Sagar-portfolio.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://Sagar-portfolio.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://Sagar-portfolio.com/blog",
      lastModified: new Date(),
    },
    {
      url: "https://Sagar-portfolio.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://Sagar-portfolio.com/resume",
      lastModified: new Date(),
    },
  ];
}
