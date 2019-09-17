import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, mdbreact } from "mdbreact";
import './footer.scss'
const FooterPage = () => {
    return (
        <MDBFooter  className="ft-5-cols">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="2"></MDBCol>
                    <MDBCol md="2">
                        <br></br>
                        <h5 className="title">Về GreenAcademy</h5>
                        <p>
                            Học viện hàng đầu đến từ Hàn Quốc 100% - đất nước đi đầu về Thiết Kế và IT.
                            Chúng tôi mở ra một cánh cửa mới cho các học viên tại Việt Nam bởi lộ trình giảng dạy chuẩn Quốc Tế.
                            Sứ mệnh của chúng tôi chính là “chắp cánh” con đường tương lai cho các thế hệ sau.
                        </p>
                    </MDBCol>
                    <MDBCol md="2">
                        <br></br>
                        <h5 className="title">TIN TỨC</h5>
                        <ul >
                            <li className="list-unstyled">
                                <a href="#!"  >Bật mí 5 cách học tiếng Hàn hiệu quả 100% cho những bạn mới bắt đầu</a>
                            </li>
                            <hr></hr>
                            <li className="list-unstyled">
                                <a href="#!" >TUYỂN NHÂN VIÊN THIẾT KẾ </a>
                            </li>
                            <hr></hr>
                            <li className="list-unstyled">
                                <a href="#!" >6 cách phối màu cơ bản mà dân thiết kế phải biết</a>
                            </li>
                            <hr></hr>
                            <li className="list-unstyled">
                                <a href="#!" >4 bước để đánh giá một thiết kế đẹp</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="2">
                        <br></br>
                        <h5 className="title">LIÊN HỆ</h5>
                        <ul >
                            <li className="list-unstyled">
                                <p> CN1: 67, Nguyễn Thị Minh Khai, Phường Bến Thành, Quận 1, TP.HCM </p>
                            </li>
                            <hr></hr>
                            <li className="list-unstyled">
                                <p > CN2: 38 Huỳnh Lan Khanh, Phường 2, Quận Tân Bình, TP.HCM </p>
                            </li>
                            <hr></hr>
                            <li className="list-unstyled">
                                <p>+(84) 28 3926 0022</p>
                            </li>
                            <hr></hr>
                            <li className="list-unstyled">
                                <a href="#!" >https://greenacademy.edu.vn</a>
                            </li>
                        </ul>
                    </MDBCol>
                   
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://greenacademy.edu.vn/"> GreenAcademy </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;