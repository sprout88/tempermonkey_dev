// ==UserScript==
// @name         Test Dev 1
// @namespace    http://tampermonkey.net/
// @version      0.2.0
// @description  test
// @author       BACKST4B
// @match        *://www.naver.com/*
// @icon         https://www.google.com/s2/favicons?domain=naver.com//
// @grant        none
// @run-at       document-start
// ==/UserScript==


let espEnabled = true;
let aimbotEnabled = true;
let showLines = true;
let aimbotOnRightMouse = false;

const temp = document.createElement( 'div' );

temp.innerHTML = `<style>

.info {

	position: fixed;
	left: 10%;
	top: 20%;
	padding: 5px;
	background: rgba(0, 0, 0, 0.8);
	border: 6px solid rgba(0, 0, 0, 0.2);
	color: #fff;
	transform: translate(-50%, -50%);
	text-align: center;
	z-index: 999999;
	font-weight: bolder;
}

.info * {
	color: #fff;
}

.btn {
	cursor: pointer;
	padding: 0.5em;
	background: red;
	border: 3px solid rgba(0, 0, 0, 0.2);
}

.btn:active {
	transform: scale(0.8);
}

.msg {
	position: absolute;
	top : 10%;
	left: 10%;
	color: #fff;
	background: rgba(0, 0, 0, 0.6);
	font-weight: bolder;
	padding: 15px;
	animation: msg 0.5s forwards, msg 0.5s reverse forwards 3s;
	z-index: 999999;
	pointer-events: none;
}

@keyframes msg {
	from {
		transform: translate(-120%, 0);
	}

	to {
		transform: none;
	}
}

</style>
<div class="msg" style="display: none;"></div>
<div class="info">
	<big>자동수강신청</big>
	<br>
	<button class="btn" type="button">신청하기1</button>
	<br>
	<button class="btn" type="button">신청하기2</button>
	<br>
	<button class="btn" type="button">신청하기3</button>
    <h3>BACKSTAB</h3>
    해킹 연구회에 참여하세요
</div>`;


const msgEl = temp.querySelector( '.msg' );
const infoEl = temp.querySelector( '.info' );

window.addEventListener( 'DOMContentLoaded', async function () {

	while ( temp.children.length > 0 ) {

		document.body.appendChild( temp.children[0] );

	}
} );