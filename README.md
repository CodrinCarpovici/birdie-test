# Birdie Care Test App

This serves as the full-stack repository for the Birdie Care Test.

## The Challenge Was
*To Display the information to a family member*

## What I've achieved

I've made a scalable and responsive app with room for improvement in the scalability side of things. The information is clearly displayed using `ChartJS` and a simple `Table`. The client receives data from the endpoints I've made in the backend and currently displays it based on the `care_recipient_id`. It generates the links and respective pages dynamically based on this id. The styling of the pages follows that of the [Birdie Care Website](https://www.birdie.care/).

## Tech Stack Used

### Front end
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://v5.reactrouter.com/web/guides/quick-start)
- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Styled components](https://www.styled-components.com/)
- [Axios](https://axios-http.com/docs/intro)
- [ChartJS](https://www.chartjs.org/)

### Back end
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Improvements I could do for the App

- With more knowledge and time in `react-router -dom v6` I would've liked to implement another set of dynamically generated routes nested further in one of the components to allow for the `Table` and the `BarChart` components to be rendered based on `event_type` also and not only based of the `care_recipient_id` API response
- With that done I could've also ensured that the data gets rendered in a specific format based on what type of event the frontend receives(i.e. Line Chart, Pie Chart etc.)

## Things I've Learned

### Front end
- I have further expanded my understanding of API requests and improved on using `Axios` to achieve that goal.
- I have improved on my skills using `react-router-dom v6` and more of its core features such as how to generate routes dynamically.
- I've implemented `styled-components` to a better standard than in some of my previous projects
- This was my first time using `TypeScript` and I now have a better understanding on how types work and why they are useful

### Back end
- As this was my first time using ExpressJS and MySQL I have learned bits from everything
- I now know how to create static endpoints and also dynamic ones at a basic level
- How to make queries to the database
- Using conditions in SQL
- Creating a connection to a database