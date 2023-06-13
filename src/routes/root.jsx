import { Outlet, Link, useNavigation } from "react-router-dom";
import { PageContainer, SectionContainer, SliceContainer } from "../components/Containers";
import { Header as Navbar } from "../components/Header";
import { Menu } from "../components/Menu/";



export default function Root() {
    const navigation = useNavigation();

    return (
        <>
            <PageContainer>
                <Navbar />
                <SectionContainer>
                    <Menu />
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