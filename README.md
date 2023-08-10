# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](screenshots/TTD-desktop(1440px).png)
![](screenshots/TTD-desktop(1440px)-highlight.png)
![](screenshots/TTD-mobile.png)

### Links

- Solution URL: [Git - dors001/TimeTrackingDashboard](https://github.com/dors001/TimeTrackingDashboard/tree/main/Time%20Tracking%20Dashboard)
- Live Site URL: [Time Tracking Dashboard](https://time-tracking-dashboard-ashen-iota.vercel.app/)

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Chakra-UI](https://chakra-ui.com/) - For styles

### What I learned

My goal is to get better with react in particular and coding in general.
This project had some styling challenges with box styling, but i'm satisfied with the end result.
There are a lot of things that i would do differently but the main one is to put a lot more emphasis on planning the architecture of the application before writing the code. That means to write or draw the building blocks of the design, make a list of the components that i would be making as well as the hooks.
That way i hope i'll have to make less changes while writing the actual code.

This projects are very enjoyable to do, they were frustrating at first but after doing a few of them the process is fun and very rewarding at the end.

What i'm really proud of is that i managed to generically render the individual tickets from the data.json file. I created two components, CardContainer.tsx and CardContent.tsx that have all the elements and property i need for one card, and finally i created a hook that map the cards according to the data in the json file.

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const useCards = (timeframe: string) => {
  if (timeframe.toLowerCase() === "daily") {
    return data.cards.map((c) => (
      <GridItem w="100%" h="245px">
        <CardContainer CardBgGradient={c.backgroundColor} CardImg={c.image}>
          <CardContent
            CardTitle={c.title}
            CardTimeFrames={{
              current: c.timeframes.daily.current,
              previous: c.timeframes.daily.previous,
            }}
          />
        </CardContainer>
      </GridItem>
    ));
  }
  // ... rest of code //
};
```

### Continued development

The main focus will be to put a lot more emphasis on planning the architecture of the application before writing the code. That means to write or draw the building blocks of the design, make a list of the components that i would be making as well as the hooks.
That way i hope i'll have to make less changes while writing the actual code.

Setting my sight on creating a more extansiable applicaion that uses more functional logic so i could get a better understanding on hooks.

### Useful resources

- [Get Data From Local Json](https://marketsplash.com/tutorials/react-js/how-to-fetch-data-from-json-file-in-react-js/#:~:text=JSON%20files%20can%20be%20imported,as%20dynamic%20content%20using%20JSX.) - This helped me to better understand how to fetch data from an external resource.
- [arrat.map() and array.filter](https://www.guvi.in/blog/how-to-render-an-array-of-objects-in-react/#:~:text=The%20most%20popular%20way%20to,help%20with%20debugging%20and%20performance.) - This clarify how to use the array.map() and array.filter(), that way i was able to fully understand how to build my hook and get a better grasp on how to handle information from an external source like data.json

## Author

- Frontend Mentor - [@dors001](https://www.frontendmentor.io/profile/dors001)
