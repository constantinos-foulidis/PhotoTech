import React, { Component } from "react";
import Button from "react-bootstrap/Button";
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
            field="nomos"
            title="Τοποθεσία"
            locked={true}
            width={200}
          />
          <ExcelExportColumn
            field="schoolName"
            title="Όνομα σχολείου "
            width={350}
          />
          <ExcelExportColumn
            field="sellerName"
            title="Πωλητές"
            width={350}
          />
          <ExcelExportColumn
            field="dinami"
            title="Δύναμη"
            width={350}
          />
          <ExcelExportColumn
            field="packetCost"
            title="Τιμή Πακέτου"
            width={350}
          />
          <ExcelExportColumn
            field="tmhmata"
            title="Τμήματα"
            width={350}
          />
          <ExcelExportColumn
            field="mobilePhone"
            title="Κινητό τηλεφωνο"
            width={350}
          />
          <ExcelExportColumn
            field="schoolPhone"
            title="Τηλέφωνο σχολείου"
            width={350}
          />
          <ExcelExportColumn
            field="afm"
            title="ΑΦΜ"
            width={350}
          />
          <ExcelExportColumn
            field="doy"
            title="ΔΟΥ"
            width={350}
          />
          <ExcelExportColumn
            field="email"
            title="email"
            width={350}
          />
          <ExcelExportColumn
            field="fax"
            title="ΦΑΞ"
            width={350}
          />
          <ExcelExportColumn
            field="ekprosopos_sillogou"
            title="Εκπρόσωπος συλλόγου"
            width={350}
          />
          <ExcelExportColumn
            field="headTeacher"
            title="Διευθυντής"
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
