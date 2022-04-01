import React, { Component } from "react";
import { Modal, Button } from "antd";
import swal from "sweetalert";

import { nhanVienService } from "./axios/nhanVienService";
import { connect } from "react-redux";
import { UPDATE_NV } from "./reducer/constants/quanLyNhanVienConstant";

class ModalUpdateNV extends Component {
  state = {
    data: [],
    isModalVisible: false,
    nhanVienDetail: {
      name: "",
      phone: "",
      job: "",
    },
  };
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
  showDetailNhanVien = () => {
    this.showModal();
    nhanVienService
      .NhanVienDetail(this.props.id)
      .then((user) => {
        this.setState({ nhanVienDetail: user.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  updateDetailNhanVien = () => {
    nhanVienService
      .NhanVienUpdate(this.props.id, this.state.nhanVienDetail)
      .then((res) => {
        nhanVienService
          .NhanVienList()
          .then((res) => {
            this.setState({ data: res.data });
            this.props.updateDetailNhanVien(this.state.data);
          })
          .catch((err) => {
            console.log(err);
          });
        swal("Thành công", "Bạn đã cập nhật thông tin! ", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleOnChange(e) {
    this.setState({
      nhanVienDetail: {
        ...this.state.nhanVienDetail,
        [e.target.name]: e.target.value,
      },
    });
  }

  render() {
    return (
      <>
        <Button
          style={{ width: "57px", height: "42px", borderRadius: "5px" }}
          type="primary"
          onClick={this.showDetailNhanVien}
        >
          Sửa
        </Button>
        <Modal
          title="Cập nhật thông tin"
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
                  placeholder={this.state.nhanVienDetail.name}
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
                  placeholder={this.state.nhanVienDetail.job}
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
                  placeholder={this.state.nhanVienDetail.phone}
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
                    this.updateDetailNhanVien();
                  }}
                >
                  Cập Nhật Thông Tin
                </button>
              </div>
            </div>
          </form>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateDetailNhanVien: (data) => {
      dispatch({
        type: UPDATE_NV,
        payload: data,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(ModalUpdateNV);
