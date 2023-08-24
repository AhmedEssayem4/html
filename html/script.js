@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Roboto:wght@100;300;500&display=swap");
:root {
  --Bg: #ffc0b2;
  --card-bg: #fff8e5;
  --red: red;
  --pink-heart: #ffc0b2;
  --mint-green: #edf6d3;
  --black: #000;
  --border-red: 8px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  background-image: url(./images/bg.png);
}
h1 {
  font-family: "Alfa Slab One", cursive;
}
button {
  border: transparent;
  padding: 5px;
}
.shadow {
  box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 5px 5px 0px 0px rgba(0, 0, 0, 1);
  border: 2px solid var(--black);
  border-radius: var(--border-red);
}
.shadow-btn {
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 1);
  border-radius: 5px;
  border: 1px solid black;
}
main {
  background-color: var(--card-bg);
  width: 60%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 2.5rem;
}
img {
  width: 120px;
}
/******layout *****/

.col {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/******single card***********/
.singleCard {
  display: grid;
  grid-template-columns: 2fr 5fr 1fr;
  padding: 1.5rem;
  gap: 1rem;
}
.quantity {
  display: flex;
  margin-top: 0.5rem;
}
.quantity input {
  width: 50px;
  text-align: center;
  background-color: var(--card-bg);
  border-color: transparent;
  font-family: inherit;
}

.quantity button {
  background-color: var(--card-bg);
  border: 1px solid var(--black);
}
.quantity svg {
  border: 1px solid var(--black);
  border-radius: var(--border-red);
}

.info > div {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);
}
.info h1 {
  margin-bottom: 1rem;
}
.info > div div {
  display: flex;
  justify-content: space-between;
  width: 80%;
}
.color {
  height: 40px;
  width: 40px;
  background-color: var(--Bg);
  border-radius: 50%;
  border: 1px solid var(--black);
}

/**********************btn-hundler****/
.btn-hundler {
  align-items: center;
}
.btn-hundler button {
  border: 1px var(--black) solid;
}
.delete {
  background-color: var(--mint-green);
}
.heart {
  background-color: inherit;
}
.hearted {
  background-color: var(--pink-heart);
  color: orange;
}
#total {
  display: flex;
  justify-content: space-between;
}
#total button {
  padding: 0.5rem 1rem;
}