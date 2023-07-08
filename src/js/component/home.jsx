import React from "react";
import propTypes from "prop-types";
import ReactDOM from "react-dom";

//first component
const Home = (props) => {
	return (
		<div className="container bg-dark text-light d-flex justify-content-center">
			<div className="clock border rounded my-4 mx-2 p-3"><i className="fa-regular fa-clock"></i></div>
			<div className="sixth border rounded my-4 mx-2 p-3">{props.sixthDigit % 10}</div>
			<div className="fifth border rounded my-4 mx-2 p-3">{props.fifthDigit % 10}</div>
			<div className="fourth border rounded my-4 mx-2 p-3">{props.fourthDigit % 10}</div>
			<div className="third border rounded my-4 mx-2 p-3">{props.thirdDigit % 10}</div>
			<div className="second border rounded my-4 mx-2 p-3">{props.secondDigit % 10}</div>
			<div className="first border rounded my-4 mx-2 p-3">{props.firstDigit % 10}</div>
		</div>
	);
};

Home.propTypes = {
	firstDigit : propTypes.number, 
	secondDigit : propTypes.number, 
	thirdDigit : propTypes.number, 
	fourthDigit : propTypes.number, 
	fifthDigit : propTypes.number, 
	sixthDigit : propTypes.number, 
};

let counter = 0;

setInterval (function () {
	const sixth = Math.floor(counter/100000);
	const fifth = Math.floor(counter/10000);
	const fourth = Math.floor(counter/1000);
	const third = Math.floor(counter/100);
	const second = Math.floor(counter/10);
	const first = Math.floor(counter/1);
	console.log(sixth, fifth, fourth, third, second,  first,);
	counter ++;


	ReactDOM.render(
		<Home firstDigit = {first} secondDigit = {second} thirdDigit = {third} fourthDigit = {fourth} fifthDigit = {fifth} sixthDigit = {sixth}/>,
			document.querySelector('#app')
	);
}, 1000);


export default Home;
