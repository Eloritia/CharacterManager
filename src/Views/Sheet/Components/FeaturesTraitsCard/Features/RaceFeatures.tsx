import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import "../featurestraits.css";
import {
	faChevronDown,
	faChevronLeft,
	faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/esm/Modal";
import TraitModal from "../TraitModal/TraitModal";

const mapStateToProps = (state: any) => {
	return {};
};

const mapDispatchToProps = (dispatch: any) => ({});
const RaceFeatures = (props) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [trait, setTrait] = React.useState(null);
	const [expanded, setExpanded] = React.useState(null);
	const openTraitModal = (t: any) => {
		setTrait(t);
		setIsOpen(true);
	};
	const modifyTrait=(newTrait)=>{
		console.log(newTrait);
		props.editTrait(newTrait,"racial");
	}
	return (
		<>
			{expanded ? (
				<>
					<div
						className="row StatCube"
						style={{ background: "#E4BDB4" }}
						onClick={() => {
							setExpanded(false);
						}}
					>
						<div className="col-10"> {props.trait.name} </div>
						<div
							className="col-2"
							style={{ float: "right", textAlign: "right" }}
						>
							<div className="icon">
								<FontAwesomeIcon icon={faChevronDown} />
							</div>
						</div>
					</div>
					<div className="row StatCubesmall">
						{props.trait.description}
						<p />
						<div
							className="icon"
							onClick={() => {
								openTraitModal(props.trait);
							}}
						>
							<FontAwesomeIcon icon={faInfoCircle} />
						</div>
					</div>
				</>
			) : (
				<div
					className="row StatCube"
					onClick={() => {
						setExpanded(true);
					}}
				>
					<div className="col-10"> {props.trait.name} </div>
					<div className="col-2" style={{ float: "right", textAlign: "right" }}>
						<div className="icon">
							<FontAwesomeIcon icon={faChevronLeft} />
						</div>
					</div>
				</div>
			)}

			<Modal
				show={isOpen}
				size="sm"
				onHide={() => setIsOpen(false)}
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Body bsPrefix="modalContentCard">
					<TraitModal trait={trait} onEditTrait={modifyTrait} 
					deleteTrait={()=>{setIsOpen(false);
						setExpanded(false);
						props.deleteTrait("racial",trait)}}/>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(RaceFeatures);
