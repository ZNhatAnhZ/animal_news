import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

export const Footer = () => {
    return (
        <MDBFooter className='text-center text-white' style={{
            backgroundColor: '#5c6bc0'
        }}>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#3b5998' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#55acee' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#dd4b39' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='google' />
                    </MDBBtn>
                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#ac2bac' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#0082ca' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn
                        floating
                        className='m-1'
                        style={{ backgroundColor: '#333333' }}
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                Copyright ©2025 Animal Home. All rights reserved.
            </div>
        </MDBFooter>
    );
};

export default Footer;