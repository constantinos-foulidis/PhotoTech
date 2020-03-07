import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "./ExportTo.css";
import {
  ExcelExport,
  ExcelExportColumn
} from "@progress/kendo-react-excel-export";

class ExportExcel extends Component {
  _export;
  export = () => {
  
    this._export.save();
  };
  render() {
    return (
      <>
        <ExcelExport
          data={this.props.product}
          ref={exporter => (this._export = exporter)}
        >
          <ExcelExportColumn
            field="productDetail"
            title="Product Details"
            locked={true}
            width={200}
          />
          <ExcelExportColumn
            field="productCode"
            title="Product Code"
            width={350}
          />
          <ExcelExportColumn
            field="productCategory"
            title="Product Category"
            width={350}
          />
          <ExcelExportColumn
            field="productSubcategory"
            title="Product Subcategory"
            width={350}
          />
          <ExcelExportColumn
            field="productQuantity"
            title="Product Quantity"
            width={350}
          />
          <ExcelExportColumn
            field="productPosition"
            title="Product Position"
            width={350}
          />
          <ExcelExportColumn
            field="productOrder"
            title="Product Order"
            width={350}
          />
        </ExcelExport>
        <Button
          className="mb-3 rightPositioning "
          variant="info"
          onClick={this.export}
        >
          Εξαγωγή σε Excel
        </Button>
      </>
    );
  }
}
export default ExportExcel;
