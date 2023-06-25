import { useEffect } from 'react';
import { Outlet, Link, useNavigation } from "react-router-dom";
import useStore from '../store'

import { Toaster } from 'react-hot-toast'
import styled from "styled-components";

import { PageContainer, SectionContainer, SliceContainer } from "../components/Containers";
import { Header as Navbar } from "../components/Header";
import { Menu } from "../components/Menu/";

import { getHost } from "../store/actions";


export const ToastDiv = styled.div`
& > div {
    margin-top: 56px;   
    // color: green,
    // background: pink,

    .react-hot-toast': {
        fontWeight: 400,
        fontSize: 1rem,
        borderRadius: 5px,
        letterSpacing: 0.14px,
        boxShadow: '0px 4px 10px -4px rgba(58, 53, 65, 0.6)'
        // '&>:first-of-type:not([role])>:first-of-type': {
        //     // 
        //   width: 34,
        //   height: 34
        // }
    }
  }
`;

const host = getHost();

export default function Root() {
    const navigation = useNavigation();
    const state = useStore()
    const { setState, fetchFiles } = state;

    useEffect(() => {

        fetchFiles('http://localhost:3000/exercise')

    }, [])


    return (
        <>
            <ToastDiv><Toaster position="top-center" reverseOrder={false} /></ToastDiv>
            <PageContainer>
                <Navbar />
                {/* <span>{JSON.stringify(host)}</span> */}
                <SectionContainer>
                    <Menu />
                    <pre>{JSON.stringify(state.selected, null, 2)}</pre>
                    <SliceContainer>
                        <Outlet />
                    </SliceContainer>
                </SectionContainer>

            </PageContainer>
        </>
    )
}


        //      <div id="sidebar">
        //         <nav>
        //             <ul>
        //                 <li>
        //                     <Link to={`uno`}>Uno</Link>
        //                 </li>
        //                 <li>
        //                     <Link to={`dos`}>Dos</Link>
        //                 </li>
        //             </ul>
        //         </nav>
        // </div >
        //     <div id="detail" className={ navigation.state === "loading" ? "loading" : "" }>
        //         <Outlet />
        //     <div/> */}