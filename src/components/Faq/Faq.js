import React, {Component} from 'react';

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemPanel,
	AccordionItemButton,
} from 'react-accessible-accordion';

class Faq extends Component {

	render() {

		return (
			<div className="faq-area gray2-bg pt-105 pb-100">
				<div className="faq-img d-none d-md-block"
				     style={{backgroundImage: `url(${'assets/img/bg/bg13.jpg'})`}}></div>
				<div className="container-fluid">
					<div className="row">
						<div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-md-6 offset-md-6">
							<div className="question-collapse">
								<div className="faq-title">
									<h1>Free Quentily Ask <br/> Questions</h1>
								</div>
								<div className="accordion-wrapper">
									<Accordion className="accodion-style--1" preExpanded={'0'}>

										<AccordionItem uuid="0">
											<AccordionItemHeading>
												<AccordionItemButton>
													<h5>Why Do You Eat Orange Food?</h5>
												</AccordionItemButton>
											</AccordionItemHeading>
											<AccordionItemPanel>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
													ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
													aliquip exea commodo consequat aute irure aliquam quaerat.</p>
											</AccordionItemPanel>
										</AccordionItem>

										<AccordionItem uuid="1">
											<AccordionItemHeading>
												<AccordionItemButton>
													<h5>Why Orange Food Is The Best For Health?</h5>
												</AccordionItemButton>
											</AccordionItemHeading>
											<AccordionItemPanel>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
													ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
													aliquip exea commodo consequat aute irure aliquam quaerat.</p>
											</AccordionItemPanel>
										</AccordionItem>

										<AccordionItem uuid="2">
											<AccordionItemHeading>
												<AccordionItemButton>
													<h5>Good Food For Good Health?</h5>
												</AccordionItemButton>
											</AccordionItemHeading>
											<AccordionItemPanel>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
													eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
													ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
													aliquip exea commodo consequat aute irure aliquam quaerat.</p>
											</AccordionItemPanel>
										</AccordionItem>

									</Accordion>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Faq;