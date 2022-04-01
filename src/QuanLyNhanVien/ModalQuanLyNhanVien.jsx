import React, { Component } from "react";
import { Modal, Button } from "antd";
import { connect } from "react-redux";
import { nhanVienService } from "./axios/nhanVienService";
import { ADD_NV, DELETE_NV } from "./reducer/constants/quanLyNhanVienConstant";
import swal from "sweetalert";

class ModalQuanLyNhanVien extends Component {
  state = {
    isModalVisible: false,
    newNV: {
      name: "",
      job: "",
      sdt: "",
    },
  };
  handleOnChange(e) {
    this.setState({
      newNV: { ...this.state.newNV, [e.target.name]: e.target.value },
    });
  }
  showModal = () => {
    // setIsModalVisible(true);
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    // setIsModalVisible(false);
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    // setIsModalVisible(false);
    this.setState({ isModalVisible: false });
  };
  addNV = () => {
    nhanVienService
      .NhanVienAdd(this.state.newNV)
      .then(() => {
        return swal("Chúc mừng", "Bạn đã đăng ký thành công! ", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="py-5 text-center">
        <Button type="primary" onClick={this.showModal}>
          Thêm Nhân Viên
        </Button>
        <Modal
          title="Thêm Nhân Viên"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name"
                >
                  Tên
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  name="name"
                  onChange={(e) => {
                    this.handleOnChange(e);
                  }}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="job"
                >
                  Nghề nghiệp
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="job"
                  type="text"
                  placeholder="Global Web Designer"
                  name="job"
                  onChange={(e) => {
                    this.handleOnChange(e);
                  }}
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="phone"
                >
                  SĐT
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="phone"
                  type="text"
                  placeholder="403-229-0660"
                  name="phone"
                  onChange={(e) => {
                    this.handleOnChange(e);
                  }}
                />
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3" />
              <div className="md:w-2/3">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={() => {
                    this.props.themNhanVien(this.state.newNV);
                    this.addNV();
                  }}
                >
                  Đăng Ký
                </button>
              </div>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    themNhanVien: (data) => {
      dispatch({
        type: ADD_NV,
        payload: data,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ModalQuanLyNhanVien);
