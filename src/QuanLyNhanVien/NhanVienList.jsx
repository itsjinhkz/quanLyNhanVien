import React, { Component } from "react";
import { connect } from "react-redux";
import swal from "sweetalert";
import { nhanVienService } from "./axios/nhanVienService";
import { DELETE_NV } from "./reducer/constants/quanLyNhanVienConstant";
import ModalUpdateNV from "./ModalUpdateNV";

class NhanVienList extends Component {
  tableFrom = () => {
    return <div></div>;
  };
  renderTable = () => {
    return this.props.data.map((nv) => {
      return (
        <tr key={nv.id}>
          <td>{nv.id}</td>
          <td>{nv.name}</td>
          <td>{nv.job}</td>
          <td>{nv.phone}</td>
          <td>
            {/* <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              onClick={() => {
                <ModalUpdateNV />;
              }}
            >
              Sửa
            </button> */}
            <ModalUpdateNV id={nv.id} data={this.props.data} />
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
              onClick={() => {
                nhanVienService
                  .NhanVienDelete(nv.id)
                  .then(() => {
                    return swal(
                      "Thành công",
                      "Bạn đã xóa nhân viên! ",
                      "success"
                    );
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                this.props.xoaNhanVien(nv.id);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <table className="mx-auto text-center" style={{ width: "80%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Nghề nghiệp</th>
            <th>SĐT</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>{this.renderTable()}</tbody>
      </table>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    data: state.quanLyNhanVienReducer.data,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    xoaNhanVien: (id) => {
      dispatch({
        type: DELETE_NV,
        payload: id,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NhanVienList);
