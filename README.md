# Panthers Hall of Fame

* Domain: [Namecheap](https://www.namecheap.com/)
  * Matt's account
  * DNS for Github pages
* Hosting: [Github Pages](https://pages.github.com/)
  * Custom domain
    * [verified](https://github.com/settings/pages_verified_domains/panthershof.org) with DNS TXT record
  * Deploy via Github Action
    * Push to `main` or Contentful webhook
* Static site generator: [Astro](https://astro.build/)
  * Contentful keys in [Github secrets](https://github.com/mattdeclaire/panthershof/settings/secrets/actions)
* Content Management: [Contentful](https://www.contentful.com/)
  * [Space](https://app.contentful.com/spaces/azl47ny9bcj0)
  * [deploy webhook](https://app.contentful.com/spaces/azl47ny9bcj0/settings/webhooks/7J6LJhTRFhJwdMiTXLvqRS/activity-log)
    * [fine-grained Github PAT](https://github.com/settings/personal-access-tokens/3228673) from Matt (expires annually)
