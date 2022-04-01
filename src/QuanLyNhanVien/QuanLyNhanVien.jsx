import React, { Component } from "react";
import ModalQuanLyNhanVien from "./ModalQuanLyNhanVien";
import DanhSachNhanVien from "./DanhSachNhanVien";

export default class QuanLyNhanVien extends Component {
  render() {
    return (
      <div className=" my-5">
        <h1 className="text-center text-5xl font-bold underline">
          Quản Lý Nhân Viên
        </h1>
        <ModalQuanLyNhanVien />
        <DanhSachNhanVien />
      </div>
    );
  }
}
