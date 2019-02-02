import React, { Component } from "react";
import { saveAs } from "file-saver";
import createPdf from "../apis/createPdf";

class App extends Component {
  state = {
    name: "",
    receiptId: 0,
    price1: 0,
    price2: 0
  };

  onChangeHandler = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  createAndDownloadPdf = async () => {
    await createPdf.post("/create-pdf", this.state);
    const result = await createPdf.get("/fetch-pdf", { responseType: "blob" });
    const pdfBlob = new Blob([result.data], { type: "application/pdf" });
    saveAs(pdfBlob, "newPdf.pdf");
  };

  render() {
    return (
      <div>
        <h2>PDF Generator App Client!</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={this.onChangeHandler}
          value={this.state.name}
          autoComplete="off"
        />
        <input
          type="number"
          placeholder="Receipt ID"
          name="receiptId"
          onChange={this.onChangeHandler}
          value={this.state.receiptId}
        />
        <input
          type="number"
          placeholder="Price 1"
          name="price1"
          onChange={this.onChangeHandler}
          value={this.state.price1}
        />
        <input
          type="number"
          placeholder="Price 2"
          name="price2"
          onChange={this.onChangeHandler}
          value={this.state.price2}
        />
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
}

export default App;
