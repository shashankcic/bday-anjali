import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CardColumnsWish from '../CardColumnsWish';
import './styles.css';

export default function ModalWish() {
	const [isOpen, setIsOpen] = useState(false);

	function handleOnClick() {
		setIsOpen(true);
	}

	function handleOnClose() {
		setIsOpen(false);
	}
	return (
		<div className="flex justify-center">
			<Button variant="primary" onClick={handleOnClick} className='modal-btn'>
        Toh Chalein?
      </Button>
      <Modal show={isOpen} onHide={handleOnClose} centered aria-labelledby="contained-modal-title-vcenter" size='lg' className=''>
        <div className='myModal'>
	        <Modal.Header closeButton className=''>
	          <h1 className='garamond f1 lh-title pa2 mb0'>Happy Birthday Anjali! 🎉🥳</h1>
	        </Modal.Header>
	        <Modal.Body className=''>
	        	<CardColumnsWish />
	        	<div className='flex justify-center'>
	        		<h1 className='garamond pa2 pt5 mb0'>Final Wishes</h1>
	        	</div>
	        	<h1 className='f4 lh-copy pa2 pb1'>Maaa, I know it's very late but maan le aaj tera birthday hai aur khush hojaaa! Mazaa aaya banane mein ye though, I hadn't planned ye wala part tbh but fir bas baaki sabki wishes pe khatam karne mein accha nahi lag raha tha mereko, apna naam rehna important hai! 😂</h1>
	        	<h1 className='f4 lh-copy pb4 pa2 pt1'>Ab what's there to say, ghum bhi liye, party bhi de di tu (tbh itni saari party pending hain toh I feel like I should take more waise), ab kya hi bolein. Well, ab ye ssurprise hi hai, a surprise which wasn't planned earlier and is given 8 days after your bday! 😂 Happpppyyyyyy Birthdayyyyy Againnnn Maaaa 🥳, Iss saal aage kuch galti hogi toh advance mein maafi (inevitable hai)! 😂</h1>
	        </Modal.Body>
        </div>
      </Modal>
		</div>
	);
}