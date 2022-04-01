import React, { Component } from "react";
import { nhanVienService } from "./axios/nhanVienService";
import { connect } from "react-redux";
import { GET_NV } from "./reducer/constants/quanLyNhanVienConstant";
import NhanVienList from "./NhanVienList";

class DanhSachNhanVien extends Component {
  componentDidMount() {
    nhanVienService
      .NhanVienList()
      .then((res) => {
        this.props.setNVLIST(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <NhanVienList />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setNVLIST: (dsnv) => {
      dispatch({
        type: GET_NV,
        payload: dsnv,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(DanhSachNhanVien);
