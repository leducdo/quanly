import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, mdbreact } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter color="bg-light text-dark" className="ft-5-cols">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="2"></MDBCol>
                    <MDBCol md="2">
                        <h5 className="title">Về GreenAcademy</h5>
                        <p>
                        Học viện hàng đầu đến từ Hàn Quốc 100% - đất nước đi đầu về Thiết Kế và IT. 
                        Chúng tôi mở ra một cánh cửa mới cho các học viên tại Việt Nam bởi lộ trình giảng dạy chuẩn Quốc Tế. 
                        Sứ mệnh của chúng tôi chính là “chắp cánh” con đường tương lai cho các thế hệ sau. 
                        </p>
                    </MDBCol>
                    <MDBCol md="2">
                        <h5 className="title">Links</h5>
                        <ul >
                            <li className="list-unstyled">
                                <a href="#!" class="text-body" >Link 1</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" class="text-body" >Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" class="text-body" >Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" class="text-body" >Link 4</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="2">
                        <h5 className="title">Links</h5>
                        <ul >
                            <li className="list-unstyled">
                                <a href="#!" class="text-body" >Link 1</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" class="text-body" >Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" class="text-body" >Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" class="text-body" >Link 4</a>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="2">
                        <h5 className="title">Links</h5>
                        <ul >
                            <li className="list-unstyled">
                                <a href="#!" class="text-body" >Link 1</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" class="text-body" >Link 2</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" class="text-body" >Link 3</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="#!" class="text-body" >Link 4</a>
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