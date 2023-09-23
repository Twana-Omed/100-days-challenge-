// import express from "express";

// const app = express();
// const port = 3000;

// app.get("/", (req ,res)=>{
//     const today = new Date();
//     const day = today.getDay();
//     // console.log(day);

//     let type ="a weekday";
//     let adv ="it's time to work hard";

//     if(day===0 |day===1){
//     type ="a weekend";
//     adv ="it's time to have fun";
//     }

//     res.render("index.ejs" ,
//      {dayType: "a weekday",
//       advice :"it's time to work hard"});
// });

// app.listen(port, (req,res)=>{
//     console.log(`the servers is runing on ${port}.`);
// });

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  //Test code
  // weekend:
  // new Date("June 24, 2023 11:13:00");
  // weekday:
  // new Date("June 20, 2023 11:13:00");
  const day = today.getDay();

  // console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});