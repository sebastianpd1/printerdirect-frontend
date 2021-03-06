import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

class UpdateModalVip extends React.Component {
	render() {
		return (
			<div
				className="modal bg-dark"
				tabIndex="-1"
				role="dialog"
				style={{ display: this.props.show ? "inline-block" : "none" }}>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Editar informacion:</h5>
							{this.props.onClose ? (
								<button
									onClick={() => {
										this.props.onClose();
									}}
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							) : (
								""
							)}
						</div>
						{this.props.updateId !== null ? (
							<Context.Consumer>
								{({ store, actions }) => {
									return (
										<div className="modal-body">
											{/* ACA VA EL CONTENIDO DE LA MODAL */}
											<div className="row">
												<div className="col-6">
													<label htmlFor="item">Item:</label>
													<input
														type="text"
														className="form-control"
														name="item"
														value={store.printersFoundUpdate.item || ""}
														onChange={e => actions.handleChangeforUpdatePrinterInput(e)}
													/>
													<label htmlFor="brand">Marca:</label>
													<input
														type="text"
														className="form-control"
														name="brand"
														value={store.printersFoundUpdate.brand || ""}
														onChange={e => actions.handleChangeforUpdatePrinterInput(e)}
													/>
													<label htmlFor="category">Categoria:</label>
													<input
														type="text"
														className="form-control"
														name="category"
														value={store.printersFoundUpdate.category || ""}
														onChange={e => actions.handleChangeforUpdatePrinterInput(e)}
													/>
													<label htmlFor="condition">Condicion:</label>
													<input
														type="text"
														className="form-control"
														name="condition"
														value={store.printersFoundUpdate.condition || ""}
														onChange={e => actions.handleChangeforUpdatePrinterInput(e)}
													/>
													<label htmlFor="quantity">Cantidad:</label>
													<input
														type="text"
														className="form-control"
														name="quantity"
														value={store.printersFoundUpdate.quantity || ""}
														onChange={e => actions.handleChangeforUpdatePrinterInput(e)}
													/>
													<label htmlFor="price">Precio:</label>
													<input
														type="text"
														className="form-control"
														name="price"
														value={store.printersFoundUpdate.price || ""}
														onChange={e => actions.handleChangeforUpdatePrinterInput(e)}
													/>
												</div>
												<div className="col-6">
													<textarea
														type="text"
														name="description"
														value={store.printersFoundUpdate.description || ""}
														className="my-4 form-control"
														placeholder="Descripcion / Caracteristicas:"
														rows="10"
														cols="50"
														onChange={e => actions.handleChangeforUpdatePrinterInput(e)}
													/>
												</div>
											</div>
											<div className="modal-footer row">
												<button
													onClick={() => {
														actions.updateVip(
															store.printersFoundUpdate,
															this.props.updateId,
															this.props
														);
														this.props.onClose();
													}}
													className="btn btn-success m-1 btn-block">
													Actualizar
												</button>
											</div>
										</div>
									);
								}}
							</Context.Consumer>
						) : (
							<div className="container">
								<h1>NOT FOUND</h1>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	}
}
/**
 * Define the data-types for
 * your component's properties
 **/
UpdateModalVip.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	updateId: PropTypes.number
};

/**
 * Define the default values for
 * your component's properties
 **/
UpdateModalVip.defaultProps = {
	show: false,
	onClose: null,
	updateId: null
};
export default withRouter(UpdateModalVip);
