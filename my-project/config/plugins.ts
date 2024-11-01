// export default () => ({});
module.exports = {
  
    'strapi-neon-tech-db-branches': {
      enabled: true,
      config: {
        neonApiKey: "pcf1f84lh3ql66pfs6vdv1lerfbh1fao98td58mld4fh5l9qqmphr2we4ncizo92", // get it from here: https://console.neon.tech/app/settings/api-keys
        neonProjectName: "coffer-commerce", // the neon project under wich your DB runs
        neonRole: "coffer-commerce_owner", // create it manually under roles for your project first
        gitBranch: "main"// branch can be pinned via this config option. Will not use branch from git then. Usefull for preview/production deployment
      }
    },
   
  }