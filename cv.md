# Ksenia Sychova

## Contacts

**LinkedIn:** <https://www.linkedin.com/in/kseniasychova/>

**GiitHub:** <https://github.com/mlichlundia>

**Email:** <mlichlundiapl@gmail.com>

**Phone:** +48571380901

## Summary

I started to learn frontend development with my mentor. I think such way of learning helps me to understand more about working in company. Our mentoring program increases my knowledge with the most important and modern Frontend technologies. And **just six months later** I had my first commercial project.

I am looking for a company that will give me friendly enviroment in which i will increase my knowledge in creating large-scale applications.

## Skills

- JavaScript (functional, object-oriented programming, fundamentals, async JS, DOM, Rest API)
- React (+React Hooks)
- Redux
- HTML
- CSS
- Libraries: axios, reactRouter, immer, react-beautiful-dnd, react-hook-form
- VCS: Git (GitHub)
- npm
- Large experience with Figma

## Code Example

_It's not latest, but favourite. Here are 2 approaches to sorting a list by the first letter: using Map() and using Object._

      const Data = [
        'Zakary Pacheco',
        'Phillippa Hodge',
        'Reon Douglas',
        'Marco Bassett',
        'Vinny Holcomb',
        'Amanpreet Gillespie',
        'Eman Britton',
        'Tonicha Fernandez',
        'Tonya Buchanan',
        'Donnell Whiteley',
        'Zane Gross',
        'Angela Ware',
        'Renzo Owen',
        'Farah Dodd',
        ]

        Data.sort()

        let map = new Map()
        for (let contact of Data) {
            if (map.has(contact[0])) {
            map.set(contact[0], map.get(contact[0]).concat(contact))
            } else map.set(contact[0], [contact])
        }
        // for(let e of map.entries()) {
        //   console.log(e)
        // }


        let obj = {}
        for (let contact of Data) {
            if (obj.hasOwnProperty(contact[0])) {
            obj.[contact[0]].push(contact)
            } else {
            obj.[contact[0]] = [contact]
            }
        }
        // console.log(obj)

## Experience

1. [Scrum Board](https://mlichlundia.github.io/scrum_board/#/login) — it's a web client built with React which **communicates with mock back-end server**. During development I have improved my understanding of React. _[Source code](https://github.com/mlichlundia/scrum_board)_
2. [NFT Art](https://mlichlundia.github.io/nft-art/#/home) — it's my first **commercial project**. There was an intersting task to make open-photo animation that introduced in the main page in desktop version of the app. Take a look!

## Education

Belarusian State University of Informatics and Radioelectronics

**Frontend:**

- HTML, CSS — [w3shools.com](https://www.w3schools.com/)
- JavaScript — [lear.javascript.ru](https://learn.javascript.ru/) _(as base)_, numerous of video courses, constant calls with mentor
- React — [reactjs.org](https://reactjs.org/docs/getting-started.html)

## Language

- English: B1 (intermediate), I was learning it at school, for 2 years at the university, and now I learn it on my own
- Russian: native
