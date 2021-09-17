# Students Auto

This app was created to showcase my ability to use a react library (Material UI) to build a clean and modern user interface site. This app was a concept and created to show users a variety of cars with specific infomration about said cars as if it was a car sales site such as AutoTrader but at a basic level.

#### Side note
-	FAQ and contact pages do not have any hyperlinks.

<br />

## What I Learnt
Retrieving the JSON car information from the data.js file made it easier for me to get car information to the slider.js file without having to enter everything onto the file multiple times. I have used this way of retrieving data from JSON objects when I was building a blogging page thus knowing how to implement it to this app.

I would say using built in react bootstrap does makes things easier as there is minimal need to use CSS at times for the rows or columns etc. I do like how straight forward it is as well to use, the navbar is what I like the most about react bootstrap as it is a responsive navbar that only needs a few tweaks here and there but overall great to reduce time consumption. The con that I have learnt creating this app is the reliance on the library and not using my own ability to create some of the code. 

My main focus along with the car slider was on using Material-UI for a majority of the app to show I can use this library when needed. I believe that I now understand and can implement Material-UI into many more future react projects. Using this library did make making this app easier without many issues occurring. 

With react I enjoy that I can create my own database that are stored as objects in the data.js file. There is no process of having to use an API key to gain access to an online API site or mess with endpoints it’s a simple call from the data.js file and use a const to call for the properties from the file array of the cars.

<br />

## Improvements for future features
- I would like to add a filter that gives the user an option of their age and the amount there willing to spend on a car and allow the filter to find the best matched car for them. 

- When planning this site, I was going to use an API from another site so I could extract cars with information to come with it such as the car picture, engine size etc. I thought that would be a lot of repetition plus I couldn’t find any API sites that contain any JSON car object data to extract to the app. Therefore, I used my own JSON data file to create car specifications and images. 

- I’m still new to SCSS and throughout this project I was starting to notice that my styling files was not as neat as before and files are not organised as well as they could be. I know that in the future I have to keep my styles clean so that others are able to read them.

- A comment section would be good to include. I have done this before but this was when I created a blog site. Doing this would give users the opportunity to write a comment and it stay for others to see. 

<br />

## Deployment
### PROJECT INSTALLATION
 * In this project directory you will need `node` and `npm` installed globally on your system.
 
1.	To **install** npm and node then in terminal run `npm install`
2.	To run test suite `npm test`
3.	To start the server `npm start`
4.	Once server is started view the app in ` http://localhost:3000/`

<br />

### MATERIAL UI INSTALLATION
- [material-ui](https://material-ui.com/getting-started/installation/)

<br />

install material-ui

    //with npm
     npm install @material-ui/core
     
     //with yarn
     yarn add @material-ui/core
     
<br />

### REACT-BOOTSTRAP INSTALLATION
- [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction)

<br />

install react-bootstrap

    npm install react-bootstrap bootstrap@4.6.0     

<br />

### AOS INSTALLATION
- [animate on scroll (aos)]( https://github.com/michalsnik/aos)

<br />

install aos

    //with npm
    npm install --save aos@next 

    //with yarn
    add aos@next
