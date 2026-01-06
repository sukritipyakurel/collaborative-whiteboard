import { OrgSidebar } from "@/app/(dashboard)/_components/org-sidebar";
import { Sidebarr } from "./_components/sidebar";
import { NavBar } from "./_components/navbar";


interface DashboardLayoutProps {
    children : React.ReactNode;
};
const DashboardLayout =({
    children,
}: DashboardLayoutProps
)=>{
    return (
        <main className="h-full">
            <Sidebarr/>
            <div className="pl-[60px] h-full">
                <div className="flex gap-x-3 h-full">
                    <OrgSidebar/>
                    <div className="h-full flex-1">
                        <NavBar/>
                        {children}

                    </div>


                </div>
                

            </div>

            
        </main>
    )
};

export default DashboardLayout;