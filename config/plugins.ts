module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_TPL2Z47E7M9cRKQB7fAGCxJRUfNa/ECiHkih2AD",
      apiToken:
        "https://api.vercel.com/v1/integrations/deploy/prj_TPL2Z47E7M9cRKQB7fAGCxJRUfNa/ECiHkih2AD",
      appFilter: "hydra-cms",
      teamFilter: "karapincha-studio",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
