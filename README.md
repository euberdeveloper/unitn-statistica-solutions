# [unitn-statistica-solutions](https://unitn-statistica-solutions.herokuapp.com/)
A site where official solutions of unitn-informatica statistic course are published soon after they are available.

__link to the site:__ [unitn-statistica-solutions](https://unitn-statistica-solutions.herokuapp.com/)

## Project purpose:
People were fed up with waiting for the statistic solutions. The teacher said he would have published them soon after they were available, but that did not happen. By inspecting his site I noticed a way to find the url where they were saved, so I downloaded them all and developed this site which allows you to see them right now. From time to time I will update the site with new solutions.
<br/><br/>**Update:** Since now solutions are officially available, the site will be no more mantained.

## How it was made:
The site was made using a **NodeJS** server hosted in **Heroku**. **Materialize css** has been used for the style and **pug** as the markup template. The solutions are pure **html**, downloaded from the teacher's site.

## A little preview

![Part of the site preview](https://github.com/euberdeveloper/unitn-statistica-solutions/blob/master/doc/soluzioni_screen.png)


## Project structure:

Made with [dree](https://github.com/euberdeveloper/dree)

```
unitn-statistica-solutions
 ├─> doc
 │   └── soluzioni_screen.png
 ├── LICENSE
 ├── package-lock.json
 ├── package.json
 ├── Procfile
 ├── README.md
 ├─> src
 │   ├── main.ts
 │   ├─> public
 │   │   ├─> icons
 │   │   │   └── favicon.ico
 │   │   ├─> images
 │   │   │   ├── ago.png
 │   │   │   └── ago.webp
 │   │   ├─> scripts
 │   │   │   └── index.js
 │   │   ├─> solutions
 │   │   │   ├── 27-03-2019.html
 │   │   │   └── 28-03-2019.html
 │   │   └─> styles
 │   │       └── index.css
 │   ├─> utilities
 │   │   ├── redirect.ts
 │   │   └── solutions.ts
 │   └─> views
 │       └── index.pug
 └── tsconfig.json
```
